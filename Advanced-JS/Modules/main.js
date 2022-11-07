// importing default function
import  yahoo from "./sourse.js"
yahoo();

// importing anything 
import { animal , user as us,colors, student } from "./sourse.js"

console.log(animal)
document.body.innerHTML=animal;

// user("Deepak")

us("Deepak")
console.log(colors);

// making object of student class
let a = new student("Deepak Kumar");
// calling class function
a.info();
// calling static function of student class
student.age()


//====================================================
//import everything from sourse
// import * as dk from "./sourse.js";

// console.log(dk.animal);
// document.body.innerHTML=dk.animal

// // calling a function
// dk.user("Deepak");

// // importing class

// let a= new dk.student("Deepak Kumar");
// console.log(a.name);
// a.info()
// dk.student.age()