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
        return reject('error while email sending..')
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
      }, 2000);
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
  
 
  
//   Register()
//       .then(Email)
//       .then(Loing)
//       .then(GetUserdata)
//       .then(DisplayData);
  
  
// use async.await to display output 
// it's look like sysnchronous code

// error handling : method-1 using try{} catch(()=>{})
async function Authenticate(){
    try{
        await Register();
        await Email();
        await Loing();
        await GetUserdata();
        await DisplayData();
    } catch(err){
        console.log(err);
    }
}

Authenticate();

// an async return promise by default so we can apply then here

// to handle error add catch function here: method-2
// Authenticate().then(()=>{
//     console.log('All Set!');
// }).catch((err)=>{
//     console.log("Error: "+err);
// });


  console.log("Other Application works !");

// Output:-
// Other Application works !
// Regiter end
// Error: error while email sending..