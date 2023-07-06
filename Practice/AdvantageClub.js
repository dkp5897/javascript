var list = [
  { date: "12/1/2011", reading: 3, id: 20055 },
  { date: "13/1/2011", reading: 5, id: 20053 },
  { date: "14/1/2011", reading: 6, id: 45652 },
  { date: "13/1/2011", reading: 5, id: 20051 },
];

// list = [
//   { date: "12/1/2011", reading: 3, id: 20055 },
//   { date: "13/1/2011", reading: 5, id: 20053 },
//   { date: "14/1/2011", reading: 6, id: 45652 },
//   { date: "13/1/2011", reading: 5, id: 20051 },
// ];

// function  Filter(list,keyName,value){
//     //your code herereturn outputList;
// }

function  customFilter(list,KeyName,value){
    //your code here
    const outputlist = list.filter((e)=>{
        return e[KeyName] == value;
    })

    return outputlist;
}

console.log(customFilter(list,'reading','5'));