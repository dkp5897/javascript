//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function add (...args){
    let sum=0;
    for(let e of args){
        sum+=e;
    }
    return sum;
}

let x= add(14,1,2,17,5,5,5,46,10);
console.log(x); //105