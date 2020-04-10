


example6();

function example6() {
  for(var i = 0; i<10; i++) {
      if(i > 5) {
        var test = i * 10;
      }
  }
  console.log("i -->" + i + " test --> " + test);
}


// var a = 20;

// function gd(a) {
//   a = 30;
//   console.log("Local --> " + a);
  
// }

// gd();
// console.log("Global --> " + a);



// outet();
// var a_ = 10;

// function outet() {
//   var a_ = 20;
//   function inner() {
//     var a_ = 30;
//     console.log("inner " + a_);
    
//   }

//   inner();
//   console.log("Outert " + a_);
// }

// console.log("outer " + a_);



// console.log("dddd");

// function globalSc() {
//   for(i = 0; i <  5; i++) {
//     console.log(" i " + i);
    
//   }
// }

// function dummy_3() {
//   i = 1;
//   j = 1;
//   console.log("i + j = " + (i + j) );
//   globalSc();
// }

// dummy_3();

// console.log(i);
