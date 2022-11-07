const colors=['red','blue','gree','yellow','black'];
console.log(colors);


// 1. push() method: it add external data in the last of the array and this return new length of array

let newlen=colors.push('White');
console.log(colors);
console.log("new length of colors array: ",newlen);

// push can also add more than one elements

newlen= colors.push('brown','lightblue','grey');
console.log(colors);
console.log("new length of colors array: ",newlen);


// 2. unshift() method: it add external data at the front of the array and this return new length of array

var animals=['dog','cat','horse'];
console.log(animals);

let newlen2=animals.unshift('rat');
console.log(animals);
console.log("new length of animals array: ",newlen2);

newlen2=animals.unshift('cow','goat');
console.log(animals);
console.log("new length of animals array: ",newlen2);


// 3. pop() method:it remove a element from end of array and return deleted element

var number=[10,20,30,40,50,60];
console.log(number);

let deleteEle=number.pop();
console.log(number);
console.log("The deleted element: ",deleteEle);


// 4. shift method: it remove a element from starting of array and return deleted element

let deletefront=number.shift();
console.log(number);
console.log("The deleted element: ",deletefront);