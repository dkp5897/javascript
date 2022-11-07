console.log('this is ajax');

let fetchbtn =  document.getElementById('fetchbtn');

fetchbtn.addEventListener('click',clickHandler);

function clickHandler(){
    // Instantiate an xhr  object 
    const xhr = new XMLHttpRequest();

    // open the object
    //post request : for sequerity purpose
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('content-type','application/json')

    // what to do on progress (optinal)
    xhr.onprogress = function(){
        console.log('Data in progress ..');
    }

    // ready state
    // xhr.onreadystatechange = function(){
    //     console.log('the ready state is '+xhr.readyState);
    // }

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
    params = {"name":"test","salary":"123","age":"23"}
    xhr.send(params);
}