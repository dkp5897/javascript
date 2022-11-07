// senorio

/**
 
1.  Register

2.  Send Welcome Email

3.  Loing

4.  Get user data

5.Display user data

 */

// Synchronous way to solve the problem

function Register() {
    setTimeout(() => {
        console.log("Regiter end");
    }, 2000);
}

function Email() {
    setTimeout(()=>{
        console.log("Email end");
    },1000)
}

function Loing() {
    setTimeout(()=>{
        console.log("Login end");
    },1000)
}

function GetUserdata(){
    setTimeout(()=>{
        console.log("Get user data");
    },1000)
}

function DisplayData(){
    setTimeout(()=>{
        console.log("User data display!");

    },1000)
}  

Register()

Email()

Loing()

GetUserdata()

DisplayData()


console.log("Other Application works !");

// output:-
// Other Application works !
// Regiter end
// Email end
// Login end
// Get user data
// User data display!


// now our other application works is not blocking because we use asynchronous function here
