// page login - 3second

// registration done-2 second

// you have done suuccessfully - 1 sec

// function Login(callbacks) {
//     setTimeout(()=>{
//         console.log('Page Login successfully !');
//         callbacks();
//     },3000)
// }

// function Register (callback) {
//     setTimeout(()=>{
//         console.log('Registration complected !');
//         callback();
//     },2000)
// }

// function congrate(){
//     setTimeout(()=>{
//         console.log("you have done suuccessfully");
//     },1000)
// }

// Login(function(){

//     Register(function(){

//         congrate();
//     });
// })



function Login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Page login suuccessfully !");
        resolve();
      }, 3000);
    });
  }
  
  
  function Register() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Registration complected !");
        resolve()
      }, 2000);
    });
  }
  
  
  function congrate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("you have done suuccessfully");
        resolve();
      }, 1000);
    });
  }
  
  
  Login()
      .then(Register)
      .then(congrate);