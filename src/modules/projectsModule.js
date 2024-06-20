// src/modules/projectsModule.js
import { displayTodos } from "./todosModule.js";
import {
  projects,
  currentProject,
  setCurrentProject,
  setProjects,
} from "./stateModule.js";

export function addProject() {
  const projectNameInput = document.getElementById("projectName");
  const projectName = projectNameInput.value.trim();
  if (projectName && !projects[projectName]) {
    projects[projectName] = [];
    setCurrentProject(projectName);
    displayProjects();
    displayTodos();
    projectNameInput.value = "";
    setProjects(projects);
  }
}

export function displayProjects() {
  const projectList = document.querySelector(".projects ul");
  projectList.innerHTML = "";
  for (let project in projects) {
    const li = document.createElement("li");
    li.textContent = project;
    li.addEventListener("click", () => {
      setCurrentProject(project);
      selectProject(project);
    });
    projectList.appendChild(li);
  }
}

export function selectProject(project) {
  setCurrentProject(project);
  displayTodos();
}

export function deleteCurrentProject() {
  if (
    currentProject &&
    confirm(`Are you sure you want to delete the project "${currentProject}"?`)
  ) {
    delete projects[currentProject];
    setCurrentProject(null);
    displayProjects();
    displayTodos();
    setProjects(projects);
  }
}
