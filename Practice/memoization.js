
const sum = (n) =>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

// console.time()
// console.log(sum(10))
// console.timeEnd()

const memoization = (fun) =>{
    let cache = {};
    return (...arg) =>{
        const n = arg[0];
        if(n in cache){
            console.log("from cache");
            console.log(cache)
            return cache[n]
        }else{
            console.log("calculation");
            let result = fun(n)
            cache[n] =result
            return result
        }
    }
}

const eff = memoization(sum)
console.time()
console.log(eff(10))
console.timeEnd()

console.time()
console.log(eff(10))
console.timeEnd()

console.time()
console.log(eff(12))
console.timeEnd()

console.time()
console.log(eff(12))
console.timeEnd()