console.log("prmoise js");


function doAsync() {
  return Promise.resolve();
}


doAsync().then(() => console.log(data)
)


let data = "dummy data";


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