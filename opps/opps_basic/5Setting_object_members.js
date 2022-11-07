// you can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like this:

const person = {
    Name: ["Deepak","Kumar"],
    age : 25,
    boi : function (){
        console.log(`My name is ${this.Name[0]} ${this.Name[1]} and my age is ${this.age}`);
    },
    passion : function(){
        console.log(`I am an Electrical Engineer!`);
    }
}

console.log(`Name: ${person.Name[0]} ${person.Name[1]} & Age: ${person.age}`);//Name: Deepak Kumar & Age: 25

//now set (update) the values of any properties
person.Name=['Pradeep', 'Prajapati'];
person.age=23;

console.log(`Name: ${person.Name[0]} ${person.Name[1]} & Age: ${person.age}`);//Name: Pradeep Prajapati & Age: 23

console.log(person['Name']);     //[ 'Pradeep', 'Prajapati' ]
console.log(person['age']);     //23



// creating new properties on object
person['eyes']="blue"
// person.eyes="blue"
person.favColor = function(){
    console.log("my faverate color is Lightblue");
}

// now acces these new properties

console.log(person.eyes);    //blue
person.favColor()           //my faverate color is Lightblue



// adding a properties by using [] and cannot be added by dot(.)

const myName='height'
const myValue='5.5ft'

person.myName=myValue;// undefined
console.log(person.height);         //undefined

person[myName]=myValue;
console.log(person.height);         //5.5ft