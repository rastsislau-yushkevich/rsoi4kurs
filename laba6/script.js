let inputs = Array.from(document.getElementsByTagName("input"));

let [input1, input2, input3, input4, input5, input6] = inputs;

let btn1 = document.getElementById("btn1");

btn1.onclick = () => {
    inputs.forEach((input) => {
        if(input.value.split("")[0] != "$") {
            input.value = "$"+input.value;
            input.classList.add("classNew")
            console.log(input.name)
        }
        if(input.id == "id2" && input.name == "norm") {
            console.log("asads")
            let span = document.createElement("span");
            const date = new Date().toJSON();
            span.innerHTML = date;
            input.parentNode.insertBefore(span, input.nextSibling)
        }
    })
}