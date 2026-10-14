let heading = document.querySelector("h1");
console.dir(heading)
console.log(heading.innerText)

let event = document.querySelector(".event2");

console.dir(event)
event.innerHTML = "<b>Text</b>"

console.dir(heading)
heading.style.color="red"
heading.style.backgroundColor="green"

heading.classList.add("underline")

let button = document.querySelector("button");
let btnPara = document.querySelector(".button-para")


// console.dir(button)
button.addEventListener("click", () => {
    btnPara.innerText = "Button clicked"
}) 

let body = document.querySelector("body");

let toggleBtn = document.querySelector(".btn-toggle");

console.dir(body)
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})

const list = document.querySelector("ul")
let item = document.createElement("li");
item.innerText="Debugginggggg"
list.append(item)
item.remove()


const form = document.querySelector("form");
const input = document.querySelector("input");
const formButton = document.querySelector(".form-button")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let text = input.value;
    let listItem = document.createElement("li");
    listItem.innerText = text;
    list.append(listItem)
    input.value=""
})