// task1 
for (let index = 0; index < 11; index++) {
    if (index === 0) {
        console.log(`${index} - ноль это ноль`)
    } else if (index % 2 == 0) {
        console.log(`${index} - четное число`)
    } else if (index % 2 != 0) {
        console.log(`${index} - нечетное число`)
    }
}

// task2 

const arr = [1, 2, 3, 4, 5, 6, 7] // -> [1, 2, 3, 6, 7]
console.log(arr)
arr.splice(3, 2)
console.log(arr)

//task3

const arr2 = [];
for (let index = 0; index < 5; index++) {
    arr2.push(Math.floor(Math.random() * (9 + 1)))
}
console.log(`Рандомный массив ${arr2}`)

let summ = 0;
for (let index = 0; index < arr2.length; index++) {
    summ = summ + arr2[index]
}

console.log(`Сумма элементов массива = ${summ}`)
console.log(`Минимальное значение массива -- ${Math.min.apply(null, arr2)}`)
console.log(`Максимальное значение массива -- ${Math.max.apply(null, arr2)}`)
for (let index = 0; index < arr2.length; index++) {
    if (arr2[index] === 3) {
        console.log("В массиве есть цифра 3")
        break
    } else {
        console.log("В массиве нет цифры 3")
        break
    }
}


//task 4 ***
// Пытался через ('*' * index) но Nan пугает 

let ss = ''
for (let index = 1; index < 21; index++) {
    ss = ss + '*'
    console.log(ss)
}
