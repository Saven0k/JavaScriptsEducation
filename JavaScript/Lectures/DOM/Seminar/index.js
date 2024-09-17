//task1
const pElm = document.querySelector("#block p:first-child")
console.log(pElm)
//task2
const wwwElm = document.querySelector(".www")
console.log(wwwElm)

//task3 
const aElm = document.querySelector(".link")
const href = "https://google.com";
aElm.textContent = ("link text js")
aElm.href = href;

//task4
const imgElm = document.querySelector(".photo")
imgElm.src = "https://ru-ru.learn.canva.com/wp-content/uploads/sites/19/2020/07/paul-skorupskas-7KLa-xLbSXA-unsplash-2.jpg"

//task5 
const  contentElm = document.querySelector(".content");

const textElm = document.createElement('p');
textElm.textContent = "Новый текстовый элемент";

contentElm.appendChild(textElm);
contentElm.removeChild(textElm);

//task 6

const  contenElm = document.querySelector(".content");
const button = document.createElement('button');
button.textContent = "Клик"
let counter = 0;
contenElm.appendChild(button);

button.onclick = () => {
    counter = counter + 1;
    console.log(counter)
}


//task 7

const  content2Elm = document.querySelector(".content2");
const buttonElm = document.createElement('button');
buttonElm.textContent = "Отправить";
content2Elm.appendChild(buttonElm);
buttonElm.onclick = () => {
    buttonElm.textContent = "Текст отправлен"
}