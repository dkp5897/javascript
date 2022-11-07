//ExponetialOperator
console.log(3**3);   // 27= 3^3=3*3*3
console.log(3**5);   //3^5=243
console.log(9**8);  //9^8
console.log(10 ** -1);  // 10^-1=0.1


// swap
var a=10;
var b=5;
console.log("Without swapping a & b:",a,b);

a=a+b;
b=a-b;
a=a-b;
console.log("After swapping a & b:",a,b);


// difference between == and ===

var x=5;
var y='5';
console.log(x==y);//ture: == check only value

console.log(x===y);//fale: === check value as well as data type also