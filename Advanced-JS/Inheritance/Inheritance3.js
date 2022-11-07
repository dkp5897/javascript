class employee{
    constructor(name){
        this.name=name
        console.log("this is manager class"+ this.name);
    }
}

//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
class manager extends employee {
    constructor(){
        super();                         // it will check any construtor method in employee class
        console.log("this is employee class");
    }
}

let a = new manager()       //this is manager classundefined
                            //this is employee class