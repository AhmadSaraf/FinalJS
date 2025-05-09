import { taskMarkup } from "./activeTasksView";

export function loadEditForm(editTask, target, submitHandler) {
  const markup = editTaskMarkup(editTask);
  target.innerHTML = markup;

  target
    .querySelector(".tags-menu")
    .addEventListener("click", () => priorityContainerToggle(target));

  let priority = editTask.priority;
  target.addEventListener("click", function (e) {
    const btn = e.target.closest(".priority-btn");
    if (btn) {
      priority = +btn.dataset.priority;
      priorityContainerToggle(target);
      console.log(priority);
      changePriorityUI(target, priority);
    }
  });

  target.querySelector(".TaskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const title = target.querySelector(".edit-title").value || editTask.title;
    const description =
      target.querySelector(".edit-description").value || editTask.description;
    console.log({ ...editTask, title, description, priority });
    submitHandler(
      editTask,
      { ...editTask, title, description, priority },
      target,
    );
  });
}

function priorityContainerToggle(target) {
  const priorityContainer = target.querySelector(".tag-btns-container");
  priorityContainer.classList.toggle("hidden");
  priorityContainer.classList.toggle("flex");
}
function changePriorityUI(target, priority) {
  console.log(priority);
  target.querySelector(".tags-menu").innerHTML =
    `${priority === 3 ? '<div class="cursor-pointer"><span class="bg-bg-greenbox px-2 py-0.5 rounded font-bold text-green text-xs">پایین</span></div>' : ""}
    ${priority === 2 ? '<div class="cursor-pointer"><span class="bg-bg-yellowbox px-2 py-0.5 rounded font-bold text-yellow text-xs">متوسط</span></div>' : ""}
    ${priority === 1 ? '<div class="cursor-pointer" ><span class="bg-bg-redbox px-2 py-0.5 rounded font-bold text-red text-xs">بالا</span></div>' : ""}
    
    `;
}
export function updateEditedTaskUI(target, task) {
  target.outerHTML = taskMarkup(task);
}

function editTaskMarkup(target) {
  return `<form class="TaskForm w-full flex-col card-border rounded-xl">
        <div id="input-container" class="card-border border-b">
          <div id="inputs" class="p-4">
            <input value="${target.title}" type="text" placeholder="نام تسک"
              class="edit-title mb-2 w-full placeholder:font-bold placeholder:text-boldGray placeholder:text-base">
            <input value="${target.description}" type="text" placeholder="توضیحات"
              class="edit-description w-full placeholder:font-semibold placeholder:text-lightGary placeholder:text-sm">
          </div>
          <button type="button"
            class="tags-menu justify-center items-center box-shadow m-4 px-2 py-1 card-border rounded-sm text-buttontag text-center cursor-pointer"><img
              src="./public/icons/Vector.svg" alt="tag-right" class="inline"> تگ ها</button>
          <div class="tag-btns-container hidden gap-4 bg-bg-tagbtn btn-shadow m-4 p-2 btn-border rounded-lg w-fit">
            <div class="priority-btn cursor-pointer" data-priority="3" ><span data-id="0" class="bg-bg-greenbox px-2 py-0.5 rounded font-bold text-green text-xs">پایین</span></div>
            <img src="./public/icons/Line 485.svg" alt="line">
            <div class="priority-btn cursor-pointer" data-priority="2" ><span class="bg-bg-yellowbox px-2 py-0.5 rounded font-bold text-yellow text-xs">متوسط</span></div>
            <img src="./public/icons/Line 485.svg" alt="line">
            <div class="priority-btn cursor-pointer" data-priority="1" ><span class="bg-bg-redbox px-2 py-0.5 rounded font-bold text-red text-xs">بالا</span></div>
          </div>
        </div>
        <div class="m-4 text-left">
          <button id="submitEdit" type="submit"
            class="bg-button-blue px-4 py-2.5 rounded-md font-semibold text-white text-sm">ویرایش تسک</button>
        </div>
      </form>`;
}
