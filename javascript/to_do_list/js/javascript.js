const todoInput = document.querySelector("#task");
const todoButton = document.querySelector("#liveToastBtn");
const todoList = document.querySelector("#list");
let uls = document.getElementsByTagName("li");

for(let index = 0; index < uls.length; index ++){ 
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = deleteElement;
  uls[index].append(deleteButton);
  uls[index].onclick = check;
}

todoButton.addEventListener("submit", newElement);

function newElement(event) {
  insertTodo(todoInput.value);
  todoInput.value = "";
}

function insertTodo(description) {
  const newTodo = document.createElement("li");
  newTodo.innerText = description;
  if (todoInput.value == "")
  {
    $(".error").toast("show");
  }
  else
  {
    $(".success").toast("show");
    todoList.appendChild(newTodo);
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("delete-button");
  newTodo.onclick = check;
  newTodo.appendChild(deleteButton);

  deleteButton.addEventListener("click", deleteElement);
}

function deleteElement(event) {
  const item = event.target;
  if ([...item.classList][0] === "delete-button") {
    const todo = item.parentElement;
    todoList.removeChild(todo);
  }
}

function check(){
  this.classList.toggle("checked"); 
}
