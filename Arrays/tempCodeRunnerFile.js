/* it is use to flaten an array i.e. to convert 2D and 3D array into 1D array
    The reduce method excute a reducer function (that you provide) on each element of the array
     resulting in single output value

     reduce() take 4 arguments
1.  accumulator
2.  current value 
3.  Currenet index
4.  source array
*/


// 1. find sum of array : like this we can find multiple
const arr=[5,2,6,4,10];

let sum = arr.reduce((accumulator, curEle,index,arr) =>{
    return accumulator+=curEle;
})

console.log(sum);


// squer the array, make a new array which have elements greater than 15,find the sum of new array elements

let sum1= arr.map(x => x**2).filter((num) => num>15).reduce((accumulator, curEle) =>{
    return accumulator+=curEle;
})

console.log(sum1);

// give intial value externally

let mark=[85,87,75,74];
debugger;
let total= mark.reduce((accumulator, curEle) =>{
    return accumulator+=curEle;
},80)

let avg=total/5
console.log(avg,"%");