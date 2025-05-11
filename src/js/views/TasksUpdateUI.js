export function tasksUpdateUI(parent, location, tasks, taskMarkup) {
  parent.innerHTML = "";
  tasks.forEach((task) =>
    parent.insertAdjacentHTML(location, taskMarkup(task)),
  );
}
