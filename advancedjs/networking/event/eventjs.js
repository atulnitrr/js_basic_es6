console.log("Event bubbling ");



const item = document.getElementById("pass");

item.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  
})

console.log(item);



/*
const items = document.getElementsByClassName("item");

*/

/*
for (let index = 0; index < items.length; index++) {
  
  (function(y) {
    const element = items[y];
    element.addEventListener("click", event => {
        event.preventDefault();
      // if (y === 2 ) {
      //   event.stopPropagation();
      // }
      // alert(y);
      console.log(element, y, event);
      
    }, true)
  })(index);
  
}
*/


/*
for (let index = 0; index < items.length; index++) {
  
  (function(i) {
    items[index].addEventListener("click", (event) => 
    console.log(items[index], event, i)
    , false)
  })(index);
  
}

console.log(items);
*/
