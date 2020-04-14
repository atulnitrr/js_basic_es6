console.log("Object orientation-->");



const animal = {
  kind: "human"
}

// const dummy = Object.create(animal);
// const dummy = Object.create(animal, {food: {value: [1, 2,4]}});

const dummy = Object.create(animal, {food: {value:  "data"}, shelter: {value: "home"}});

console.log(dummy);
console.log(animal);







/*
const animal = {
  kind: "human"
}

console.log(animal);
// console.log(animal.__proto__);

const atul = {
}

atul.__proto__ = animal;

console.log(atul);
console.log(atul.kind);
console.log(animal.isPrototypeOf(atul));
animal.kind = "toto";
console.log(atul.kind);

*/


