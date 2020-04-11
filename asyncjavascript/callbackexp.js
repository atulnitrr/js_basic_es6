console.log("call back java script --> ");



function dogBreed() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      const breeds = Object.keys(response.message);
      console.log(breeds);
      const firstBreed = breeds[0];
      const xhrBreed = new XMLHttpRequest();
      xhrBreed.open("GET", `https://dog.ceo/api/breed/${firstBreed}/images`);
      xhrBreed.onreadystatechange = function() {
        if(xhrBreed.readyState === XMLHttpRequest.DONE) {
          const brredValue = xhrBreed.responseText;
          console.log("Breed valulee");
          console.log(brredValue);

          
        }
      }
      xhrBreed.send(null);


      
    }
  }

  xhr.send(null);
}


dogBreed();


/*
function calcualateSqure(number, callback) {
  setTimeout(() =>  {
    if(typeof number !== "number") {
      throw new Error("Number required")
    }
    callback(number * number)
  }, 1000)
}

calcualateSqure(12, number => {
  console.log(number);
  
})
*/

// try {
//   calcualateSqure("hh", (result)=> 
//   console.log(result)
// )
// } catch (error) {
//   console.log("Error -->" + error);
  
// }


// this is normal example 
/*
function funct(callback) {
  callback();
}

funct(() =>  console.log("This is call back")
)

console.log("This is normal ");
*/

// this si callback example for async
/*
function func(callback) {
  setTimeout(() => callback(), 0)
}
func(() => console.log("This is callback "))

console.log("data")
*/


/*
function printNumber(num) {
  console.log(num);
}

[1, 2, 3, 5].forEach(printNumber);

*/
