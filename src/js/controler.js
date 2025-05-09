import * as model from "./model";
import "./views/sidebarToggleView";
import "./views/themeToggleView";
import "./views/editRemoveToggleView";
import "./views/TagsToggle";
import "./views/AddingTaskToggleView";
import * as activeTaskVeiw from "./views/activeTasksView";
import * as editTaskView from "./views/editTaskView";
import { addTask } from "./views/AddTask";

activeTaskVeiw.activeTasksUpdateUI(model.state.tasks);

function controllDeleteTask(id) {
  model.deleteTask(id);
  activeTaskVeiw.activeTasksUpdateUI(model.state.tasks);
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
  activeTasksUpdateUI();
}

function init() {
  activeTaskVeiw.addHandlerActiveTasks(controllDeleteTask, controllEditTask);
  addTask(controlAddTask);
}
init();
