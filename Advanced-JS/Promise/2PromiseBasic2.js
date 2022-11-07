// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.




function prom(value){
    return new Promise(function(resolve, reject){
        if(value){
            resolve("I am successfull!");
        }
        else{
            reject("I am failed!");
        }
    });
}

console.log(prom(true));    //Promise { 'I am successfull!' }
console.log(prom(false));

// The promise rejected with the reason "I am failed!".] {
//     code: 'ERR_UNHANDLED_REJECTION'
//   }