
export function tasksUpdateUI(parent, tasks, taskMarkup) {
  parent.innerHTML = "";
  console.log(tasks);
  tasks.forEach((task) =>
    parent.insertAdjacentHTML("beforebegin", taskMarkup(task)),
  );
}
