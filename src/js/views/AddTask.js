let selectPriority = null;

const setPriority = () => {
  const highPriority = document.getElementById("highPriority");
  highPriority.addEventListener("click", () => {
    selectPriority = 1;
  });
  const mediumPriority = document.getElementById("mediumPriority");
  mediumPriority.addEventListener("click", () => {
    selectPriority = 2;
  });
  const lowPriority = document.getElementById("lowPriority");
  lowPriority.addEventListener("click", () => {
    selectPriority = 3;
  });
};
export const addTask = (controlAddTask) => {
  setPriority();

  const addNewTaskBtn = document.getElementById("addTaskBtn");
  addNewTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("task-title");
    const descriptionInput = document.getElementById("task-description");
    const enteredTask = {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: selectPriority,
    };
    console.log(enteredTask);
    if(!enteredTask.title || !enteredTask.description || !enteredTask.priority) {
      return alert('Please Enter Vaild Data')
    }
    controlAddTask(enteredTask);
  });
};
