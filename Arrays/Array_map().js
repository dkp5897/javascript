/* Array.map(): map method create a new array populated with the result of given callback 
function for every element of an array */

// filter():-
// The filter() method creates an array filled with all array elements that pass a test implemented by the provided function. The filter method is well suited for particular instances where the user must identify certain items in an array that share a common characteristic. For example, consider the following array:

// map():-
// The map() method creates a new array with the results of calling a function for every array element. The map method allows items in an array to be manipulated to the user’s preference, returning the conclusion of the chosen manipulation in an entirely new array. For example, consider the following array:

const array= [1,4,9,16,25];

let newArray1= array.map(x => x*2);
console.log("new array-1: ",newArray1);  //new array-1:  [ 2, 8, 18, 32, 50 ]
console.log(array);                     //[1,4,9,16,25]

let squr = array.map((num) => Math.sqrt(num));
console.log("square roots of elements: ",squr);  //square roots of elements:  [ 1, 2, 3, 4, 5 ]



// element graeter than 8

let newArray2= array.map((num) => {
    return num>8;
})
console.log("elements greater than 8: ",newArray2);  //elements greater than 8:  [ false, false, true, true, true ]


//=============================================================================================//

let newArray3 = array.map((curEle, index, arr) => {
    return `the element ${curEle} is at index: ${index} from array: ${arr}`;
})

console.log("array expose: ",newArray3);


// if we use forEach method than it return undefined not any array like map method
 newArray3 = array.forEach((curEle, index, arr) => {
    return `the element ${curEle} is at index: ${index} from array: ${arr}`;
})

console.log(newArray3);

//====================================================================================================//

const arr2 = [4,5,1,5,8,3];
let newarr2= arr2.map( x => x**2);
console.log("squre of arrray: ",newarr2);

newarr2= arr2.map( x => x**2).sort((a,b) => a-b);
console.log("squre of arrray in sorted form: ",newarr2);

