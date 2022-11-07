class employee{
    constructor(){
        console.log("this is manager class");
    }
}

class manager extends employee {

}

let mang = new manager();       //this is manager class
let emp = new employee();       //this is manager class