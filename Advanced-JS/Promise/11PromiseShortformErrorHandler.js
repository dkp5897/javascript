

let promiseCall = function(returnData, massage){
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(`The ${massage} has resolved`);
            resolve(returnData);
        },returnData*100);
    }   
}

let p1 = new Promise(promiseCall(10,"First"));
let p2 = new Promise(promiseCall(20,"Second"));
let p3 = new Promise(promiseCall(30,"Third"));

// rejected promise
let p4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        return reject('the 4th promise has failed..')
        console.log(`The forth promise has resolve`);
        // resolve(40);
    },4000);
});


let sum=0;

Promise.all([p1,p2,p3,p4]).then((result)=>{
    for(let e of result){sum += e}
    console.log(`Result: ${result}`);
    console.log(`Total Sum = ${sum}`);
}).catch((error)=>{
    console.log(`Error: ${error}`);
})