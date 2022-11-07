//take  user input

const prompt= require('prompt-sync')();

var year=prompt("Please enter a year: ");
// var year=2020;
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log(year+" is Leap Year!");
        }
        else{
            console.log(year+" is not Leap Year!");
        }
    }
    else{
        console.log(year+" is Leap Year!");
    }
}
else{
    console.log(year+" is not Leap Year!");
}