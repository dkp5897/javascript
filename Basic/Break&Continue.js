//break :- it will break the loop and come out side of the loop 
console.log("break")
var arr=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<arr.length;i++){
    if(i==3){
        break;
    }
    console.log(arr[i])     //1 2 3
}

// continue :- it will leave that particular iteration and move for next iteration
console.log("continue")
for(let i=0;i<arr.length;i++){
    if(i==3){   
        continue;   // it will leave element at i=3 and move next
    }
    console.log(arr[i])     // 1 2 3 5 6 7 8 9
}