let employee={
    fullName:"akash",
    age:22,
    getFullNameDisplay:function(firstName,lastName){
        console.log(this.fullName,firstName,lastName)
    }
}
employee.getFullNameDisplay("sri","selvan");
let henry ={
    fullName:"henry",
    address:"chennai"
}
employee.getFullNameDisplay.apply(henry,["john","potter"]);