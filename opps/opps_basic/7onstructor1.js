// Using object literals is fine when you only need to create one object

// We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

// The first version of this is just a function:

function createPerson(name){
    const obj = {};
    obj.name=name;
    obj.Introduction=function(){
        console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}

// create many object

const dk=createPerson("Deepak")
console.log(dk.name); //Deepak
dk.Introduction();  //Hi! I'm Deepak.

const pk = createPerson("Pradeep Kumar")
pk.Introduction()       //Hi! I'm Pradeep Kumar.
console.log(pk.name);       //Pradeep Kumar