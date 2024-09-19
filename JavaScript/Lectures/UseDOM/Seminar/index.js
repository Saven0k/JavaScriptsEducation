//task 1
const divElm = document.createElement('div');
divElm.classList.add('item');
const blockElm = document.querySelector(".block");
divElm.textContent = "Элемент внутри";
divElm.style.color = 'blue';
divElm.style.border = '1px solid black';
divElm.style.backgroundColor = '#f8f8f8';
divElm.style.padding = "16px";
divElm.setAttribute('class', " item item_1");

blockElm.appendChild(divElm);

// task 2
const textElm = document.querySelector('.text');
console.log(textElm.previousElementSibling)
console.log(textElm.parentElement)
console.log(textElm.parentElement.previousElementSibling)
console.log(textElm.parentElement.parentElement)

// task 3
let itemelem = document.querySelector('.subtitle');


while (itemelem.parentElement) {
    itemelem = itemelem.parentElement
    console.log(itemelem)
}
// task4
const btn = () => {
    if (input.value){
        console.log(input.value)
    } else {
        const elem = document.querySelector('form');
        const hElem = document.createElement('h2');
        hElem.textContent = "Вы не заполнили поле ввода";
        hElem.style.color = "red";
        hElem.style.fontSize = "24px";
        hElem.style.border = "3px solid red";
        hElem.style.padding = "10px";
        hElem.style.margin = "10px";
        hElem.style.textAlign = "center";
        hElem.style.width = "500px"
        elem.appendChild(hElem)


    }
}