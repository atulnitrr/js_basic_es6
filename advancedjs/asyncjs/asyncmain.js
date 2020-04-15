console.log("async programming ");





/*
function doAsync(callback) {
  setTimeout(() => {
    // callback("Error data");
    callback(null, "Found data");
  }, 100);

} 

doAsync((error, data) => {
  if (error) {
    throw error;
  } else {
    console.log(data)
  }
})

*/



/*

function doAsync(callback) {
  setTimeout(callback, 0);

  // setTimeout(() => {
  //   callback();
  // }, 0)

}

doAsync(() => console.log(message))

let message = "Call back called";
*/
