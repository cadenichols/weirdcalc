var readline = require('readline-sync');

var calc = [];
var input = ""

do {
  input = readline.question("Type in a number: ");
  calc.push(input);
}while(input !== "+" && input !== "*");


if (calc[calc.length-1] === "+") {
  console.log(sum(calc.slice(0,-1)));
} else if (calc[calc.length-1] === "*") {
  console.log(multiply(calc.slice(0,-1)));
}

function sum(arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++)
    sum += parseInt(arr[i]);
  return sum;
}

function multiply(arr) {
  var answer = 1;
  for (var i=0; i<arr.length; i++)
    answer *= parseInt(arr[i]);
  return answer;
}
