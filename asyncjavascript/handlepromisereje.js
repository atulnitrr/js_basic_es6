console.log("handle promsie rejection");

function printPromiseData(newPromise) {
  newPromise.then(vale => {
    console.log(vale);
    
  }).catch((error) => {
    console.log(`Error data --> ${error}`);
    
  })
}

// const promise = new Promise((resolve, reject) => {
//   reject("reject data");
//   resolve("resolved data");
// })

// printPromiseData(promise);

const randomString = "some data";
// printPromiseData(Promise.reject(randomString));
printPromiseData(Promise.reject(new Error("data")));

// const randomString = "sss";
// printPromiseData(Promise.resolve(randomString));

// will get error here that newPromise.then is not a function, since string is not a function
// const randomString = "sss";
// printPromiseData(randomString);



/*
function calculateSqure(nubmer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof nubmer  !== "number") {
        return reject(`number invalid ${nubmer}`);
      }
      return resolve(nubmer * nubmer);
    }, 1000)
  })
}

calculateSqure(3).then(val => {
  console.log(val);
  return calculateSqure("ddd");
}).catch( error => console.log(error)
)

*/
