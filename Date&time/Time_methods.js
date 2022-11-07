let time = new Date();

console.log(time.getTime());        //1661248009752
console.log(time.getHours());       //15
console.log(time.getMinutes());     //16
console.log(time.getSeconds());     //49




//================================================================================//
let curTime = new Date();

console.log(curTime.setHours(5));           //1661212482604
console.log(curTime.setMinutes(5));         //1661211342604
console.log(curTime.setSeconds(5));         //1661211305604
console.log(curTime.setMilliseconds(5));    //1661211305005

//==================================================================================//

console.log(new Date().toLocaleDateString());       //23/8/2022
console.log(new Date().toLocaleTimeString());       //3:31:50 pm
console.log((new Date().toLocaleString()));         //23/8/2022, 3:31:50 pm