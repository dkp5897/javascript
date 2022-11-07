// The fetch() method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

// Syntax:

// fetch('url')           //api for the get request
//   .then(response => response.json())
//   .then(data => console.log(data));

// Parameters: This method accepts two parameters as mentioned above and described below:

// URL: It is the URL to which the request is to be made.
// Options: It is an array of properties. It is an optional parameter.
// Return Value: It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an array of objects or simply a single object.

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", fetchHandler);
// function fetchHandler() {
//   // API for get requests
//   let myFetch = fetch("content/myData.txt");

//   // fetch() return a promis so resolve this use then()

//   myFetch
//     .then(function (response) {
//       //then function also return a promise and we have to use one more then to display data
//       return response.text();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// ==========================================================================
// function fetchHandler(){
//     fetch('content/myData.txt')
//         .then((response)=> response.text())
//         .then((data)=>{console.log(data);})
// }

// =================================================================================

// function fetchHandler(){
//     fetch('content/superhero.JSON')
//         //if you want data in text formate then use response.text()
//         // .then(response => response.json())
//         .then(response => response.text())
//         .then(data =>{console.log(data)})
// }

// ========================================================================================

// for error handling
// function fetchHandler(){
//     fetch('content/superhero.JSON')
//     // for cheching error give wrong address
//         .then(response => response1.text())
//         .then(data => console.log(data))
//         .catch(error => console.log(`Error while fetching: ${error}`));
// }

//==========================================================================================

// for dispaly data on page 

function fetchHandler(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            let list = document.getElementById('list');
            let dataList="";
            for(let x in data){ 
                // list.innerHTML+=`<li>${data[x].id} - ${data[x].name} - ${data[x].email} - ${data[x].address.city} </li>`
                dataList +=`<li>${data[x].id} - ${data[x].name} - ${data[x].email} - ${data[x].address.city} </li>`
            }
            list.innerHTML=dataList
        })
        
}