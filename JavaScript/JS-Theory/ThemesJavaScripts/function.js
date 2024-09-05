/**
 * Функции:
 * * Ключевое слово function
 */

function info() {
    console.log("Привет");
    console.log("!");
}
// info()


function info2(word) {
    console.log(word + "!");
}

var word = "123";
// info2(word);

function info3(a, b) {
    var s = a + b;
    console.log(s);
}

// info3(5,5);

function info4(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}

info4([5,3]);


const passwordPrev = "123";
const loginPrev = "max";


function go() {

    const password = document.getElementById("password").value;

    const login = document.getElementById("login").value;

    console.log(password, login);
}

export default go