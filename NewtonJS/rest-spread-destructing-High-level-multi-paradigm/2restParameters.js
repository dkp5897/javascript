function addition(...n){
     debugger;
    let result = 0;
      n.forEach((input)=>{
           result+=input;
      });
      return result; 
}
// console.log(addition([1,2,3]));
// rest parameter 1,2,3 - ...[1,2,3]
// spread parameter ...[1,2,3] - 1,2,3

console.log(addition(1,2,3));       //6
console.log(addition(1,2));         //3
console.log(addition(1,2,3,4));     //10