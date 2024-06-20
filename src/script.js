// src/script.js
import { displayProjects, selectProject } from "./modules/projectsModule.js";
import { setupEventListeners } from "./modules/uiModule.js";
import { projects, setCurrentProject } from "./modules/stateModule.js";

setupEventListeners();
displayProjects();
const firstProject = Object.keys(projects)[0];
if (firstProject) {
  setCurrentProject(firstProject);
  selectProject(firstProject);
}
