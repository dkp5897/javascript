
function prom (value){
    return new Promise(function(resolve, reject){
        // for pendding time
        console.log("Fatching data, please wait...");
        setTimeout(() =>{
            if(value){
                resolve("I am successfull!");
            }
            else{
                reject("I am failed!");
            }
        },3000);
    });
}

    // calling prom function by using inbuilt callback function
    prom(true).then( (success) =>{
        console.log(success);
    }).catch((error) =>{
        console.log(error);
    });  
    
// Output:-
// Fatching data, please wait..
// I am successfull!