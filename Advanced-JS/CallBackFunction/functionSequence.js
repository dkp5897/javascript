function display(element){
    console.log(`the element is ${element}`);
}

function fisrt(ele){
    ele('Hello');
}
function second(ele){
    ele('Deepak');
}

// calling function
// fisrt(display);     //the element is Hello
// second(display);        //the element is Deepak

second(display)     //the element is Deepak
fisrt(display)      //the element is Hello