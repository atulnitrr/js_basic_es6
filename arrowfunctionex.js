const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};

console.log(profile.getName());


const fibonacci = n =>  {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibres = fibonacci(6);
console.log(fibres)




const team = {
  members: ["atul", "amit"],
  temaName: "Super duper", 
  teamDesc: function() {
    return this.members.map(member => `${member} is of team ${this.temaName}`
    );
  }
  // teamDesc: function() {
  //   return this.members.map(function(member){
  //     return `${member} is of team ${this.temaName}`
  //   });
  // }
}

const teamDes = team.teamDesc();
console.log(teamDes);







const subs = (a, b) => a - b;

console.log(subs(9, 8));


const numbers = [1, 2, 3];

const res = numbers.map(number => 2 * number);
console.log(res);


const add = function(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);



const add2 = (a, b) => a + b;
console.log(add2(5, 6));


function sayHello() {
  console.log("say hellp ")
}

sayHello();


