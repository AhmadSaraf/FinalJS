let selectPriority = null;
const btnToggle = document.getElementById("tags-menu");
const btnContainer = document.getElementById("tag-btns-container");

const setPriority = () => {
  btnContainer.addEventListener("click", function (e) {
    if (e.target.closest("#highPriority")) selectPriority = 1;
    if (e.target.closest("#mediumPriority")) selectPriority = 2;
    if (e.target.closest("#lowPriority")) selectPriority = 3;

    if (!selectPriority) return;
    if (selectPriority === 1)
      btnToggle.innerHTML =
        '<div class="bg-bg-redbox px-2 py-1.5 rounded text-sm font-semibold flex gap-2"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-red">بالا</span></div>';
    if (selectPriority === 2)
      btnToggle.innerHTML =
        '<div class="bg-bg-yellowbox px-2 py-1.5 rounded text-sm font-semibold flex gap-2"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-yellow">متوسط</span></div>';
    if (selectPriority === 3)
      btnToggle.innerHTML =
        '<div class="bg-bg-greenbox px-2 py-1.5 rounded text-sm font-semibold flex gap-2"><img class="w-5 h-5 dark:brightness-100000" src="../../public/icons/close-circle.svg" alt="close icon" /><span class="text-green">پایین</span></div>';

    btnContainer.classList.add("hidden");
    btnContainer.classList.remove("flex");
  });
};

export const addTask = (controlAddTask) => {
  setPriority();
  const addNewTaskBtn = document.getElementById("addTaskBtn");

  addNewTaskBtn.addEventListener("click", (e) => {
    const titleInput = document.getElementById("task-title");
    const descriptionInput = document.getElementById("task-description");
    const enteredTask = {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: selectPriority,
    };
    if (
      !enteredTask.title ||
      !enteredTask.description ||
      !enteredTask.priority
    ) {
      return alert("Please Enter Vaild Data");
    }
    btnToggle.innerHTML = `<div
                class="text-buttontag flex items-center justify-center gap-2 px-2 py-1">
                <svg
                  class="stroke-lightGary h-4.5 w-4.5 fill-none stroke-[1.25] transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.51661 1.58331H12.0499C12.6166 1.58331 13.325 1.97498 13.625 2.45831L17.1083 8.02498C17.4416 8.56665 17.4083 9.41665 17.025 9.92498L12.7083 15.675C12.4 16.0833 11.7333 16.4166 11.225 16.4166H2.51661C1.05828 16.4166 0.174984 14.8166 0.94165 13.575L3.24995 9.88331C3.55828 9.39165 3.55828 8.59165 3.24995 8.09998L0.94165 4.40831C0.174984 3.18331 1.06661 1.58331 2.51661 1.58331Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>تگ ها</span>
              </div>`;

    controlAddTask(enteredTask);
    // reset values
    selectPriority = null;
    btnContainer.classList.add("hidden");
    btnContainer.classList.remove("flex");
    titleInput.value = descriptionInput.value = "";
  });
};
