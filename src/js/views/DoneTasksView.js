import { addHandlerTasks } from "./addHandlerTasks";
// import { tasksUpdateUI } from "./TasksUpdateUI";

const doneList = document.getElementById("done-tasks-list");
export function addHandlerDoneTasks(deleteHandler, editHandler, doneHandler) {
  addHandlerTasks(doneList, deleteHandler, editHandler, doneHandler);
};

export function doneTasksUpdateUI(tasks) {
  doneList.innerHTML = "";
  tasks.forEach((task) =>
    document
      .getElementById("done-tasks-list")
      .insertAdjacentHTML("afterbegin", taskMarkup(task)),
  );
}
export function taskMarkup(task) {
  return `<li data-id="${task.id}" class="list-items relative flex justify-between items-start bg-bg-card p-4 card-border rounded-xl">
          <div class="flex-1 py-3 pr-4 text-right">
            <div class="flex items-center gap-2 text-right">
              <input type="checkbox" checked class="isDone self-start ml-2 checkbox-border rounded-[5px] w-5 h-5">
              <div>
                <span class="block md:inline pl-2 font-bold text-heading text-sm">${task.title}</span>
              </div>
            </div>
          </div>

          <div class="task-actions flex flex-col">
            <button class="edit-remove-toggle self-end mt-1 text-buttonlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
            <div
              class="edit-remove-container hidden justify-center items-center gap-2 btn-shadow p-1 btn-border rounded-lg">
              <button class="remove"><img src="./public/icons/tabler_trash-x.svg" alt="trash"></button>
            </div>

          </div>


          <div class="right-0 absolute self-center bg-${task.priority === 1 ? "red" : task.priority === 2 ? "yellow" : "green"} rounded-tl-lg rounded-bl-lg w-1 h-3/4"></div>
        </li> `;
}
