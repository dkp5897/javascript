const prompt=require('prompt-sync')();

var num=prompt("enter a number: ");

// for loop

// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }


// while loop

// let i=1;
// while(i<=10){
//     console.log(num*i);
//     i++;
// }


// do while

let i=1
do{
    console.log(num*i);
    i++
}while(i<=10)