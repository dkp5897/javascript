var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

// Call: The call() method invokes a function with a given this value and arguments provided one by one

invite.call(employee1,"Hello","How are you ?");
invite.call(employee2,"Hello","How are you ?");

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

invite.apply(employee1,['Hello','How are you ?']);
invite.apply(employee2,['Hello','How are you ?']);

// bind: returns a new function, allowing you to pass any number of arguments

var bind1 = invite.bind(employee1);
var bind2 = invite.bind(employee2);

bind1("Hello","How are you ?")
bind2("Hello","How are you ?")