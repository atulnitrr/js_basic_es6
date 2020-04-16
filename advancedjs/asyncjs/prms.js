console.log("prmoise js");


Promise.resolve("done")
.then(() => console.log(message)
)

let message = "message dmaa";



function doAsync(delay) {
  return new Promise((resolve, reject) => {
    setTimeout( () => resolve(delay) , delay)
  })
}


doAsync(1000)
.then(val => console.log(val))

let promises = [doAsync(300), doAsync(200), doAsync(100) ];

Promise.all(promises).then(val =>  console.log((val))
)




/*

Promise.resolve("rejected")
.catch((data) => {
  console.log(data);
})
.finally(() => {
  console.log("finally hanlder ");
  
})

*/

// forking 
/*
 const p = Promise.resolve("DOne");
 p.then(varl => console.log(varl))
 p.then(val2 => console.log(val2))
/*

 // chaning
/*
Promise.resolve("done")
.then(val => {
  console.log(val);
  return "done2"
})
.then((val) => {
console.log(val);
})
*/


/*
function doAsync() {
  return Promise.resolve();
}


doAsync().then(() => console.log(data)
)


let data = "dummy data";

*/

/*
let promiseResolved = Promise.resolve("resolved");

promiseResolved.then(val => { console.log(val);
})


let promiseRejected = Promise.reject({value : 34});

promiseRejected.catch( err => console.log(err)
);

*/
/*
function doAsynTask() {
  return new Promise((resolve, rjecct) =>{
      console.log("async call execcuted");
      if(true) {
        resolve({va: 12, dd: "dd"})
      } else {
        rjecct("Rejected data");
      }
  })
}

doAsynTask()
.then(data => {
  console.log(data); 
}).catch(error => {
  console.error(error);
  
})
*/