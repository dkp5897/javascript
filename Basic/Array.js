let arr=["Deepak",21,'Kumar',null,40,true,];
console.log(arr);

//Array Methods
//1. Length of the array
console.log(arr.length)

//2. pop():- to remove last element of array and return deleted element
console.log("the deleted element:",arr.pop())

//3. push():- to add an element in array
arr.push("Rajan")
arr.push(false)
console.log(arr)


//4. shift():- it will remove first elemnet and return deleted element
console.log(arr.shift());
console.log(arr)

//5. unshift():- it will return new array length and we can add an element in front also

const len=arr.unshift("Sooraj")
console.log(len)
console.log(arr)

//6. toString():- it will convert array to string

console.log(arr.toString())
// console.log(arr2.toString())

