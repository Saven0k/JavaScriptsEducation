// Текст задания

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
const object = {
    1:"Понедельник",
    2:"Вторник",
    3:"Среда",
    4:"Четверг",
    5:"Пятница",
    6:"Суббота",
    7:"Воскресенье",
}
console.log(object[2])


// 2. Создайте объект user с ключами 'name', surname, age' Выведите на экран фамилию, имя и возраст через дефис.
const user = {
    'name': 'Agent',
    'surname': "228",
    'age': 18,
}
console.log(`${user.name}-${user.surname}-${user.age}`)

// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// user.patronymic = prompt("ВВедите свое отчество: ")
console.log(user)

// 4. Удалите свойство зигпате.
delete user.surname;
console.log(user)

// 5

const arr1 = ['пн','вт','ср','чт','пт','сб','вс']
const arr2 = [1,2,3,4,5,6,7]

const arr3= []

for (let index = 0; index < arr1.length; index++) {
    arr3[arr1[index]] = arr2[index]
}
console.log(arr3)

//6
const obj = {
    x:1,
    y:2,
    z:3
}

for (const i in obj) {
    obj[i] = obj[i] ** 2
}

console.log(obj)


//7
const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    }
}

let sum = 0
for (const i in obj2) {
    console.log(i)
    for(const g in obj2[i]) {
        sum += (obj2[i][g])
    }
}

console.log(sum)


// 8
const riddles = {
    'question': "Who?",
    'answer': "me",
    askQuestion() {
        const userAnswer = prompt(this.question)
        if (userAnswer != this.answer) {
            console.log("Вы проиграли")
        } else {
            console.log("Вы выйграли")
        }
    }
}
riddles.askQuestion();