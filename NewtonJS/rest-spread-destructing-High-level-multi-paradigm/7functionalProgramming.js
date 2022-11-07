// let list=[45,67,12,34,45];
//     let result = list.reduce((a,b)=>{
//         return a+b;
//     });
//     console.log(result); //203

//==========================================

let list=[{firstName:"akash",amount:6000},
{firstName:"rajesh",amount:9000},{firstName:"antony",amount:4000}];

let result = list.filter((input)=>{
       return input.amount>5000;
}).map((input)=>{
   return {
       fullName:input.firstName,
       details:"yes"
   }
});

console.log(result);

// [
//     { fullName: 'akash', details: 'yes' },
//     { fullName: 'rajesh', details: 'yes' }
//   ]