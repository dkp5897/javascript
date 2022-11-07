// multiply by each method with 3 and return those element greater than 15

const num = [2,5,14,20,50,7];

let ans = num.map(x => x*3);
console.log(ans);

// element greater than 15 in ner array
// ans = num.map(x => x*3).filter((num) => {
//     return num>15;
// })
// console.log(ans);

ans = num.map(x => x*3).filter((num) =>  num>15);
console.log(ans);

// // element greater than 15 in ner array and return in sorted form

// ans = num.map(x => x*3).filter((num) => {
//     return num>15;
// }).sort((a,b) => a-b);
// console.log(ans);

ans = num.map(x => x*3).filter((num) => num>15).sort((a,b) => a-b);
console.log(ans);