console.log("promise js");

function dummy() {
  setTimeout(() => console.log("test data")
  , 0)
}

dummy();
console.log("outside log ");



/*
function calculateSqure(number) {
  return new Promise( (resolve, reject) => {

    setTimeout(() => {
      if (typeof number !== "number") {
        return reject("Invalid input " + number);
      }
      return resolve(number * number);
    }, 1000)


  })
}

*/



/*
calculateSqure("opp").then(val=> {
  console.log(val);
  // return calculateSqure(4);
  return calculateSqure("hh");
}).then(val => {
  console.log(val);
}).catch(error => {
  console.log(error);
  
})

*/

/*
calculateSqure(2).then(val => {
  console.log(val);
  // return 23;  
  throw new Error("somethig happened")
}).then(val2 => {
  console.log(val2);
  
}, reason  => {
  console.log("Error happend" + reason);
  
})

*/

/*
// happy case returned value; 
calculateSqure(2)
.then(val1 => {
  console.log(val1)
  return 34;
}
).then(val2 => console.log(val2)
)

*/


/* happuy case undefined 
calculateSqure(2)
.then(val1 => console.log(val1)
).then(val2 => console.log(val2)
)
*/

/*
function capitalLetter(text) {
  return new Promise((resolve, reject) => {
    const res = text[0].toUpperCase() + text.substr(1);
    console.log("Created");
    
    resolve(res);
  })
}

capitalLetter("data")
.then(res => console.log(res));

*/

/*
function calulateSqure(number) {

  const promise = new Promise((resolve, reject) => {

    if (typeof number !== 'number') {
      reject(`Invalid input ${number}`)
    }
    resolve(number * number);
  })
  return promise;
}
calulateSqure("kk")
.then(val => console.log(val))
.catch(error => console.log(error))

*/

/*
const promise = new Promise((resolve, reject) => {
  // reject("value is rejeected ");
  resolve("Valie");
})

console.log(promise);

promise.then((value) => {
  console.log(`success in promise ${value}`);
}).catch((error) => {
  console.log(error)
})
console.log(promise);
*/