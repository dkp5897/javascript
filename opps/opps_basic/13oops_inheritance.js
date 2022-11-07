
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

//subclass (child class)
// We use the extends keyword to say that this class inherits from another class.
class Professeor extends Person{

    teaches;

    constructor(name,teaches){
        super(name);
        this.teaches=teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
      }

      grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
      }  

}

// The first thing this constructor does is call the superclass constructor using super(), passing up the name parameter. The superclass constructor takes care of setting name. After that the Professor constructor sets the teaches property.

// We've also overridden the introduceSelf() method from the superclass, and added a new method grade(), to grade a paper (our professor isn't very good, and just assigns random grades to papers).

// With this declaration we can now create and use professors:

const amit = new Professeor("Amit Mishra", "Mathematics")
amit.introduceSelf()    //My name is Amit Mishra, and I will be your Mathematics professor.
amit.grade('my-paper')  // any random number: 2
console.log(amit.name); //Amit Mishra

const aman = new Person("Aman Kumar")
aman.introduceSelf()