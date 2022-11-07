// hoisting is an machanism which moves our variable and function declararion on the to of the scope

console.log(a);      //undefined
Name()              //Deepak Kumar


var a=5;
function Name(){
    console.log("Deepak Kumar");
}
console.log(a);     //5

//======================================================================
//hoisting is not possible with let or const keywords

console.log(b); //Error: Cannot access 'b' before initialization
console.log(b); //Error: Cannot access 'b' before initialization

let b = 10;
const c =20;