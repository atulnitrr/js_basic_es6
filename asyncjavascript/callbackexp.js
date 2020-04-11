console.log("call back java script --> ");



function dogBreed() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/list/all")
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
      
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
