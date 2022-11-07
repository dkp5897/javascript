//Find an object in an array by one of its properties

const arr = [
  { name: "Pen", quantity: 2 },
  { name: "Copy", quantity: 5 },
  { name: "Book", quantity: 7 },
  { name: "Box", quantity: 0 },
];

function isBook(item) {
  return item.name === "Book"; // it will return Book information
}
console.log(arr.find(isBook));

function isCopy(item) {
  return item.name === "Copy";
}
console.log(arr.find(isCopy));

function isThing(item) {
  return item.name === "Bag";
}
console.log(arr.find(isThing)); // undefine

//Using arrow function and destructuring
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");
console.log(result); // { name: 'cherries', quantity: 5 }

console.log(inventory.find(({ name }) => name === "apples"));

// Find a prime number in an array

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ === 0) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5





// Declare array with no elements at indexes 2, 3, and 4

const arr3=[0,1,,,,9,6];

arr3.find(function(value, index){
    console.log('Value is; '+value+' at Index: '+index);
})

// deleting an element

arr3.find(function(value,index){
    if(index===0){
        console.log('Deleting array[5] with value: ',arr3[5]);
        delete arr3[5];
    }
    console.log('Visited index :', index, ' with value :', value);
})