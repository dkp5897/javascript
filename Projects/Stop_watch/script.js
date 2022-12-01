const sec = document.getElementById('sec')
const min = document.getElementById("min")
const hour = document.getElementById("hr")

const start = document.getElementById('start')
const pause = document.getElementById('stop')
const reset = document.getElementById('reset')

console.log(sec)
let stopInterval=''
var second = 00
var minut = 00
var hours = 00




const startWatch = () =>{
    // console.log(second)
    stopInterval= setInterval(()=>{
        second+=1
        if(second<=9){
            sec.innerHTML="0"+second
        }
        if(second>9){
            sec.innerHTML= second
        }
       
        if(second==60){
            second=00
            minut+=1
            if(minut<=9){
                min.innerHTML= "0" +minut
            }if(minut>9){
                min.innerHTML=minut
            }
        }
        if(minut>59){
            minut=00;
            hours+=1
            if(hours<=9){
                hour.innerHTML='0'+hours
            }else{
                hour.innerHTML=hours
            }
        }
    },1000)
    
}

start.addEventListener('click',startWatch)
pause.addEventListener('click',()=>{
    clearInterval(stopInterval)
})

reset.addEventListener('click',()=>{
    clearInterval(stopInterval)
    second=00;
    minut=00
    hours=00
    sec.innerHTML="00"
    min.innerHTML="00"
    hour.innerHTML="00"
})