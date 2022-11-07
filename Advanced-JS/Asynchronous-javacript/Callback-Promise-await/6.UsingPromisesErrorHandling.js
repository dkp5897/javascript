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
        // return reject("Error while registering...")
        console.log("Regiter end");
        resolve();
      }, 1000);
    });
  }
  
  function Email() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return reject("error while email sending..")
        console.log("Email end");
        // resolve();
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
    setTimeout(() => {
      console.log("User data display!");
    }, 1000);
  }
  
  // Register()
  // .then(()=>{})   //basic syntax
  
  
  Register()
      .then(Email)
      .then(Loing)
      .then(GetUserdata)
      .then(DisplayData)
      .catch((err)=>{
        console.log("Error: "+err);
      })
  
  
  console.log("Other Application works !");