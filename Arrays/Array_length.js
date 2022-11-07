var colors=['red','green','blue','yellow'];
console.log(colors);
console.log("The length of the colors array:",colors.length)

// Description

const list1=[1,2,3,4];
console.log("The length of list1: ",list1.length);

const list2=new Array(6);
console.log("The length of list2: ",list2.length);

//list2.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

//const list3 = new Array(-100) //negative sign
// RangeError: Invalid array length


// --------------------------------------------------------//

const arr=[1,2,3];
console.log(arr);   

arr.length=7;           // set array length to 7 while currently 3.
console.log(arr);       //[1, 2, 3, empty × 4]

arr.forEach((element)=>console.log(element));