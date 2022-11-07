function display(){
    console.log('first massage');
    console.log('second massage');
}

display(); //first massage
            //second massage

//in a normal function, if we call the function then all statement in that function will excute
// if we use generater function then we have control to excute a particular statement of the function

function *generater(){
    console.log("generater first");
    yield 'Yield No-1'
    console.log("generater scond");
    yield 'Yield No-2'
    yield 'Yield No-3'
}
// generater(); // it will not give any output

let g = generater();
console.log(g.next());
console.log(g.next());

// generater first
// { value: 'Yield No-1', done: false }
// generater scond
// { value: 'Yield No-2', done: false }

// generate all the value
for(let value of g){                        
    console.log(value);     
}

// generater first
// Yield No-1
// generater scond
// Yield No-2
// Yield No-3fun