console.log("Event bubbling ");


const items = document.getElementsByClassName("item");


for (let index = 0; index < items.length; index++) {
  
  (function(i) {
    items[index].addEventListener("click", (event) => 
    console.log(items[index], event, i)
    , false)
  })(index);
  
}

console.log(items);

