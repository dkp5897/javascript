function myFunction(){
    return Promise.resolve("Hello World");
}

console.log(myFunction())

async function myFunction2(){
    return "Hello "
}
console.log(myFunction2())