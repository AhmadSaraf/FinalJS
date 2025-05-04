export const state = {
  tasks: [
    // TODO: remove test data later
    {
      id: 1234,
      title: "test",
      description: "test",
      priority: 0,
      isDone: false,
    },
  ],
  editingTask: null,
};

const creatTaskObj = function (title, description, priority) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    priority,
    isDone: false,
  };
};

export const findEditTaskObj = function (id) {
  try {
    state.editingTask = state.tasks.find((task) => task.id === id);
    if (state.editingTask) return state.editingTask;
    else throw new Error("DEV: wrong ID");
  } catch (err) {
    console.error(err.message);
  }
};

export const editTask = function ({ title, description, priority }) {
  title && (state.editingTask.title = title);
  description && (state.editingTask.description = description);
  priority && (state.editingTask.priority = priority);

  state.editingTask = null;
  persistTasks();
};

export const taskToggleDone = function (id) {
  try {
    const task = state.tasks.find((task) => task.id === id);
    if (!task) throw new Error("DEV: wrong ID");

    task.isDone = !task.isDone;
  } catch (err) {
    console.error(err.message);
  }
};

// adds tasks to local storage
// NOTE: use after any changes to state.tasks to store changes to localStorage
const persistTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
};

// to clear local storage manually
const clearTasks = function () {
  localStorage.clear("tasks");
};

const init = function () {
  const storage = localStorage.getItem("tasks");
  if (storage) tasks = JSON.parse(storage);
};
init();

// TODO: remove this line
// clearTasks();
