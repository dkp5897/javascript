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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Regiter end");
      resolve();
    }, 1000);
  });
}

function Email() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      resolve();
    }, 2000);
  });
}

function Loing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 5000);
  });
}

function GetUserdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data");
      resolve();
    }, 1000);
  });
}

function DisplayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User data display!");
            resolve();
          }, 1000);
    })
}

// Register()
// .then(()=>{})   //basic syntax


Register()
    .then(Email)
    .then(Loing)
    .then(GetUserdata)
    .then(DisplayData);


console.log("Other Application works !");

// Output:-
// Other Application works !
// Regiter end
// Email end
// Login end
// Get user data
// User data display!

// now our problem is solved
// now we have to handle error so go to in next ...