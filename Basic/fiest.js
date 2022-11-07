//1. way to print javascript

console.log("Hello World");
// document.write("This is document write"); // this will use to print into the page (not recommended)

console.warn("This is Warning"); // it is use to sohow warning into console
console.error("This is an error"); //it is use to sohow error into consoles
console.log("Hello world", 4 + 6, "Another log");

// 2. javascript Variables

//variable:- container to store data values
var num1=40;
var num2=75;
console.log("The sum of two number="+ num1+num2);

// let variable used in a block(loop, function) out of block it will disappear
let l=78
let r=47
console.log(l+r)

// const variable used for a fixed value
const w=70
// w++     // any changes in w will not allow it is fixed now at 70
// w=w+1

//String
var str1="This is a String";
var str2='Deepak Kumar';
console.log(str1);
console.log("String addition="+str1+str2)

// Decimal Number
var num3=245.48;
var num4=3.123;    
console.log("The sum of real="+ (num3+num4))


// Object

var marks={
    ravi:45,
    subham:47,
    baba:85,
    Deepak99:986,
}
console.log(marks)


// Boolean 

var a=true;
var b=false;
console.log(a,b)


// undefined
var y;             // by default it will be undefined
var x=undefined;
console.log(x,y)

var z= null;
console.log(z)

// At a very high level there are two types of data type in javascript:
// 1.  Primitive data types :- undefined, null, number, string, boolean,symbol
// 2.  Reference data types ;- Arrays and Objects



var arr=[1,2,4,7,6];
console.log(arr)
console.log(arr[4])

// we can also give different data types elements in one array
var a=[4,5,"Deepak",8,'Kumar',1]
console.log(a)
console.log(a[2],a[3],a[4])