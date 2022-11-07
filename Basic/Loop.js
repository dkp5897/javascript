// for looo
var arr=[8,5,7,6,1,4];
console.log(arr)
console.log("for loop")
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log(" ")    // for a space

// for each loop    (right it's correct sysntax)
console.log("for-each loop")
arr.forEach(function(elements){
    console.log(elements)
})
console.log(" ")    // for a space

// while loop
console.log("while loop")
let j=0
while(j<arr.length){
    console.log(arr[j])
    j++
}
console.log(" ")    // for a space

// do-while loop
console.log("do-while loop")
let k=0;
do{
    console.log(arr[k])
    k++;
}while(k<arr.length)