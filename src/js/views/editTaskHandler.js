import { taskMarkup } from "./activeTasksHandler";

export function loadEditForm(editTask, target, submitHandler) {
  let priority = editTask.priority;
  const markup = editTaskMarkup(editTask);
  target.innerHTML = markup;
  changePriorityUI(target, priority);

  target.addEventListener("click", btnClickHandler);

  target
    .querySelector(".TaskForm")
    .addEventListener("submit", formSubmitHandler);

  function btnClickHandler(e) {
    if (e.target.closest(".tags-menu")) return priorityContainerToggle(target);

    const btn = e.target.closest(".priority-btn");
    if (btn) {
      priority = +btn.dataset.priority;
      priorityContainerToggle(target);
      changePriorityUI(target, priority);
    }
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    const title = target.querySelector(".edit-title").value || editTask.title;
    const description =
      target.querySelector(".edit-description").value || editTask.description;
    submitHandler(
      editTask,
      { ...editTask, title, description, priority },
      target,
    );
    // remove event listeners
    target.removeEventListener("click", btnClickHandler);
    target
      .querySelector(".TaskForm")
      .removeEventListener("submit", formSubmitHandler);
  }
}

function priorityContainerToggle(target) {
  const priorityContainer = target.querySelector(".tag-btns-container");
  priorityContainer.classList.toggle("hidden");
  priorityContainer.classList.toggle("flex");
}

function changePriorityUI(target, priority) {
  if (priority === 1)
    target.querySelector(".tags-menu").innerHTML =
      `<div class="bg-bg-redbox px-2 py-1.5 rounded text-sm font-semibold flex gap-2 items-center"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-red self-center grow">بالا</span></div>`;
  if (priority === 2)
    target.querySelector(".tags-menu").innerHTML =
      '<div class="bg-bg-yellowbox px-2 py-1 rounded text-sm font-semibold flex gap-2"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-yellow">متوسط</span></div>';
  if (priority === 3)
    target.querySelector(".tags-menu").innerHTML =
      '<div class="bg-bg-greenbox px-2 py-1 rounded text-sm font-semibold flex gap-2"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-green">پایین</span></div>';
}

export function updateEditedTaskUI(target, task) {
  target.outerHTML = taskMarkup(task);
}

function editTaskMarkup(target) {
  return `<form class="TaskForm w-full flex-col card-border rounded-xl">
        <div id="input-container" class="card-border border-b">
          <div id="inputs" class="p-4 text-task">
            <input value="${target.title}" spellcheck="false" type="text" placeholder="نام تسک"
              class="edit-title placeholder:text-boldGray mb-2 w-full text-base font-bold outline-0 placeholder:text-base placeholder:font-bold">
            <textarea type="text" placeholder="توضیحات" spellcheck="false"
              class="edit-description placeholder:text-lightGary w-full resize-none text-sm font-semibold outline-0 placeholder:text-sm placeholder:font-semibold">${target.description}</textarea>
          </div>
          <button type="button" class="tags-menu box-shadow mb-4 mx-4 min-w-10 cursor-pointer rounded-sm text-center">
              <div class="text-buttontag flex items-center justify-center gap-2 px-2 py-1">
                <svg class="stroke-lightGary h-4.5 w-4.5 fill-none stroke-[1.25] transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.51661 1.58331H12.0499C12.6166 1.58331 13.325 1.97498 13.625 2.45831L17.1083 8.02498C17.4416 8.56665 17.4083 9.41665 17.025 9.92498L12.7083 15.675C12.4 16.0833 11.7333 16.4166 11.225 16.4166H2.51661C1.05828 16.4166 0.174984 14.8166 0.94165 13.575L3.24995 9.88331C3.55828 9.39165 3.55828 8.59165 3.24995 8.09998L0.94165 4.40831C0.174984 3.18331 1.06661 1.58331 2.51661 1.58331Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>تگ ها</span>
              </div>
            </button>
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
            class="bg-button-blue px-4 py-2.5 rounded-md font-semibold text-white text-sm cursor-pointer">ویرایش تسک</button>
        </div>
      </form>`;
}
