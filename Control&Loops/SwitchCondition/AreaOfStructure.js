const prompt=require('prompt-sync')();

var area=prompt("Please enter a structure: ");

const pi=3.142, l=5, w=4,r=3;

switch(area){
    case 'circle':
        console.log("the area of circle is: ",pi*r**2);
        break;
    case 'triangle':
        console.log("the area of triangle is: ",(l*w)/2);
        break;
    case 'rectangle':
        console.log("the area of rectangle is: ",(l*w));
        break;
    default:
        console.log("please enter a valid structure again");            
}