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
}
let salmanObj = new Employee("salman",88,2000);
console.log(salmanObj);
salmanObj.setAddress("chennai");
salmanObj.setSalary(40000);
console.log(salmanObj);
console.log(salmanObj.getAddress());