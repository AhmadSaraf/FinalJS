import { random } from "nanoid";

export const state = {
  tasks: {
    active: [
      {
        id: "1234",
        title: "test",
        description: "test test",
        priority: 1,
        isDone: false,
      },
    ],
    done: [
      {
        id: "12345",
        title: "test",
        description: "test test",
        priority: 1,
        isDone: true,
      },
    ],
  },

  editingTask: null,
};

// TODO: remove this line TEST DATA
localStorage.clear();
localStorage.setItem("tasks", JSON.stringify(state.tasks));

export function addNewTask(task) {
  state.tasks.active.push({ ...task, id: crypto.randomUUID(), isDone: false });
  persistTasks();
}

export const findEditTaskObj = function (id) {
  try {
    state.editingTask = state.tasks.active.find((task) => task.id === id);
    if (state.editingTask) return state.editingTask;
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
    const task = [...state.tasks.active, ...state.tasks.done].find(
      (task) => task.id === id,
    );
    if (!task) throw new Error("DEV: wrong ID");
    task.isDone = !task.isDone;
    deleteTask(id);

    if (task.isDone) state.tasks.done.push(task);
    if (!task.isDone) state.tasks.active.push(task);
  } catch (err) {
    console.error(err.message);
  }
};

export function deleteTask(id) {
  state.tasks.active = state.tasks.active.filter((task) => task.id !== id);
  state.tasks.done = state.tasks.done.filter((task) => task.id !== id);
  console.log(state.tasks);
  console.log(id);
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
