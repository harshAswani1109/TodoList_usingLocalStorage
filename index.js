const todos = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
todos.addEventListener("click", deleteDoneEvent);
todoButton.addEventListener("click", addEvent);

function addEvent(event) {
  event.preventDefault();
  console.log("working");
  const todosDiv = document.createElement("div");
  todosDiv.classList.add("todo-div");

  const newTodos = document.createElement("li");
  newTodos.innerText = todoInput.value;
  newTodos.classList.add("new-todo");
  todosDiv.appendChild(newTodos);

  // const doneButton = document.createElement("button");
  // doneButton.innerText = "+";
  // doneButton.classList.add("done-button");
  // todosDiv.appendChild(doneButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-button");
  todosDiv.appendChild(deleteButton);

  todos.appendChild(todosDiv);
  todoInput.value = "";
}

function deleteDoneEvent(event) {
  const item = event.target;
  console.log(item);
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;
    todo.remove();
  }
  // if (item.classList[0] === "done-button") {
  //   const todo = item.parentElement;
  //   todo.classList.toggle("completed");
  // }
}
