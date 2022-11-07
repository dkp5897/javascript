// Using a constructor:-

// In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object

// So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:

// an object
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  // constructor
  function Person(name) {
    this.name = name;
  }
  
//   We then put the methods defined in personPrototype onto the Person function's prototype property using Object.assign.
  Object.assign(Person.prototype, personPrototype);
  // or
  // Person.prototype.greet = personPrototype.greet;


//   After this code, objects created using Person() will get Person.prototype as their prototype, which automatically contains the greet method.
const obj = new Person("Deepak")
obj.greet()     //hello, my name is Deepak!



// Own properties:-
// It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor.

// Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static Object.hasOwn() method:

const obj2= new Person("Pradep")
console.log(Object.hasOwn(obj2,'name'));    //true
console.log(Object.hasOwn(obj2,'greet()')); //false