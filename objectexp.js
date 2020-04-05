class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

const monster = new Monster({name: "gamma"});
// console.log(monster);


class Snake extends Monster {

  constructor(options) {
    super(options);
  }

  bite(snake) {
    snake.health = snake.health - 10;
  }

}

const snake1 = new Snake({name: "snake 1"});
const snake2 = new Snake({name: "snake 2"});
snake1.bite(snake2);
console.log(snake1);
console.log(snake2);


class Car {
  constructor({title}) {
    this.title = title;
  }

  drive() {
    return "vroom ----> ";
  }
} 


class Toyota extends Car{
  constructor(options) {
    super(options)
    this.color = options.color;
  }

  honk() {
    return "beep";
  }
}

const tyota = new Toyota({title: "Foucs", color: "red"});
console.log(tyota);
console.log(tyota.honk());
console.log(tyota.drive());



// const car = new Car({title: "tyota"});
// console.log(car);
// console.log(car.drive());