var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers = users.filter(function(user) {
   return user.admin;
 })

 console.log(filteredUsers);


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
  return number > 50;
});

console.log(filteredNumbers);


var products = [ {name: "banana", type : "fruit"}, {name: "orange", type : "fruit"}, {name : "potato", type : "veg"}]

var output = products.filter(function(product) {
  return product.type === "fruit";
});

console.log(output);