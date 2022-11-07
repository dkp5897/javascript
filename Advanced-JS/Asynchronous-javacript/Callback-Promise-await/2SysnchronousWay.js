// senorio

/**
 
1.  Register

2.  Send Welcome Email

3.  Loing

4.  Get user data

5.Display user data

 */

// this function take 5 second to excute and it is synchronous funcion

function waitforFiveSecond(){
    let ms=3000+new Date().getTime();       //new date().getTime()=>give till now milisecond
    while(new Date()<ms){};
}


// Synchronous way to solve the problem

function Register() {
    waitforFiveSecond()
    console.log("Regiter end");
}

function Email() {
    waitforFiveSecond()
    console.log("Email end");
}

function Loing() {
    waitforFiveSecond()
    console.log("Login end");
}

function GetUserdata(){
    waitforFiveSecond()
    console.log("Get user data");
}

function DisplayData(){
    waitforFiveSecond()
    console.log("User data display!");
}


Register()

Email()

Loing()

GetUserdata()

DisplayData()

console.log("Other Application works !");

// waitforFiveSecond : this synchronous function block the excution of  other code

