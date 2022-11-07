class person{
    constructor(name){
        this.name=name;
    }

    introduceSelf(){
        console.log(`Hi I am ${this.name}`);
    }
}

class Student extends person{
   
    #year;
    constructor(name,year){
        super(name);
        this.#year=year;
    }
    introduceSelf(){
        console.log(`my name is ${this.name} and I am in ${this.#year}th year`);
    }
}

let dk=new Student('deepak','4');

dk.introduceSelf()

console.log(Student.year);