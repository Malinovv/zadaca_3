let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");

function onClickCreateTask() {
  let taskList = document.getElementById("taskList");
  let listElement = document.createElement("li");
  let spanElement = document.createElement("span");
  let checkBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let checkBtnIcon = document.createElement("i");
  let deleteBtnIcon = document.createElement("i");
  checkBtn.setAttribute("class", "bi bi-check check");
  deleteBtn.setAttribute("class", "bi bi-trash delete");

  spanElement.textContent = inputTask.value;
  if (inputTask.value.trim() === "") {
    return;
  }

  taskList.appendChild(listElement);
  listElement.appendChild(spanElement);
  listElement.appendChild(checkBtn);
  listElement.appendChild(deleteBtn);
  checkBtn.appendChild(checkBtnIcon);
  deleteBtn.appendChild(deleteBtnIcon);

  inputTask.value = "";
}

onClickCreateTask();

createBtn.addEventListener("click", onClickCreateTask);
