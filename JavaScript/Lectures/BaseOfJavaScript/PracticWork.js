// 1

const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));

alert(num1 <= 1 && num2 >= 3 ? "Первое число меньше или равно 1, Второе число больше или равно 3" : "Ничего не подошло! :(");


// 2
let test = true;
console.log(test === true ? "+++" : "---");

//3 
const day = 11;
if (1 <= day <= 10) {
    alert("Первая декада месяца")
} else if (10 < day <= 20) {
    alert("Вторая декада месяца")
} else if (20 < day <= 31) {
    alert("Третья декада месяца")
} else {
    alert("вариант не подходит! :(")
}

// 4



let number = Number(prompt("введите число"));

function splitToDigits(number) {
    let digits = [];
    while (number) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    return digits;
}
const digits = splitToDigits(number);

alert(`В числе ${number}
    колличество сотен: ${digits[2]},
    десятков: ${digits[1]},
    едениц: ${digits[0]}`)