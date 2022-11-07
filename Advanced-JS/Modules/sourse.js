// exporting default function
export default function(){
    console.log("This is default function");
}

let animal = "Dog";
let colors=['red','blue','green']

function user(name){
    console.log(`Hello ${name}`);
}

class student{
    constructor(name){
        this.name=name
        console.log("This is constructor");
    }
    info(){
        console.log(`my name is ${this.name}`);
    } 
    static age(){
        console.log("25");
    }
}

export{animal,user,colors,student}