console.log("this key js");


const btn = document.getElementById("button1");

//-------

var person = {};
person.firstName = "dama";
person.printName = function() {
  console.log(this);
  console.log(this.firstName);
  
}

// btn.addEventListener("click", person.printName);
const doThing = person.printName;
doThing();
person.printName();




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

