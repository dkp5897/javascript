// function is an specific block of code which is used to perform a specific task

/* Syntax: function function_name(arguments){

    }
*/


// function define,  no need to give parameter objects (let,var,const)

function sum( a, b){
    var sum=a+b;
    return sum;
}

// function calling
console.log(sum(10,20));        // here we passing arguments
console.log(sum(10,"man"));
console.log(sum("deepak",20));
console.log(sum("Deepak ","Kumar"));
console.log(sum(true,true));



// function expression : function expression mean simple creat a function and put it into a variable

var funEpx=sum(100,200);
// call expression
console.log(funEpx);


// Anonymous function: a funtion without name is known as anonymous function

// Anonymous function expression: when we assign a anonymous function to a variable the it know AFE.

var afunExp=function (a,b){
    return a-b;
}

// call AFE
console.log(afunExp(50,20));

var ans=afunExp(40,25);
console.log(ans);



// Default parameters: if we pass only one arguments then it will use default parameter b=5 otherwise it will run normally

function mul(a, b=5){
    return a*b;
}
console.log(mul(4,8));