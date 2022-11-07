	
										----------------> Javascript ES6 <-----------------




ECMAScript 2015 was the second major revision to JavaScript.

ECMAScript 2015 is also known as ES6 and ECMAScript 6.

This chapter describes the most important features of ES6.



New Features in ES6:-


The let keyword
The const keyword
Arrow Functions
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules



Browser Support for ES6 (2015):-

Safari 10 and Edge 14 were the first browsers to fully support ES6:


JavaScript let:-

The let keyword allows you to declare a variable with block scope.


JavaScript const:-

The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.


let x= 10;

{
    let x=20;
    const y=7;

    console.log(x,y);   //20 7
}

console.log(x); //10

console.log(y);     //error (undefine y)




Arrow Functions:-

Arrow functions allows a short syntax for writing function expressions.

You don not need the function keyword, the return keyword, and the curly brackets.

function add(a,b){
    return a+b;
}
console.log((add(10,20)));  //30


const sub = (a,b) => {return a-b}
console.log(sub(10,5)); //5

const mul = (a,b) => a*b;
console.log(mul(5,4));  //20


Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always a constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a 
good habit to always keep them:




----->The For/Of Loop:-

The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.


const arr = [10,20,30,45,05];

for (let element of arr){
    console.log(element);
}



------>JavaScript Maps:-
Being able to use an Object as a key is an important Map feature.


// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits);

Output:-

Map(3) {
  { name: 'Apples' } => 500,
  { name: 'Bananas' } => 300,
  { name: 'Oranges' } => 200
}


----->JavaScript Sets:-

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);
console.log(letters.size);

Output:-
Set(3) { 'a', 'b', 'c' }
3




-------->

JavaScript Classes:-

JavaScript Classes are templates for JavaScript Objects.

Use the keyword class to create a class.

Always add a method named constructor():


Syntax
class ClassName {
  constructor() { ... }
}


Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}



The example above creates a class named "Car".

The class has two initial properties: "name" and "year".

A JavaScript class is not an object.

It is a template for JavaScript objects.

class cars {
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const myCar = new cars("ford", 2014);

console.log(myCar); //cars { name: 'ford', year: 2014 }




------->JavaScript Promises:-

A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

"Producing Code" can take some time and "Consuming Code" must wait for the result.

Promise Syntax
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);



// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Promise</h2>

// <p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

// <h1 id="demo"></h1>

// <script>
// const myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function(){ myResolve("I love You !!"); }, 3000);
// });

// myPromise.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });
// </script>

// </body>
// </html>




-------->The Symbol Type:-

A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could 
mix each others values.

Using Symbol() to create a unique identifiers, solves this problem:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now person[id] = 140353
// but person.id is still undefined




Symbols are always unique.

If you create two symbols with the same description they will have different values.
Symbol("id") == Symbol("id") // false




---------->Default Parameter Values:-

ES6 allows function parameters to have default values.

Example
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15




---------->Function Rest Parameter:-

The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function add (...args){
    let sum=0;
    for(let e of args){
        sum+=e;
    }
    return sum;
}

let x= add(14,1,2,17,5,5,5,46,10);
console.log(x); //105




----->String.includes()
The includes() method returns true if a string contains a specified value, otherwise false:

Example
let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true




-------->String.endsWith()
The endsWith() method returns true if a string ends with a specified value, otherwise false:

Example
var text = "John Doe";
text.endsWith("Doe")    // Returns true




Array.from():-

The Array.from() method returns an Array object from any object with a length property or any iterable object.

Example
Create an Array from a String:

Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]




=-===========>Array keys()
The keys() method returns an Array Iterator object with the keys of an array.

Example
Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}





Array find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of ) the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function m
 New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()



The Math.trunc() Method:-

Math.trunc(x) returns the integer part of x:

Example
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4



The Math.sign() Method
Math.sign(x) returns if x is negative, null or positive:

Example
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1




---------------->The Math.cbrt() Method
Math.cbrt(x) returns the cube root of x:

Example
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5




------------->The Math.log2() Method
Math.log2(x) returns the base 2 logarithm of x:

Example
Math.log2(2);    // returns 




===============>The Math.log10() Method
Math.log10(x) returns the base 10 logarithm of x:

Example
Math.log10(10);    // returns 1




---------------->New Number Properties
ES6 added the following properties to the Number object:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER


Example
let x = Number.EPSILON;
Example
let x = Number.MIN_SAFE_INTEGER;

New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()




The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

Example
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false



The isFinite() Method
The global isFinite() method returns false if the argument is Infinity or NaN.

Otherwise it returns true:

Example
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true




The isNaN() Method
The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

Example
isNaN("Hello");       // returns true




Object entries()
Example
Create an Array Iterator, and then iterate over the key/value pairs:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.

Modules
Modules are imported in two differen ways:

Import from named exports
Import named exports from the file person.js:

import { name, age } from "./person.js";

Import from default exports
Import a default export from the file message.js:

import message from "./message.js";

