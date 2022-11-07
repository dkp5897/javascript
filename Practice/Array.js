// const arr = ['banana','apple','mango','pear']
// console.log(arr)
// console.log(arr.at(2))


// const returnLast = ()=>{
//   return(arr.at(-1))
// }

// console.log(returnLast())

// console.log(arr.at(-1))
// console.log(arr.slice(0,-1))

// const arr2 = [10,2,0,9,[5,3,5],7]
// const arr3 = ['dfdsf','adfsdf','fdsfds']
// const merge = arr.concat(arr2,arr3)

// console.log(merge)

// const obj1 = {0:1,9:2,8:3}
// const obj2 = {1:0,2:9,3:8}

// console.log([].concat(obj2,obj1))

// let res = arr.entries()
// console.log(res)

// // for(let element of res){
// //   console.log(element)
// // }

// for(let [index,ele] of res){
//   console.log(index,ele)
// }

// =============================================================

const arr = [2,5,8,20,52,5,41,58,3];
const arr2 = [20,50,8,58]
const isBigger = (element) =>{
  return element>10;
}

console.log(arr.every(isBigger))
console.log(arr.every((x)=>x>1))

const isSubset = (array1,array2)=>array2.every((element)=>array1.includes(element))

console.log(isSubset(arr,arr2))

const res = arr.filter(isBigger)
console.log(res)

const arr3 = [
  { name: "Pen", quantity: 2 },
  { name: "Copy", quantity: 5 },
  { name: "Book", quantity: 7 },
  { name: "Box", quantity: 0 },
];

console.log(arr3.find((item)=>item.name==="Book"))
console.log(arr3.find((item)=>item.name==="Copy"))

console.log(arr.findIndex(isBigger))
// console.log(arr.findLastIndex(isBigger))

// arr.forEach(element =>{
//   console.log(element)
// } )

console.log(arr.forEach(isBigger))
let sum = 0
function summ (ele){
  sum+=ele
  console.log(`The element is ${ele}`)
}
arr.forEach(summ)
console.log(sum)
