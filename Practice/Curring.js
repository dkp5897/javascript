const multi = (a,b,c) =>{
    return a+b+c;
}

// console.log(multi(10,20,30))

const curring = (a) => (b) => (c) =>a+b+c;

console.log(curring(10)(20));