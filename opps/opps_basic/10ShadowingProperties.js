// What happens if you define a property in an object, when a property with the same name is defined in the object's prototype?

const myDate = new Date(1995, 11, 17);  // object

console.log(myDate.getYear()); // 95  // here getYear():protoype method in-built

myDate.getYear = function() {           // we are creating a method with same name
  console.log('something else!')
};

myDate.getYear(); // 'something else!


// This should be predictable, given the description of the prototype chain. When we call getYear() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getYear() to myDate, then the version in myDate is called.

// This is called "shadowing" the property.