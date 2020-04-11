console.log("this key js");


const btn = document.getElementById("button1");


// ---


// ----
/*
function myBind(funct, thisArg) {
  return function() {
    funct.apply(thisArg, arguments);
  }
}

const person = {
  firstName: "rahul", 
  printName: function() {
    console.log(`${this.firstName} + print`);
    
  }
}


const mb = myBind(performance.printName, person);
mb("hello")

function myFunction(one, two) {
  console.log(arguments); 
}

myFunction("one", "tow", "three", "four")

*/

/*
const person = {
  firsName: "mandela", 
  printName: function() {
    console.log(`${this.firsName} is called`);
    
  }
}

btn.addEventListener("click", person.printName.bind(person));

*/

//-----
// Example 7 
/*
const person = {
  firsName: "neslons", 
  description: function(prefix, department) {
    console.log(`${prefix}, ${department} ${this.firsName} `);
    
  }
}

person.description("dd", "mm");
person.description.apply({firsName: "ramu"}, ["prf", "math"]);
person.description.call({firsName: "ramu"}, "prfal", "mathcall");


const max = Math.max;
const arrayNumber = [1, 1, 3, 5, 6, 55, 33];
console.log(Math.max.apply(null, arrayNumber));


console.log(max(34, 45, 231));
console.log(max.call(null, 2, 3, 43, 5,6));
console.log(max.apply(null, [2, 89, 43, 5,6]));

*/

//-----
/*
const person = {
  firstName: "nelson", 
  printName: function () {
    console.log(this);
    console.log(this.firstName);
    
  }
}
const blegh = person.printName;
// person.printName();
// blegh();

var person2 = {
  firstName: "Food"
}

blegh.call(person2);




*/

//-----

// const personDatabase = {
//   title: "employess", 
//   people: ["atul", "nelson", "mandela"],
  // print() {
  //   this.people.forEach(pep => console.log(`${this.title}  ${pep}`))
  // }

//   print: function() {
//     this.people.forEach(function(per) {
//       console.log(this);  
//       console.log(`${this.title} ${per}`);  
//     })
//   }
// }
// personDatabase.print();

//-----


//----



// const array = [1, 2, 3, 4, 5];

// array.forEach((elem) => { 
//   console.log(elem);
// })

// var log = console.log;
// log("hello in console log ");

// array.forEach(console.log);





///----

//-------

// var person = {};
// person.firstName = "dama";
// person.printName = function() {
//   console.log(this);
//   console.log(this.firstName);
  
// }

// // btn.addEventListener("click", person.printName);
// const doThing = person.printName;
// doThing();
// person.printName();




///------


// btn.addEventListener("click", function() {
//   console.log(this);
//   this.innerText = "I was clicked ";
  
// })

// btn.addEventListener("click", () => {
//   console.log(this);
//   this.innerText = "I was clicked ";
  
// })




// function example1() {
//   console.log(this);
  
// }
// example1();


// const person = {
//   name: "atul",
//   printThis() {
//     console.log(this);
//   }
// }
// person.printThis();

