import { displayTodos } from "./todosModule.js";
import {
  projects,
  currentProject,
  setCurrentProject,
  setProjects,
} from "./stateModule.js";

// Initialize projects from localStorage and set the current project
export function initializeProjects() {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    setProjects(JSON.parse(storedProjects));
  }

  const storedCurrentProject = localStorage.getItem("currentProject");
  if (storedCurrentProject && projects[storedCurrentProject]) {
    setCurrentProject(storedCurrentProject);
  } else {
    setCurrentProject(Object.keys(projects)[0] || null);
  }

  displayProjects();
  displayTodos();
}

// Save projects and current project to localStorage
export function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("currentProject", currentProject);
}

// Add a new project
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

// Display the list of projects
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

// Select a project and display its todos
export function selectProject(project) {
  setCurrentProject(project);
  displayTodos();
}

// Delete the current project
export function deleteCurrentProject() {
  if (
    currentProject &&
    confirm(`Are you sure you want to delete the project "${currentProject}"?`)
  ) {
    delete projects[currentProject];
    setCurrentProject(null);
    saveProjects();
    displayProjects();
    displayTodos();
  }
}
