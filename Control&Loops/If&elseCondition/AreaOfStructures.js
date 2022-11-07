const prompt=require('prompt-sync')();

var area=prompt("Please enter a structure: ");

const pi=3.142, l=5, w=4,r=3;

if(area=="circle"){
    console.log("the area of circle is: ",pi*r**2);
}
else if(area=='triangle'){
    console.log("the area of triangle is: ",(l*w)/2);
}
else if(area=="rectangle"){
    console.log("the area of rectangle is: ",(l*w));
}
else{
    console.log("please enter a valid structure again");
}