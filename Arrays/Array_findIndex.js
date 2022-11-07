const arr=[1,2,3,44,55,66,77];

function isLarger(elem){
    return elem>=13;
}
console.log(arr.findIndex(isLarger));   // 3 => 44 >13

const isSmaller = (elem) => elem<13;
console.log(arr.findIndex(isSmaller));  // 0 =>1 <13

// checking prime number

function isPrime(num){
    if(num%2===0 || num<2)
    return false;

    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i===0)
        return false;
    }
    return true;
}

console.log([2,4,6,8].findIndex(isPrime));
console.log([2,4,7,9,11].findIndex(isPrime));


// by using arrow function

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

 // index of banana
const index = fruits.findIndex((fruits)=>fruits==="banana");

console.log(index);
console.log(fruits[index])

