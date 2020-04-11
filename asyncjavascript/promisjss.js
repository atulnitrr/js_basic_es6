console.log("promise js");
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
