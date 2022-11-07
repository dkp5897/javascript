// There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: Object.create() and constructors.

// Using Object.create:-

// The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.

// create an object with name personPrototype
const personPrototype = {
    greet() {
      console.log('hello!');
    }
  }
  
//   Object.create() to create a new object with personPrototype as its prototype.
  const carl = Object.create(personPrototype);
//   Now we can call greet() on the new object, and the prototype provides its implementation.
  carl.greet();  // hello!
  
  console.log(carl.__proto__)