const person = {
    firstName:"Deepak",
    lastName: "Kumar",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Pradeep",
    lastName: "Kumar",
  }

  let fullName = person.fullName.bind(member);

  console.log(fullName());      //Pradeep Kumar