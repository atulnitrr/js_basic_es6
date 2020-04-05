const MathLibrary = {
  calculateProduct(...rest) {
    console.log("This mehod is deprecated --> please use multiuply" + rest)
    return this.multiply(...rest);

  }, 
  multiply(a, b) {
    console.log(" a " + a + "  b " + b);
    return a * b;
  }
}

console.log(MathLibrary.calculateProduct(8, 9, 5, 6));





const defaultColors = ["green", "yellow"];
const normalColor = ["white", "Red"];

const allColors =["pink", ...defaultColors, ...normalColor, "purple"];

console.log(allColors)







console.log(addNumbersSPread(1, 2, 3, 4, 5, 6));

// this ...numbers is spread operator
function addNumbersSPread(...numbers) {
  return numbers.reduce((total, number) => {
    return total + number;
  } , 0);
}




// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce((total, number) => total + number, 0);
// console.log(sum)