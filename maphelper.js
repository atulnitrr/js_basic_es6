function pluck(array, property) {

  return array.map(function(element){
    return element[property];
  });
   
}

var paints = [ {color: "red"}, {color: "blue"}];
var result = pluck(paints, "color");

console.log(result);





var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map( function(trip) {
  return trip.distance /  trip.time;
});

// console.log(speeds)






var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
});;

console.log(heights);


var cars = [
  {model : "Ford ", price : "Cheap "},
  {model : "Lambo ", price : "Expensive "}
]

var models = cars.map(function(car) {
  return car.model;
});

// console.log(models)





var numbers = [1, 2, 3];
var doubled = numbers.map(function(number){
  return number * 2;
});

// console.log(doubled);