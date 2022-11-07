
// a synchronous function which is excute after 7 second

console.log('hello world');

function waitforSevenSecond(){
    let ms=7000+new Date().getTime();       //new date().getTime()=>give till now milisecond
    while(new Date()<ms){};
}

waitforSevenSecond();
// asynchronous function
setTimeout(function(){
    console.log('I am the output of setInterval!');
},7000)


function add(a,b){
    console.log(a+b);
}
add(14,26);
