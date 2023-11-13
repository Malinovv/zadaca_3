let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

function onClickCreateTask() {
  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  let checkBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let checkBtnIcon = document.createElement("i");
  let deleteBtnIcon = document.createElement("i");
  checkBtn.setAttribute("class", "bi bi-check check");
  deleteBtn.setAttribute("class", "bi bi-trash delete");

  spanElement.textContent = inputTask.value;
  if (inputTask.value == "") {
    return;
  }
  checkBtn.addEventListener("click", onClickComplete);
  deleteBtn.addEventListener("click", onClickDelete);

  taskList.appendChild(listElement);
  listElement.appendChild(spanElement);
  listElement.appendChild(checkBtn);
  listElement.appendChild(deleteBtn);
  checkBtn.appendChild(checkBtnIcon);
  deleteBtn.appendChild(deleteBtnIcon);

  inputTask.value = "";
}

function onClickComplete(event) {
  let listElement = event.target.parentElement;
  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let listElement = event.target.parentElement;
  taskList.removeChild(listElement);
}

onClickCreateTask();

createBtn.addEventListener("click", onClickCreateTask);
