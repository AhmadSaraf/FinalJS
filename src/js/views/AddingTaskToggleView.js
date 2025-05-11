const addDutyBtn = document.getElementById("addingTaskToggle");
const addTaskForm = document.getElementById("addTaskForm");

addDutyBtn.addEventListener("click", addTaskToggle);
addTaskForm
  .querySelector("#addTaskBtn")
  .addEventListener("click", addTaskToggle);

function addTaskToggle() {
  [addDutyBtn, addTaskForm].forEach((el) => {
    el.classList.toggle("hidden");
    el.classList.toggle("flex");
    document.removeEventListener("click", closeAddTaskForm);
  });
  setTimeout(() => document.addEventListener("click", closeAddTaskForm), 100);
}

export function closeAddTaskForm(e) {
  if (!e.target.closest("#addTaskForm")) {
    addTaskForm.classList.remove("flex");
    addTaskForm.classList.add("hidden");
    addDutyBtn.classList.remove("hidden");
    addDutyBtn.classList.add("flex");
    document.removeEventListener("click", closeAddTaskForm);
  }
}
