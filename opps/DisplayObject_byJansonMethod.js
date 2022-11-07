const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person);

  console.log(myString);        //{"name":"John","age":30,"city":"New York"}