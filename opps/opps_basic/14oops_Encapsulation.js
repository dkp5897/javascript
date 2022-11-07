// Objects provide an interface to other code that wants to use them but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects.

// Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.

// supre class(parents class)
class Person{
    name;

    constructor(name){
        this.name=name;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

// Here's a declaration of the Student class that does just that:

class Student extends Person{
    #year;

    constructor(name, year){
        super(name);
        this.#year=year;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
      }

      canStudyArchery() {
        return this.#year > 1;
      }

}

// In this class declaration, #year is a private data property. We can construct a Student object, and it can use #year internally, but if code outside the object tries to access #year the browser throws an error:

const rajan = new Student("Rajan Singh", 2)
rajan.introduceSelf()   //Hi! I'm Rajan Singh, and I'm in year 2.
console.log(rajan.name);        //Rajan Singh
console.log(rajan.canStudyArchery());       //true
// console.log(rajan.#year);   // error


const dk = new Student("Deepak kumar",1);
dk.introduceSelf()                       //Hi! I'm Deepak kumar, and I'm in year 1.
console.log(dk.canStudyArchery());      //false

// Private data properties must be declared in the class declaration, and their names start with #.