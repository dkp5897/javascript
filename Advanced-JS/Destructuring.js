// old way of getting data from array to a varible

let arr = ['suresh','ramesh','ganesh','mahesh'];

// const a=arr[0]
// const b=arr[1]
// const c=arr[2]

// new way:destructuring
const [g,h,i,j]=arr
console.log(g,h,i,j);   //suresh ramesh ganesh mahesh

const [a,b,c]=arr
console.log(a,b,c);//suresh ramesh ganesh

const [x,y]=arr
console.log(x,y);   //suresh ramesh

const [z]=arr;
console.log(z); //sursh

// storing first element into a variable and others in an array

const [q,...name]=arr;
console.log(q,name);    //suresh [ 'ramesh', 'ganesh', 'mahesh' ]


// nested loop destructuring

let arr1 = ['suresh','ramesh',[20,25]];

const [name1,name2,[age1,age2]]=arr1;
console.log(name1,name2,age1,age2); //suresh ramesh 20 25

// getting array and printing in different values
function nameList([name1,name2,name3]){
    console.log(name1);
    console.log(name2);
    console.log(name3);
}
const arr2=['dk','pk','gk','mk']
// passing arr
nameList(arr2)


function user(){
    return [10,20,30,40];
}

// destructuring a returning array in different values
const [num1,num2,num3,num4]=user();
console.log(num1,num2,num3,num4);   //10 20 30 40

// Destructuring in objects

//In ES5 to assign variables from objects its implementation is 
var marks = {x: 21, y: -34, z: 47 };

var n1 = marks.x; // x = 21
var n2 = marks.y; // y = -34
var n3 = marks.z; // z = 47

console.log(n1);
console.log(n2);
console.log(n3);

//The above implementation in ES6 using destructuring assignment is. 

var marks = {m1: 21, m2: -34, m3: 47 };
// variable name should be key name
const {m1,m2,m3} = marks;

console.log(m1);     //21
console.log(m2);    //-34
console.log(m3);    //47

const {m1:p,m2:s,m3:r} = marks;
console.log(p);     //21
console.log(s);    //-34
console.log(r);     //47


//The Nested objects can also be destructured using destructuring syntax. 

// const mark = {
//     section1: { alpha: 15, beta: 16},
//     section2: { alpha: -31, beta: 19 }
//     };
//     const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
//     console.log(alpha1, beta1); // 15, 16


//Nested objects can also be destructuring

let obj = {
	Name: "GFG",
	add : {
		country: "India",
		state : {
			code : "JS",
			pincode:"820800",
			article:{
			topic : "destructuring"
			}
		}
	}
}

let {Name} = obj;
console.log(Name)   // GFG

let {add:{country:abcd}} = obj
console.log(abcd)           //India

let {add:{state:{code:cd}}} = obj
console.log(cd)     //JS

let {add:{state:{article:{topic:ef}}}} = obj
console.log(ef);        // destructuring




