let employee={
    fullName:"akash",
    age:22,
    getFullNameDisplay:function(firstName,lastName){
        console.log(this.fullName,firstName,lastName)
    }
}
let henry ={
    fullName:"henry",
    address:"chennai"
}
let getDetails = employee.getFullNameDisplay.bind(henry,"john");
getDetails("potter");
getDetails("johnlee")