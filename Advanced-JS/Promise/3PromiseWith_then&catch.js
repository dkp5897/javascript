
function prom(value){
    return new Promise(function(resolve, reject){
        if(value){
            resolve("I am successfull!");
        }
        else{
            reject("I am failed!");
        }
    });
}

let onfulfilment = (success) =>{
    console.log(success);
}

let onRejection = (error) =>{
    console.log(error);
}

// calling prom function by using inbuilt callback function
prom(true).then(onfulfilment);  //I am successfull!
prom(false).catch(onRejection); //I am failed!