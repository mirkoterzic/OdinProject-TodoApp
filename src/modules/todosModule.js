// Import necessary functions and variables from stateModule.js
import { projects, currentProject, setProjects } from "./stateModule.js";
import { changeUrgencyColor } from "./utilsModule.js";
import { saveProjects } from "./projectsModule.js";

// Class definition for Todo
export class Todo {
  constructor(title, description, urgency, dueDate) {
    this.title = title;
    this.description = description;
    this.urgency = urgency;
    this.dueDate = dueDate;
  }
}

// Function to handle adding a new todo
export function addTodo(e) {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const urgency = document.querySelector("#urgency").value;
  const dueDate = document.querySelector("#dueDate").value;
  const newTodo = new Todo(title, description, urgency, dueDate);

  projects[currentProject].push(newTodo);
  createTodoElement(newTodo);
  saveProjects();
  // setCurrentProject(currentProject);

  const form = document.querySelector("#todoform");
  form.reset();
  changeModalDisplay();
}

// Function to create and display a new todo element
export function createTodoElement(todo) {
  const content = document.querySelector(".content");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  todoDiv.innerHTML = `
    <h3>${todo.title}</h3>
    <p>${todo.description}</p>
    <p><strong>Urgency:</strong> ${todo.urgency}</p>
    <p><strong>Due Date:</strong> ${todo.dueDate}</p>
  `;

  content.appendChild(todoDiv);
  changeUrgencyColor(todoDiv, todo.urgency);
}

// Function to display all todos for the current project
export function displayTodos() {
  const content = document.querySelector(".content");
  const modal = document.querySelector(".modal-content");

  // Clear existing content
  content.innerHTML = "";

  // Create Add Todo button if it doesn't exist
  let addTodoBtn = document.getElementById("addTodo");
  if (!addTodoBtn) {
    addTodoBtn = document.createElement("button");
    addTodoBtn.id = "addTodo";
    addTodoBtn.textContent = "Add Todo";
    content.appendChild(addTodoBtn);
  }
  // Event listener for Add Todo button
  addTodoBtn.addEventListener("click", () => {
    if (!currentProject) {
      alert("Please select a project first.");
      return;
    }
    changeModalDisplay();
  });

  // Append modal if it exists
  if (modal) {
    content.appendChild(modal);
  }

  // Display todos if currentProject is defined and has todos
  if (currentProject && projects[currentProject]) {
    projects[currentProject].forEach((todo) => createTodoElement(todo));
  }
}

// Function to toggle modal display
export function changeModalDisplay() {
  const modal = document.querySelector(".modal-content");
  if (modal) {
    modal.classList.toggle("hidden");
  }
}
