// myFunction().then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );


async function display(){
    return "Hello World!"
}

display().then(
    function(value) {display(value)},
    function(error) {display(error)}
)
console.log(display());