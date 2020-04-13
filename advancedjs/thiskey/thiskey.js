console.log("this keyword");



const person = {
  firstName: "atul", 
  sayMyName() {
    // "use strict";
    const self = this;
    console.log("Outer this ");
    
    console.log(self);
    function fun3() {
      console.log( "Inner this");
      //this wil lprint global context
      console.log(self);
    }
    fun3();

  }
}

person.sayMyName();

// this pointing to obhect instead of global

/*
var person ={
  firstName: "atul", 
  sayMyName() {
    console.log(`My name is ${this.firstName}`);   
  }
}
// this points to person object.
person.sayMyName();

const callN = person.sayMyName;
 person.callN = person.sayMyName;
 person.callN();

callN();
*/


//inside a function 
/*
function checkThis() {
  // this is pointing to global object
  console.log(this);
  
}

checkThis();

*/




// outside this function example
/*
console.log(this);

this.ak = 9;
console.log(this.ak);
console.log(ak);
console.log(window.ak);

*/


