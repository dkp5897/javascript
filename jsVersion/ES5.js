										

										-------------------> JavaScript ES5 <----------------------



ECMAScript 2009, also known as ES5, was the first major revision to JavaScript.

ES5 Features:-

"use strict"
String[number] access
Multiline strings
String.trim()
Array.isArray()
Array forEach()
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array indexOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Date toISOString()
Date toJSON()
Property getters and setters
Reserved words as property names
Object methods
Object defineProperty()
Function bind()
Trailing commas


Browser Support
ES5 is fully supported in all modern browsers:



The "use strict" Directive:-

"use strict" defines that the JavaScript code should be executed in "strict mode".
With strict mode you can, for example, not use undeclared variables.
You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
"use strict" is just a string expression. Old browsers will not throw an error if they do not understand it.


Property Access on Strings:-

The charAt() method returns the character at a specified index (position) in a string:



Strings Over Multiple Lines:-

ES5 allows string literals over multiple lines if escaped with a backslash:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>
You can break a code line within a text string with a backslash.
</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
</script>

</body>
</html>


Output:-

JavaScript Strings
You can break a code line within a text string with a backslash.

Hello Dolly!



A safer way to break up a string literal, is to use string addition:

Example
"Hello " +
"Dolly!";



Reserved Words as Property Names:-

ES5 allows reserved words as property names:

Object Example
var obj = {name: "John", new: "yes"}


String trim():-

The trim() method removes whitespace from both sides of a string.

Example
var str = "       Hello World!        ";
alert(str.trim());//Hello World




Array.isArray():-

The isArray() method checks whether an object is an array.

Example
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}



Array forEach():-

The forEach() method calls a function once for each array element.

Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}


Array map():-

This example multiplies each array value by 2:

Example
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}



Array filter():-

This example creates a new array from elements with a value larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}




Array reduce():-
This example finds the sum of all numbers in an array:

Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}



Array reduceRight():-

This example also finds the sum of all numbers in an array:

Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}



Array every():-

This example checks if all values are over 18:

Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}



Array some()
This example checks if some values are over 18:

Example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}



JSON.parse():-

A common use of JSON is to receive data from a web server.

Imagine you received this text string from a web server:

'{"name":"John", "age":30, "city":"New York"}'
The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');




JSON.stringify():-

A common use of JSON is to send data to a web server.

When sending data to a web server, the data has to be a string.

Imagine we have this object in JavaScript:

var obj = {name:"John", age:30, city:"New York"};
Use the JavaScript function JSON.stringify() to convert it into a string.

var myJSON = JSON.stringify(obj);
The result will be a string following the JSON notation.

myJSON is now a string, and ready to be sent to a server:


Example
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;



Date.now()
Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

Example
var timInMSs = Date.now();

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Date.now()</h2>

// <p>Date.now() is new in ECMAScript 5 (2009):</p>

// <p id="demo1"></p>
// <p id="demo2"></p>

// <script>
// document.getElementById("demo1").innerHTML = Date.now();
// var d = new Date();
// document.getElementById("demo2").innerHTML = d.getTime();
// </script>
// </body>
// </html>

Output:-
JavaScript Date.now()
Date.now() is new in ECMAScript 5 (2009):

1661596565279

1661596565279


Date.now() returns the same as getTime() performed on a Date object.

Learn more in JS Dates.

Date toISOString()
The toISOString() method converts a Date object to a string, using the ISO standard format:

Example
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();




Date toJSON():-

toJSON() converts a Date object into a string, formatted as a JSON date.

JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:


// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Date.toJSON()</h2>

// <p id="demo"></p>

// <script>
// d = new Date();
// document.getElementById("demo").innerHTML = d.toJSON();
// </script>

// </body>
// </html>


Output:-

JavaScript Date.toJSON()
2022-08-27T10:38:56.871Z





Property Getters and Setters:-

ES5 lets you define object methods with a syntax that looks like getting or setting a property.

This example creates a getter for a property called fullName:


// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Getters and Setters</h2>

// <p>Getters and setters allow you to get and set properties via methods.</p>

// <p>This example creates a getter for a property called fullName.</p>

// <p id="demo"></p>

// <script>
// // Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// // Display data from the object using a getter:
// document.getElementById("demo").innerHTML = person.fullName;
// </script>

// </body>
// </html>


Output:-

JavaScript Getters and Setters
Getters and setters allow you to get and set properties via methods.

This example creates a getter for a property called fullName.

John Doe




This example creates a setter and a getter for the language property:


// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Getters and Setters</h2>

// <p>Getters and setters allow you to get and set properties via methods.</p>

// <p>This example creates a setter and a getter for the language property.</p>

// <p id="demo"></p>

// <script>
// // Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "NO",
//   get lang() {
//     return this.language;
//   },
//   set lang(value) {
//     this.language = value;
//   }
// };
// // Set an object property using a setter:
// person.lang = "en";
// // Display data from the object using a getter:
// document.getElementById("demo").innerHTML = person.lang;
// </script>

// </body>
// </html>



Output:-

JavaScript Getters and Setters
Getters and setters allow you to get and set properties via methods.

This example creates a setter and a getter for the language property.

en



This example uses a setter to secure upper case updates of language:

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Getters and Setters</h2>

// <p>Getters and setters allow you to get and set properties via methods.</p>

// <p>This example has a modified setter to secure upper case uppdates of language.</p>

// <p id="demo"></p>

// <script>
// // Create an object:
// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   language : "",
//   set lang(value) {
//      this.language = value.toUpperCase();
//   }
// };
// // Set an object property using a setter:
// person.lang = "en";
// // Display data from the object:
// document.getElementById("demo").innerHTML = person.language;
// </script>

// </body>
// </html>


Output:-

JavaScript Getters and Setters
Getters and setters allow you to get and set properties via methods.

This example has a modified setter to secure upper case uppdates of language.

EN



Object.defineProperty():-

Object.defineProperty() is a new Object method in ES5.

It lets you define an object property and/or change a property is value and/or metadata.


const person = {
    name: "Deepak Kumar",
    age:    25,
    language: "No"
};

Object.defineProperty(person,"language", {
    value: 'Hindi',
    writable : true,
    enumerable : true,                              //false=> to hide the propety,
    configurable : true
})

let boiData = "";

for(let element in person){
    boiData+=person[element]+" ";
}

console.log(boiData); //Deepak Kumar 25 Hindi 



Next example is the same code, except it hides the language property from enumeration:




E5 Object Methods:-

ES5 added a lot of new Object Methods to JavaScript:



Function Bind():-

With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

const person = {
    firstName:"Deepak",
    lastName: "Kumar",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Pradeep",
    lastName: "Kumar",
  }

  let fullName = person.fullName.bind(member);

  console.log(fullName());      //Pradeep Kumar





Trailing Commas:-

ES5 allows trailing commas in object and array definitions:

Object Example
person = {
  firstName: "John",
  lastName: " Doe",
  age: 46,
}
Array Example
points = [
  1,
  5,
  10,
  25,
  40,
  100,
];


WARNING !!!

JSON does not allow trailing commas.