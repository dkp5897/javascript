// normal function

// console.log(sum(14,16));

// function sum(a,b){
//     return a+b;
// }




// arrow function

//console.log(sum(14,16));        // Cannot access 'sum' before initialization

// const sum = (a,b) =>{
//     return `The sum of two numbers is: ${a+b}` ;
// }


const sum = (a,b) =>`The sum of two numbers is: ${a+b}` ;

console.log(sum(10,50));


const diff = (a,b) => (a-b);
console.log(diff(25,10));

const mul = (a,b) => (a*b);
console.log(mul(14,5));

const div = (a,b) => `The division of two numbers: ${a/b}`;
console.log(div(100,20));