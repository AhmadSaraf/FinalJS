import { random } from "nanoid";

export const state = {
  tasks: {
    active: [],
    done: [],
  },
};

export function addNewTask(task) {
  state.tasks.active.push({
    ...task,
    id: `A${crypto.randomUUID()}`,
    isDone: false,
  });
  persistTasks();
}

export const findEditTaskObj = function (id) {
  try {
    const editingTask = state.tasks.active.find((task) => task.id === id);
    if (editingTask) return editingTask;
    else throw new Error("DEV: wrong ID");
  } catch (err) {
    console.error(err.message);
  }
};
export const editTask = function (editTask, { title, description, priority }) {
  title && (editTask.title = title);
  description && (editTask.description = description);
  priority && (editTask.priority = priority);
  persistTasks();
};

export const taskToggleDone = function (id) {
  try {
    let task = null;
    if (id[0] === "A") {
      task = state.tasks.active.find((task) => task.id === id);
      state.tasks.active = state.tasks.active.filter((task) => task.id !== id);
      task.id = "D" + task.id.slice(1);
      state.tasks.done.push(task);
    }
    if (id[0] === "D") {
      task = state.tasks.done.find((task) => task.id === id);
      state.tasks.done = state.tasks.done.filter((task) => task.id !== id);
      task.id = "A" + task.id.slice(1);
      state.tasks.active.push(task);
    }
    if (!task) throw new Error("DEV: wrong ID");
    deleteTask(id);

    task.isDone = !task.isDone;
  } catch (err) {
    console.error(err.message);
  }
  persistTasks();
};

export function deleteTask(id) {
  if (id[0] === "A")
    state.tasks.active = state.tasks.active.filter((task) => task.id !== id);
  if (id[0] === "D")
    state.tasks.done = state.tasks.done.filter((task) => task.id !== id);
  persistTasks();
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
