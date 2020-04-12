console.log("pass by js");
"use strict"


function max(...vars) { return Math.max(...vars) };
console.log(max(1,3,2));
;


var fruits = ["Apples", "Oranges", "Bananas"];
console.log(["Mangoes", ...fruits]);

function foo(strings) { 
  console.log(strings[1]) 
};
foo`moo${foo}foo`


var moo = "foo";
console.log(`hello\n${moo}
how are you?`);





/*
function h1(strings, ...values) {

  let body = "";
  for (let i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || "");
  }
  return `<h1>${body}</h1>`
}

const name = "atul";
const place = "hyd"
console.log(h1`My name is ${name} , place is ${place}`);
;
*/

/*

function h1(string) {
  return "<h1>" + string[0] + "</h1>";
}

console.log(h1`atul`);

*/


/*
const bold =  false;

const res = `Heelo ${bold ? "<b>atul</b>" : "atul"}`
console.log(res);


const dummy = `heelo ${2 + 3}`;
console.log(dummy);
*/


/*

const myName =  `hello's 
my nameis 
"atul"`;
console.log(myName);
*/
 

/*
const myName = "hello \n my name \n is \n atul";
console.log(myName);

*/

/*
const myName = "my name is atul";
console.log(myName);
*/

/*
console.log(`hello 
data`);

*/

/*
const array1 = [1, 2, 3];
const array2 = [3, 4, 4, ...array1];
console.log(array2);

*/


/*
function login(method, ...options) {
  console.log(method);
  console.log(options);
  
}
const ll = [1, 2, 3, 4];
login("facebook", ll);
*/

/*
function sum(a, b) {
  console.log(arguments);
  
  return a +  b;
}
const sumRes = sum(2, 3, 4, 5, 6);
console.log(`sum : ${sumRes}`);

*/

/*
var a = 1;
var b = {};
function fun_ab(x, y) {
  x = 5;
  y.moo = 3;
}

fun_ab(a, b);
console.log(" a : " + a + " b" + JSON.stringify(b));
*/


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
