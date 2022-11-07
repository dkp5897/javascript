// forEach() is an ECMAScript5 (ES5) feature.

// Definition and Usage
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.



let list = [10,20,30,40,50,60];

list.forEach(element => {
    console.log(element);
});

//10,20,30,40,50,60




list.forEach((element,index) => {
    console.log(`${element} at index ${index}`);
});

// 10 at index 0
// 20 at index 1
// 30 at index 2
// 40 at index 3
// 50 at index 4
// 60 at index 5

list.forEach((element,index,arr) => {
    console.log(`${element} at index ${index} of array: ${arr}`);
});

// 10 at index 0 of array: 10,20,30,40,50,60
// 20 at index 1 of array: 10,20,30,40,50,60
// 30 at index 2 of array: 10,20,30,40,50,60
// 40 at index 3 of array: 10,20,30,40,50,60
// 50 at index 4 of array: 10,20,30,40,50,60
// 60 at index 5 of array: 10,20,30,40,50,60

let sum=0;
list.forEach(myFunction);

function myFunction(element){
    sum+=element;
    console.log(`The element is ${element}`);
}
console.log(`total sum ${sum}`);

// The element is 10
// The element is 20
// The element is 30
// The element is 40
// The element is 50
// The element is 60
// total sum 210


// update the array

list.forEach((element,index,arr)=>{
    arr[index] = element/10;
})
console.log(list);  //[ 1, 2, 3, 4, 5, 6 ]