let list = [2,4,5,2,6,8,2,1];

Array.prototype.findAvg = function(){
    let sum=0;
    for(let ele of this){
        sum+=ele;
    }
    return sum/this.length;
}

let avg=list.findAvg();
console.log(avg);