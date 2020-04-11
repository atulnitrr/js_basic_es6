console.log("promise js");


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