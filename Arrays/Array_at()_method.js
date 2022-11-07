const arr=['apple','banana','mango','pear'];
console.log(arr)
// return an element at a index
console.log(arr.at(2));     // mango
console.log(arr.at(3));     // pear
console.log(arr.at(4));     // undefine : if element not present at that index


//a function that return a last element
function returnLast(arr){
    return arr.at(-1);  //arr.at(-1)==arr.at(arr.length-1)
}

const a=returnLast(arr);
console.log(a);         // pear

// pushing an element in the last
arr.push('guvava');
console.log(returnLast(arr));



// --------------------------------------------------------//

//Comparing Methods

var colors=['red','green','blue','yellow'];
console.log(colors);

const lengthWay=colors[colors.length-2];    
console.log(lengthWay);         //blue

const sliceWay1=colors.slice(2,3);   
console.log(sliceWay1);      //blue

const sliceWay2=colors.slice(-2,-1);   
console.log(sliceWay2);      //blue
