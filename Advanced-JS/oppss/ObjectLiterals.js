let name = "Deepak Kumar"
let age= 25;

// old method
const obj={
    name:name,
    age:age
}
console.log(obj);   //{ name: 'Deepak Kumar', age: 25 }

// new method

const newObj={
    name,age
}
console.log(newObj);    //{ name: 'Deepak Kumar', age: 25 }

//We can also create object methods with object literal enhancement.

const massage = function(){
    console.log("I am here");
}

const newObj2={name,age,massage};

newObj2.massage()   // I am here


//===================================================================================
// We can also use “this” keyword to access the object keys.

 // Variable declaration
 var Name = "Lilly";
 var color = "White";
 var Age = 3;

 // function declaration 
 // using "this" keyword to access the object keys.
 var barkWithName = function(){
     console.log('Woof Woof!!, I am '
     +this.Name+' and I am a '
     +this.Age+' years old, '
     +this.color+ ' coloured dog.Woof Woof!!');
 }

 // Using Object Literal Enhancement
 // combines all variables into a yetAnotherDog object
 var yetAnotherDog = {Name, color, Age, barkWithName};
 yetAnotherDog.barkWithName();//Woof Woof!!, I am Lilly and I am a 3 years old, White coloured dog.Woof Woof!!


 //======================================================================================================

 let n = "Student";
//  const Obj3={
//     [n]:'Deepak Kumar',
//     sailary:50000
//  }

//  console.log(Obj3); //{ Student: 'Deepak Kumar', sailary: 50000 }

// const Obj3={
//     [n+ "name"]:"Deepak Kumar",
//     sailary:50000,
//     details:function(){
//         console.log(`my name is ${this.Studentname} and my sailary is: ${this.sailary}`);
//     }
// }

// Obj3.details()  //my name is Deepak Kumar and my sailary is: 50000

// new function syntax in object

const Obj3={
        [n+ "name"]:"Deepak Kumar",
        sailary:50000,
        details(){
            console.log(`my name is ${this.Studentname} and my sailary is: ${this.sailary}`);
        },
        // if we want space between function name
        'About me'(){
            // console.log(`my name is ${this.Studentname} and my sailary is: ${this.sailary}`);
            return `my name is ${this.Studentname} and my sailary is: ${this.sailary}`;
        }
    }
    
    Obj3.details()  //my name is Deepak Kumar and my sailary is: 50000
    Obj3['details']()   //my name is Deepak Kumar and my sailary is: 50000

    console.log(Obj3['About me']());    //my name is Deepak Kumar and my sailary is: 50000


    //================================================================================================

// create a function which return an object

let data1="Pradeep Kumar"
let data2=90000

function employee(name, sailary){
    return {name,sailary};
}

console.log(employee(data1,data2)); //{ name: 'Pradeep Kumar', sailary: 90000 }


let fname="Deepak";
let lname="Kumar";
let course="Btech"

member = (data1, data2, course)=>{
    const fullname= data1+" "+data2;
    return {fullname,course};
}

console.log(member(fname,lname,course));    //{ fullname: 'Deepak Kumar', course: 'Btech' }

let ans=member(fname,lname,course);

console.log(ans.fullname);  //Deepak Kumar
console.log(ans.course);    //Btech

console.log(JSON.stringify(ans));   //{"fullname":"Deepak Kumar","course":"Btech"}