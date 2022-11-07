// Sometimes you would like to have better control over when to execute a function.

// function display(answer){
//     console.log(`Your answer is ${answer}`);
// }

// function add(a,b){
//     let ans=a+b;
//     return ans;
// }

// let ans=add(10,20);
// display(ans); //Your answer is 30
// The problem with the first example above, is that you have to call two functions to display the result.

//========================================================================================
// function display(answer){
//     console.log(`Your answer is ${answer}`);
// }

// function add(a,b){
//     let ans=a+b;
//     display(ans)
// }

// add(10,20);//Your answer is 30

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
//=============================================================================================
function display(answer){
    console.log(`Your answer is ${answer}`);
}

function add(a,b,show){
    let ans=a+b;
    show(ans);
}

add(10,20,display);//Your answer is 30