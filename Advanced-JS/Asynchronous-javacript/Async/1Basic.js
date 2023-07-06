// // async makes a function return a Promise

// // await makes a function wait for a Promise

// async function myFunction() {
//     return "Hello";
//   }
// console.log(  myFunction());    //Promise { 'Hello' }

// // the upper function is same as 
// // function myFunction2(){
// //     return Promise.resolve("Hello");
// // }
// // console.log(myFunction2());

// // function Display(){
// //   console.log("Sysnchronous code");
// // }

// // Display()

// // =======================================================================================================

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

// ===============================================================

const Display1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("p1");
            resolve("Promise 1")
        },2000)
    })
}
const Display2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("p2")
            resolve("Promise 2")
        },1000)
    })
}


// p1
// .then((x)=>console.log(x))
// .then((y)=>{
//     console.log(y);
// })

const Display = async () =>{
    const d1 = await Display1()
    const d2 = await Display2()

    console.log([d1,d2]);
}

Display()