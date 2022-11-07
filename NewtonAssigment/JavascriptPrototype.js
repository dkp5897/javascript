let arr1 = [10,20,30]
let arr2 = [10,20]
Array.prototype.includesOneOf= function(arr){
   for(let e1 of arr){
    for(let e2 of Array.prototype){
        if(e1==e2){
            return true;
        }
    }
   }
   return false
}

console.log(arr1.includesOneOf([10,20]));