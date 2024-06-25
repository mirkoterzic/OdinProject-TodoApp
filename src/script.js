import {
  displayProjects,
  initializeProjects,
} from "./modules/projectsModule.js";
import { setupEventListeners } from "./modules/uiModule.js";

setupEventListeners();
initializeProjects();
displayProjects();
