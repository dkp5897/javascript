
var user = {
    name: "Virat Kohali",
    add:"Delhi"
}

function userDetails(name,add){
    return "Name: " +this.name+ ", Address: " + this.add;
}

var fcall1 = userDetails.call(user);
var fcall2 = userDetails("Virat Kohali","Delhi");

console.log("function call1: "+ fcall1);
console.log("function call2: "+ fcall2);

const bind = userDetails.bind(user)
console.log(bind())