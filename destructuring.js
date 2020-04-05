const numbers = [1, 2, 3];

function double(rest) {
    const [first, ...remin] = rest;
    if (remin.length === 0) {
      return [2*first];
    } else {
      return [2*first, ...double(remin)];
    }
}

const doubleResponsne = double([4, 2, 3]);
console.log(doubleResponsne);




const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return {subject, time, teacher};
});

console.log(classesAsObject);


const points = [
  [3, 4],
  [4, 5],
  [5, 6],
]

const resVar = points.map(([x, y]) => {
    return {x, y};
});

console.log(resVar)






const ccomp = {
  locationss: ["Mountain view", "Seattle"]
}

const {locationss} = ccomp;

console.log(locationss);


const comDetails = [ 
  {name: "Google", location: "Mountain view"},
  {name: "Faccebook", location: "Meelno park"}
]

// const [ {location}] = comDetails;


const companies = ["Goolge", "FaceBook", "Uber"];
const [name, name2, ...res] = companies;

console.log(name + " 00 " + name2)







const savedFile = {
  name: "tango", 
  extension: "jpeg", 
  size: 345
}

function fileSummary({name, extension, size}) {
  return `File ${name}.${extension} is of size ${size}`
}

console.log(fileSummary(savedFile));





const expense = {
  type: "business", 
  amount: 20
}

const {amount, type} = expense;

console.log(amount);
console.log(type);
