// create object an give some prperties

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

console.log(person);  // ans is down
// {
//     Name: [ 'Deepak', 'Kumar' ],
//     age: 25,
//     boi: [Function: boi],
//     passion: [Function: passion]
//   }

// accessing the objecj properties with dot(.)
console.log(person.Name);       //[ 'Deepak', 'Kumar' ]
console.log(person.Name[0]);     //Deepak
console.log(person.Name[1]);     //Kumar
console.log(person.age);        //25
person.boi();                   //My name is Deepak Kumar and my age is 25
person.passion();               //I am an Electrical Engineer!


// accessing the objecj properties with square brackets []
console.log(person['Name']);        //[ 'Deepak', 'Kumar' ]
console.log(person['Name'][0]);     //Deepak
console.log(person['Name'][1]);     //Kumar
console.log(person['age']);     //25
// person['boi()']
// person['passin()']