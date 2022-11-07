class Employee{
    constructor(fullName,age,salary){
        this.fullName = fullName;
        this.age = age;
        this.amount = salary;
    }
}
let salmanObj = new Employee("salman",88,2000);
let deepakObj = new Employee("Deepak",25,20000);
console.log(salmanObj);
console.log(deepakObj);