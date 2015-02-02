// npm install readline-sync

var readlineSync = require('readline-sync');
var log = console.log;

var operator;
var total;
var newNumber;

do{ operator = readlineSync.question("Input + or *\n: "); }
while( ["\+","\*"].indexOf(operator) < 0 );

do{ total = readlineSync.question("Input first number: "); }
while( isNaN(total) );

do{
  newNumber = readlineSync.question('Input next number: ');
  if( newNumber == 'q' ){ break; }
  if( isNaN(newNumber) ){
    log('Invalid input.');
    continue;
  }else{
    switch(operator){
        case '\+': total = Number(total) + Number(newNumber);
        break;
        case '\*': total = total * newNumber;
        break;
  }
    log("Total = " + total);
  }
}while(true);