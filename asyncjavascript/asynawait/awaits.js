console.log("await function --> ");
function printOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("print one done ")
    } , 1000);
  })
}

function printTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("print two done")
    } , 1000);
  })
}



async function inParallel() {
  const res1 = printOne();
  const res2 = printTwo();
  const value1 = await res1;
  const value2 = await res2;
  console.log(value1, value2);
  
}
inParallel();

/*
async function oneByOne() {
  let res = await printOne();
  let res2 = await printTwo();
  console.log(res);
  console.log(res2);
  
}
oneByOne();
*/

/*
printOne()
.then(vale => console.log(vale))

printTwo()
.then(vale => console.log(vale))
 
*/

// async await example


/*
async function getDogs_catch() {
  const res = await fetch("https://m.dog.ceo/api/breeds/image/random");
}

getDogs_catch()
.catch(error =>  console.log("failed " + error)
)
*/
// try catch 

/*
async function getDogs() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random2");
  } catch (error) {
    console.log(error);   
  }
}
getDogs();
*/

/*
async function getRandomDogAsyn() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let value = await response.json();
  console.log(value.message);
}
getRandomDogAsyn();

*/

// normal example 
/*
function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => console.log(data.message)
  )
}
getRandomDog();
*/

/*
function getNumber() {
  return new Promise((resolve, reject)  => {
    setTimeout(() => {
      resolve(43)
    } , 2000);
  })
}



async function ff() {
  console.log("data value");
  
  const value = await getNumber();
  console.log("ater value");
  
  console.log(value);

  
}

ff();

*/

/*
getNumber()
.then(val => console.log(val)
)

*/
