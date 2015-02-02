var readline = require('readline-sync');

var calc = [];
var input = ""

do {
  input = readline.question("Type in an operator(+ or *): ");
  if (input.match(/[+\*]/))
    calc.push(input);
}while(calc.length==0);

do {
  correctInput = false;
  input = readline.question("Type in a number: ");
  if (input.match(/[0-9]*/)) {
    calc.push(input);
    correctInput = true;
  }
  calc[0] === "+" ? console.log(sum(calc.slice(1))) : console.log(multiply(calc.slice(1)));
}while(correctInput);





// sums an array, elements must all be numbers
function sum(arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++)
    sum += parseInt(arr[i]);
  return sum;
}

// multiplies all elements in an array, elements must all be numbers
function multiply(arr) {
  var answer = 1;
  for (var i=0; i<arr.length; i++)
    answer *= parseInt(arr[i]);
  return answer;
}
