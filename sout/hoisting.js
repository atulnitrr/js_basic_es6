console.log("hoisting jhs");


// function example12a() {
//   console.log(a);
//   console.log("this is function a -->");
  
// }
// example12a();

function example12b() {
  console.log(a);

  console.log("12 bb");
  
  var a; 
  
}
example12b();

function example12c() {
  console.log(a);
  console.log("12 cc");
  var a = 10; 
}

example12c();