import * as model from "./model";
import "./views/sidebarToggleView";
import "./views/themeToggleView";
// import "./views/editRemoveToggleView";
import "./views/TagsToggle";
import "./views/AddingTaskToggleView";
import * as activeTasksVeiw from "./views/activeTasksView";
import * as doneTasksView from "./views/DoneTasksView";
import * as editTaskView from "./views/editTaskView";
import { addTask } from "./views/AddTask";

activeTasksVeiw.activeTasksUpdateUI(model.state.tasks.active);
doneTasksView.doneTasksUpdateUI(model.state.tasks.done);

function controllDeleteTask(id) {
  model.deleteTask(id);
  activeTasksVeiw.activeTasksUpdateUI(model.state.tasks.active);
  doneTasksView.doneTasksUpdateUI(model.state.tasks.done);
}

function controllEditTask(id, target) {
  const editTask = model.findEditTaskObj(id);
  editTaskView.loadEditForm(editTask, target, controllSubmitEdit);
}

function controllSubmitEdit(editTask, data, target) {
  model.editTask(editTask, data);
  editTaskView.updateEditedTaskUI(target, editTask);
}
function controlAddTask(task) {
  model.addNewTask(task);
  activeTasksVeiw.activeTasksUpdateUI(model.state.tasks.active);
}

function controlUpdateIsDone(id) {
  model.taskToggleDone(id);
  console.log(model.state.tasks);
  activeTasksVeiw.activeTasksUpdateUI(model.state.tasks.active);
  doneTasksView.doneTasksUpdateUI(model.state.tasks.done);
}

function controlUpdateIsDone(id) {
  model.taskToggleDone(id);
  console.log(model.state.tasks);
  activeTaskVeiw.activeTasksUpdateUI(model.state.tasks);
  // doneTaskView.updateUI(model.state.tasks);
}

function init() {
  activeTasksVeiw.addHandlerActiveTasks(controllDeleteTask, controllEditTask, controlUpdateIsDone);
  addTask(controlAddTask);
  doneTasksView.addHandlerDoneTasks(controllDeleteTask, controllEditTask , controlUpdateIsDone);
}
init();
