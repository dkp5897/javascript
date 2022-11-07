
function prom (value){
    return new Promise(function(resolve, reject){
        // for pendding time
        console.log("Fatching data, please wait..");
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

    let onfulfilment = (success) =>{
        console.log(success);
    }
    
    let onRejection = (error) =>{
        console.log(error);
    }
    
    // calling prom function by using inbuilt callback function
    prom(true).then(onfulfilment);  //I am successfull!
    prom(false).catch(onRejection); //I am failed!


// Output:-
// Fatching data, please wait..
// Fatching data, please wait..
// I am successfull!
// I am failed!