
let btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click",function(){
    let rgb = randomRGB()
   document.body.style.backgroundColor= rgb;
   color.textContent=rgb;

   btn.style.backgroundColor=rgb

})

function randomNumber(){
    return Math.floor(Math.random()*255+1)
}

function randomRGB(){
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
}

randomRGB()