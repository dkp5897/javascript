// 2. Multi Element Selectors

let element=document.getElementsByClassName("child");
console.log(element);  // it will give HTMLCollecion with all elements
console.log(element[0]);  // it will give first element


let ele=document.getElementsByClassName('container');
//console.log(ele[0].getElementsByClassName('child'));    // it will give all elements having class child

ele=document.getElementsByTagName('div');   // it will give all div tags present in dom
console.log(ele);

Array.from(ele).forEach(element=>{
    console.log(element);
    element.style.color= "red";     // change all div tah color
});