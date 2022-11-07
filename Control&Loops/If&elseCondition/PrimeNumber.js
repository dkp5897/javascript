const prompt=require('prompt-sync')();

var num=prompt("Enter a number: ");

var ans="Prime Number";

if(num<2){
    ans="Not a Prime Number!"
}
for(let i=3;i<num;i++){
    if(num % i===0){
        ans="Not a Prime Number!";
    }
}
console.log(ans);