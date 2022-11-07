
function prom (a,b){
    return new Promise(function(resolve, reject){
        // for pendding time
        console.log("Fatching data, please wait...");
        var c = a/b;
        setTimeout(() =>{
            if(a,b){
                resolve(`Your answer : ${c}`);
            }
            else{
                reject("Can't calculate !");
            }
        },3000);
    });
}
    // calling prom function by using inbuilt callback function
    prom(5,0).then( (success) =>{
        console.log(success);
    }).catch((error) =>{
        console.log(error);
    });  
    
// Output:-
// Fatching data, please wait...
// Can't calculate !    