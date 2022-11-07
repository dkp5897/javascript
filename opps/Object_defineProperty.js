const person = {
    name: "Deepak Kumar",
    age:    25,
    language: "No"
};

Object.defineProperty(person,"language", {
    value: 'Hindi',
    writable : true,
    enumerable : true,                              //false=> to hide the propety,
    configurable : true
})

let boiData = "";

for(let element in person){
    boiData+=person[element]+" ";
}

console.log(boiData); //Deepak Kumar 25 Hindi 




//This example creates a setter and a getter to secure upper case updates of language:

Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });

//change language
person.language="hindi"
console.log(person.language);  //HINDI

console.log(person);
// { name: 'Deepak Kumar', age: 25, language: [Getter/Setter] }


