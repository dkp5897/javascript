class Employee{
    constructor(fullName){
        this.fullName = fullName;
    }
    get displayDetails(){
        return this.fullName;
    }
    set positionValue(input){
        this.fullName = input;
    }
}
let details = new Employee("akash");
console.log(details.displayDetails);
details.positionValue = "suresh";
console.log(details.displayDetails);