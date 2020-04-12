console.log("parallel promise js");

function askFirstDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Not suitabele car first ")
      resolve(8000);
    }, 6000);
  })
}

function askSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("not suitable car 2");
       return resolve(12000);
    }, 5000)
  })
}

function askThirdDealer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10000);
    }, 8000)
  })
}


Promise.all([  
  askFirstDealer().catch(error => error),
  askSecond().catch(error => error), 
  askThirdDealer().catch(error => error)
]).then(val => console.log(val)
).catch (err => console.log(err)
)


// If we call like this then any failure will ausee failuree to avoid that use error in each statement
/*
Promise.all([askFirstDealer(), askSecond(), askThirdDealer()])
.then(val => console.log(val)
).catch(err => console.log(err)
)
*/


/*
console.log(Promise.all([1, "st", true]));


Promise.all([askFirstDealer(), askThirdDealer(), askSecond()])
.then(prices => {
  console.log(prices);
  
})

askFirstDealer()
.then(vale => console.log(vale)
)
askSecond().then(val => console.log(val)
)
askThirdDealer().then((val) => {
  console.log(val);
  
})


console.log("Outsied ");

*/

