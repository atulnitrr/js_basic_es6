
var ladders = [ 
  {height: 20, id: 1}, 
  {height: 25, id: 2}, 
]

var criteria = {height : 25};
var criteria = {id : 1};

var output = findWhere(ladders, criteria);
console.log(output);

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];
  return array.find(function(elem){
    return Object.is(elem[property], criteria[property]);
  }) 
}





var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
 return Object.is(account.balance, 12);
});

console.log(account);



var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin;
});

console.log(admin);




class Car {
  constructor(model) {
    this.model = model;
  }
}



var cars = [ 
  new Car("Ford"), 
  new Car("Ferrati"), 
  new Car("Bettel")
]




var users = [ {name: "atul"}, {name: "poonam"}]

var user = users.find(function(user) {
  return Object.is(user.name, "poonammm")
})

console.log(user);