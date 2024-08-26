// 1
number = Number(prompt("Введите число"))
if (number > 5) {
    alert("ЧИсло больше 5")
} else if (number == 5) {
    alert("ЧИсло равно 5")
} else {
    alert("ЧИсло меньше 5")
}

// 2
test1 = "abc";
test2 = "abc2";

console.log(test1 === test2 ? "Переменные равны" : "Переменные не равны"
)

// 3
number1 = Number(prompt("Введите первое число"))
number2 = Number(prompt("Введите второе число"))

alert(number1 > number2 ? "ВТорое число минимально": "Первое число минимальное")


// 4
number12 = Number(prompt("Введите  число"))
alert(number12 < 15 && number12 > 0 ? "Число больше 0 и меньше 15": "Число не подходит под условие");