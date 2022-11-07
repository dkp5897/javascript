/* There are two methods to creat array in javascript
    1. var arr=[]
    2. var arr=new Array()
    3. by using String.prototype.split()
*/

/* An array in JavaScript can hold different elements 
We can store Numbers, Strings and Boolean in a single array. */

// Method-1:

var arr1=["Deepak", 'Kumar',21,10,true,null];
console.log(arr1)
console.log(arr1.length)

//Method-2:
var arr2=new Array(10,20,5,'Rajan','Pradeep',true,4,8)
console.log(arr2)
console.log(arr2.length)

// Create an array using String.prototype.split()
const arr3='Apple,Mango'.split(', ');
console.log(arr3);

//Creates an array of 5 undefined elements
var house1 = new Array(5);
console.log(house1)
  
//Creates an array with element 1BHK
var home = new Array("!BHK");
console.log(home)



// Creates an array of 4 undefined elements
var house = new Array(4);

// Now assign values
house[0] = "1BHK"
house[1] = "2BHK"
house[2] = "3BHK"
house[3] = "4BHK"

console.log(house)


// giving elements to an array using for loop
let arr=[];
for(let i=1;i<=10;i++){
    arr.push(i);
}
console.log(arr)
