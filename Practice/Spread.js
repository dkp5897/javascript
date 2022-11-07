const arr1 = [10,10,20,4]
const arr2 = [7,4,8,85]

const merge = [...arr1,...arr2]
console.log(merge)

const [num1,num2,...num] = merge

console.log(num1)