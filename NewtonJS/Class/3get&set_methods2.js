class Employee{
    constructor(fullName,age,salary){
        this.fullName = fullName;
        this.no = age;
        this.amount = salary;
    }
    getAddress(){
        return this.address;
    }
    setAddress(input){
     this.address = input;
    }
    setSalary(input){
        this.amount = input;
    }
    getfullName=()=>{
        let a = 1;
        let b = 2;
        return this.fullName;
    }
}
let details = new Employee("salman",88,2000);
console.log(details);
details.setAddress("chennai");
details.setSalary(40000);
console.log(details);
console.log(details.getAddress());
console.log(details.getfullName());
//create class
//how to update the property
//how to create new property