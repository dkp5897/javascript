console.log('this is ajax');


let fetchbtn =  document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',clickHandler);

function clickHandler(){
    // Instantiate an xhr  object 
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET','content/superhero.JSON', true);

    // what to do on progress (optinal)
    xhr.onprogress = function(){
        console.log('Data in progress ..');
    }


    // what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('demo').innerHTML= this.responseText
            console.log(this.responseText);
        }
        else{
            console.log("some error occured");
        }
    }

    // send the request
    xhr.send();
}

// https://jsonplaceholder.typicode.com/posts
let populate =  document.getElementById('populate');
populate.addEventListener('click',populateHandler);

function populateHandler(){
    console.log('You have clicked the object');

     // Instantiate an xhr  object 
     const xhr = new XMLHttpRequest();

     // open the object
     xhr.open('GET','https://jsonplaceholder.typicode.com/posts', true);
 
     
 
     // what to do when response is ready
     xhr.onload = function(){
         if(this.status === 200){
             let obj = JSON.parse(this.responseText)
             console.log(obj);
             let list = document.getElementById('list');
             let str = "";
             for(key in obj){
                str+=`<li>${obj[key].title}</li>`;
             }
             list.innerHTML=str;
         }
         else{
             console.log("some error occured");
         }
     }
 
     // send the request
     xhr.send();
}