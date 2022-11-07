// let list =[1,2,3,4];
// let input = [5,6,7,8];
// let result = list.concat(input);
// console.log(result);

//========================
// let list =[1,2,3,4];
// let input = [5,6,7,8];
// let result = [list,input];
// console.log(result);

//========================================

 //spread parameter will spread the value from array to individual value
//  let list =[1,2,3,4];
//  let input = [5,6,7,8];
//  let result = [...list,...input];
//  console.log(result);


 //============================================

 function addition(a,b,c){
    debugger;
    console.log(a,b,c);
}
addition([1,2,3]);          //[ 1, 2, 3 ] undefined undefined
addition(...[1,2,3]);      //1 2 3
addition(...[1,2,3,4]);   //1 2 3
addition(...[1,2]);      //1 2 undefined
//spread parameter
//array and object
//[1,2,3] = 1,2,3

//===============================================

let employee={
    fullName:"akash",
    age:33
};
let token={
    amount:500,
    date:'22/44/2022'
};
let result ={...employee,...token};
console.log(result);
//     function display(fullName,age){
//         console.log(fullName,age);

// }
// display(...employee);