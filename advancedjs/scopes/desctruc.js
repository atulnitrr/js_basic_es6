console.log("console log dstructing" );


const array = [1, 2, 3];

// for of loop. 

for(let value of array) {
  console.log(value);
  console.log(typeof(value));
}


/*
const obj = {a: 1, b: 3};
for(let prop in obj) {
  console.log(prop);
  console.log(obj['prop']);
  
}
*/

/*
array.forEach(value => {
  console.log(value);
  // can put break statement here.
  // also you can not put return over here. 
  // break;
})
*/

// one way of looping
/*
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
  
}
*/


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

