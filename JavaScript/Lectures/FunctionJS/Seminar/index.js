function hello() {
    const name = document.getElementById("name").value;
    const sc = document.getElementById("secondName").value;
    const age = document.getElementById("age").value;
    document.getElementById('str').innerHTML = `Привет ${name} ${sc} с возрастом ${age}`;
}


function square() {
    const number = document.getElementById("number").value;
    document.getElementById('task2').innerHTML = `Квадрат числа ${number} = ${number ** 2}`;
}

function plusOrMinus(number) {
    document.getElementById('task3').innerHTML = `Число ${number > 0 ? "положительно" : "отрицательное"}`;
}

function task4(number1, number2, number3) {
    console.log(number1 + number2 + number3)
}

// task4(5,5,5)
// task4(1,2,3)

function sqrtTask5(number) {
    return Math.sqrt(number);
}

// console.log(sqrtTask5(3) + sqrtTask5(4))

function minMax(number11, number22) {
    return number22 > number11 ? number11 : number22;
}
// console.log(minMax(1,4))

function task6(number) {
    if (number === 1) {
        console.log("Понедельник")
    } else if (number === 2) {
        console.log("ВТорник")
    } else if (number === 3) {
        console.log("Среда")
    } else if (number === 4) {
        console.log("Четверг")
    } else if (number === 5) {
        console.log("Пятница")
    } else if (number === 6) {
        console.log("Суббота")
    } else if (number === 7) {
        console.log("Воскресенье")
    } else {
        console.log("ПОка!")
    }
}

// task6(5)
// task6(2)
// task6(15)


function task7(name) {
    const date = new Date;
    const mn = date.getHours();
    if (6 < mn && mn < 12) {
        console.log(`С добрым утром ${name}`)
    } else if (12 < mn && mn < 18) {
        console.log(`Добрый день ${name}`)
    } else if (18 < mn  && mn < 0) {
        console.log(`Добрый вечер ${name}`)
    } else if (0 < mn && mn< 6) {
        console.log(`Доброй ночи ${name}`)
    }
}

task7("Oleg")