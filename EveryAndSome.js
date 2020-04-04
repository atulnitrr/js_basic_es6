
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
  return Object.is(request.status, "pending");
});

console.log(inProgress);



var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
  return user.hasSubmitted;
});

console.log(hasSubmitted);

var computers = [
  {name: "Apple", ram: 18},
  {name: "Mac", ram: 23},
  {name: "Acer", ram: 12}
]

var someFound = computers.some(function(computer){
  return computer.ram > 17
})
console.log(someFound)

var allFound = computers.every(function(computer){
  return computer.ram > 17
})
console.log(allFound)