// Find the first 0 in window of size k. You  are given n numbers and window size ‘w’


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

  let a=userInput[0].split(' ').map((num)=>Number(num));


let b = userInput[1].split(' ').map((num)=>Number(num));


var n=a[0];
var w = a[1];
var l = (n-w+1);
let r = [];
var tf = true
for(var i=0;i<(n-w+1);i++)
{
    for(var j=0 ; j<w ; j++ )
    {
       if(b[i+j]==0)
       {
        r.push(i+j+1);
        tf = true;
        break;
       }
       else
       {
          tf=false;
       }
       
    }
    if(tf==false){
           r.push(-1);
       }
}

console.log(...r);


  //end-here
});