


const persons = ["foo", "bar", "nelson"]
const list = document.getElementById("peopel-list");
for (var index = 0; index < persons.length; index++) {
    var personElem = document.createElement("li");
    personElem.innerText = persons[index];
    var ppp = persons[index];
    personElem.addEventListener("click", () => {
      console.log("You clicked on " + ppp + " index " + index);
      
    }) 
    list.appendChild(personElem);

}



var a = 10;
var b = 12;

function change() {
  // var a = b = 34;
  var a = 34;
  var b = 34;
}

console.log("a " + a + " b--> " + b);
change();
console.log("a " + a + " b--> " + b);


// persons.forEach(person => {
//   const personElement = document.createElement("li");
//   personElement.innerText = person;
//   personElement.addEventListener("click", () => {
//     console.log("you clicked on " + person);
    
//   });
//   list.appendChild(personElement);
// });

