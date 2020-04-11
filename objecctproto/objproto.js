console.log("Object proto");

//--

class Person {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }
  sayHi() {
    console.log(`Hello --> ${this.name}`);
    
  }
}

const ram = new Person("amityy", 34);
ram.sayHi();

class Manager extends Person {
  constructor(name, rank) {
    super(name, rank);
  }
}


const manger = new Manager("new manager ", 45);
manger.sayHi();

/*
const person = {
  firstName: "atul",
  sayHi() {
    console.log(`Hello ${this.firstName}`);
    
  }
}
person.sayHi();
*/
//--
