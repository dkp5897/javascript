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

//To add a new property to a constructor, you must add it to the constructor function:
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "English";
//   }




//Adding a Method to a Constructor:-

//You cannot add a new method to an object constructor the same way you add a new method to an existing object.

// Adding methods to an object constructor must be done inside the constructor function:

// Example
// function Person(firstName, lastName, age, eyeColor) {
//   this.firstName = firstName; 
//   this.lastName = lastName;
//   this.age = age;
//   this.eyeColor = eyeColor;
//   this.changeName = function (name) {
//     this.lastName = name;
//   };
// }