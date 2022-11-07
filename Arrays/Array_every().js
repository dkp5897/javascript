//The following example tests whether all elements in the array are bigger than 10.
function isBigEnough(element, index, array){
    return element>=10;
}
console.log([12,4,25,78,1].every(isBigEnough));  // false

console.log([14,25,36,78,96].every(isBigEnough)); //true

// Using arrow functions: Arrow functions provide a shorter syntax for the same test.

console.log( [14,25,3,58,5].every((x)=> x>=10));  // false
console.log( [14,25,30,58,50].every((x)=> x>=10));  //true


//Check if one array is a subset of another array

const isSubset=(array1,array2)=>array2.every((element)=>array1.includes(element));

console.log(isSubset([1,2,3,4,5,6,7],[5,8,7])); //false
console.log(isSubset([1,2,3,4,5,6,7],[5,7,6])); //true