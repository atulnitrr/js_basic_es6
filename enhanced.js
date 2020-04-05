






// function createBookShop(inventory) {
//   return {
//     inventory: inventory, 
//     totalValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price ,0);
//     },
//     priceOfTitle: function(title) {
//       return this.inventory.find(book => Object.is(book.title , title)).price;
//     }
//   }
// }


function createBookShop(inventory) {
  return {
    inventory, 
    totalValue() {
      return this.inventory.reduce((total, book) => total + book.price ,0);
    },
    priceOfTitle(title) {
      return this.inventory.find(book => Object.is(book.title , title)).price;
    }
  }
}

const inventory = [
  {title: "harry", price: 10}, 
  {title: "gemmi", price: 20}, 

];

const rr = createBookShop(inventory);
console.log(rr.totalValue());
console.log(rr.priceOfTitle("harry"));
