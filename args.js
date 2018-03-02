#!/usr/bin/env node

// Easy Way:
// const num1 = +process.argv[2] ? +process.argv[2] : null;
// const num2 = +process.argv[3] ? +process.argv[3] : null;
// const sum = num1 + num2;

// console.log(`The sum is ${sum}`);


// ES6 way:
const [,, ...userInput] = process.argv;
let sum;

!userInput.length ? sum = 0 : sum = userInput.map(num => parseInt(num)).reduce((a, b) => a + b);

console.log(sum);

