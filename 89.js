// You are given with an array. For each element present in the array your task is to print the next smallest than that number. If it is not smallest print -1




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

let a = Number(userInput[0]);
let b = userInput[1].split(' ').map((num)=>Number(num));
// console.log(a)
let result = [];

for(var i=0;i<b.length;i++)

{var r = false;
for(var j = i+1;j<(a);j++)
{
    if(b[i]>b[j])
 { 
     result.push(b[j]);
     r =true;
     break;
     
 }
}
if(!r){
    result.push(-1);
}
}

console.log(...result);





  //end-here
});