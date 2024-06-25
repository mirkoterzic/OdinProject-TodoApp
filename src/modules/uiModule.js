import { addProject, deleteCurrentProject } from "./projectsModule.js";
import { addTodo, changeModalDisplay } from "./todosModule.js";
import { currentProject } from "./stateModule.js";

// Setup event listeners for UI elements
export function setupEventListeners() {
  const addTodoBtn = document.getElementById("addTodo");
  const closeform = document.querySelector(".close");
  const form = document.querySelector("#todoform");
  const deleteProjectBtn = document.getElementById("deleteProject");
  const addProjectBtn = document.getElementById("addProject");

  closeform.addEventListener("click", () => {
    form.reset();
    changeModalDisplay();
  });

  deleteProjectBtn.addEventListener("click", deleteCurrentProject);

  addProjectBtn.addEventListener("click", addProject);

  addTodoBtn.addEventListener("click", () => {
    if (!currentProject) {
      alert("Please select a project first.");
      return;
    }
    changeModalDisplay();
  });

  form.addEventListener("submit", addTodo);
}

// Change the urgency color of a todo element
export function changeUrgencyColor(element, urgency) {
  element.classList.remove("low", "medium", "high");
  if (urgency === "low") {
    element.classList.add("low");
  } else if (urgency === "medium") {
    element.classList.add("medium");
  } else if (urgency === "high") {
    element.classList.add("high");
  }
}
