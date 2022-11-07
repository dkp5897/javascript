const increase = document.getElementById('btn1')
const reset = document.getElementById('btn2')
const decrease = document.getElementById('btn3')

const counter = document.querySelector('.counter')
let count = 0;
increase.addEventListener('click',function(){
    count++;
    counter.innerHTML=count;
    counter.style.color= randomRGB();
})

decrease.addEventListener('click',function(){
    count--;
    counter.innerHTML=count
    counter.style.color= randomRGB();
})

reset.addEventListener('click',function(){
    count=0
    counter.innerHTML=count;
    counter.style.color= 'black'
})


// generating random colors
function randomNum(){
    return Math.floor((Math.random())*255+1)
}
function randomRGB(){
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`
}

