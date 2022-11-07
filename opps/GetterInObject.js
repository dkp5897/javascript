const person = {
    fullName : "deepak Kumar",
    age:25,
    Address:"Chandauli",

    get data(){
        return person.fullName ;
        
    }
}
// Display data from the object using a getter:
console.log(person.data);