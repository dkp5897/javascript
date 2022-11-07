// You can declare a class using the class keyword. Here's a class declaration for our Person from the previous article:

class person{
    name;

    constructor(name) {
        this.name=name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

// This declares a class called Person, with:
// a name property.
// a constructor that takes a name parameter that is used to initialize the new object's name property
// an introduceSelf() method that can refer to the object's properties using this.

// Generally, the constructor is written out as part of the class definition, and it usually has the same name as the class itself:

// The name; declaration is optional: you could omit it, and the line this.name = name; in the constructor will create the name property before initializing it. 

// Given the class declaration code above, you can create and use a new Person instance like this:

const dk = new person("Deepak Kumar");
console.log(dk.name);       //Deepak Kumar
dk.introduceSelf()      //Hi! I'm Deepak Kumar

// Note that we call the constructor using the name of the class, Person in this example.

//========================================================================================================

// Omitting constructors:-

// If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you:

class Animal {

    sleep() {
      console.log('zzzzzzz');
    }
  
  }
  
  // creating object by using class name
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'
  