export function tasksOverview(activeTasksDoneNum, doneTasksDoneNum) {
  const activeTasksOverviewEl = document.getElementById("active-tasks-num");
  const doneTasksOverviewEl = document.getElementById("done-tasks-num");

  activeTasksOverviewEl.textContent = `${activeTasksDoneNum} تسک را باید انجام دهید.`;
  doneTasksOverviewEl.textContent = `${doneTasksDoneNum} تسک انجام شده است.`;
}
