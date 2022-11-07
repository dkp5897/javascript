//If we have to check more than one promises whethere it is resolve or reject
//so for this we use promise.all();

// If anyone of these promise is rejected then our then() will run and catch function will run


let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The first promise has resolved');
        resolve(10);
    },1000)
});


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return reject("Second promise is failed..");
        console.log('The second promise has resolved');
        // resolve(20);
    },2000)
});


let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Third promise has resolved');
        resolve(30);
    },3000)
});

Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`Results: ${result}`);
}).catch((error)=>{
    console.log(`Error: ${error}`);
});


// The first promise has resolved
// Error: Second promise is failed..
// The Third promise has resolved