
const person ={
    firstName:"Deepak",
    lastName:"Kumar",
    age:        25,
    eyeColor:"blue"
}





// looping for..in loop in object to access all the properties of an objext

let ans="";
for (let x in person) {
    ans += person[x]+" ";
  }
  console.log(ans); //Deepak Kumar 25 blue


//Adding New Properties

let ans1=""
person.nationality="Indian";

for(let x in person){
    ans1+=person[x]+" ";
}
console.log(ans1)        //Deepak Kumar 25 blue Indian


//Deleting Properties:-

delete person.eyeColor;
// or delete person["age"];

let ans2="";
for(let a in person){
    ans2+=person[a]+" ";
}

console.log(ans2);      //Deepak Kumar 25 Indian