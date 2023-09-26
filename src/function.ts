//function

//ex 1
let greet: Function;
greet = () => {
  console.log("hello");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(1, 2, 30);

const addNum = (a: number, b: number): number => {
  return a + b;
};

let result = addNum(1, 2);

//ex 2
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7));


//Function signatures
// ex 1:
let salute: (a: string, b: string) => void;
salute = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//ex 2:
let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};