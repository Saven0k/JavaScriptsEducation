function cube(number) {
    return (number ** 3)
}

console.log(cube(2) + cube(3))

function numberController(text) {
    if (parseInt(text)) {
        document.getElementById("scr").innerHTML=`Вы ввели число`
    } else {
        document.getElementById("scr").innerHTML=`Вы ввели строку`
    }
}


function NDS(salary){
    document.getElementById("scr2").innerHTML=`Размер заработной платы за вычетом налогов равен ${salary - (salary / 100 * 13)}`
}

function maxNumber(number1, number2, number3) {
    console.log(Math.max(number1, number2,number3))
}

// maxNumber(1,2,3)

// Калькулятор

function sum(number1, number2) {
    document.getElementById("result").innerHTML=`Результат ${parseInt(number1.value) + parseInt(number2.value)}`
}

function division(number1, number2) {
    document.getElementById("result").innerHTML=`Результат ${parseInt(number1.value) / parseInt(number2.value)}`
}

function multiplication(number1, number2) {
    document.getElementById("result").innerHTML=`Результат ${parseInt(number1.value) * parseInt(number2.value)}`
}

function subtraction(number1, number2) {
    document.getElementById("result").innerHTML=`Результат ${parseInt(number1.value) - parseInt(number2.value)}`
}