console.log("async java script ");

function print1() {
  const number1 = 1;
  console.log(number1);
}

function print2() {
  const number2 = 2;
  console.log(number2);
}

function print3() {
  const number3 = 3;
  setTimeout( () => {console.log(number3)
  print4()}, 3000);
  // console.log("prit 3");
 
  
}

function print4() {
  const number4 = 4;
  console.log(number4);
}

print1();
print2();
print3();
// print4();
