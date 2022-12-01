const arr = [10,20,30,40];

console.log(typeof(arr[Symbol.iterator]));

let iter = arr[Symbol.iterator]();
console.log(iter);

let ele = iter.next();

while(!ele.done){
    console.log(ele.value);
    ele=iter.next();
}