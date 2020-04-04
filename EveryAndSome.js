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