
var numbers = [1, 2, 3, 4, 5, 6];

var sum = 0; 

numbers.forEach(function(number){
  sum += number;
});

console.log(sum);

var sum2 = 0;
function adder(number) {
  sum2 += number;
}

numbers.forEach(adder);

console.log("sum2 --> " + sum2);



// var colors = ['red', 'blue', 'green'];
// colors.forEach(function(value, index) {
//   console.log(index + " -> " + value)
// });