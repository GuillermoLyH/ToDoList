//Setting all HTML elemts to JS elements
const RmvBtn = document.querySelector(".red");
const AddBtn = document.querySelector(".small");
const InputToDo = document.querySelector(".todo-input");
const LiTask = document.querySelector(".task");
const orderLi = document.querySelector(".things-list");
const ClearBtn = document.querySelector(".large");

//Event to add a new task to the queue
AddBtn.addEventListener("click", function () {
  const task = document.createElement("li");
  task.classList.add("task");
  const node = document.createTextNode(InputToDo.value);
  task.appendChild(node);
  const ElementParent = document.querySelector(".things-list");
  const ChildElement = document.querySelector(".task");
  ElementParent.insertBefore(task, ChildElement);

  //get element
  var height = document.querySelector(".main-div").style.height;
  //transform element from string to integer
  height = height.replace("px", "");
  height = 360;
  height += 5;

  //change height
 // var n = height;
 // height = n + 5 + 'px';
  document.querySelector(".main-div").style.height = height;

  console.log("this works = " + height);

  
  
  
});


/*
function resize() {
    let height = document.querySelector(".main-div").style.height;

    height = height.replace("px", "");
    height =+ height;

    const n = height;
    height = n + 5 + 'px';
    document.querySelector(".main-div").style.height = height;
}
*/

//Function to remove all to do task's
function removeAllTasks(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    //document.querySelector(".dynamic").style = 'margin-top: 63px';
  }
}

//Function to remove only the line-through task's
function removeOnlyLineThrough(parent) {
  const LiTask = document.querySelector(".task");
  if (LiTask.style.textDecoration === "line-through") {
    parent.removeChild(LiTask);
    console.log("This works");
  } else {
    alert("You dont have task's completed!");
    console.log("Alert displayed");
  }
}

//Event listener for "Empty list" button
RmvBtn.addEventListener("click", function () {
  parent.removeAllTasks(orderLi);
});

//Event listener for "Clear completed" button
ClearBtn.addEventListener("click", function () {
  parent.removeOnlyLineThrough(orderLi);
});

//Event that write a line-through the task that is completed
orderLi.addEventListener("dblclick", function (event) {
  event.target.style.textDecoration = "line-through";
});

/*
--double click para desmarcar actividad marcada como terminada
--Arreglar clear completed btn cuando no hay ninguna task
--Arreglar clear cmpleted para que borre no solo el primer elemento marcado sino que todos
--Aumentar tamañano del contenedor a medida que se agreguen nuevas tasks
--Agregar funcionalidad de save list
*/
