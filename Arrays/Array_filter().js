// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


function isBigger(value){
    return value>=10;
}

let arr=[1,41,2,5,50,12,14,5,11];
let arr1=[1,41,20,12,5,11];
// it will return all value greater than 10
let res= arr.filter(isBigger);
console.log(res)

console.log(arr1.filter(isBigger));


//Find all prime numbers in an array

const arr2 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,11,12,13] ;

function isPrime(num){
    for(let i=2;num>i;i++){
        if(num%i===0){
            return false;
        }
    }
    return num>1;
}

console.log("The prime number: ",arr2.filter(isPrime));
