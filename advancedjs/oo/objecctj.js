"use strict";
console.log("Object orientation-->");

function Person() {

}

Person.prototype.full_name = function () {
  console.log("full name");
  
}

function Prof() {

}

Prof.prototype = Object.create(Person.prototype);

Prof.prototype.full_name_p = function() {
  console.log("full name p");
  
}

const prf = new Prof();
prf.full_name();
console.log(prf);

prf.full_name_p();



/*

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
};

Person.prototype.full_name = function() {
  return `${this.first_name} --> ${this.last_name}`;
};

Prof.prototype = Object.create(Person.prototype);

function Prof(honor, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honor = honor;
};



Prof.prototype.full_occp = function() {
  return `${this.honor} ${this.full_name} ${this.full_name}`
}



const ppp = new Prof("Dr", "Atul", "Kumar");
console.log(ppp.full_occp());
// console.log(ppp.full_name());



*/

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


