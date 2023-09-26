"use strict";
//function
//ex 1
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2, 30);
const addNum = (a, b) => {
    return a + b;
};
let result = addNum(1, 2);
//ex 2
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7));
//Function signatures
// ex 1:
let salute;
salute = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//ex 2:
let calculate;
calculate = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
