const arr1=[4,2,5,6];
const arr2=[14,2,5,3];
const arr=[...arr1,...arr2];
console.log(arr);
//The spread operator is often used in combination with destructuring.

const [var1,var2,...ans]=arr;

console.log(var1,var2);

console.log(ans);


//We can use the spread operator with objects too:

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle);