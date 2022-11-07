function onButtonHandler(event){
    var inputOne=document.getElementById('inputOne');
    var inputTwo=document.getElementById('inputTwo');

    if(!inputOne.innerHTML){    // if box is empty
        inputOne.innerHTML=event.target.id;
    }
    else if(!inputTwo.innerHTML){   // if box is empty
        inputTwo.innerHTML=event.target.id;
    }
}

function onSubmitHandler(event){
    
    var inputOne=document.getElementById('inputOne').innerHTML;
    var inputTwo=document.getElementById('inputTwo').innerHTML;
    var result=document.getElementById('result');

    inputOne = parseInt(inputOne)?parseInt(inputOne):0;
    inputTwo = parseInt(inputTwo)?parseInt(inputTwo):0;

    var list=document.getElementById('symbol');
    if(event.target.id=='add'){
        list.innerHTML = '+';
        result.innerHTML=inputOne+inputTwo;
    }
    else if(event.target.id=='sub'){
        list.innerHTML = '-';
        result.innerHTML=inputOne-inputTwo;
    }
    else if(event.target.id=='mul'){
        list.innerHTML = '*';   
        result.innerHTML=inputOne*inputTwo;          
    }
    else if(event.target.id=='div'){
        list.innerHTML = '/';
        result.innerHTML=inputOne/inputTwo;
    }
}