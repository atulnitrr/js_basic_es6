function unique(array) {

  return array.reduce(function(previous, number) {
    var present = previous.some(function(n){
      return n === number;
    });

    if (!present) {
      previous.push(number);
    }

    return previous;
      
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];
var res = unique(numbers);
console.log(res);


var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(tally, desk) {
    if (desk.type === "sitting") {
      tally.sitting += 1;
    
    }  
    if (desk.type === "standing") {
      tally.standing += 1;
    } 

    return tally;

}, { sitting: 0, standing: 0 });

console.log(deskTypes);


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

console.log(totalDistance);


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