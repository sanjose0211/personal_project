const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

function addButton(){
    if (taskInput.value.trim() !== ""){
        const newTask=document.createElement("li");
        newTask.textContent=taskInput.value;
        // TODO: textContent?
        taskList.appendChild(newTask);
        taskInput.value="";
    } 
}