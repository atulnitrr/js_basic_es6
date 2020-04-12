"use strict";
console.log("scope js");

const a = 1;
const b = 2;
a = b;
console.log(a);

var salary = "1000$";
(function () {
    console.log("Original salary was " + salary);
    var salary = "5000$";
    console.log("My New Salary " + salary);
})();

(function(){
  var a = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));

var name = 'igloo';
var code = "var name = 'asim';"
eval(code)
console.log(name)


var foo = [];
for(var i = 0; i< 10; i++) {
  (function(y) {
    foo[y] = () => y;
  })(i);
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());



// out put 10, 10 , 10 
/*
var foo = [];

for(var i = 0; i < 10; i++) {
  foo[i] = () => i;
}

console.log(foo[0]())
console.log(foo[1]());
console.log(foo[2]());


var  data = 34;
function sayHello() {
  data = 67;
  return function name() {
    return data;
  }
}

console.log(sayHello()());
;

*/

/*
function sayHello(name) {

  const res = `Hello ${name}`;
  console.log(res);
  
  return res;  
}


sayHello("atul")

*/



/*

(function(dd){
  console.log(dd);
  const testData = "test data";
  console.log(testData);
  
})("dama")

*/



/*
console.log(a);
var a = 10;
*/

