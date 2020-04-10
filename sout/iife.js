console.log("iife ----> js");



// 11 


(function() {

  console.log("iffe sope ");

  function privateFunction() {
    console.log("private function ");
    
  }

  window.public_func = function() {
    privateFunction();
    console.log("public function");
    
  };

})();



//

// ex10

// function example10() {
//   var i = 10;
//   function privateFunc() {
//     console.log("Proivate");  
//   }

//   window.pub1 = function() {
//     console.log("pub 1 +  i " + i );
    
//   }
// }



// 




// example 9 
// This function is available in global scope, make it private scope 
// function myPraivateFunction() {
//   console.log("MyPrivate funcction -->");
  
// }


//


// function fun8a() {
//   console.log("8a");
  
// }

// var fun8b = function() {
//   console.log("8bb");
  
// };

// var fun8c = function fun8c_ee() {
//   console.log("8c");
  
// }

// fun8a();
// fun8b();
// fun8c();