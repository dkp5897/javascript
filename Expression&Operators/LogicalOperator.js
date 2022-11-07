// logical opertor use with boolean values and return a boolean value

var a=20;
var b=-10;

//1. AND: return true if both expression is true else false

console.log(a>b && b<0);  // true
console.log(a>b && b>0);  // false

// 2.OR: return true if anyone expession is true else false

console.log(a>b || b>0); // true
console.log(a<b || b>0); // false

//3. NOT: return reverse of boolean expression
console.log(a>b);// true
console.log(!(a>b));// false


