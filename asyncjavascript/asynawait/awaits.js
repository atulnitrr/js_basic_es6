console.log("await function --> ");



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
