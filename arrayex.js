


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
  areas.push( image.height * image.width);
});

console.log(areas)






function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
  
  posts.forEach(function(post){
    savePost(post);
  });

}



var numbers = [1, 2, 3, 4, 5, 6];

var sum = 0; 

numbers.forEach(function(number){
  sum += number;
});

console.log(sum);

var sum2 = 0;
function adder(number) {
  sum2 += number;
}

numbers.forEach(adder);

console.log("sum2 --> " + sum2);



// var colors = ['red', 'blue', 'green'];
// colors.forEach(function(value, index) {
//   console.log(index + " -> " + value)
// });