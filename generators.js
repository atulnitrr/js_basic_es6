class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (const child of this.children) {
        yield* child
    }
  }
}



const children  = [
  new Comment("Good comment", []),
  new Comment("bad  comment", []),
  new Comment("meh comment", []),
]
const parent = new Comment("good post", children);


const allComments = [];

for (const com of parent) {
    allComments.push(com);
}

console.log(allComments);
console.log(parent);




const testingTeam = {
  lead: "Bill", 
  tester: "clinton",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
    yield "dd"
  }
}

const team = {
  testingTeam,
  size: 3, 
  lead: "jail", 
  manager: "himansu",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield* testingTeam;
  }

}


const names = [];

for(let name of team) {
  names.push(name);
}

console.log(names);





// function* colorsGenRator() {
//   yield "red";
//   yield "blue";
//   yield "green";
//   return "helllo "
// }

// const colorArray = [];
// for (let color of colorsGenRator()) {
//   colorArray.push(color);
// }

// console.log(colorArray);


// const colorGen = colorsGenRator();

// console.log(colorGen.next());
// console.log(colorGen.next());
// console.log(colorGen.next());
// console.log(colorGen.next());




function* numbers() {
  const sutffFromSTore = yield "cash";
  return sutffFromSTore;
}

const gen = numbers();
// console.log(gen.next());
// console.log(gen.next("grocerires "));








const colors = ["red", "bllue", "green"];

// for (const color of colors) {
//   console.log(color);
  
// }
// colors.forEach(color => console.log(color));