window.onload=() => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip(){
    const bill=document.querySelector('#billamt').value;
    const tipPerecentage=document.querySelector('#serviceQual').value;
    const person= document.querySelector('#peopleamt').value;

    if(bill===''){
        alert('Please Enter Bill Amount');
        return;
    }
    if(tipPerecentage==='choose'){
        alert('Please choose tipPerecentage');
        return;
    }
    else if(person===''){
        alert('Please Enter total number of person');
        return;
    }
    if(person==='1'){
        document.querySelector('#each').style.display='none';
    }
    else{
        document.querySelector('#each').style.display='inline';
    }
    var tip=(bill*tipPerecentage)/person;
    tip=tip.toFixed(2);
    document.getElementById('total').innerHTML=tip;
}

