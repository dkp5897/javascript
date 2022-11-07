											
											------------> Arrays in JavaScript <----------


In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to 
store list of elements and access them by a single variable. Unlike most languages where array is a reference to the 
multiple variable, in JavaScript array is a single variable that stores multiple elements.

Declaration of an Array :-

There are basically two ways to declare an array. 

var House = [ ]; // method 1 
var House = new Array(); // method 2 

But generally method 1 is preferred over the method 2. Let us understand the reason for this. 

Code:-

/* There are three methods to creat array in javascript
    1. var arr=[]
    2. var arr=new Array()
    3. by using String.prototype.split()
*/

/* An array in JavaScript can hold different elements 
We can store Numbers, Strings and Boolean in a single array. */

// Method-1:

var arr1=["Deepak", 'Kumar',21,10,true,null];
console.log(arr1)
console.log(arr1.length)

//Method-2:
var arr2=new Array(10,20,5,'Rajan','Pradeep',true,4,8)
console.log(arr2)
console.log(arr2.length)

// Create an array using String.prototype.split()
const arr3='Apple,Mango'.split(', ');
console.log(arr3);

//Creates an array of 5 undefined elements
var house1 = new Array(5);
console.log(house1)
  
//Creates an array with element 1BHK
var home = new Array("!BHK");
console.log(home)



// Creates an array of 4 undefined elements
var house = new Array(4);

// Now assign values
house[0] = "1BHK"
house[1] = "2BHK"
house[2] = "3BHK"
house[3] = "4BHK"

console.log(house)


// giving elements to an array using for loop
let arr=[];
for(let i=1;i<=10;i++){
    arr.push(i);
}
console.log(arr)


Output:-

[ 'Deepak', 'Kumar', 21, 10, true, null ]
6
[ 10, 20, 5, 'Rajan', 'Pradeep', true, 4, 8 ]
8
[ 'Apple,Mango' ]
[ <5 empty items> ]
[ '!BHK' ]
[ '1BHK', '2BHK', '3BHK', '4BHK' ]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Most useful JavaScript Array Functions – Part 1:-

In this article, we are going to discuss the following two JavaScript array functions. Both of these functions are 
widely used in industry and make the JavaScript code clean, modularized, and easy to understand.

1.	Array.prototype.every()
2.	Array.prototype.some()

1.	Array.prototype.every(): This function is used when you need to validate each element of a given array. 
	It accepts a callback function as an argument which is called for each element of the array. The callback 
	function has to return either true or false. If all elements of the array satisfy the validation function and thus 
	callback function returns true on all elements of the array, then it returns true. Otherwise, it returns false, 
	as soon as it encounters the first element which does not satisfy the validator function.


Syntax:-
			arr.every(callback(element[, index[, array]])[, thisArg])

'Parameters': This function accepts five parameter as mentioned above and described below:

'callback': This parameter holds the function to be called for each element of the array.

'currentValue': The parameter holds the value of the elements being processed currently.

'index': This parameter is optional, it holds the index of the currentValue element in the array starting from 0.

'array': This parameter is optional, it holds the complete array on which Array.every is called.

'thisArg': This parameter is optional, it holds the context to be passed as this to be used while executing the callback 
		function. If the context is passed, it will be used as this for each invocation of the callback function, 
		otherwise undefined is used as default.



Examples: Given an array, write a function to check if all elements of that array are less than 100 or not.

Program 1: In this code, we will check the array by using a loop function. So the naive approach is to use for a loop 
			as shown below.

Code:-

let numbers = [30,60,190];
let result = true;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] >= 100) {
		result = false;
		break;
	}
}
document.write(result);

Output;-
false


Program 2: In this code, we will check the array by using a Array.prototype.every() function. So the naive approach is 
to use for a loop as shown below.
with the use of Array.every(), the same behavior can be achieved with much clearer, intuitive and less code.

Code:-

let numbers = [30,60,90];
let result = numbers.every(function(element){
return(element < 100);
});

document.write(result);

Output:-
true






                                            --------------> Array Methods<----------------


1.  Array.prototype.at():-

The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
Negative integers count back from the last item in the array.

This is not to suggest there is anything wrong with using the square bracket notation. For example array[0] would return 
the first item. However instead of using array.length for latter items; e.g. array[array.length-1] for the last item, you 
can call array.at(-1).


const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"


Syntax:-    Array.at(index);


Parameters:-

index
The index (position) of the array element to be returned. Supports relative indexing from the end of the array when 
passed a negative index; i.e. if a negative number is used, the element returned will be found by counting back from the 
end of the array.

Return value:-

The element in the array matching the given index. Returns undefined if the given index can not be found.





Code:1:-

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


Output:-

[ 'apple', 'banana', 'mango', 'pear' ]
mango
pear
undefined
pear
guvava
[ 'red', 'green', 'blue', 'yellow' ]
blue
[ 'blue' ]
[ 'blue' ]



2.  Array.prototype.length :-

The length property of an object which is an instance of type Array sets or returns the number of elements in that array. 
The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4


Description:-

The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (2^32).

const listA = [1,2,3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100) //negative sign
// RangeError: Invalid array length



You can set the length property to truncate an array at any time. When you extend an array by changing its length 
property, the number of actual elements increases; for example, if you set length to 3 when it is currently 2, the 
array now contains 3 elements, which causes the third element to be a non-iterable empty slot.

const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2

As you can see, the length property does not necessarily indicate the number of defined values in the array.


Code:-

var colors=['red','green','blue','yellow'];
console.log(colors);
console.log("The length of the colors array:",colors.length)

// Description

const list1=[1,2,3,4];
console.log("The length of list1: ",list1.length);

const list2=new Array(6);
console.log("The length of list2: ",list2.length);

//list2.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

//const list3 = new Array(-100) //negative sign
// RangeError: Invalid array length


// --------------------------------------------------------//

const arr=[1,2,3];
console.log(arr);   

arr.length=7;           // set array length to 7 while currently 3.
console.log(arr);       //[1, 2, 3, empty × 4]

arr.forEach((element)=>console.log(element));


Output:-

[ 'red', 'green', 'blue', 'yellow' ]
The length of the colors array: 4
The length of list1:  4
The length of list2:  6
[ 1, 2, 3 ]
[ 1, 2, 3, <4 empty items> ]
1
2
3




3.Array.prototype.concat():-

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead 
returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


Syntax
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)


Parameters:-

valueN Optional
Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow 
copy of the existing array on which it is called. See the description below for more details.

Return value:-
A new Array instance.

Description:-
The concat method creates a new array. The array will first be populated by the elements in the object on which it is 
called. Then, for each argument, its value will be concatenated into the array — for normal objects or primitives, 
the argument itself will become an element of the final array; for arrays or array-like objects with the property 
Symbol.isConcatSpreadable set to a truthy value, each element of the argument will be independently added to the final 
array. The concat method does not recurse into nested array arguments.

The concat method does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that 
contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into 
the new array as follows:


->Object references (and not the actual object): concat copies object references into the new array. Both the original 
and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both 
the new and original arrays. This includes elements of array arguments that are also arrays.

Data types such as strings, numbers and booleans (not String, Number, and Boolean objects): concat copies the values of 
strings and numbers into the new array.

Note: Concatenating array(s)/value(s) will leave the originals untouched. Furthermore, any operation on the new array 
(except operations on elements which are object references) will have no effect on the original arrays, and vice versa.



Code:-

let number=[1,2,3,4,5];
let letters=['a','b','c','d'];
console.log("The number array: ",number);
console.log("The letters array: ",letters);

// to merge to arrays

let merge1=letters.concat(number);
console.log(merge1);    //['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]

let merge2=number.concat(letters);
console.log(merge2);    //[1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']



// concatening three arrays
let number2=[4,5,6,7,8];
let merge3=letters.concat(number,number2);
console.log(merge3);    //['a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 4, 5, 6, 7, 8]



//Concatenating values to an array
const merge4=letters.concat(10,20,30,40,50,[1,2,3]);
console.log(merge4);


//Concatenating nested arrays
let num1=[[1]];
let num2=[2,[3]];

let merge5=num1.concat(num2);
console.log(merge5);

num1[0].push(10);
let merge6=num1.concat(num2);
console.log(merge6);    //(3) [Array(1), 2, Array(1)]

// (3) [Array(2), 2, Array(1)]
// 0: (2) [1, 10]
// 1: 2
// 2: [3]
// length: 3 




//Concatenating array-like objects with Symbol.isConcatSpreadable
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));    //(5) [0, {…}, 1, 2, 3]A



Output:-

The number array:  [ 1, 2, 3, 4, 5 ]

The letters array:  [ 'a', 'b', 'c', 'd' ]

merge1: ['a', 'b', 'c', 'd', 1, 2,   3,   4,   5]

merge2: [1,   2,   3,   4,   5, 'a', 'b', 'c', 'd']

merge3: ['a', 'b', 'c', 'd', 1, 2, 3,   4,   5,   4,   5, 6, 7,  8]

merge4: [  'a', 'b', 'c', 'd', 10,  20,  30,  40,  50,  1,  2,  3]

merge5: [ [ 1 ], 2, [ 3 ] ]

merge6: [ [ 1, 10 ], 2, [ 3 ] ]

[ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]




4.	Array.prototype.copyWithin():-

The copyWithin() method shallow copies part of an array to another location in the same array and returns it without 
modifying its length.


Code:-

const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]



Examples
Using copyWithin

[1, 2, 3, 4, 5].copyWithin(-2)
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
const i32a = new Int32Array([1, 2, 3, 4, 5])

i32a.copyWithin(0, 2)
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]




5.	Array.prototype.entries():-

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]



Examples:-

Code:-

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

Output:-

[ 0, 'a' ]
[ 1, 'b' ]
[ 2, 'c' ]



Iterating with index and element:-

Code:-

const arr=["Red","Blue","Green"];
// entries method will return an array
let res=arr.entries();
console.log(res.next().value);  //[0, 'Red']
console.log(res.next().value);  //[1, 'Blue']
console.log(res.next().value);  //[2, 'Green']
console.log(res.next().value);  //undefined


// print all element
const arr1=['Hindi','Sanskrit','English'];
const res2=arr1.entries();
for(const element of res2){
    console.log(element);
}

// withoue entries
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

Output:-

[ 0, 'Red' ]
[ 1, 'Blue' ]
[ 2, 'Green' ]
undefined
[ 0, 'Hindi' ]
[ 1, 'Sanskrit' ]
[ 2, 'English' ]
0 a
1 b
2 c



------->6.	Array.prototype.every():-

The every() method tests whether all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.

Examples:-

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true




Syntax:-

// Arrow function
every((element) => { /* … */ } )
every((element, index) => { /* … */ } )
every((element, index, array) => { /* … */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* … */ })
every(function(element, index) { /* … */ })
every(function(element, index, array){ /* … */ })
every(function(element, index, array) { /* … */ }, thisArg)



-->Parameters:-

callbackFn:-

A function to test for each element. The function is called with the following arguments:

element:- The current element being processed in the array.

index:-	The index of the current element being processed in the array.

array:- The array every was called upon.

thisArg Optional:-A value to use as this when executing callbackFn.

Return value:- true if the callbackFn function returns a truthy value for every array element. Otherwise, false.

Description:-

The every method executes the provided callbackFn function once for each element present in the array until it finds the 
one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. 
Otherwise, if callbackFn returns a truthy value for all elements, every returns true.

Note: Calling this method on an empty array will return true for any condition!


callbackFn is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, 
or which have never been assigned values.

callbackFn is invoked with three arguments: the value of the element, the index of the element, and the Array object being 
traversed.

If a thisArg parameter is provided to every, it will be used as callback this value. Otherwise, the value undefined will 
be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for 
determining the this seen by a function.

every does not mutate the array on which it is called.

The range of elements processed by every is set before the first invocation of callbackFn. Therefore, callbackFn will not run 
on elements that are appended to the array after the call to every begins. If existing elements of the array are changed, 
their value as passed to callbackFn will be the value at the time every visits them. Elements that are deleted are not visited.

every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. 
(It is vacuously true that all elements of the empty set satisfy any given condition.)



Examples:-

1.	Testing size of all array elements:-

The following example tests whether all elements in the array are bigger than 10.

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


2.	Check if one array is a subset of another array:-

The following example tests if all the elements of an array are present in another array.

const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

3.	Using arrow functions:-

Arrow functions provide a shorter syntax for the same test.

[12, 5, 8, 130, 44].every((x) => x >= 10);   // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true



Code:-

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


Output:-
false
true
false
true
false
true






-------->7.	Array.prototype.fill():-

The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index 
(default array.length). It returns the modified array.


Syntax:-

fill(value)
fill(value, start)
fill(value, start, end)


Examples:1:-

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

example:2:-

[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


example:3:- Using fill() to create a matrix of all 1

This example shows how to create a matrix of all 1, like the ones() function of Octave or MATLAB.

const arr = new Array(3);
for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1



===============================================================================================

--------->8.	Array.prototype.filter():-
The filter() method creates a shallow copy for a portion of a given array, filtered down to just the elements from the 
given array that pass the test implemented by the provided function.


Syntax:-

// Arrow function
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* … */ })
filter(function(element, index) { /* … */ })
filter(function(element, index, array){ /* … */ })
filter(function(element, index, array) { /* … */ }, thisArg)

-----------------------------------------------------------------------------------------
Examples:1:-

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


-----------------------------------------------------------------------------------------

Examples:2:-Filtering invalid entries from JSON

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5


-----------------------------------------------------------------------------------------

Examples:3:-Searching in array:

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().includes(query.toLowerCase());
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

--------------------------------------------------------------------------------------------


Examples:4:- Affecting Initial Array (modifying, appending and deleting):

// Modifying each word
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as it’s been popped off 'words' before filter can even get there
// ["spray" ,"limit"]


-------------------------------------------------------------------------------------------

Code:-

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

Output;-

[ 41, 50, 12, 14, 11 ]
[ 41, 20, 12, 11 ]
The prime number:  [ 2, 3, 5, 7, 11, 13 ]




===========================================================================================

------------>9.	Array.prototype.find();-

The find() method returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.


Syntax;-

// Arrow function
find((element) => { /* … */ } )
find((element, index) => { /* … */ } )
find((element, index, array) => { /* … */ } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function(element) { /* … */ })
find(function(element, index) { /* … */ })
find(function(element, index, array){ /* … */ })
find(function(element, index, array) { /* … */ }, thisArg)


------------------------------------------------------------------------------
Examples:1:-

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


-------------------------------------------------------------------

Examples:2:-

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

-----------------------------------------------------------------------

Examples:3:-Using arrow function and destructuring

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find(({ name }) => name === 'cherries');

console.log(result) // { name: 'cherries', quantity: 5 }

-------------------------------------------------------------------------------

Examples:4:-Find a prime number in an array

The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

---------------------------------------------------------------------------------------------------

Examples:5:-

// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find(function(value, index) {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6


----------------------------------------------------------------------------------

Code:-

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


Output:-

{ name: 'Book', quantity: 7 }
{ name: 'Copy', quantity: 5 }
undefined
{ name: 'cherries', quantity: 5 }
{ name: 'apples', quantity: 2 }
undefined
5
Value is; 0 at Index: 0
Value is; 1 at Index: 1
Value is; undefined at Index: 2
Value is; undefined at Index: 3
Value is; undefined at Index: 4
Value is; 9 at Index: 5
Value is; 6 at Index: 6
Deleting array[5] with value:  9
Visited index : 0  with value : 0
Visited index : 1  with value : 1
Visited index : 2  with value : undefined
Visited index : 3  with value : undefined
Visited index : 4  with value : undefined
Visited index : 5  with value : undefined
Visited index : 6  with value : 6



==========================================================================================

--------------->10.	Array.prototype.findIndex():-

The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.


Syntax:-

// Arrow function
findIndex((element) => { /* … */ } )
findIndex((element, index) => { /* … */ } )
findIndex((element, index, array) => { /* … */ } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function(element) { /* … */ })
findIndex(function(element, index) { /* … */ })
findIndex(function(element, index, array){ /* … */ })
findIndex(function(element, index, array) { /* … */ }, thisArg)


-------------------------------------------------------------------------------------

Examples:1:-

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

-------------------------------------------------------------------------------------------

Examples:2:- Find the index of a prime number in an array:

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

--------------------------------------------------------------------------------------------

Examples:3:-Find index using arrow function:-

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

-----------------------------------------------------------------------------------------------------
Code:-

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

console.log(index); // 1
console.log(fruits[index])  // banana


Output:-

3
0
-1
2
1
banana


=======================================================================================================

----------------->11.	Array.prototype.findLastIndex():-

The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.

Syntax
// Arrow function
findLastIndex((element) => { /* … */ } )
findLastIndex((element, index) => { /* … */ } )
findLastIndex((element, index, array) => { /* … */ } )

// Callback function
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)

// Inline callback function
findLastIndex(function(element) { /* … */ })
findLastIndex(function(element, index) { /* … */ })
findLastIndex(function(element, index, array){ /* … */ })
findLastIndex(function(element, index, array) { /* … */ }, thisArg)


Examples:1:-
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 30)

-----------------------------------------------------------------------------------------

Examples:2:-Find the index of the last prime number in an array

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11

--------------------------------------------------------------------------------------------

Code;-

function bigger(elem){
    return elem>15;
}
console.log([12,4,78,5,20,36,4,8].findLastIndex(bigger)); // 5

function lesser(elem){
    return elem<10;
}

console.log([1,4,52,78,1,22,56].findLastIndex(lesser)); // 4

// find last prime number element in the array

function isPrime(num){
    if(num===2)
    return true;

    if(num%2===0 || num<2)
    return false;

    for(let i=3;i<num;i++){
        if(num%i===0)
        return false;
    }
    return true;
}

const index= [24,5,2,14,2,14,16].findLastIndex(isPrime);
console.log(index)

// Arrow function methods

console.log([21,45,6,2,5,8].findLastIndex((elem)=> elem===6));
console.log([21,45,6,2,5,8].findLastIndex((elem)=> elem===22));


Output:-

5
4
4
2
1

===========================================================================================

--------->12.	Array.prototype.flat();-

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Syntax
flat()
flat(depth)

depth Optional:-
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Examples:-

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
--------------------------------------------------------------------------------------------

Alternatives;-

reduce and concat

const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);


--------------------------------------------------------------------------------------------

reduce + concat + isArray + recursivity:-

const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]


-----------------------------------------------------------------------------------------------

Use a stack
// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]


-------------------------------------------------------------------------------------

Examples:-

Flattening nested arrays

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

----------------------------------------------------------
Examples:-

Flattening and array holes

The flat method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]


====================================================================================

--------->13.	Array.prototype.flatMap():-

The flatMap() method returns a new array formed by applying a given callback function to each element of the array, 
and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 
(arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

Syntax
// Arrow function
flatMap((currentValue) => { /* … */ } )
flatMap((currentValue, index) => { /* … */ } )
flatMap((currentValue, index, array) => { /* … */ } )

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function(currentValue) { /* … */ })
flatMap(function(currentValue, index) { /* … */ })
flatMap(function(currentValue, index, array){ /* … */ })
flatMap(function(currentValue, index, array) { /* … */ }, thisArg)

--------------------------------------------------------------------------------------------
Examples:-
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// expected output: Array [1, 2, 3, 4, 5, 6]


--------------------------------------------------------------------------------------------
Examples:-

map() and flatMap()
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

--------------------------------------------------------------------------------------------

const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
--------------------------------------------------------------------------------------------
Examples:-

For adding and removing items during a map():-

flatMap can be used as a way to add and remove items (modify the number of items) during a map. In other words, it allows you 
to map many items to many items (by handling each input item separately), rather than always one-to-one. In this sense, 
it works like the opposite of filter. Return a 1-element array to keep the item, a multiple-element array to add items, 
or a 0-element array to remove the item.

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18]
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
// expected output: [4, 1, 4, 20, 16, 1, 18]

============================================================================================

--------->14.	Array.prototype.forEach():-

The forEach() method executes a provided function once for each array element.


Syntax
// Arrow function
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)



Note: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, 
		the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple for loop

A for...of / for...in loops
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()

Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value 
to determine if further iteration is required.



Note: forEach expects a synchronous function.

forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) 
as forEach callback.

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0




Converting a for loop to forEach;-

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});




Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted 
version of the array.

The following example illustrates an alternative approach, using forEach().

const logArrayElements = (element, index, array) => {
  console.log('a[' + index + '] = ' + element);
};

// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5,, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9


--------------------------------------------------------------------------------------------

Using thisArg
The following (contrived) example updates an objects properties from each entry in the array:

function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16

--------------------------------------------------------------------------------------------

An object copy function:-

const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2 looks like obj1 now


--------------------------------------------------------------------------------------------

Modifying the array during iteration:-

const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']



--------------------------------------------------------------------------------------------

Flatten an array:-

const flatten = (arr) => {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


==============================================================================================================



-------------->15. Array.prototype_ CURD:-

const colors=['red','blue','gree','yellow','black'];
console.log(colors);


// 1. push() method: it add external data in the last of the array and this return new length of array

let newlen=colors.push('White');
console.log(colors);
console.log("new length of colors array: ",newlen);

// push can also add more than one elements

newlen= colors.push('brown','lightblue','grey');
console.log(colors);
console.log("new length of colors array: ",newlen);


// 2. unshift() method: it add external data at the front of the array and this return new length of array

var animals=['dog','cat','horse'];
console.log(animals);

let newlen2=animals.unshift('rat');
console.log(animals);
console.log("new length of animals array: ",newlen2);

newlen2=animals.unshift('cow','goat');
console.log(animals);
console.log("new length of animals array: ",newlen2);


// 3. pop() method:it remove a element from end of array and return deleted element

var number=[10,20,30,40,50,60];
console.log(number);

let deleteEle=number.pop();
console.log(number);
console.log("The deleted element: ",deleteEle);


// 4. shift method: it remove a element from starting of array and return deleted element

let deletefront=number.shift();
console.log(number);
console.log("The deleted element: ",deletefront);



Output:-

[ 'red', 'blue', 'gree', 'yellow', 'black' ]
[ 'red', 'blue', 'gree', 'yellow', 'black', 'White' ]
new length of colors array:  6
[
  'red',   'blue',
  'gree',  'yellow',
  'black', 'White',
  'brown', 'lightblue',
  'grey'
]
new length of colors array:  9
[ 'dog', 'cat', 'horse' ]
[ 'rat', 'dog', 'cat', 'horse' ]
new length of animals array:  4
[ 'cow', 'goat', 'rat', 'dog', 'cat', 'horse' ]
new length of animals array:  6
[ 10, 20, 30, 40, 50, 60 ]
[ 10, 20, 30, 40, 50 ]
The deleted element:  60
[ 20, 30, 40, 50 ]
The deleted element:  10



=============================================================================================================


----------------> 16. Array.prototype.splice():-

Code:-

var months=['jan','march','april','june','august'];

/* Array.splice(index, deleted count,adding element): this method is used for adding, deleteing 
any elements at any position in an Array. */

// 1. add 'Dec' in the last of Array

// months.splice(5,0,'Dec');
months.splice(months.length,0,'Dec');
console.log(months);

// add at any position 
months.splice(1,0,'feb');
console.log(months);


//2. delete an element
var deleteEle=months.splice(2,1,);    // it will delete 1 element at index 2
console.log(months);
console.log(deleteEle);             // it will print deleted element:[march]

var deleteEles=months.splice(2,2);    // it will delete 2 element from index 2 
console.log(months);
console.log(deleteEles);            // it will print 2 deleted elemets:['april','june']

// 3. delete element and add or another
var deleteEle= months.splice(2,1,'march','april','may');
console.log(months);
console.log(deleteEle);             // ['august']


// 4. update the element:march->March

// months.splice(2,1,'March');
// console.log(months);

// if don't know the index of element then 

const index = months.indexOf('nov');
if(index!= -1){
    months.splice(index,1,'March');
    console.log(months);
}
else{
    console.log("No such data is found");
}

// delete all elements from index 3

const delEle= months.splice(3,Infinity);
console.log(months);
console.log("deleted eleements: ",delEle);

Output:-

[ 'jan', 'march', 'april', 'june', 'august', 'Dec' ]
[
  'jan',   'feb',
  'march', 'april',
  'june',  'august',
  'Dec'
]
[ 'jan', 'feb', 'april', 'june', 'august', 'Dec' ]
[ 'march' ]
[ 'jan', 'feb', 'august', 'Dec' ]
[ 'april', 'june' ]
[ 'jan', 'feb', 'march', 'april', 'may', 'Dec' ]
[ 'august' ]
No such data is found
[ 'jan', 'feb', 'march' ]
deleted eleements:  [ 'april', 'may', 'Dec' ]




==========================================================================================================

------------->17. Array.prototype.map():-

/* Array.map(): map method create a new array populated with the result of given callback 
function for every element of an array and it does not manipulate original array */


Syntax:-

// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)





Parameters:-

callbackFn:-
Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

The function is called with the following arguments:

element:-
The current element being processed in the array.

index:-
The index of the current element being processed in the array.

array:-
The array map was called upon.

thisArg Optional:-
Value to use as this when executing callbackFn.

Return value:-
A new array with each element being the result of the callback function.



When not to use map():-

Since map builds a new array, using it when you are not using the returned array is an anti-pattern; 
use forEach or for...of instead.


You should not be using map if:

you are not using the array it returns; and/or
you are not returning a value from the callback.

--------------------------------------------------------------------------------------------

Code:-
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


--------------------------------------------------------------------------------------------

----> difference between forEach and map methods:-

 1. if we use forEach method than it return undefined not any array like map method

 2. Ability to changing other methods:- the second difference between forEach and map methods is map method is chanable
 	means we can add others methods like sort(), filter(),reduce() and so on after performing map() method. 

 	this is not allow in forEach method.

Code:-

let newArray3 = array.map((curEle, index, arr) => {
    return `the element ${curEle} is at index: ${index} from array: ${arr}`;
})

console.log("array expose: ",newArray3);



 newArray3 = array.forEach((curEle, index, arr) => {
    return `the element ${curEle} is at index: ${index} from array: ${arr}`;
})

console.log(newArray3);


Output:-

array expose:  [
  'the element 1 is at index: 0 from array: 1,4,9,16,25',
  'the element 4 is at index: 1 from array: 1,4,9,16,25',
  'the element 9 is at index: 2 from array: 1,4,9,16,25',
  'the element 16 is at index: 3 from array: 1,4,9,16,25',
  'the element 25 is at index: 4 from array: 1,4,9,16,25'
]

undefined

// 2.

const arr2 = [4,5,1,5,8,3];
let newarr2= arr2.map( x => x**2);
console.log("squre of arrray: ",newarr2);

newarr2= arr2.map( x => x**2).sort((a,b) => a-b);
console.log("squre of arrray in sorted form: ",newarr2);


Output:-

squre of arrray:  [ 16, 25, 1, 25, 64, 9 ]
squre of arrray in sorted form:  [ 1, 9, 16, 25, 25, 64 ]

--------------------------------------------------------------------------------------------

// multiply by each method with 3 and return those element greater than 15

const num = [2,5,14,20,50,7];

let ans = num.map(x => x*3);
console.log(ans);

// element greater than 15 in ner array
ans = num.map(x => x*3).filter((num) => {
    return num>15;
})
console.log(ans);

// // element greater than 15 in ner array and return in sorted form

ans = num.map(x => x*3).filter((num) => {
    return num>15;
}).sort((a,b) => a-b);
console.log(ans);


Output:-

[ 6, 15, 42, 60, 150, 21 ]
[ 42, 60, 150, 21 ]
[ 21, 42, 60, 150 ]



=====================================================================================================================
------------> Array.prototype.reduce():-

The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function s accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value 
may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the 
next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:


Syntax:-

// Arrow function
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)


Return value:-

The value that results from running the "reducer" callback function to completion over the entire array.


Edge cases:-

If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided 
but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting 
at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 
and 0, as shown in the following example:


--------------------------------------------------------------------------------------------


Code:-
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


Output:-
27
177
80.2 %


--------------------------------------------------------------------------------------------

// 2D----> 1D

let zone = [
            ['zone_1','zone_1'],
            ['zone_1','zone_1'],
            ['zone_1','zone_1'],
            ['zone_1','zone_1']
        ];

let flatarr = zone.reduce((acc, ele)=> {
    return acc.concat(ele);
})

console.log(flatarr);

Output:-

[
  'zone_1', 'zone_1',
  'zone_1', 'zone_1',
  'zone_1', 'zone_1',
  'zone_1', 'zone_1'
]


--------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------




--------------------------------------------------------------------------------------------
