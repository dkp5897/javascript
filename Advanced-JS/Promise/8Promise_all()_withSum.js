//If we have to check more than one promises whethere it is resolve or reject
//so for this we use promise.all();

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The first promise has resolved');
        resolve(10);
    },1000)
});


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The second promise has resolved');
        resolve(20);
    },2000)
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Third promise has resolved');
        resolve(30);
    },3000)
});

var sum = 0;
Promise.all([p1,p2,p3]).then((result)=>{
    for(let i in result) {sum += result[i] };
    console.log(`Results: ${result}`);
    console.log(`Total Sum = ${sum}`);

}).catch((error)=>{
    console.log(`Error: ${error}`);
});