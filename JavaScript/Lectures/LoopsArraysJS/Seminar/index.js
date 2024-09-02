// First task
const arr = [1, 2, 3];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// Second task

const arr2 = [1, 2, 2, 3, 3, 1, 12, 2, 23, 3, 1, 12, 33];
console.log(arr2.length); // 13

// THird task 

const arr3 = ['a', 'b', 'c'];
console.log(arr3)
arr3[0] = 1;
arr3[1] = -2;
arr3[2] = -3;
console.log(arr3) // [1,-2,-3]


// Task4 

const arr4 = [1, 2, 3]
console.log(arr4)
for (let index = 0; index < arr4.length; index++) {
    arr4[index] = ++arr[index]
}
console.log(arr4) // [2,3,4]

// task5

const arr5 = [];
arr5[3] = 'a';
arr5[8] = 'b';
console.log(arr5.length)


// task6
const arr6 = [1, 2, 3];
console.log(arr6.length) // 3
arr6.push(4)
arr6.push(5)
console.log(arr6.length) // 5
console.log(arr6)


// task7
const arr7 = [1, 2, 23, 4, 5]
console.log(arr7.length) // 5
arr7.pop(2)
arr7.pop(3)
console.log(arr7.length) // 3

// task8

console.log("task8")
for (let index = 10; index < 33; index++) {
    console.log(index)
}

//task9
console.log("task9")
for (let index = 1; index < 99; index++) {
    if (index % 2 != 0) console.log(index)
}

//task 10

console.log("task10")
for (let index = 100; index > 0; index--) {
    console.log(index)
}


//task11
console.log("task11")

let num = 3;
let ti = 0;
while(num <= 1000) {
    num = num*3;
    ti++;
}
console.log(ti) // 6 - степень числа 3 < 1000

// task12
console.log("task12")

const arr12 = [2,5,9,15,1,4]
for (let index = 0; index < arr12.length; index++) {
    if (arr12[index] > 3 && arr12[index] < 10) console.log(arr12[index])   
}

//task 13
console.log("task13")
let sum = 0;
for (let index = 2; index <= 100; index++) {
    sum = sum + index;
}
console.log(sum) // 5049

//task 14
console.log("task14")

const arr14 = [2,5,9,3,1,4]
let sum14 = 0;
for (let index = 0; index < arr14.length; index++) {
    sum14 = sum14 + arr14[index];
}
console.log(sum14) // 24



//task 15
console.log("task15")

let string  = '';
for (let index = 1; index < 10; index++) {
    if (index === 9) {
        string = string + `-${index}-`
        break
    }
    string = string + `-${index}`
}
console.log(string) // -1-2-3-4-5-6-7-8-9-

//task 16
console.log("task16")

const arr16 = [2,5,9,0,3,1,4]
for (let index = 0; index < arr16.length; index++) {
    if (arr16[index] === 0) {
        break
    }    
    console.log(arr16[index])
}
