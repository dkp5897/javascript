const person ={
    name : {
        first:"Deepak",
        last :"Kumar"
    },
    age: 25,
    boi : function (){
        console.log(`My name is ${this.first} ${this.last} and my age is ${this.age}`);
    }
}

console.log(person.name);                   //{ first: 'Deepak', last: 'Kumar' }
console.log(person.name.first);             //Deepak
console.log(person.name.last);             //Kumar
console.log(person.age);                  //25
person.boi();                            //My name is undefined undefined and my age is 25


console.log(person['name']['first']);       //Deepak
console.log(person['name']['last']);        //Kumar
console.log(person['age']);                 //25