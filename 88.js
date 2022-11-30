// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let a = userInput[0].split(' ').map((num)=>Number(num));

let b = userInput[1].split(' ').map((num)=>Number(num)).sort();

let c = userInput[2].split(' ').map((num)=>Number(num)).sort((a,b)=>b-a);

let d =[...b,...c];




console.log(...d);


  //end-here
});