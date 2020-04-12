console.log("async function");
 


async function dummy_2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved data")
    }, 4000)
  })
}


const ddd = dummy_2();
console.log(ddd);
// dummy_2().then(val => console.log(val))




/*
async function dummy() {
  return "hello world ";
}
console.log(dummy());
*/

