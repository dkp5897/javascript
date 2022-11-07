function *genrater(){
    let nextNum = 300;
while(true){
    yield(nextNum++)
}
}

let g =genrater();
for(let value of g){
   if(value>310)
   break;
   console.log(value);
}