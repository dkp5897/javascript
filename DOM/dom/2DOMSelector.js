console.log("Welcome to DOM Selector");

/* There are two types of selectors

    1. Single element Selector
    2. Multi Element Selector

*/

// 1.   Single Element Selector:-

// GetElementById:-

let element=document.getElementById('myfirst');
console.log(element);

// element=element.className;  // it will give all class name of this element
// console.log(element);

// element=element.childNodes;
// element=element.parentNode;
// console.log(element);
console.log(element.innerText)

// change in css by javascript
let a=document.getElementById('second');
a.style.color='brown';
a.innerText="Deepak Kumar"; // it will change that particular text
a.innerHTML="<b>Deepak Kumar</b>" // if i want to use any tag then use it
console.log(a.innerHTML);
console.log(a.innerText);



// Query Selector
let qsel=document.querySelector('#myfirst');
console.log(qsel);
qsel=document.querySelector('.child'); // it will give first element of child class
console.log(qsel);
qsel=document.querySelector('b'); // it will select first b tag
console.log(qsel);
qsel=document.querySelector('div');
console.log(qsel);
qsel.style.color='Green'; // it will color only first div element and its child;
console.log(qsel);




