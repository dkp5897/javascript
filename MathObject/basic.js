// value of pi

console.log(Math.PI);   //3.141592653589793

// Math.round(): return nearest intger value
console.log(Math.round(10.2565));   //10
console.log(Math.round(10.7565));   //11
console.log(Math.round(10.5));   //11


// Math.pow(x,y) => x^y

console.log(Math.pow(2,3)); //8

// square root
console.log(Math.sqrt(9));  //3
console.log(Math.sqrt(90));  //9.486832980505138

//Math.abs() value

console.log(Math.abs(55.5));    //55.5
console.log(Math.abs(-55.5));   //55.5
console.log(Math.abs(-95.5));   //95.5
console.log(Math.abs(40-60));   //20


// Math.ceil()

console.log(Math.ceil(4.1));        //5
console.log(Math.round(4.1));       //4
console.log(Math.ceil(40.51));      //41
console.log(Math.round(40.51));     //41
console.log(Math.ceil(60.49));      //61
console.log(Math.round(60.49));     //60

// Math.floor()

console.log(Math.floor(10.9));//10
console.log(Math.floor(10.1));//10


// Math.min()
console.log(Math.min(10,2,50,5,8,-1,474,5,8));      //-1

// Math.max()
console.log(Math.max(10,2,50,5,8,-1,474,5,8));  //474


//Math.random(): return a random number between 0 to 1
console.log(Math.random());     //0.5821810708888016

console.log(Math.random()*10);  // 6.250728980022142

// for only intger value
console.log(Math.floor(Math.random()*10));  // any random number from 0 to 9
console.log(Math.floor(Math.random()*100));  // any random number from 0 to 99


// Math.trunc(): return only integer part of a number

console.log(Math.trunc(12.5));  //12
console.log(Math.trunc(-12.5)); //-12