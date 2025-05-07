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

` <li class="relative flex justify-between items-start bg-bg-card p-4 card-border rounded-xl">
          <div class="flex-1 py-3 pr-4 text-right">
            <div class="flex items-center gap-2 text-right">
              <input type="checkbox" class="self-start ml-2 checkbox-border rounded-[5px] w-5 h-5">
              <div>
                <span class="block md:inline pl-2 font-bold text-heading text-sm">${state.tasks.title}</span>
                <span class="bg-bg-redbox px-2 py-0.5 rounded text-red text-xs">${state.tasks.priority=== 0? "پایین" : state.tasks.priority=== 1? "متوسط" : "بالا" }</span>
                <p class="mt-3 text-taskGray text-sm">${state.tasks.description}</p>
              </div>
            </div>
          </div>

          <div id="task-actions" class="flex flex-col">
            <button id="edit-remove-toggle" class="self-end mt-1 text-buttonlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
            <div id="edit-remove-container"
              class="hidden justify-center items-center gap-2 btn-shadow p-1 btn-border rounded-lg">
              <button id="remove"><img src="./public/icons/tabler_trash-x.svg" alt="trash"></button>
              <img src="./public/icons/Line 485.svg" alt="line">
              <button id="edit"><img src="./public/icons/tabler_edit.svg" alt="edit"></button>
            </div>

          </div>


          <div class="right-0 absolute self-center bg-red rounded-tl-lg rounded-bl-lg w-1 h-3/4"></div>
        </li> `

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
