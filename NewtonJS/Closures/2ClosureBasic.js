 //higer order function
 function parent(){
    console.log("parent");
    let address = "bangalore";
  // return ["1,2,3"];
  // return {employee:"details"};
  // return 23;
  // return "akash";
  // return true;
  //return function
  return function child(){
             console.log("child");
             console.log(address);
  }
}
// let parentResult = parent();
// parentResult();
parent()();

// parent
// child
// bangalore