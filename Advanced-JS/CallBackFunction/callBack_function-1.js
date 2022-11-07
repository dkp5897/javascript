// If a function (any type of function) passed as an arguments the it is known as callback function.

//calback function
function show(){
    console.log("I am a callback function");
}

// main function in which a function is passed as an arguments
function main(callback){
    callback();
}
main(show);