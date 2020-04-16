console.log("prmoise js");

var asyncFunction = async function() {
  return "done";
};
asyncFunction().then(v => console.log(v));




/*
const doAsyncTask = () => Promise.resolve("done");
 
function foo() {
    let x = await doAsyncTask();
    return x; 
}
 
console.log(foo());

Promise.resolve("done")
  .then(val => {
    console.log(val);
  })
  .then(val => console.log(val));
*/
/*
Promise.resolve("done")
  .then(val => {
    throw "fail";
  })
  .then(val => console.log(val))
  .catch(err => console.error(err));
  */

  /*
let p = Promise.resolve();
p.then(() => console.log("Resolved"))
*/

/*
function doAsyncTask(cb) {
  cb();
}
doAsyncTask(function() { console.log(message) });
 
let message = "Callback Called";
*/


/*

async function name() {
  console.log(1);
  
}

async function main() {
  name();
  console.log("main");
  
}
main();

console.log("done");
*/


/*
const promise = () => Promise.reject("Rejected");

(async () => {
  try {
    let val = await promise();
  } catch (e) {
      console.error(e);
      
  }
})();

*/


// async function retuns Promise 
/*
const  asynFun = async () => 3;
asynFun().then(val => console.log(val))
*/


/*
const doAsync = () => Promise.resolve("done");

(async function() {
  let val = await doAsync();
  console.log(val);
  console.log("done 2");
  
  
})();

console.log("here");

*/

/*
async function test() {
  let val = await doAsync();
  console.log(val);
  
}
*/

// doAsync().then((val) => console.log(val)
// )




// this will fist print done , and then here. 
/*
const doAsync = () =>  Promise.resolve("Done");
doAsync().then(val => console.log(val))

console.log("here data --> ");

*/



/*
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

*/


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