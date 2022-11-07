const s1 = Symbol("Hello")
const s2 = Symbol("Hello")

console.log(s1)
console.log(typeof(s2))

console.log(s1===s2)

let  age = Symbol("age")

const user = {
    name : "Deepak Kumar",
    class : "Btech",
    [age] : 20
}

console.log(user[age])

for(let x in user){
    console.log(x)
}