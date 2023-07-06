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

// let num = [10,20,3,0]

// console.log(typeof(num[Symbol.iterator]))

// const iter = num[Symbol.iterator]()

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// let element = iter.next();

// while(!iter.done){
//     console.log(element.value)
//     element = iter.next()
// }

function *display(){
    yield "Hello Deepak";
    yield "How are you ?";
}



// console.log(display())
const g = display();
// console.log(g.next());
// console.log(g.next().value)

let ele = g.next();

while(!ele.done){
    console.log(ele.value);
    ele = g.next()
}

function *number(){
    let n = 10;
    while(n>0){
        yield n--;
    }
}

const a = number();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

let nums = a.next();
while(!nums.done){
    console.log(nums.value);
    nums = a.next()
}
