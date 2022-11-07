function parent(){
    console.log("parent");
  // return ["1,2,3"];
  // return {employee:"details"};
  // return 23;
  // return "akash";
  // return true;
  return function child(){
             console.log("child");
  }
}
// let parentResult = parent();
// parentResult();
parent()();

// parent
// child