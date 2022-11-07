// introduce in ES6

function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]

  
  //=======================================================================

  
  function add(num1,num2){
    return num1+num2;
  }
  console.log(add(14,16)); //30
  console.log(add(14,16,14));  //30  wrong because we add only two value

  // we two method two resolve this problem 
  
//   1. arguments Object

function addArgs(){
    let sum=0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    return sum;
}

// now we can add any number of values with the help of arguments object
console.log(addArgs(12,25,23,2));       //62
console.log(addArgs(12,25,23,2,1,5,2,5,8));       //83

// 2.  rest parameters

function addRest(...args){
    let sum=0;
    for(let i in args){
        sum+=args[i];
    }
    return sum;
}

console.log(addRest(4,2,5,2));      //83
console.log(addRest(12,25,23,2,1,5,2,5,8));       //83


function addRest1(name,...args){
    console.log(name);
    let sum=0;
    for(let i in args){
        sum+=args[i];
    }
    return sum;
}
console.log(addRest1('deepak', 12,25,23,2,1,5,2,5,8));       //deepak
                                                            //83

//  sort numbers

function numSort(...args){
    const sortedNum= args.sort();
    return sortedNum;
}

console.log(numSort(5,2,4,58));     //[ 2, 4, 5, 58 ]
console.log(numSort(...[4,2,5,3]));     //[ 2, 3, 4, 5 ]
console.log(numSort(4,5,8,...[4,2,3]));     //[ 2, 3, 4, 4, 5, 8 ]
console.log(numSort(...[4,5,8],...[4,2,3]));        //[ 2, 3, 4, 4, 5, 8 ]

// given two array , merger them and sort them
const arr1 =[5,6,8]
const arr2 =[3,4,2,5,6];

console.log(numSort(...arr1,...arr2));  


function numSortArguments(){
    // firt convert arguments into array
    const args=Array.from(arguments);
    const soerted = args.sort();   // give error because arguments are not real array we cannot apply sort method heer

    return soerted;
}

console.log(numSortArguments(2,4,1,5)); //[ 1, 2, 4, 5 ]