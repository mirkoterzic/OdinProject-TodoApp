export let projects = {};
export let currentProject = null;

export function setCurrentProject(project) {
  currentProject = project;
}

export function setProjects(newProjects) {
  projects = newProjects;
}
