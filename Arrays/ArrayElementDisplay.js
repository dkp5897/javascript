 const colors=['red','blue','gree','yellow','black'];

//  console.log(colors);

 // for loop
//  for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);
//  }

 // for of loop : to access elements of array
//  for(let elements of colors){
//     console.log(elements);
//  }

 // for in loop: it display index of array

//  for(let elements in colors){
//     console.log(elements);
//  }



 // Array.prototype.forEach(): it will not return anything
 /* we can find elements ,index and array by using forEach method in javascript*/

 colors.forEach(function(element, index, array){
    // console.log(element);
    // console.log(index);
    // console.log(array);
    console.log(element+": at index:"+index);
 })


//  Arrow function ;

colors.forEach((element, index, array)=>{
    console.log(element+": at index:"+index);
})