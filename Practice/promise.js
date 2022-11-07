// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am Promise")
//         reject("Error")
//     },3000)
// })

// p1.then((result) => console.log(result))

// const p2 = new Promise(
//     (resolve)=>{
//         setTimeout(()=>{
//             console.log("Promise resolved")
//         },2000)
//     },

//     (reject)=>{
//         console.log("Error")
//     }
// )

// p2.then((res)=> console.log(res))
// .catch((error)=>console.log(error))

// const value = true

// const p3 = new Promise((resolve,reject)=>{
//     if(value){
//         resolve("I am resolved")
//     }else{
//         reject("I am rejected")
//     }
// })

// console.log(p3)

// // p3.then((res)=> console.log(res))
// // .catch((error)=> console.log(error))

// const fetchData = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((r)=> r.json()
//     .then((res)=>{
//         console.log(res)
//     }))         
// }

// const getPromise = (value) =>{
//     return new Promise((resolve,reject)=>{
//         console.log("fetching data, please wait...")
//         setTimeout(()=>{
//             if(value){
//                 resolve("Promise resolved")
//                 // fetchData()
//             }else{
//                 reject("Primise rejected")
//             }
//         },3000)
//     })
// }

// getPromise(true).then((res)=> console.log(res))
// .catch((error)=> console.log(error))

// const division = (a,b) =>{
//     return new Promise((resolve,reject)=>{
//         console.log("Please wait calculating....")
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`Your Answer is ${a/b}`)
//             }else{
//                 reject("This can not be calculated")
//             }
//         },3000)
//     })
// }

// division(18,0).then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("first promise is resolved")
//         resolve(10)
//     },1000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         return reject("Second promise is failed..")
//         console.log("second promise is resolved")
//         resolve(40)
//     },2000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("third promise is resolved")
//         resolve(10)
//     },4000)
// })

// let sum = 0
// Promise.all([p1,p2,p3]).then((result)=>{
//     for(let i in result){ 
//         sum+=result[i]
//     }
//     console.log(`Results: ${sum}`)
// }).catch((error)=>{
//     console.log(`error:${error}`)
// })

// const promisecall = (returnData,massage)=>{
//     return function(resolve,reject){
//         setTimeout(()=>{
//             console.log(`The ${massage} has resolved`)
//             resolve(returnData)
//         },returnData*10)
//     }
// }

// const pm1 = new Promise(promisecall(100,"first"))
// const pm2 = new Promise(promisecall(400,"second"))
// const pm3 = new Promise(promisecall(200,"third"))

// let summ = 0

// Promise.all([pm1,pm2,pm3]).then((result)=>{
//     for(let i in result){
//         summ += result[i]
//     }
//     console.log(result)
//     console.log(summ)
// })
// .catch((error)=>{
//     console.log(error)
// })


// function Login(callback){
//     setTimeout(()=>{
//         console.log(`Page login successfully !`)
//         callback()
//     },2000)
// }

// function Register(callback){
//     setTimeout(()=>{
//         console.log(`Registration completed !`)
//         callback()
//     },1000)
// }

// function congrate(callback){
//     setTimeout(()=>{
//         console.log(`Congratulation !`)
//         callback()
//     },3000)
// }

// function product(){
//     setTimeout(()=>{
//         console.log(`Your product is here !`)
//     },2000)
// }


// Login(function(){
//     Register(function(){
//         congrate(function(){
//             product()
//         })
//     })
// })

// console.log(`Other work!`)


// function Login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Login successefylly!`)
//             resolve()
//         },2000)
//     })
// }

// function Register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Register successefylly!`)
//             resolve()
//         },1000)
//     })
// }

// function congrate(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`congratulation !`)
//             resolve()
//         },3000)
//     })
// }

// function product(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Your product is here !`)
//             resolve()
//         },2000)
//     })
// }

// Login()
//     .then(Register)
//     .then(congrate)
//     .then(product)


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

function oredr(fruit_name,call_production){
    setTimeout(()=>{
        console.log(`Order placed!, ${stocks[fruit_name]} was selected`)
        call_production()
    },2000)
}


function production(){
    setTimeout(()=>{
        console.log(`production has satarted....`)

        setTimeout(()=>{
            console.log(`liquid ${stocks.liquid[1]} was selcted!`)

            setTimeout(()=>{
                console.log("machine has started!")

                setTimeout(()=>{
                    console.log(`${stocks.holder[1]} is selected as container!`)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} is selected as topping`)

                        setTimeout(()=>{
                            console.log(`Your ice-creame is served, Thank You !`)
                        },3000)
                    },1000)
                },2000)
            },1000)
        },2000)
    },1000)
}

oredr(2,production)