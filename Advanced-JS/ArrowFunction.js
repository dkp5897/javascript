// // ----------------------
// // Traditional Example
// // ----------------------
// // A simplistic object with its very own "this".
// const obj = {
//     num: 100,
//   };
  
//   // Setting "num" on window to show how it is NOT used.
// //   window.num = 2020; // yikes!
  
//   // A simple traditional function to operate on "this"
//   const add = function (a, b, c) {
//     return this.num + a + b + c;
//   };
  
//   // call
//   const resultCall = add.call(obj, 1, 2, 3); // establishing the scope as "obj"
//   console.log(resultCall); // result 106
  
//   // apply
//   const arr = [1, 2, 3];
//   const resultApply = add.apply(obj, arr); // establishing the scope as "obj"
//   console.log(resultApply); // result 106
  
//   // bind
//   const resultBind = add.bind(obj); // establishing the scope as "obj"
//   console.log(resultBind(1, 2, 3)); // result 106
  

  //==========================================================================================

  // with arraow function

  // ----------------------
// Arrow Example
// ----------------------

// A simplistic object with its very own "this".
const obj = {
    num: 100,
  };
  
  // Setting "num" on window to show how it gets picked up.
//   window.num = 2020; // yikes!
  
  // Arrow Function
  const add = (a, b, c) => this.num + a + b + c;
  
  // call
  console.log(add.call(obj, 1, 2, 3)); // result 2026
  
  // apply
  const arr = [1, 2, 3];
  console.log(add.apply(obj, arr)); // result 2026
  
  // bind
  const bound = add.bind(obj);
  console.log(bound(1, 2, 3)); // result 2026
  