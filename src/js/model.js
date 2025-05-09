import { random } from "nanoid";

export const state = {
  tasks: [],
  editingTask: null,
};

// TODO: remove this line TEST DATA
localStorage.clear();
localStorage.setItem("tasks", JSON.stringify(state.tasks));

export function addNewTask(task) {
  state.tasks.push({ ...task, id: crypto.randomUUID(), isDone: false });
  persistTasks()
}
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

export function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  console.log(state.tasks);
  // persistTasks();
}

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
  if (storage) state.tasks = JSON.parse(storage);
};
init();

// TODO: remove this line
// clearTasks();
