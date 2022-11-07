  						
  						            ---------------------> Date <--------------------

JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.  						            


Date format and time zone conversions:-

There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. 
Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard 
time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian 
that includes London—and nearby Greenwich—in the United Kingdom.) The user s device provides the local time.



Constructor:-

Date()
When called as a function, returns a string representation of the current date and time. All arguments are ignored. 
The result is the same as executing new Date().toString().

new Date()
When called as a constructor, returns a new Date object.



Static methods:-

Date.now()
Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 
1, 1970 00:00:00 UTC, with leap seconds ignored.

Date.parse()
Parses a string representation of a date and returns the number of milliseconds since 1 January, 
1970, 00:00:00 UTC, with leap seconds ignored.


Date.UTC()
Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.



Instance methods:-


Date.prototype.getDate()
Returns the day of the month (1–31) for the specified date according to local time.

Date.prototype.getDay()
Returns the day of the week (0–6) for the specified date according to local time.

Date.prototype.getFullYear()
Returns the year (4 digits for 4-digit years) of the specified date according to local time.

Date.prototype.getHours()
Returns the hour (0–23) in the specified date according to local time.

Date.prototype.getMilliseconds()
Returns the milliseconds (0–999) in the specified date according to local time.

Date.prototype.getMinutes()
Returns the minutes (0–59) in the specified date according to local time.

Date.prototype.getMonth()
Returns the month (0–11) in the specified date according to local time.

Date.prototype.getSeconds()
Returns the seconds (0–59) in the specified date according to local time.

Date.prototype.getTime()
Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. 
(Negative values are returned for prior times.)

Date.prototype.getTimezoneOffset()
Returns the time-zone offset in minutes for the current locale.

Date.prototype.getUTCDate()
Returns the day (date) of the month (1–31) in the specified date according to universal time.

Date.prototype.getUTCDay()
Returns the day of the week (0–6) in the specified date according to universal time.

Date.prototype.getUTCFullYear()
Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

Date.prototype.getUTCHours()
Returns the hours (0–23) in the specified date according to universal time.

Date.prototype.getUTCMilliseconds()
Returns the milliseconds (0–999) in the specified date according to universal time.

Date.prototype.getUTCMinutes()
Returns the minutes (0–59) in the specified date according to universal time.

Date.prototype.getUTCMonth()
Returns the month (0–11) in the specified date according to universal time.

Date.prototype.getUTCSeconds()
Returns the seconds (0–59) in the specified date according to universal time.

Date.prototype.getYear()
Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.

Date.prototype.setDate()
Sets the day of the month for a specified date according to local time.

Date.prototype.setFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

Date.prototype.setHours()
Sets the hours for a specified date according to local time.

Date.prototype.setMilliseconds()
Sets the milliseconds for a specified date according to local time.

Date.prototype.setMinutes()
Sets the minutes for a specified date according to local time.

Date.prototype.setMonth()
Sets the month for a specified date according to local time.

Date.prototype.setSeconds()
Sets the seconds for a specified date according to local time.

Date.prototype.setTime()
Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. 
Use negative numbers for times prior.

Date.prototype.setUTCDate()
Sets the day of the month for a specified date according to universal time.

Date.prototype.setUTCFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

Date.prototype.setUTCHours()
Sets the hour for a specified date according to universal time.

Date.prototype.setUTCMilliseconds()
Sets the milliseconds for a specified date according to universal time.

Date.prototype.setUTCMinutes()
Sets the minutes for a specified date according to universal time.

Date.prototype.setUTCMonth()
Sets the month for a specified date according to universal time.

Date.prototype.setUTCSeconds()
Sets the seconds for a specified date according to universal time.

Date.prototype.setYear()
Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.

Date.prototype.toDateString()
Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.

Date.prototype.toISOString()
Converts a date to a string following the ISO 8601 Extended Format.

Date.prototype.toJSON()
Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

Date.prototype.toGMTString()
Returns a string representing the Date based on the GMT (UTC) time zone. Use toUTCString() instead.

Date.prototype.toLocaleDateString()
Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

Date.prototype.toLocaleString()
Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

Date.prototype.toLocaleTimeString()
Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

Date.prototype.toString()
Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

Date.prototype.toTimeString()
Returns the "time" portion of the Date as a human-readable string.

Date.prototype.toUTCString()
Converts a date to a string using the UTC timezone.

Date.prototype.valueOf()
Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.





-----> There are four way to create a new date objects

new Date()

new Date(year, month, day, hour, minute, second, milisecond) // we cannot avoid month

new Date(milisecond)

new Date(date string)



------------------------------------------------------------------------------------------------------------


console.log(new Date());    //2022-08-23T07:40:39.872Z

console.log(new Date().toLocaleString());       //23/8/2022, 1:11:45 pm

console.log(new Date().toString());   //Tue Aug 23 2022 13:12:14 GMT+0530 (India Standard Time)

console.log(Date());    //Tue Aug 23 2022 13:12:54 GMT+0530 (India Standard Time)


// Date.now(): return miliseconds since jan 01, 1970 to till now
console.log(Date.now());        // 1661240752298 milisecond from 1 jan,1970 to till code running

------------------------------------------------------------------------------------------------------------


var date =new  Date(2022,5,10,11,45,30,0);
console.log(date);          //2022-06-10T06:15:30.000Z
console.log(date.toString());   //Fri Jun 10 2022 11:45:30 GMT+0530 (India Standard Time)

date = new Date(2020, 07);
console.log(date.toString());  // Sat Aug 01 2020 00:00:00 GMT+0530 (India Standard Time)

date= new Date(2022,07,23);
console.log(date.toString());     //Tue Aug 23 2022 00:00:00 GMT+0530 (India Standard Time)


date= new Date(2022);
console.log(date.toString()); // not give correct ans because month in neccessory    //Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)\


// if i want a fixed time from my side

date = new Date("August 23,2022  11:25:00");
console.log(date.toLocaleDateString());     //23/8/2022
console.log(date.toString());       //Tue Aug 23 2022 11:25:00 GMT+0530 (India Standard Time)


// date by passing milisecond

console.log(new Date(1661247008827).toString());    //Tue Aug 23 2022 15:00:08 GMT+0530 (India Standard Time)
console.log(new Date(0).toString());    //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)



------------------------------------------------------------------------------------------------------------



let date = new Date();

console.log("full date and time: ",date.toLocaleString());      //full date and time:  23/8/2022, 3:07:16 pm
console.log("year: ",date.getFullYear());       //year:  2022
console.log("month: ",date.getMonth());     //month:  7
console.log("Date: ",date.getDate());       //Date:  23
console.log("Day: ",date.getDay());     //Day:  2

console.log("milisecond: ",date.getTime());     //milisecond:  1661247436651


------------------------------------------------------------------------------------------------------------

let date = new Date();

console.log(date.setFullYear(2022,07,23).toString());
console.log(date.setDate(12).toString());



------------------------------------------------------------------------------------------------------------

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
console.log(curTime.setMilliseconds(5));            //1661211305005

//==================================================================================//

console.log(new Date().toLocaleDateString());       //23/8/2022
console.log(new Date().toLocaleTimeString());       //3:31:50 pm
console.log((new Date().toLocaleString()));     //23/8/2022, 3:31:50 pm


------------------------------------------------------------------------------------------------------------

