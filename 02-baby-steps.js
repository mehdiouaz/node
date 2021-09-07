var sum = 0;

for (var i = 2; i < process.argv.length; i++) {

    sum += Number(process.argv[i]);
}

console.log(sum);




/*  BABY STEPS (Exercise 2 of 13)   
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). 
Written by: Sean M Hamlet
https://github.com/seanmhamlet
*/