const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const menu = document.getElementById("nav");
const colorBtn = document.getElementById("color-btn");
const colorInp = document.getElementById("color-inp");


btn1.onmouseenter = () => {
    btn1.style.backgroundColor = "red"
}

btn1.onmouseleave = () => {
    btn1.style.backgroundColor = "darkgrey"
}

btn1.onclick = () => {
    window.location = "./page1.html"
}

btn2.onclick = () => {
    window.location = "./page2.html"
}

btn3.onclick = () => {
    window.location = "./page3.html"
}

btn4.onclick = () => {
    window.location = "./page4.html"
}

colorBtn.onclick = () => {
    let newBtn = document.createElement("button");
    newBtn.innerHTML = "newbtn"
    newBtn.style.backgroundColor = colorInp.value;
    menu.append(newBtn);
    
    newBtn.onclick = () => {
        window.location = "./page2.html"
    }
}