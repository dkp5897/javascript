    // Stepts to make an ice-cream
                            // time (second)
    //1.    plaec order        ->2
    //2.    cut the fruit      ->0
    //3.    add water and ice   ->1
    //4     Start the machine   ->1
    //5.    Select container    ->2
    //6.    Select topping      ->3
    //7.    serve ice Cream     ->2    


    let stocks = {
        Fruits : ["strawberry", "grapes", "banana", "apple"],
        liquid : ["water", "ice"],
        holder : ["cone", "cup", "stick"],
        toppings : ["chocolate", "peanuts"],
    };


    let shop_open = true;

    function order(time, work){
        return new Promise((resolve, reject) =>{

            if(shop_open){
                setTimeout( () =>{
                    resolve(work());
                },time) 
            }

            else{
                reject('Sorry Sir, our shop is closed !');
            }

        })
    }


    order(2000, () => console.log(`Order Placed ! ${stocks.Fruits[0]} was selected`))

    .then(()=>{
        return order(0000, ()=> console.log('production started...'));
    })


    .then(()=>{
        return order(1000, ()=> console.log(`The liquid ${stocks.liquid[1]} is selected`));
    })


    .then (()=>{
        return order(1000, ()=> console.log('The machine has started'));
    })


    .then (()=>{
        return order (2000,()=> console.log(`${stocks.holder[0]} is selected to fill ice-cream`));
    })


    .then (()=> {
        return order (3000,()=> console.log(`${stocks.toppings[0]} is selected as topping`));
    })


    .then(()=>{
        return order (2000,()=> console.log('Your ice-cream is served, Thank You !'));
    })


    //error handling
    .catch((error)=>{
        console.log(`${error}, Customer left!`);
    })


    // finally function : this will run wether a promise is resolve or rejected
    .finally(()=>{
        console.log('The day ended');
    })