

let taskNote = document.getElementById("pad");
// console.log(taskNote);
let ul = document.getElementById("task-list");

function addTask() {
  if (taskNote.value != "") {
    let task = taskNote.value;
    let list = document.createElement("li");
    list.append(task);
    ul.appendChild(list);
    list.setAttribute("id", taskNote.value);
    taskNote.value = "";
    // task="";
  }
}

function removeTask() {
  if(taskNote.value!=""){

    let items = document.getElementById(taskNote.value);
    ul.removeChild(items);
    taskNote.value = "";
    
  }
  else{
    
      let taskContainer = document.querySelectorAll('#task-list li');
      let arr=Array.from(taskContainer);
      arr[arr.length-1].remove();
    
  }
}

