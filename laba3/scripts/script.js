let resArr = [];

const submitForm = () => {
    if(localStorage.getItem("results")) {
        resArr = JSON.parse(localStorage.getItem("results"));
    }

    let sexes = document.getElementsByName("sex")

    let resSex;
    sexes.forEach((sex) => {
        if(sex.checked) {
            resSex = sex.value;
        }
    })

    let addition = document.getElementsByName("addition");
    let additionStr = "";

    addition.forEach((el) => {
        if(el.checked) {
            additionStr += el.value;
        }
    })

    let resObj = {
        name: document.getElementById("name").value,
        resSex,
        birthDate: document.getElementById("birthDate").value,
        email: document.getElementById("email").value,
        faculty: document.getElementById("facs").value,
        quality: document.getElementById("quality").value,
        addition: additionStr
    }

    resArr.push(resObj);

    localStorage.setItem("results", JSON.stringify(resArr));
}

const loadData = () => {
    let root = document.getElementById("root");
    let results = JSON.parse(localStorage.getItem("results"));

    console.log(root);

    results.forEach((result) => {
        let tr = document.createElement("tr");
        for(let key in result) {
            let td = document.createElement("td");
            td.innerHTML = result[key];
            tr.appendChild(td);
        }
        root.append(tr);
    })
}