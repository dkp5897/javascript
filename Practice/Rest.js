function add (){
    let sum = 0
    for(let i in arguments){
        sum += arguments[i]
    }

    return sum
}

console.log(add(10,203,0450,5))

function multi(...agrs){
    let mul = 1;
    for(let i in agrs){
        mul*=agrs[i]
    }

    return mul
}

console.log(multi(2,4,3))

function sortNumber(...agrs ){
    return agrs.sort((a,b)=>a-b)
}

console.log(sortNumber(4,2,18,2,9))