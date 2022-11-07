//  let input = "programming";
//  let input = "Programming";
//  let result = /programming/ig.test("programming");      //return boolean 
//  console.log(result);


//  let sentence = "welcome to programming";
//  let result = sentence.replaceAll(/Programming/ig,function(){
//            console.log("match found")
//  });

 let section = new RegExp("programming","ig");
 console.log(section);      ///programming/gi


 let result = section.test("programming");
 console.log(result);       //true