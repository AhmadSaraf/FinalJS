const addDutyBtn = document.getElementById("addingTaskToggle");
const addTaskForm = document.getElementById("addTaskForm");

const addTaskToggle = (e) => {
  [addDutyBtn, addTaskForm].forEach((el) => {
    el.classList.toggle("hidden");
    el.classList.toggle("flex");
  });
  setTimeout(() => document.addEventListener("click", closeAddTaskForm), 100);
};

// prettier-ignor
addDutyBtn.addEventListener("click", addTaskToggle);
addTaskForm
  .querySelector("#addTaskBtn")
  .addEventListener("click", addTaskToggle);

function closeAddTaskForm(e) {
  if (!e.target.closest("#addTaskForm")) {
    [addDutyBtn, addTaskForm].forEach((el) => {
      el.classList.toggle("hidden");
      el.classList.toggle("flex");
    });
    this.removeEventListener("click", closeAddTaskForm);
  }
}
