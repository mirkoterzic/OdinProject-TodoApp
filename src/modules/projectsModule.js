// src/modules/projectsModule.js
import { displayTodos } from "./todosModule.js";
import {
  projects,
  currentProject,
  setCurrentProject,
  setProjects,
} from "./stateModule.js";
export function initializeProjects() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    projects = JSON.parse(storedProjects);
  }
  const storedCurrentProject = localStorage.getItem("currentProject");
  if (storedCurrentProject && projects[storedCurrentProject]) {
    currentProject = storedCurrentProject;
  } else {
    currentProject = Object.keys(projects)[0] || null;
  }
  displayProjects();
  displayTodos();
}

export function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
  // currentProject = Object.keys(projects)[0] || null; // Ensure currentProject is the first project or null

  localStorage.setItem("currentProject", currentProject);
}

export function addProject() {
  const projectNameInput = document.getElementById("projectName");
  const projectName = projectNameInput.value.trim();
  if (projectName && !projects[projectName]) {
    projects[projectName] = [];

    setCurrentProject(projectName);
    saveProjects();
    displayProjects();
    displayTodos();
    projectNameInput.value = "";
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
    saveProjects(); // Save projects after deletion
    displayProjects();
    displayTodos();
  }
}
