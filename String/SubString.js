// it is similsr to slice but we cannot pass negative agruments;

let fruet='banana, apple, mango';

let ans = fruet.substring(0,6);
console.log(ans);

 ans = fruet.substring(7);  // print from index 7 to infinite
 console.log(ans);


 ans = fruet.substring(7,-2); // print from 0 to 7 index
 console.log(ans);