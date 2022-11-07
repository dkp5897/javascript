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

function order (fruit_name , call_production){
    setTimeout(() => {
        console.log(`Order placed, ${stocks.Fruits[fruit_name]} was selcted`);
       
        call_production();
    },2000)

} 

function production() {
    setTimeout(() => {
        console.log('production has started...');

        setTimeout(() => {
            console.log(`The liquid ${stocks.liquid[1]} is selected`);

            setTimeout(() => {
                console.log('The machine has started');

                setTimeout(() => {
                    console.log(`${stocks.holder[0]} is selected to fill ice-cream`);
                    
                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} is selected as topping`);

                        setTimeout(()=>{
                            console.log('Your ice-cream is served, Thank You !');
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
    },0000)
}

order(1,production);