console.log('Deepak Kumar');

//var: we can reassing and redeclare as well  (functional scop/ globel scop)
var a=45;
console.log(a);
var a='Helo World';
console.log(a);

//let: we cannot redeclare the variable but we can update it    (block scop)

let b=7500;
console.log(b);
// let b="deepak";    // give error
b='Welcome';
console.log(b);

//const: cannot redeclare, we caanot reassign.    (block scop)
const c=8900;
console.log(c);




/* var: Scope: Global scoped or function scoped. The scope of the var keyword is the global or 
function scope. It means variables defined outside the function can be accessed globally, 
and variables defined inside a particular function can be accessed within the function. */

// function biodata(){
//     var name="Deepak Kumar";
//     console.log(name);
//     if(true){
//         var age=25;
//         console.log("Inner: "+age);
//         console.log("Inner: "+name);
//     }
//     console.log("Outer: ",age); 
// }

// biodata();


/* let: Scope: block scoped: The scope of a let keyword is only block scoped. 
It can’t be accessible outside the particular block ({block}). Let’s see the below example.*/

// function biodata(){
//     let name="Deepak Kumar";
//     console.log(name);
//     if(true){
//         let age=25;
//         console.log("Inner: "+age);
//         console.log("Inner: "+name);
//     }
//     console.log("Outer: ",age);
// }

// biodata();


/* const: Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. 
The user cannot update the const variable once it is declared. */

// const num ; //error

// const num =10;
// num= 1;         //Error: Assignment to constant variable
