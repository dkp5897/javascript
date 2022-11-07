console.log('This is ajax-2');

let fetchbtn = document.getElementById('fetchbtn');

fetchbtn.addEventListener('click',clickHandler);

function clickHandler(){
   let xhr  = new XMLHttpRequest();

   // open the object
   //true:- for asynchronous mode
   xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

   //false- for synchronous mode
//    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',false);


   //onprogress
   xhr.onprogress = function(){
    console.log('Data fetching is in progress...');
   }

   //display data
   xhr.onload = function(){
    console.log(xhr.responseText);
   }

   //sending request
   xhr.send();

   console.log("All Done !");
}