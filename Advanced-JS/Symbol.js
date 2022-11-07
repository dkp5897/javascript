// it is a data type which use for unique value

let s1 =Symbol("Hello");
let s2 =Symbol("Hello");
console.log(s1);     //Symbol(Hello)
console.log(typeof(s1));     //symbol


// compare

console.log(s1===s2); //false

//for use in document
// alert(s1.toString)

// use of symbol in object

let age = Symbol("age");

let user = {
    name : "Deepak Kumar",
    class : 'Btech',
    [age] : 25
}

console.log(user);  //{ name: 'Deepak Kumar', class: 'Btech', [Symbol(age)]: 25 }

// to show symblo value

// console.log(user.age);//undefined
// console.log(user[age]); //25 : use square brackets to display symbol

// // we can't use symbol in for loop
// for(let x in user){
//     console.log(x);  //name,class
// }



// change in JSON form
console.log(JSON.stringify(user));  //{"name":"Deepak Kumar","class":"Btech"}
