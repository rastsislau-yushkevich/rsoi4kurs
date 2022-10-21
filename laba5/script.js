const DB_NAME = "laba5";
const DB_VERSION = 1;
const DB_STORE_NAME = "devices";
let db = null;
let id = 1;

const request = indexedDB.open(DB_NAME, DB_VERSION);
const table = document.getElementById("table");

request.onerror = (e) => {
    console.log("error");
}

request.onupgradeneeded = (e) => {
    db = e.target.result;
    const devices = db.createObjectStore("devices", {keyPath: "id"});

    console.log("upgrade is called")
}

request.onsuccess = (e) => {
    db = e.target.result;
    console.log("success")
}

const submitForm = () => {
    const deviceName = document.getElementById("device-name").value;
    const arrivalDate = document.getElementById("arrival-date").value;
    const deliveryType = document.getElementById("delivery-type").value;
    
    
    const device = {
        id: id,
        deviceName,
        arrivalDate,
        deliveryType
    }

    const tx = db.transaction("devices" , "readwrite");
    const devices = tx.objectStore("devices");
    devices.add(device);
    id++;
}

const showAll = () => {
    const tx = db.transaction("devices" , "readonly");
    const devices = tx.objectStore("devices");

    const request = devices.openCursor();
    request.onsuccess = (e) => {
        const cursor = e.target.result;

        if(cursor) {
            console.log(cursor);
            let tr = document.createElement("tr");
            const {value} = cursor;
            for(let key in value) {
                let td = document.createElement("td");
                td.innerHTML = value[key];
                tr.append(td);
            }
            table.append(tr)
            cursor.continue();
        }
    }
} 

const idToDelete = document.getElementById("id-to-delete"); 

const load = () => {
    const tx = db.transaction("devices" , "readonly");
    const devices = tx.objectStore("devices");

    const request = devices.openCursor();
    request.onsuccess = (e) => {
        const cursor = e.target.result;

        if(cursor) {
            let option = document.createElement("option");
            option.innerHTML = cursor.key;
            idToDelete.append(option);
            cursor.continue();
        }
    }
}

const deleteById = () => {
    const tx = db.transaction("devices" , "readwrite");
    const devices = tx.objectStore("devices");
    const deleteId = Number(document.getElementById("id-to-delete").value);

    devices.delete(deleteId);
}

const filter = () => {
    const delivery = document.getElementById("delivery-type").value;
    const tx = db.transaction("devices" , "readonly");
    const devices = tx.objectStore("devices");

    const request = devices.openCursor();
    request.onsuccess = (e) => {
        const cursor = e.target.result;

        if(cursor) {
            console.log(cursor);
            let tr = document.createElement("tr");
            const {value} = cursor;
            for(let key in value) {
                if(value.deliveryType == delivery) {
                    console.log("shdbjahsbd")
                    let td = document.createElement("td");
                    td.innerHTML = value[key];
                    tr.append(td);
                }
            }
            table.append(tr)
            cursor.continue();
        }
    }
}

