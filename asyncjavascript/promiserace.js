console.log("promise race -->");

function askFirst() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("take it first");
    }, 3000);
  })
}
function askSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("take it second");
    }, 2000);
  })
}
function askThird() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("take it third");
    }, 1000);
  })
}

Promise.race(
[
  askFirst(), 
askSecond(), 
askThird()
]
).then(val => console.log(val)
)
