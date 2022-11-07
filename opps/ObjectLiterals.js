// simple literal form
let bioData = {
    myName: "Deepak Kumar",
    myAge: 25
}

console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`);


// This example creates an empty JavaScript object, and then adds 4 properties:


const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


console.log(person.firstName,person.lastName); //John Doe
console.log(person)





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


// object under an object Nested Objects
// Values in an object can be another object:


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