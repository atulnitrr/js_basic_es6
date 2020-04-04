
function balanceParn(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (Object.is(char, "(")) {
      return ++previous;
    }
    if (Object.is(char, ")")) {
      return --previous;
    }

    return previous;
  }, 0)
}

var balanceDone = balanceParn(")(");
console.log(balanceDone);












var primaryColor = [
  {color: "red"},
  {color: "yellow"},
  {color: "green"}
]


var result = primaryColor.reduce(function(previous, color) {
    previous.push(color.color);
    return previous;
}, []);

console.log(result)






var numbers = [10, 20, 50];

var outputsum = 0;

var output = numbers.reduce(function(sum, number) {
  return sum + number; 
}, 0);


console.log("sum " + output);