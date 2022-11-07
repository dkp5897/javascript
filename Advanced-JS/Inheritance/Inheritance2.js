class employee{
    constructor(name){
        this.name=name
        console.log("this is manager class"+ this.name);
    }
}

class manager extends employee {

}

let mang = new manager("father");       //this is manager classfather: we are passing argument in manager object
let emp = new employee();       //this is manager classundefined  : we have not passing any arguments here
