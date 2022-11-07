// A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

// A Promise is a JavaScript object that links producing code and consuming code



// The syntax of Promise creation looks like below,

const promises = new Promise(function (resolve, reject) {
  // promise description
});


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

    // When the producing code obtains the result, it should call one of the two callbacks:


const promise = new Promise(

    (resolve) => {
        setTimeout(()=>{
            resolve("I am Promise");
        },4000)
    },
    (reject)=>{
        reject("erroe");
    }
)

promise.then((value)=>console.log(value));

const pmise = new Promise(function(resolve,reject){

    setTimeout(()=>{
        resolve("I am Promise !");
        reject('Error');
    },6000)

    
})

pmise.then((result)=>console.log(result))






let value = true;

let prom = new Promise(function(resolve, reject){
    if(value){
        resolve("I am successfull!");
    }
    else{
        reject("I am failed!");
    }
});

console.log(prom);      //Promise { 'I am successfull!' }   :if value==true

// if value==false

// The promise rejected with the reason "I am failed!".] {
//     code: 'ERR_UNHANDLED_REJECTION'
//   }