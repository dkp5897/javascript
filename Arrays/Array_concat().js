let number=[1,2,3,4,5];
let letters=['a','b','c','d'];
console.log("The number array: ",number);
console.log("The letters array: ",letters);

// to merge to arrays

let merge1=letters.concat(number);
console.log(merge1);    //['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]

let merge2=number.concat(letters);
console.log(merge2);    //[1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']



// concatening three arrays
let number2=[4,5,6,7,8];
let merge3=letters.concat(number,number2);
console.log(merge3);    //['a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 4, 5, 6, 7, 8]



//Concatenating values to an array
const merge4=letters.concat(10,20,30,40,50,[1,2,3]);
console.log(merge4);    //['a', 'b', 'c', 'd', 10,  20,  30,  40,  50,  1,  2,   3]


//Concatenating nested arrays
let num1=[[1]];
let num2=[2,[3]];

let merge5=num1.concat(num2);
console.log(merge5);

num1[0].push(10);
let merge6=num1.concat(num2);
console.log(merge6);    //(3) [Array(1), 2, Array(1)]

// (3) [Array(2), 2, Array(1)]
// 0: (2) [1, 10]
// 1: 2
// 2: [3]
// length: 3 




//Concatenating array-like objects with Symbol.isConcatSpreadable
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));    //(5) [0, {…}, 1, 2, 3]A