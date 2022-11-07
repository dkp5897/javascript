console.log("Welcome to DOM:Document Object Model");
let a=document;
a= document.all;    // it will give all tags(HTML Collections) , used by me in html
a=document.body;
a=document.forms[0];

//a is not an array that's why this will give error
        // a.forEach(function(element){
        //     console.log(element);
        // })



//so first make an array and apply it
// Array.from(a): make a array from a (by using a)
        Array.from(a).forEach(function(element){
            console.log(element);
        })



//find links from document 
    let b=document.links     // it will give all link
    b=document.links[0]     // it will give first link
    b=document.links[0].href     // it will give first link without anchor tag
    console.log(b)


//find imagese:-
    let c=document.images;  // it will give all imagese 
    c=document.images[0];   // it will give first img
    c=document.images[0].src;   // it will give first img link
    console.log(c);



    
//find script

let d=document.scripts;     // it will give all script
d=document.scripts[0];     // it will give first script
console.log(d)      


