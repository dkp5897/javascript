function bigger(elem){
    return elem>15;
}
console.log([12,4,78,5,20,36,4,8].findLastIndex(bigger)); // 5

function lesser(elem){
    return elem<10;
}

console.log([1,4,52,78,1,22,56].findLastIndex(lesser)); // 4

// find last prime number element in the array

function isPrime(num){
    if(num===2)
    return true;

    if(num%2===0 || num<2)
    return false;

    for(let i=3;i<num;i++){
        if(num%i===0)
        return false;
    }
    return true;
}

const index= [24,5,2,14,2,14,16].findLastIndex(isPrime);
console.log(index)

// Arrow function methods

console.log([21,45,6,2,5,8].findLastIndex((elem)=> elem===6));
console.log([21,45,6,2,5,8].findLastIndex((elem)=> elem===22));