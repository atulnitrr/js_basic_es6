"use strict";
console.log("Object orientation-->");



var Device = {
  kind:"Music Player"
};
var AppleProduct = Object.create(Device,
 {
  name: "iPod"
});
var purchase = Object.create(AppleProduct);
console.log(purchase.name);

/*
function Device(kind) {
  this.kind =  kind;
}
Device.prototype.printKind = function () {
  console.log(this.kind);
};
var product = new Device("music player");
product.printKind();
*/

/*
function Device(kind) {
  this.kind =  kind;
  this.printKind = function () {
    console.log(kind)
  }
}
var product = new Device("music player");

product.kind = "radio";
product.printKind();
console.log(product);

*/



/*
function Device(kind) {
  this.kind =  kind;
  this.printKind = function () {
    console.log(this.kind)
  }
}
var product = new Device("music player");
product.printKind();

*/


/*
class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  get firstName() {
    return this.first_name;
  }

  set firstName(name) {
    if(name === "") {
      console.error("eEm pty data");
      
    } else {
      this.first_name = name;
    }
  }

  full_name() {
    return `${this.first_name} ${this.last_name}`;
  }

  dummyName() {
    console.log("dummy data");

  }

  whoAreYou() {
    return `I am ${this.firstName} ${this.last_name}`
  }
}

class Student extends Person {
  constructor(first_name, last_name, sub) {
    super(first_name, last_name)
    this.sub = sub;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and studying ${this.sub}`
  }
}

const stud = new Student("tom", "hanks", "math");
console.log(stud);
console.log(stud.whoAreYou());


*/

/*
const atul = new Person("akk", "kum ar");
console.log(atul.firstName);
atul.firstName = "new changed"
console.log(atul);
console.log(atul.full_name());
atul.dummyName();

*/


/*
const dummy = {
  full_name: function() {
    console.log("hello --> ");
    
    return "hello atul";
  }
}

const inDummy = Object.create(dummy, {
  first_name: {
    value: "data"
  }
})

console.log(dummy);
console.log(inDummy);
inDummy.full_name();
*/

/*
const Person = {
  full_name: function() {
    return `${this.first_name} ${this.last_name}`
  }
}

function PersonFactory(first_name, last_name) {
  const per = Object.create(Person);
  per.first_name = first_name;
  per.last_name = last_name;
  return per;
}

const atul = PersonFactory("atul", "kummmmmrr")
console.log(atul);
console.log(atul.full_name());
*/

/*
const Person = {
  full_name: function() {
    return `${this.first_name} ${this.last_name} `
  }
} 

const atul = Object.create(Person, {
  first_name: {
    value: "atul"
  },
  last_name: {
    value: "kumar"
  }
});

console.log(atul);
console.log(atul.full_name());


*/




/*

const emp = new Empoyee("atul", "kumar")

console.log(emp);
console.log(emp.full_name());
*/


/*

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

*/

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


