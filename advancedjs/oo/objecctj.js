"use strict";
console.log("Object orientation-->");




/*
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.full_name  = function() {
    return `${this.first_name} + " --> " + ${this.last_name}`;
  }
}

Person.prototype.full_name_f = function() {
  return `${this.first_name} + " > " + ${this.last_name}`;
}

const dude = new Person("atul", "kumar");
console.log(dude);

console.log(dude.full_name());
console.log(dude.full_name_f());

*/


// this will give error.
// const dude = Person("atul", "kumar");


/*

var device = {
  kind:"music player"
};
var product = Object.create(device);
console.log(product.kind);



var sayHello = function(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Asim");
sayHello("Hussain");
*/

/*
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Asim");
sayHello("Hussain");
*/

/*
function sayHello(last_name) {
  console.log(last_name);
  
  console.log("Hello " + this + " " + last_name);
}
sayHello.apply("Asim",["Hussain", "dd"]);
*/

/*
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello.call("Asim","Hussain");

*/

/*
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello("Hussain");
*/

/*
var animal = {
  kind: "Cow",
  which: function () {
    console.log(this.kind);
  }
};
var animalFunc = animal.which;
animalFunc();
*/

/*
var animal = {
  kind: "Cow",
  which: function () {
    console.log(this.kind);
  }
};
animal.which();
*/


/*
(function (){
  console.log(this);
})();
console.log(this);

*/


/*
const animal = {
  kind: "human"
}


// const dummy = Object.create(animal);
// const dummy = Object.create(animal, {food: {value: [1, 2,4]}});

const dummy = Object.create(animal, {food: {value:  "data"}, shelter: {value: "home"}});

console.log(dummy);
console.log(animal);

*/

/*
const animal = {
  kind: "human"
}

console.log(animal);
// console.log(animal.__proto__);

const atul = {
}

atul.__proto__ = animal;

console.log(atul);
console.log(atul.kind);
console.log(animal.isPrototypeOf(atul));
animal.kind = "toto";
console.log(atul.kind);

*/


