// excution of code will be sequencially from top to bottom and output is also in same order 
// console.log('Hello');
// console.log('Javascript');

// // an asynchronous function
// setTimeout(function(){
//     console.log('I am the output of setInterval!');
// },3000)

// output:-Hello
        // Javascript
        // I am the output of setInterval!

// ================================================================================================

console.log('Hello');


// an asynchronous function
setTimeout(function(){
    console.log('I am the output of setInterval!');
},3000)

console.log('Javascript');

// output:-
// Hello
// Javascript
// I am the output of setInterval!

// output is in same sequence mean asynchronous function don't block the synchronous code and excute in last