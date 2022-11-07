// null: The value null represents the absence of any object value

var useless= null;
console.log(null);
console.log(typeof(useless));  // object    :bug
console.log(typeof(null));  // object    :bug


//undefined: The undefined property indicates that a variable has not been declared at all.
//means we have declare a variable but not assigning any value.

var standBy;
console.log(standBy);  //undefined
console.log(typeof(standBy)); // undefined data type


// NaN: It is a property of globel object, In other words it is a variable in globel scope
// The initial value of NaN is Not-a-Number;


/* In JavaScript, NaN is short for "Not-a-Number".
In JavaScript, NaN is a number that is not a legal number.
The Number.isNaN() method returns true if the value is NaN, and the type is a Number.*/

console.log("a"-"b");  // NaN

var a=987654321;
var name="Deepak Kumar";

console.log(isNaN(a));   // false
console.log(isNaN(name)); // true

console.log(isNaN(1.21));  // false
console.log(isNaN(121));  // false
console.log(isNaN(-1.21));  // false
console.log(isNaN(0/0));  // true
console.log(isNaN(0));  // false
console.log(isNaN(2005/12/12));  // false
console.log(isNaN('2005/12/12'));  // true