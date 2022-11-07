// senorio

/**
 
1.  Register

2.  Send Welcome Email

3.  Loing

4.  Get user data

5.Display user data

 */

// Synchronous way to solve the problem

function Register(callback) {
  setTimeout(() => {
    console.log("Regiter end");
    callback();
  }, 1000);
}

function Email(callback) {
  setTimeout(() => {
    console.log("Email end");
    callback();
  }, 2000);
}

function Loing(callback) {
  setTimeout(() => {
    console.log("Login end");
    callback();
  }, 5000);
}

function GetUserdata(callback) {
  setTimeout(() => {
    console.log("Get user data");
    callback();
  }, 1000);
}

function DisplayData() {
  setTimeout(() => {
    console.log("User data display!");
  }, 1000);
}

Register(function () {

  Email(function () {

    Loing(function () {

      GetUserdata(function () {

        DisplayData();

      });

    });

  });

});

console.log("Other Application works !");
