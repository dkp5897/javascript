// const obj = {
//     name:"Deepak",
//     age:25,
//     intro: function(){
//         return (`I am ${this.name}`);
//     },
//     arr:["apple","banana","orange"],
//     family:{
//         mohter:"Urmila",
//         father:"Ramjanam"
//     }
// }

// console.log(obj)
// console.log(obj.intro());

// obj.age = 30;
// console.log(obj.age)

// function person(name){
//     const obj={}
//     obj.name = name;
//     obj.intro = function(){
//         console.log(`my name is ${this.name}`);
//     }
//     return obj
// }

// function persons (name) {
//     this.name = name;
//     this.into = function(){
//         console.log(`my name is ${this.name}`);
//     }
// }

// const dk = new persons("Deepak");
// console.log(dk)
// dk.into()


// const myDate = new Date()
// console.log(typeof(myDate))
// console.log((myDate))

// console.log(myDate.getFullYear())

// myDate.getFullYear = function(){
//     console.log("somthing else");
// }

// myDate.getFullYear()


const personPrototype = {
    display:function(){
        console.log("Hello Deepak");
    }
}

let myObj = {
    name:"Deepak",
    age:25
}

// myObj = Object.create(personPrototype);

// console.log(myObj.name)
// myObj.display()
// console.log(myObj.__proto__);
// myObj.age = 25
// console.log(myObj.name)

// function person (add){
//     this.add=add
// }

// Object.assign(person.prototype,myObj)

// const obj = new person("dk");
// console.log(obj.add);
// console.log(obj.add);
// console.log(obj.name)


class person {
    name
    constructor(name){
        this.name =name
    }

    intro(){
        console.log(`my name is ${this.name}`);
    }
}

class Student extends person{
    #year
    subject
    constructor(name,year,subject){
        super(name);
        this.#year = year
        this.subject = subject
    }

    intro(){
        console.log(`my name is ${this.name},I am a ${this.#year}th year student and I like to read ${this.subject}`)
    }
    #display(){
        console.log("I am private")
    }
    show(){
        this.#display()
    }
}

const aman = new person("Aman")

aman.intro()

const ajeet = new Student("Ajeet",4,"Electrical");
ajeet.intro()
// console.log(ajeet.year);
ajeet.show()
// ajeet.#display()