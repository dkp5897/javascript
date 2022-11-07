const arr=["Red","Blue","Green"];
// entries method will return an array in key value pair
let res=arr.entries();
console.log(res.next().value);  //[0, 'Red']
console.log(res.next().value);  //[1, 'Blue']
console.log(res.next().value);  //[2, 'Green']
console.log(res.next().value);  //undefined


// print all element
const arr1=['Hindi','Sanskrit','English'];
const res2=arr1.entries();
console.log(res2)
for(const element of res2){
    console.log(element);
}

// withoue entries
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}