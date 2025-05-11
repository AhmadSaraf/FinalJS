import * as model from "./model";
import "./views/sidebarToggleView";
import "./views/themeToggleView";
import "./views/TagsToggle";
import "./views/AddingTaskToggleView";
import * as activeTasksHandler from "./views/activeTasksHandler";
import * as doneTasksHandler from "./views/doneTasksHandler";
import * as editTaskHandler from "./views/editTaskHandler";
import { addTask } from "./views/AddTask";
import { tasksOverview } from "./views/taksOverviewView";
import { imgPlaceHolder } from "./views/imgTasksPlaceholderView";

function controlAddTask(task) {
  model.addNewTask(task);
  activeTasksHandler.activeTasksUpdateUI(model.state.tasks.active);
  tasksOverview(model.state.tasks.active.length, model.state.tasks.done.length);
  controllImgPlaceholder();
}

function controllDeleteTask(id) {
  model.deleteTask(id);
  activeTasksHandler.activeTasksUpdateUI(model.state.tasks.active);
  doneTasksHandler.doneTasksUpdateUI(model.state.tasks.done);
  tasksOverview(model.state.tasks.active.length, model.state.tasks.done.length);
  controllImgPlaceholder();
}

function controllEditTask(id, target) {
  const editTask = model.findEditTaskObj(id);
  editTaskHandler.loadEditForm(editTask, target, controllSubmitEdit);
}
function controllSubmitEdit(editTask, data, target) {
  model.editTask(editTask, data);
  editTaskHandler.updateEditedTaskUI(target, editTask);
}

function controlUpdateIsDone(id) {
  model.taskToggleDone(id);
  activeTasksHandler.activeTasksUpdateUI(model.state.tasks.active);
  doneTasksHandler.doneTasksUpdateUI(model.state.tasks.done);
  tasksOverview(model.state.tasks.active.length, model.state.tasks.done.length);
  controllImgPlaceholder();
}

function controllImgPlaceholder() {
  imgPlaceHolder(model.state.tasks.active.length === 0);
}

function init() {
  activeTasksHandler.activeTasksUpdateUI(model.state.tasks.active);
  doneTasksHandler.doneTasksUpdateUI(model.state.tasks.done);
  tasksOverview(model.state.tasks.active.length, model.state.tasks.done.length);
  controllImgPlaceholder();

  activeTasksHandler.addHandlerActiveTasks(
    controllDeleteTask,
    controllEditTask,
    controlUpdateIsDone,
  );
  addTask(controlAddTask);
  doneTasksHandler.addHandlerDoneTasks(
    controllDeleteTask,
    controllEditTask,
    controlUpdateIsDone,
  );
}
init();
