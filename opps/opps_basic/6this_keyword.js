// The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person.

// Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.

const person1 = {
    name: 'Deepak',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  const person2 = {
    name: 'Deepti',
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  person1.introduceSelf();  //Hi! I'm Deepak.
  person2.introduceSelf();  //Hi! I'm Deepti.


//   This isn't hugely useful when you are writing out object literals by hand, but it will be essential when we start using constructors to create more than one object from a single object definition, and that's the subject of the next section.