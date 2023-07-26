// Nomal Function
export default function doSomething()  {

}

// Arrow Function
export const doSomething = () => {

}

// Components - pieces of code that return HTML
const MyComponent = () => {
    return <div> </div>
}

// Anonymous Functions
<button 
    onClick={() => {
        console.log("Hello World!");
    }}
></button>

// Ternary Operator
let age = 10;
let name = "Priyam";

//If-Else
if(age > 10) {
    name = "Priyam";
} else {
    name = "Jack";
}

// Ternary
let name1 = age > 10 && "Priyam";
name1 = age > 10 || "Priyam";
name1 = age > 10 ? "Priyam" : "Jack";

// Components with Ternary Operator 
const Component = () => {
    return age > 10 ? <div> Priyam </div> : <div> Jack </div>;
};

// Objects
const person = {
    name2: "Priyam", //this notation is used when we have a asituation like name = name
    age1: 10,
    isMarried1: false,
};

// Destructuring property of Objects
const {name2, age1, isMarried1} = person;
const person2 = {...person, name: "Jack"};// person2 is the same as person, just change the name property to "Jack"

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"] // names2 is the same as names but just add "Joel"

//Map, Filter and Reduce
//Map Function
let names1 = ["Pedro", "Jessica", "Carol"];
names.map((name) => {
    console.log(name);
    return name + "1";//return whatever you want to replace every element of the array with
});

names.map((name) => {
    return <h1> {name} </h1>
});

//Filter Function
names2 = ["Pedro", "Jessica", "Carol", "Pedro", "Pedro"];
names.filter((name) => {
    return name !== "Pedro";// keep only those elements whose value is not equal to "Pedro"
});

// Async + Await + Fetch














































