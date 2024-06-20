// src/modules/uiModule.js
import { addProject, deleteCurrentProject } from "./projectsModule.js";
import { addTodo, changeModalDisplay } from "./todosModule.js";
import { currentProject } from "./stateModule.js";

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
