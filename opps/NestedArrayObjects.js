// Values in objects can be arrays, and values in arrays can be objects:

const myObj = {
    name : "Deepak Kumar",
    age  : 25,
    cars : [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

// access properties
let carName=" "
for(let elements in myObj.cars){
    carName+=myObj.cars[elements].name+" ";
}
console.log(carName);       //  Ford BMW Fiat 

// access cars model
let carModel="";
for(let i in myObj.cars){
    for(let j in myObj.cars[i].models){
        carModel+=myObj.cars[i].models[j]+" ";
    }
}
console.log(carModel);  //Fiesta Focus Mustang 320 X3 X5 500 Panda 

//assecc all properties

let car="";
let model=""

for(let i in myObj.cars){
    car+=myObj.cars[i].name+" ";
    for(let j in myObj.cars[i].models){
        model+=myObj.cars[i].models[j]+' ';
    }
}

console.log(car);       //Ford BMW Fiat
console.log(model);     //Fiesta Focus Mustang 320 X3 X5 500 Panda