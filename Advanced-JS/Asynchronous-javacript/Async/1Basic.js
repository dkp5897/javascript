// async makes a function return a Promise

// await makes a function wait for a Promise

async function myFunction() {
    return "Hello";
  }
console.log(  myFunction());    //Promise { 'Hello' }

// the upper function is same as 
function myFunction2(){
    return Promise.resolve("Hello");
}
console.log(myFunction2());