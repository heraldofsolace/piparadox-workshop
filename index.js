// console.log("Hello, World!")
var x = 1;
// console.log(x)
x = "a";
// console.log(x)

let y = 2
// console.log(y)
y = "b"

const z  = 3
// console.log(z)

a = "A"
var a; // hoisting
// console.log(a)

// b = "B"
// let b;
// // console.log(b)

// console.log(abcd)

console.log(2+2)
console.log("a" + "b")
console.log('a' + 'bcd')
console.log(typeof (2 + "5"))
console.log("5" + 2) // string
console.log("5" - 2) // number

let xyz = "abc"
console.log(+xyz)

console.log(typeof NaN)
let abcd = null;

// JSON - JavaScript Object Notation
let data = {
    name: "Aniket",
    age: 70,
    job: "N/A",
    "home-address": "N/A"
}

console.log(data.name)
console.log(data["name"])

let keyToAcess = "age"
console.log(data.keyToAcess)
console.log(data[keyToAcess])

data = {
    name: "Aniket",
    jobData: {
        jobName: "PiParadox"
    }
}

console.log(data.jobData.jobName)
console.log(data)



console.log("a" == 1)
console.log("1" == 1)
console.log("0" == 0)
console.log(0 == []) // [] -> 0
console.log("0" == [])
console.log(0 == !0)
console.log([] == ![]) // Arrays are truthy

// coersion
// truthy/falsy
console.log(!0) // false
console.log(!"0") // "0" -> true

console.log("0" === 0)

if(0 === 1) {
    console.log("Yes")
} else if(0 === 2) {
    console.log("No")
} else {
    console.log("What?")
}

if(data.age) {
    console.log("Age exists")
} else {
    console.log("Age is not there")
}

let p = 1;
while(p <= 10) {
    console.log(p)
    p++;
}

for(let x = 1; x <= 10; x++) {
    console.log(x)
}

let obj = {
    name: "Aniket",
    job: "Web developer",
    experience: "7 years"
}

for(let key in obj) {
    console.log(obj[key])
}

let arr = [2, 3, 7, "a", "9", { name: "Aniket" }]
/**
 * arr = {0: ..., 1:...}
 */
for(let value of arr) {
    console.log(value)
}

function someFunction(a, b) {
    this.innerText = "Hi"
}


let h1s = document.getElementsByTagName("h1")
console.log(h1s)

let divs = document.getElementsByClassName("hero-box")
console.log(divs)
divs[0].innerText = "<h1>I changed HTML</h1>"

let button = document.getElementById("button")
console.log(button)

button.innerText = "I changed it"