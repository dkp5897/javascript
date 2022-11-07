// creating a class

class display{
    // prototype methods
    massage(){
        console.log("Hello everyone!");
    }
    sorry(){
        console.log("Sorry Everyone!");
    }
}
 console.log(typeof(display));   //function

// creating an object in class display
let obj = new display();
console.log(typeof(obj));   //object

// calling function of a class by using object
obj.massage()       //Hello everyone
obj.sorry()         // Sorry Everyone!


//=========================================================================
// construtor in a class

class display1 {
    constructor (){
        console.log("this is construtor function");
    }
}
// creating objecy
let obj1 = new display1();      //this is construtor function

//===================================================================

// static method in a class

class display3{
    static hello(){
        console.log("Hello Deepak");
    }
    static sorry(){
        console.log("Sorry Deepak");
    }
}

// calling massage function without object

display3.sorry();   //Sorry Deepak
display3.hello();   //Hello Deepak