// src/script.js
import {
  displayProjects,
  selectProject,
  initializeProjects,
} from "./modules/projectsModule.js";
import { setupEventListeners } from "./modules/uiModule.js";

setupEventListeners();
initializeProjects();
displayProjects();
// const firstProject = Object.keys(projects)[0];
// if (firstProject) {
//   setCurrentProject(firstProject);
//   selectProject(firstProject);
// }
