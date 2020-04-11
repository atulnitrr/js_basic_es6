console.log("arrow example --> ");


const person = {
  firstName: "amit", 
  printName: function() {
    console.log(`${this.firstName}`);
  }
}

person.printName();
const dummuy = person.printName;
dummuy.bind(person)();