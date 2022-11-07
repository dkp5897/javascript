const person = new Object();
person.firstName="Deepak";
person.lastName="Kumar";
person.age=25;
person.eyeColor="blue";

console.log(`Name: ${person.firstName} ${person.lastName}, age: ${person.age} and eye color is ${person.eyeColor}`);
//Name: Deepak Kumar, age: 25 and eye color is blue


const x = person;  // Will not create a copy of person.

console.log(x.firstName,x.age); //Deepak 25


