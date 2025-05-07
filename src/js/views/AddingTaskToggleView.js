const addDutyBtn = document.getElementById("addingTaskToggle");

const addTaskToggle = () => {
  const addTaskForm = document.getElementById('addTaskForm');
  // [addDutyBtn, addTaskForm].forEach(el => el.classList.toggle('none'))

  // // Get computed styles for both elements
  const btnCurrentDisplay = window.getComputedStyle(addDutyBtn).display;
  const formCurrentDisplay = window.getComputedStyle(addTaskForm).display;

  // Toggle both elements
  addDutyBtn.style.display = btnCurrentDisplay === "flex" ? "none" : "flex";
  addTaskForm.style.display = formCurrentDisplay === "none" ? "flex" : "none";
};

addDutyBtn.addEventListener("click", addTaskToggle);
