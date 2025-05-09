const activeList = document.getElementById("active-tasks-list");
export function addHandlerActiveTasks(deleteHandler, editHnadler, doneHandler) {
  activeList.addEventListener("click", function (e) {
    const target = e.target.closest(".active-list-item");

    editRemoveHide();

    if (e.target.closest(".remove")) {
      deleteHandler(+target.dataset.id);
    }
    if (e.target.closest(".done")) {
      doneHandler(+target.dataset.id);
    }
    if (e.target.closest(".edit")) {
      editHnadler(+target.dataset.id, target);
    }
    if (e.target.closest(".edit-remove-toggle")) {
      editRemoveToggle(target);
    }
  });
}

export function activeTasksUpdateUI(tasks) {
  activeList.innerHTML = "";
  tasks.forEach((task) =>
    document
      .getElementById("active-tasks-list")
      .insertAdjacentHTML("beforeend", taskMarkup(task)),
  );
}

// Edit|Remove box toggle
const editRemoveToggle = (target) => {
  const btnToggle = target.getElementsByClassName("edit-remove-container")[0];
  btnToggle.style.display =
    btnToggle.style.display === "flex" ? "none" : "flex";
};
const editRemoveHide = () => {
  const btnToggles = activeList.getElementsByClassName("edit-remove-container");
  [...btnToggles].forEach((toggle) => (toggle.style.display = "none"));
};

function taskHtmlBuilder(task) {
  let priorityBadge = "";
  if (task.priority === 1) {
    priorityBadge =
      '<span class="bg-bg-redbox px-2 py-0.5 rounded text-red text-xs">بالا</span>';
  } else if (task.priority === 2) {
    priorityBadge =
      '<span class="bg-bg-yellowbox px-2 py-0.5 rounded text-yellow text-xs">متوسط</span>';
  } else if (task.priority === 3) {
    priorityBadge =
      '<span class="bg-bg-greenbox px-2 py-0.5 rounded text-green text-xs">پایین</span>';
  }
  return `<li data-id="${task.id}" class="active-list-item relative flex justify-between items-start bg-bg-card p-4 card-border rounded-xl">
          <div class="flex-1 py-3 pr-4 text-right">
            <div class="flex items-center gap-2 text-right">
              <input type="checkbox" class="self-start ml-2 checkbox-border rounded-[5px] w-5 h-5">
              <div>
                <span class="block md:inline pl-2 font-bold text-heading text-sm">${task.title}</span>
              ${priorityBadge}
                <p class="mt-3 text-taskGray text-sm">${task.description}</p>
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
              <img src="./public/icons/Line 485.svg" alt="line">
              <button class="edit"><img src="./public/icons/tabler_edit.svg" alt="edit"></button>
            </div>

          </div>


          <div class="right-0 absolute self-center bg-red rounded-tl-lg rounded-bl-lg w-1 h-3/4"></div>
        </li> `;
}
