class employee{
    constructor(name){
        this.name=name
        console.log("this is manager class");
    }
    info(){
        console.log(`this is info of employee ${this.name}`);
    }
}

//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
class manager extends employee {
   info(){
    super.info()
    console.log(`this is info of manager ${this.name}`);
   }
}

let a = new manager("Deepak Kumar");   
a.info()    

// this is manager class
// this is info of employee Deepak Kumar
// this is info of manager Deepak Kumar