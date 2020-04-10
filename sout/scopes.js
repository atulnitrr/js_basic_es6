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



// persons.forEach(person => {
//   const personElement = document.createElement("li");
//   personElement.innerText = person;
//   personElement.addEventListener("click", () => {
//     console.log("you clicked on " + person);
    
//   });
//   list.appendChild(personElement);
// });

