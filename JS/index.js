console.log("Hello World!!!");
alert("Huehuehue");
console.warn("This is a warning!");
console.error("This is an error!");


var num1 = 34;
var num2 = 45;
console.log(num1 + num2);
document.write(num1 + num2);

// single line comment
/* multi
line
commment */

// Variables -> Containers to store data
// Data Types in JavaScript

// Strings
var str1 = "THis is a string";
var str2 = 'This is also a string';

// Numbers
var number1 = 455;
var number2 = 35.56;

// Objects -> Key value pairs
var marks = {
    ravi: 45,
    raju: 89,
    yui: 76
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// Default value of an uninitialized variable = undefined
/*
 2 types of data types:
 1. Primitives : number, string, boolean, undefined, null, symbol
 2. Reference : Objects and Arrays
*/

//Arrays
var arr = [1, 2, "hi", 4, 5];
console.log(arr[2]);
console.log(arr[1]);

// Operators in JavaScript
// Arithmetic : +, -, *, /
// Assignment : ==
// Relational : ==, >=, <=, >, <
// Shorthand Operator : +=, -+, *=, /=
// Logical Operators : &&, \\, ! 

//  Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2;
}

c = avg(4, 6);
console.log(c);

// Conditionals in JavaScript
var age = 12;
if (age > 8) {
    console.log("You are not a kid");
}

// Loops
var arr1 = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

arr1.forEach(function (element) {
    console.log(element);
})

j = 0; // block level scope
const po = 9; // value of const variable cant be changed
while (j < arr1.length) {
    console.log(arr1[j]);
    j++;
}
j = 0;
do {
    console.log(arr1[j]);
    j++;
} while (j < arr1.length);

// break and continue

let myArr = ["fan", "Camera", 34, null, true];
// Array methods
console.log(myArr.length);
myArr.pop(); // remove last element
myArr.push("harry"); // add element at end of array
myArr.shift(); // remove first element
myArr.unshift("Priyam"); // add new element at start of array
console.log(myArr);
console.log(myArr.toString()); // converts the array to a string
console.log(myArr.sort()); // sorts the array alphabeticaly

// Date
let myDate = new Date();
console.log(myDate);

// DOM Manipulation
// document.getElementById('click').style.border = "2px solid blue";
let elem = document.getElementById("click");
console.log(elem);
let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");

// To access inner html of a class
console.log(elemClass[0].innerHTML);
// To access just the text of a class
console.log(elemClass[0].innerText);

let tn = document.getElementsByTagName("button");
console.log(tn);
let dn = document.getElementsByTagName("div");
console.log(dn);
// add a child
myNewElement = document.createElement("p");
myNewElement.innerText = "This is a created paragraph";
tn[0].appendChild(myNewElement);
//replace a child
myNewElement2 = document.createElement("b");
myNewElement2.innerText = "This is a created bold text";
tn[0].replaceChild(myNewElement2, myNewElement);
// to remove a child we use tn[0].removeChild(myNewChild);

/* To extract content from a webpage, use: 
document.location;
document.title;
document.url;
document.scripts;
document.links;
document.domain;
document.images */

// Selecting using Query
let sel = document.querySelector(".container");
console.log(sel);
let sel1 = document.querySelectorAll(".container");
console.log(sel1);

function clicked() {
    document.querySelectorAll(".container")[1].innerHTML = "<b>We have Clicked</b>"
    console.log("The button was clicked");
}

window.onload = function () {
    console.log("Hello There Explorer!");
}

// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     console.log("Click detected on Container");
// });

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Hover detected on Container");
// });

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Hover taken out of Container");
// });
let prevHTML = myCont.innerHTML;
myCont.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[2].innerHTML = prevHTML;
    // ALTERNATIVE --> myCont.innerHTML = prevHTML;
});

myCont.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[2].innerHTML = "<b>Text is changing as per mouse click!";
    // ALTERNATIVE --> myCont.innerHTML = "<b>Text is changing as per mouse click!";
});

// ARROW FUNCTIONS
// ---------------------
// 1.normal
// function sum(a, b){
//     return a+b;
// }
// ---------------------
// 2.arrow
// sum = (a,b)=>{
//     return a+b;
// }

// Set Timeout --> after page has loaded, do this
// format --> setTimeout(function, time(in ms))
logger = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired!</b>";
    console.log("I am your log");
}
setTimeout(logger, 2000);

// Set Interval --> keep doing this at regular intervals
// To stop setInterval, put it's unique id inside clearInterval, to get the unique id, use varName = setInterval(function, time)
// Similarly pass setTimeout's id to clearTimeout to stop it before happening

// JavaScript Local Storage
// localStorage.setItem("name", "Priyam");
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

// JSON
// ------
// define an object
obj = { name: "priyam" };
// convert it to a string
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof (jso)); // to know the data type of a variable
// JSON class only accepts double quotes
// Now convert string to JSON
parsed = JSON.parse(`{"name":"priyam"}`); //always use back-ticks when inputting a string the parse() function
console.log(parsed);

// Template literals --> Backticks
let aa = 34;
console.log(`This number is known as ${aa}`);


























































































































































