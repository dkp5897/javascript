// function *generater(){
//     yield "first Statement"
//     yield "second Statement"
//     yield "third Statement"
// }

// let g = generater();
// // console.log(g.next().value)
// // console.log(g.next().value)

// for(let value of g){
//     console.log(value)
// }

let num = [10,20,3,0]

console.log(typeof(num[Symbol.iterator]))

const iter = num[Symbol.iterator]()

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

let element = iter.next();

while(!iter.done){
    console.log(element.value)
    element = iter.next()
}