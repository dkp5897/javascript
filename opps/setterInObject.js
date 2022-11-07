const person = {
    fullName : "deepak Kumar",
    age:25,
    Address:"Chandauli",

    set data(sailary){
        return this.sailary=sailary ;
        
    }
}
let myString = JSON.stringify(person)
console.log(myString);//{"fullName":"deepak Kumar","age":25,"Address":"Chandauli"}

person.data=50000;
myString=JSON.stringify(person)
console.log(myString);

//{"fullName":"deepak Kumar","age":25,"Address":"Chandauli","sailary":50000}


