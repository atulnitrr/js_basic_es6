console.log("call back hell");


function calculateSqure(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number != "number") {
        return reject("Invalid input " + number);
      }
  
      return resolve(number * number);
    }, 1000)

  })
}

calculateSqure(1)
.then(val => {
  console.log(val)
  return calculateSqure(2);
})
.then(val => {
  console.log(val);
  return calculateSqure(3);
})
.then(val => {
  console.log(val);
  return calculateSqure(4);
})
.then(val => {
  console.log(val);
  return calculateSqure(5);
})
.then(val => {
  console.log(val);
  return calculateSqure(6);
}).then(val => console.log(val)
);
