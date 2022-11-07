async function display(){
    let promise=new Promise(function(resolve,reject){
        resolve("I Love You !");
    });
    console.log(await promise);
}
display();