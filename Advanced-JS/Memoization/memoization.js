//memoiztion:- if there is a function which return some result after calculating, when we pass an input. when we pass same input then function return the same result after calculating. So to avoid the calculation again and again for the same input, we use cache (an object) in which result is store for a particular value. when the same input pass again then we will recieve our result from cache, means calculation is not happend again and again.

//1. without cache

const sum = (n) =>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.time();
console.log(sum(5));
console.timeEnd();


// 2. using cache (memoization)

// const memoize = (fun) =>{
//     let cache={};
//     return function(...args){
//         let n = args[0];
//         if(n in cache){
//             console.log("from cache");
//             console.log(cache)
//             return cache[n];
//         }else{
//             console.log("from calculation");
//             let result = fun(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// console.time()
// const efficient = memoize(sum);
// console.log(efficient(5));
// console.timeEnd();

// console.time()
// console.log(efficient(5));
// console.timeEnd();