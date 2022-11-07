// This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the new keyword. When you call a constructor, it will:

// create a new object
// bind this to the new object, so you can refer to this in your constructor code
// run the code in the constructor
// return the new object.


// creating a normal function
function person (name,age){
    this.name=name;
    this.age=age
    this.Introduction=function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}

// making objects
// To call Person() as a constructor, we use new:

const obj1 = new person("Deepak Kumar",25);
const obj2 = new person("Pradeep Kumar",23);

console.log(obj1.name); //Deepak Kumar
obj1.Introduction();    //my name is Deepak Kumar and my age is 25

console.log(obj2.name); //Pradeep Kumar
obj2.Introduction();    //my name is Pradeep Kumar and my age is 23

obj1.nationality = 'Indian';
console.log(obj1);
console.log(obj2);
