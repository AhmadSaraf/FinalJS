import * as editRemove from "./editRemoveToggleView";

export function addHandlerTasks(
  container,
  deleteHandler,
  editHandler,
  doneHandler,
) {
  container.addEventListener("click", function (e) {
    const target = e.target.closest(".list-items");
    editRemove.editRemoveHide(container);

    if (e.target.closest(".remove")) {
      deleteHandler(target.dataset.id);
    }
    if (e.target.closest(".done")) {
      doneHandler(target.dataset.id);
    }
    if (e.target.closest(".edit") && editHandler) {
      editHandler(target.dataset.id, target);
    }
    if (e.target.closest(".edit-remove-toggle")) {
      editRemove.editRemoveToggle(target);
    }
    if (e.target.closest(".isDone")) {
      doneHandler(target.dataset.id);
    }
  });
}
