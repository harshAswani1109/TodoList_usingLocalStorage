const todos = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

// Load todos from local storage if available
const storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos) {
  storedTodos.forEach((todo) => {
    addTodoToDOM(todo);
  });
}

todos.addEventListener("click", deleteDoneEvent);
todoButton.addEventListener("click", addEvent);

function addEvent(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  addTodoToDOM(newTodo);
  saveTodoToLocalStorage(newTodo);

  todoInput.value = "";
}

function deleteDoneEvent(event) {
  const item = event.target;
  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;
    const todoText = todo.querySelector(".new-todo").innerText;
    removeTodoFromLocalStorage(todoText);
    todo.remove();
  }
}

function addTodoToDOM(todo) {
  const todosDiv = document.createElement("div");
  todosDiv.classList.add("todo-div");

  const newTodos = document.createElement("li");
  newTodos.innerText = todo;
  newTodos.classList.add("new-todo");
  todosDiv.appendChild(newTodos);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-button");
  todosDiv.appendChild(deleteButton);

  todos.appendChild(todosDiv);
}

function saveTodoToLocalStorage(todo) {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  storedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(storedTodos));
}

function removeTodoFromLocalStorage(todo) {
  let storedTodos = JSON.parse(localStorage.getItem("todos"));
  const updatedTodos = storedTodos.filter((item) => item !== todo);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}
