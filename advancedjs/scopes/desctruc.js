console.log("console log dstructing" );



function f({x = 0}) {
  console.log(x);
}

f({})

/*
const objct = {
  firstName: "atul", 
  lastName: "kumar", 
  age: 28
}

console.log(objct);
const {age, firstName} = objct;
console.log(age);
console.log(firstName);

const {age: a, firstName: f} = objct;

console.log(a + "--> " + f);

*/

