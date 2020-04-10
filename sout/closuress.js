console.log("closuress js -->");



function validate(password) {
  var attempTcount = 0;

  return function(attempt) {
    attempTcount++;
    console.log("attempt " + attempTcount + "  attempt  " + attempt + "password " + password); 
    return password === attempt;
  }
}

var validatteOne = validate("pass1")
var validatteTwo = validate("pass2")
validatteOne("pass");
validatteTwo("pass");



// function lessThanFilter(lessThan) {
//   return function(item) {
//     return item < lessThan;
//   };
// }

// const lessThan5 = lessThanFilter(5);

// console.log( lessThan5(4) + " --> " +  lessThan5(6));





function myFilter(array, predicate) {
  var result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6];
const res = myFilter(array, elem => elem <= 4); 
// console.log(res);


// function example17(callback) {
//   callback(1);
//   callback(2);
//   callback(3);
// }

// // example17(arg => console.log(arg));
// example17(callBack);


// function callBack(arg) {
//   console.log(arg);
  
// }