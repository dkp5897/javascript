// Object Prototypes: Prototypes are the mechanism by which JavaScript objects inherit features from one another.

const myObject = {
    city: 'Noida',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }

  myObject.greet()
  console.log(myObject);
  

  // open in browser and type myObject : console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// city
// constructor
// greet
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
// toValueOf

console.log(myObject.toString()); //[object Object]


// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

console.log(myObject.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.getPrototypeOf(myObject));//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// This is an object called Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain: