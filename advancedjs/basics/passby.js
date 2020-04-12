console.log("pass by js");
"use strict"

var a = 1;
var b = {};
function fun_ab(x, y) {
  x = 5;
  y.moo = 3;
}

fun_ab(a, b);
console.log(" a : " + a + " b" + JSON.stringify(b));


/*
const person = {
  firstName: "atul"
}

console.log(person);

function foo(per) {
  per.firstName = "amit";
} 
foo(person);
console.log(person);

*/


/* 
//primitive are pass by value
var a = 2;
function foo(a) {
  a = 7; 
  console.log(`inside ${a}`); 
}

foo(a);
console.log(`Outside ${a}`);

*/ 
