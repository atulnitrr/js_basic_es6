const utl = "https://jsonplaceholder.typicode.com/posts"

fetch(utl)
.then(response => response.json())
.then(data => console.log(data)
)







prom = new Promise((resolve, reject) => { 
  setTimeout(() => {
    resolve();
    // Only after three seconds i want to resolve 
    // this promise
  }, 5000);
});

prom
.then(() => console.log("Done bro"))
.then(() => console.log("i ran tooo"))
.catch(() => console.log("Ohhh"))
