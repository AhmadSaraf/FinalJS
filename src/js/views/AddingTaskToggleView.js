const addDutyBtn = document.getElementById("addingTaskToggle");
const addTaskForm = document.getElementById("addTaskForm");

const addTaskToggle = (e) => {
  [addDutyBtn, addTaskForm].forEach((el) => {
    el.classList.toggle("hidden");
    el.classList.toggle("flex");
  });

  // // Get computed styles for both elements
  // const btnCurrentDisplay = window.getComputedStyle(addDutyBtn).display;
  // const formCurrentDisplay = window.getComputedStyle(addTaskForm).display;

  // // Toggle both elements
  // addDutyBtn.style.display = btnCurrentDisplay === "flex" ? "none" : "flex";
  // addTaskForm.style.display = formCurrentDisplay === "none" ? "flex" : "none";
};

// prettier-ignor
addDutyBtn.addEventListener("click", addTaskToggle);
addTaskForm
  .querySelector("#addTaskBtn")
  .addEventListener("click", addTaskToggle);
