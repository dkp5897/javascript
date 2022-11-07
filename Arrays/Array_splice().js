var months=['jan','march','april','june','august'];

/* Array.splice(index, deleted count,adding element): this method is used for adding, deleteing 
any elements at any position in an Array. */

// 1. add 'Dec' in the last of Array

// months.splice(5,0,'Dec');
months.splice(months.length,0,'Dec');
console.log(months);

// add at any position 
months.splice(1,0,'feb');
console.log(months);


//2. delete an element
var deleteEle=months.splice(2,1,);    // it will delete 1 element at index 2
console.log(months);
console.log(deleteEle);             // it will print deleted element:[march]

var deleteEles=months.splice(2,2);    // it will delete 2 element from index 2 
console.log(months);
console.log(deleteEles);            // it will print 2 deleted elemets:['april','june']

// 3. delete element and add or another
var deleteEle= months.splice(2,1,'march','april','may');
console.log(months);
console.log(deleteEle);             // ['august']


// 4. update the element:march->March

// months.splice(2,1,'March');
// console.log(months);

// if don't know the index of element then 

const index = months.indexOf('nov');
if(index!= -1){
    months.splice(index,1,'March');
    console.log(months);
}
else{
    console.log("No such data is found");
}

// delete all elements from index 3

const delEle= months.splice(3,Infinity);
console.log(months);
console.log("deleted eleements: ",delEle);