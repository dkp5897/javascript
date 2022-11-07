// You can have private methods as well as private data properties. Just like private data properties, their names start with #, and they can only be called by the object's own methods:

class Student{
    publicMetod(){
        // console.log("this is open for everyone");
        this.#privateMethod();
    }

    #privateMethod(){
        console.log("my name is Deepak Kumar");
    }
}
const dk=new Student()
dk.publicMetod()        //my name is Deepak Kumar
// dk.#privateMethod() //SyntaxError: Private field '#privateMethod' must be declared in an enclosing class