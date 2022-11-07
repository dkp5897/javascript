						


						---------------->  Object Oriented Programming in JavaScript  <------------------------

"In JavaScript, objects are king. If you understand objects, you understand JavaScript."


In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

All JavaScript values, except primitives, are objects.



JavaScript Primitives:-

A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

1.    string
2.    number
3.    boolean
4.    null
5.    undefined
6.    symbol
7.    bigint

Immutable:-

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.




-------->Objects are Variables:-


JavaScript variables can contain single values:

Example
let person = "John Doe";


JavaScript variables can also contain many values.

Objects are variables too. But objects can contain many values.

Object values are written as name : value pairs (name and value separated by a colon).


Example:-

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};



A JavaScript object is a collection of named values

It is a common practice to declare objects with the const keyword.

Example
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};




Object Properties:-

The named values, in JavaScript objects, are called properties.

Property    Value

firstName   John
lastName    Doe
age         50
eyeColor    blue


Object Methods:-

Methods are actions that can be performed on objects.

Object properties can be both primitive values, other objects, and functions.

An object method is an object property containing a function definition.

Property    Value

firstName   John
lastName    Doe
age         50
eyeColor    blue

fullName    function() {return this.firstName + " " + this.lastName;}

JavaScript objects are containers for named values, called properties and methods.


Creating a JavaScript Object:-

With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

(1)    Create a single object, using an object literal.
(2)    Create a single object, with the keyword new.
(3)    Define an object constructor, and then create objects of the constructed type.
(4)    Create an object using Object.create().

There are certain features or mechanisms which makes a Language Object-Oriented like: 

1.	Object
2.	Classes
3.	Encapsulation
4.	Inheritance



1. Object– An Object is a unique entity that contains properties and methods. For example “car” is a real life Object, which has 
	some characteristics like color, type, model, horsepower and performs certain actions like drive. The characteristics of 
	an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of 
	a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 


Note: A Method in javascript is a property of an object whose value is a function. 

Object can be created in two ways in JavaScript: 



(1)	Using an Object Literal :- Object literal is a simple key: value pair data structure

	stroring variables and function togather in one container


Code:- const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
 

 or

// simple literal form
let bioData = {
    myName: "Deepak Kumar",
    myAge: 25
}

console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`);


This example creates an empty JavaScript object, and then adds 4 properties:

Example
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



// adding a function in Object

// let employee= {
//     Name : "Rajan Singh",
//     Sailary : 45000,
//     getData : function (){
//         console.log(`Employee'Name is ${employee.Name} and his sailary is ${employee.Sailary}`);
//     }
// }

// employee.getData(); // give employee details


// no need to write function 


let employee= {
    Name : "Rajan Singh",
    Sailary : 45000,
    getData  (){
        console.log(`Employee'Name is ${employee.Name} and his sailary is ${employee.Sailary}`);
    }
}

//employee.getData(); // give employee details


// object under an object


let employees= {
    important : {
        Name:"Sooraj patel",
        Sailary: 55000
    },
    Name : "Rajan Singh",
    Sailary : 45000,
    getData  (){
        console.log(`Employee'Name is ${employees.Name} and his sailary is ${employees.Sailary}`);
    },
    getImportantData (){
        console.log(`Important employee'Name is ${employees.important.Name} and his sailary is ${employees.important.Sailary}`);
    }
}

employees.getData()         //Employee'Name is Rajan Singh and his sailary is 45000
employees.getImportantData() //Important employee'Name is Sooraj patel and his sailary is 55000



2.  using new keyword:-

The following example create a new JavaScript object using new Object(), and then adds 4 properties:

Code:-

const person = new Object();
person.firstName="Deepak";
person.lastName="Kumar";
person.age=25;
person.eyeColor="blue";

console.log(`Name: ${person.firstName} ${person.lastName}, age: ${person.age} and eye color is ${person.eyeColor}`);
//Name: Deepak Kumar, age: 25 and eye color is blue



The examples above do exactly the same.

But there is no need to use new Object().

For readability, simplicity and execution speed, use the object literal method.


JavaScript Objects are Mutable:-

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

const x = person;  // Will not create a copy of person.

The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.



console.log(x.firstName,x.age); //Deepak 25



JavaScript Object Properties:-

Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.


Accessing JavaScript Properties:-

The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]

Example 1
person.firstname + " is " + person.age + " years old.";


Example 2
person["firstname"] + " is " + person["age"] + " years old.";




const person = new Object();
person.firstName="Deepak";
person.lastName="Kumar";
person.age=25;
person.eyeColor="blue";

console.log(`Name: ${person.firstName} ${person.lastName}, age: ${person.age} and eye color is ${person.eyeColor}`);
//Name: Deepak Kumar, age: 25 and eye color is blue


const x = person;  // Will not create a copy of person.

console.log(x.firstName,x.age); //Deepak 25


// looping for..in loop in object to access all the properties of an objext

let ans="";
for (let x in person) {
    ans += person[x]+" ";
  }
  console.log(ans); //Deepak Kumar 25 blue


//Adding New Properties

let ans1=""
person.nationality="Indian";

for(let x in person){
    ans1+=person[x]+" ";
}
console.log(ans1)        //Deepak Kumar 25 blue Indian


//Deleting Properties:-

delete person.eyeColor;
// or delete person["age"];

let ans2="";
for(let a in person){
    ans2+=person[a]+" ";
}

console.log(ans2);      //Deepak Kumar 25 Indian


The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.


----> Nested Array Objects:-

// Values in objects can be arrays, and values in arrays can be objects:

const myObj = {
    name : "Deepak Kumar",
    age  : 25,
    cars : [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

// access properties
let carName=" "
for(let elements in myObj.cars){
    carName+=myObj.cars[elements].name+" ";
}
console.log(carName);       //  Ford BMW Fiat 

// access cars model
let carModel="";
for(let i in myObj.cars){
    for(let j in myObj.cars[i].models){
        carModel+=myObj.cars[i].models[j]+" ";
    }
}
console.log(carModel);  //Fiesta Focus Mustang 320 X3 X5 500 Panda 

//assecc all properties

let car="";
let model=""

for(let i in myObj.cars){
    car+=myObj.cars[i].name+" ";
    for(let j in myObj.cars[i].models){
        model+=myObj.cars[i].models[j]+' ';
    }
}

console.log(car);       //Ford BMW Fiat
console.log(model);     //Fiesta Focus Mustang 320 X3 X5 500 Panda








 



This Keyword:-

A function is this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences 
between strict mode and non-strict mode.

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

a. 	In an object method, this refers to the object.

b.	Alone, this refers to the global object.

c.	In a function, this refers to the global object.

d.	In a function, in strict mode, this is undefined.

e.	In an event, this refers to the element that received the event.

f.	Methods like call(), apply(), and bind() can refer this to any object.


Note :- this is not a variable. It is a keyword. You cannot change the value of this.


this in a Method:-

When used in an object method, this refers to the object.
In the example on top of this page, this refers to the person object.
Because the fullName method is a method of the person object.

fullName : function() {
  return this.firstName + " " + this.lastName;
}


this Alone:-

When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]:

 In strict mode, when used alone, this also refers to the global object:

 "use strict";
let x = this;



this in a Function (Default):-

In a function, the global object is the default binding for this.
In a browser window the global object is [object Window]:

Example
function myFunction() {
  return this;
}



this in a Function (Strict):-

JavaScript strict mode does not allow default binding.
So, when used in a function, in strict mode, this is undefined.

Example
"use strict";
function myFunction() {
  return this;
}




this in Event Handlers:-

In HTML event handlers, this refers to the HTML element that received the event:

Example
// <button onclick="this.style.display='none'">
//   Click to Remove Me!
// </button>



Object Method Binding:-

In these examples, this is the person object:

Example
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};






------------------->JavaScript Display Objects:-

Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()



---->The properties of an object can be displayed as a string:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>Display object properties:</p>

<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;
</script>

</body>
</html>



------------->The properties of an object can be collected in a loop:

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>Display object properties:</p>

<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>






------------>Using Object.values()
Any JavaScript object can be converted to an array using Object.values():

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);



myArray is now a JavaScript array, ready to be displayed:

Example
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;



-------------------->Using JSON.stringify():-

Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);

myString is now a JavaScript string, ready to be displayed:

Example
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;   //{"name":"John","age":50,"city":"New York"}



Stringify Dates:-

JSON.stringify converts dates into strings:

Example
const person = {
  name: "John",
  today: new Date()
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;



Stringify Functions:-

JSON.stringify will not stringify functions:

Example
const person = {
  name: "John",
  age: function () {return 30;}
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;



This can be "fixed" if you convert the functions into strings before stringifying.

Example
const person = {
  name: "John",
  age: function () {return 30;}
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;



Stringify Arrays:-

It is also possible to stringify JavaScript arrays:

Example
const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;




--------------------->JavaScript Accessors (Getters and Setters):-

ECMAScript 5 (ES5 2009) introduced Getter and Setters.

Getters and setters allow you to define Object Accessors (Computed Properties).

Getters:-

const person = {
    fullName : "deepak Kumar",
    age:25,
    Address:"Chandauli",

    get data(){
        return person.fullName ;
        
    }
}
// Display data from the object using a getter:
console.log(person.data);

Setters:-

const person = {
    fullName : "deepak Kumar",
    age:25,
    Address:"Chandauli",

    set data(sailary){
        return this.sailary=sailary ;
        
    }
}
let myString = JSON.stringify(person)
console.log(myString);//{"fullName":"deepak Kumar","age":25,"Address":"Chandauli"}

person.data=50000;
myString=JSON.stringify(person)
console.log(myString);

//{"fullName":"deepak Kumar","age":25,"Address":"Chandauli","sailary":50000}


Why Using Getters and Setters?

It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes




--------------------->JavaScript Object Constructors:-

Example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


Notes:-
It is considered good practice to name constructor functions with an upper-case first letter.

About this:-
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the 
new object when a new object is created.



Object Types (Blueprints) (Classes):-

The examples from the previous chapters are limited. They only create single objects.

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

In the example above, function Person() is an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");




What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable. It is a keyword. You cannot change the value of this.




function person(first,last,age,sailary){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.sailary=sailary;
}

// mw can add many objects of same type

const myMother = new person("Urmila","Devi",46,50000);
const myFather = new person("Ramjanam","Prajapati",50,60000); 

//JSON: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

let mother= JSON.stringify(myMother);
let father= JSON.stringify(myFather);

// console.log(`fullName: ${myMother.firstName}`);

console.log(mother);    //{"firstName":"Urmila","lastName":"Devi","age":46,"sailary":50000}
console.log(father);    //{"firstName":"Ramjanam","lastName":"Prajapati","age":50,"sailary":60000}

console.log(mother,father);

//{"firstName":"Urmila","lastName":"Devi","age":46,"sailary":50000} {"firstName":"Ramjanam","lastName":"Prajapati","age":50,"sailary":60000}



// adding a propeties

myFather.nationality = "Indian";
console.log(`my father nationality: ${myFather.nationality}`);  //my father nationality: Indian


// adding a function

myMother.name = function(){
    return this.firstName+ " "+this.lastName;
}

console.log(myMother.name());   //Urmila Devi



// Adding a Property to a Constructor

// You cannot add a new property to an object constructor the same way you add a new property to an existing object:

person.nationality= "Indian";

console.log(myMother.nationality);  //undefined

To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }




// Adding a Method to a Constructor:-

// You cannot add a new method to an object constructor the same way you add a new method to an existing object.

// Adding methods to an object constructor must be done inside the constructor function:

Example
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}





Built-in JavaScript Constructors:-

JavaScript has built-in constructors for native objects:

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object



The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

Did You Know?

As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no 
reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().


Example
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function




String Objects:-

Normally, strings are created as primitives: firstName = "John"

But strings can also be created as objects using the new keyword:
firstName = new String("John")

Learn why strings should not be created as object in the chapter JS Strings.



Number Objects:-

Normally, numbers are created as primitives: x = 30

But numbers can also be created as objects using the new keyword:
x = new Number(30)

Learn why numbers should not be created as object in the chapter JS Numbers.



Boolean Objects:-

Normally, booleans are created as primitives: x = false

But booleans can also be created as objects using the new keyword:
x = new Boolean(false)

Learn why booleans should not be created as object in the chapter JS Booleans.









Working with JSON:-

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting 
data in web applications


No, really, what is JSON?:-

JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it 
closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments 
feature the ability to read (parse) and generate JSON.

JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript 
object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods 
available for converting between the two.

Note: Converting a string to a native object is called deserialization, while converting a native object to a string so it can be 
transmitted across the network is called serialization.


A JSON string can be stored in its own file, which is basically just a text file with an extension of .json, and a MIME type 
of application/json.


Code:-

// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications

// JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data.

// Note: Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.

// JSON structure:-

const superHeroes = {
    "squadName" : "Super hero squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
      {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log(superHeroes.homeTown);        //Metro City
  console.log(superHeroes['active']);       //true
  console.log(superHeroes['secretBase']);       //Super tower

  console.log(superHeroes['members'][1]['powers'][2] ); //Superhuman reflexes

// First we have the variable name — superHeroes.
// Inside that we want to access the members property, so we use ["members"].
// members contains an array populated by objects. We want to access the second object inside the array, so we use [1].
// Inside this object, we want to access the powers property, so we use ["powers"].
// Inside the powers property is an array containing the selected hero's superpowers. We want the third one, so we use [2].


Other notes:-

(1)    JSON is purely a string with a specified data format — it contains only properties, no methods.

(2)    JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than 
       surrounding the entire JSON string.

(3)    Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to 
       validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as 
       the generator program is working correctly). You can validate JSON using an application like JSONLint.

(4)    JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. 
       So for example, a single string or number would be valid JSON.

(5)    Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.




Active learning: Working through a JSON example:-

// <!DOCTYPE html>
// <html lang="en-us">
//   <head>
//     <meta charset="utf-8" />

//     <title>Our superheroes</title>

//     <link
//       href="https://fonts.googleapis.com/css?family=Faster+One"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" href="17WorkingWithJSON.css" />
//   </head>

//   <body>
//     <header></header>

//     <section></section>

//     <script>
//       async function populate() {
//         const requestURL =
//           "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//         const request = new Request(requestURL);

//         const response = await fetch(request);
//         const superHeroes = await response.json();

//         populateHeader(superHeroes);
//         populateHeroes(superHeroes);
//       }

//       function populateHeader(obj) {
//         const header = document.querySelector("header");
//         const myH1 = document.createElement("h1");
//         myH1.textContent = obj.squadName;
//         header.appendChild(myH1);

//         const myPara = document.createElement("p");
//         myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
//         header.appendChild(myPara);
//       }

//       function populateHeroes(obj) {
//         const section = document.querySelector("section");
//         const heroes = obj.members;

//         for (const hero of heroes) {
//           const myArticle = document.createElement("article");
//           const myH2 = document.createElement("h2");
//           const myPara1 = document.createElement("p");
//           const myPara2 = document.createElement("p");
//           const myPara3 = document.createElement("p");
//           const myList = document.createElement("ul");

//           myH2.textContent = hero.name;
//           myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
//           myPara2.textContent = `Age: ${hero.age}`;
//           myPara3.textContent = "Superpowers:";

//           const superPowers = hero.powers;
//           for (const power of superPowers) {
//             const listItem = document.createElement("li");
//             listItem.textContent = power;
//             myList.appendChild(listItem);
//           }

//           myArticle.appendChild(myH2);
//           myArticle.appendChild(myPara1);
//           myArticle.appendChild(myPara2);
//           myArticle.appendChild(myPara3);
//           myArticle.appendChild(myList);

//           section.appendChild(myArticle);
//         }
//       }
//       populate();

//     </script>
//   </body>
// </html>


css:---

/* || general styles */

html {
    font-family: 'helvetica neue', helvetica, arial, sans-serif;
  }
  
  body {
    width: 800px;
    margin: 0 auto;
  }
  
  h1, h2 {
    font-family: 'Faster One', cursive;
  }
  
  /* header styles */
  
  h1 {
    font-size: 4rem;
    text-align: center;
  }
  
  header p {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
  
  /* section styles */
  
  section article {
    width: 33%;
    float: left;
  }
  
  section p {
    margin: 5px 0;
  }
  
  section ul {
    margin-top: 0;
  }
  
  h2 {
    font-size: 2.5rem;
    letter-spacing: -5px;
    margin-bottom: 10px;
  }



  Converting between objects and text;-


The above example was simple in terms of accessing the JavaScript object, because we converted the network response directly 
into a JavaScript object using response.json().

But sometimes we are n0t so lucky — sometimes we receive a raw JSON string, and we need to convert it to an object ourselves. 
And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending. 
Luckily, these two problems are so common in web development that a built-in JSON object is available in browsers, which 
contains the following two methods:

parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.
You can see the first one in action in our heroes-finished-json-parse.html example (see the source code) — this does exactly the 
same thing as the example we built up earlier, except that:

we retrieve the response as text rather than JSON, by calling the text() method of the response
we then use parse() to convert the text to a JavaScript object.
The key snippet of code is here:


async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);

}


As you might guess, stringify() works the opposite way. Try entering the following lines into your browsers JavaScript console 
one by one to see it in action:

let myObj = { name: "Chris", age: 38 };
myObj
let myString = JSON.stringify(myObj);
myString


Here we are creating a JavaScript object, then checking what it contains, then converting it to a JSON string using stringify() 
— saving the return value in a new variable — then checking it again.