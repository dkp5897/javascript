//for traversing purpose we have some methods: while, do..while, for, for..Of, for..in but these are uncontroable

// iterator: this is also use for traversing purpose but the control will be in our hand

let num =[10,20,30,40];

console.log(typeof(num[Symbol.iterator])); //function

let iter = num[Symbol.iterator]();

console.log(iter);  //Object [Array Iterator] {}

// console.log(iter.next());     //{ value: 10, done: false }
// console.log(iter.next());     //{ value: 20, done: false }
// console.log(iter.next());     //{ value: 30, done: false }
// console.log(iter.next());     //{ value: 40, done: false }
// console.log(iter.next());     //{ value: undefined, done: true }


iter.next()
iter.next()
console.log(iter.next().value);  //30
console.log(iter.next().done);   //false


// since iterator return an object so we can print it's all values in one time

let animal = ["dog","cat","horse","goat"];

let iter2 = animal[Symbol.iterator]();

let elements  = iter2.next();

while(!elements.done){
    console.log(elements.value);
    elements = iter2.next();
}

// dog
// cat
// horse
// goat






// we can create our own iterator

function ownIterator(arr){
    var nextNum = 0;
    return {
        next(){
            if(nextNum<arr.length){
                return {
                    value : arr[nextNum++],
                    done : false
                }
            }
            else{
                return {
                    value : arr[nextNum++],
                    done : true
                }
            }
            
        }
    }
}

let number = [11,22,33,44];
let myiter = ownIterator(number);

// console.log(myiter.next());     //{ value: 11, done: false }
// console.log(myiter.next());     //{ value: 22, done: false }
// console.log(myiter.next());     //{ value: 33, done: false }
// console.log(myiter.next());     //{ value: 44, done: false }
// console.log(myiter.next());     //{ value: undefined, done: true }

let item = myiter.next();

while(!item.done){
    console.log(item.value);
    item = myiter.next()
}

// 11
// 22
// 33
// 44