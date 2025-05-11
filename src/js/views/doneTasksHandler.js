import { addHandlerTasks } from "./addHandlerTasks";
import { tasksUpdateUI } from "./TasksUpdateUI";

const doneList = document.getElementById("done-tasks-list");
export function addHandlerDoneTasks(deleteHandler, editHandler, doneHandler) {
  addHandlerTasks(doneList, deleteHandler, editHandler, doneHandler);
}

export function doneTasksUpdateUI(tasks) {
  tasksUpdateUI(doneList, "afterbegin", tasks, taskMarkup);
}
export function taskMarkup(task) {
  return `<li data-id="${task.id}" class="list-items relative flex justify-between items-start bg-bg-card p-4 card-border rounded-xl">
          <div class="flex-1 py-3 pr-4 text-right">
            <div class="flex items-center gap-2 text-right">
              <svg role="checkbox" aria-checked="true" class="isDone cursor-pointer fill-blue w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g clip-path="url(#clip0_4418_8600)">
                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" />
                </g>
                <defs>
                <clipPath id="clip0_4418_8600">
                <rect width="24" height="24"/>
                </clipPath>
                </defs>
              </svg>
              <div>
                <span class="block md:inline pl-2 font-bold text-heading text-base line-through">${task.title}</span>
              </div>
            </div>
          </div>

          <div class="task-actions flex flex-col">
            <button class="edit-remove-toggle self-end mt-1 text-buttonlight cursor-pointer p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
            <div
              class="edit-remove-container hidden justify-center items-center gap-2 btn-shadow p-1 btn-border rounded-lg">
              <button class="remove cursor-pointer"><img class="dark:brightness-100000" src="./public/icons/tabler_trash-x.svg" alt="trash"></button>
            </div>

          </div>


          <div class="right-0 absolute self-center ${task.priority === 1 ? "bg-red" : task.priority === 2 ? "bg-yellow" : "bg-green"} rounded-tl-lg rounded-bl-lg w-1 h-3/4"></div>
        </li> `;
}
