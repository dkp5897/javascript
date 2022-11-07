// class Student{
//     constructor(){
//         // define property name
//         let name;
//         console.log("constructor function");
//     }
//     hello(){
//         console.log("Hello "+this.name);
//     }
// }

// let obj = new Student();    //constructor function

// // accessing and assinging value of class property
// obj.name="Deepak";

// // calling hello function
// obj.hello();    //Hello Deepak


// new way to set property 

class Student{
    constructor(name,age){
        // define property name
        this.studentName=name;
        this.studentAge=age;
        console.log("constructor function");
    }
    hello(){
        console.log("Hello "+this.studentName+" your age is "+this.studentAge);
    }
}

// now we can assiging a vanlue to propety by passing an argument at the time of object creation
let obj = new Student("Deepak Kumar", 25);    //constructor function

// calling hello function
obj.hello();   //Hello Deepak Kumar your age is 25

let a=new Student("Pradeep Kumar",23)
let b=new Student("Aditya Kumar",10)

a.hello()   //Hello Pradeep Kumar your age is 23
b.hello()   //Hello Aditya Kumar your age is 10