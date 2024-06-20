// src/modules/utilsModule.js
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
