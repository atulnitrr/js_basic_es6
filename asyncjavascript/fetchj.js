console.log("fetch js");

function fetchMovies() {
  fetch("http://www.omdbapi.com/?s=batman&apikey=8f3ac918").then(res => {
    console.log(res);
    return res.json();
  }).then(data => {
    console.log(data);
    
  })
}

fetchMovies();


