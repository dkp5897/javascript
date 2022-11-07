// console.log(window.Promise);
function googlePayDetails(){
    return new Promise((success,pending)=>{
        setTimeout(()=>{
            // success("payment is success");
            success([1,2,3]);
        },5000)
    })
}
// console.log(googlePayDetails());
googlePayDetails().then((result)=>{
      console.log(result);
});
function two(){
    console.log("two");
}
two();yes
