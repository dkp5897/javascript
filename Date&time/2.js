var date =new  Date(2022,5,10,11,45,30,0);
console.log(date);          //2022-06-10T06:15:30.000Z
console.log(date.toString());   //Fri Jun 10 2022 11:45:30 GMT+0530 (India Standard Time)

date = new Date(2020, 07);
console.log(date.toString());  // Sat Aug 01 2020 00:00:00 GMT+0530 (India Standard Time)

date= new Date(2022,07,23);
console.log(date.toString());     //Tue Aug 23 2022 00:00:00 GMT+0530 (India Standard Time)


date= new Date(2022);
console.log(date.toString()); // not give correct ans because month is neccessory    //Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)\


// if i want a fixed time from my side

date = new Date("August 23,2022  11:25:00");
console.log(date.toLocaleDateString());     //23/8/2022
console.log(date.toString());       //Tue Aug 23 2022 11:25:00 GMT+0530 (India Standard Time)


// date by passing milisecond

console.log(new Date(1661247008827).toString());    //Tue Aug 23 2022 15:00:08 GMT+0530 (India Standard Time)
console.log(new Date(0).toString());    //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
