// This is a comment

/*
This is a 
multiline comment
*/

// Printing things to console
console.log("HERE");

// Variable declaration
var a = 1; // Old way
let b = 2; // New way
const c = 3; // Constant declaration

// Not constant variables can change values and types
let x = 1;
// console.log(x);
x = "Test";
// console.log(x);

// Function declaration
function myFunction(x) { // Old way
    const y = x ** 2; // Power operator
    return y;
};
// console.log(myFunction(2));

const myFunction2 = (x) => { // New way
    const y = x ** 2; // Power operator
    return y;
}
// console.log(myFunction2(2));

/*
Callback/Function declaration:
() => {}
(arguments) => {function body}
*/

// Array declaration
const arr = [];
arr.push(1); // Add element to array
arr.push(2); // Add element to array
// console.log(arr);
const poppedValue = arr.pop(); // Remove last element from array
// console.log(arr);
// console.log(poppedValue);

arr.push(3);
arr.forEach((el) => { console.log(el); }); // Iterate over array
const arr2 = arr.map((el) => el * 2); // Map array elements to new array

// Object declaration
const obj = {};
obj.x = 1;
obj.y = 2;
obj.insideObj = {};
obj.insideObj.x = 1;
// console.log(obj.insideObj.x);
// console.log(obj.y.x.a); // Error

if (obj && obj.y && obj.y.x && obj.y.x.a) { // Check if object exists
    console.log(obj.y.x.a);
}
if (obj?.y?.x?.a) { // Check if object exists
    console.log(obj.y.x.a);
}

// Conditional statements
if (a === 2 && c !== 4) {
    console.log("a=2");
} else if (a === 2 && c === 4) {
    console.log("Here");
} else {
    console.log("Unknown a");
}

// Switch statement
switch (a) {
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    default:
        console.log("Unknown a");
}

// Basic for loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Iterate over array
const arr3 = [1,2,3,4,5];
for (const it of arr2) {
    console.log(it);
}

// Iterate over object
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
