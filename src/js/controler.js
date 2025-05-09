import * as model from "./model";
import "./views/sidebarToggleView";
import "./views/themeToggleView";
import "./views/editRemoveToggleView";
import "./views/TagsToggle";
import "./views/AddingTaskToggleView";
import { addTask } from "./views/AddTask";
import { addHandlerActiveTasks } from "./views/activeTasksView";
import { activeTasksUpdateUI } from "./views/activeTasksView";

function activeTaskContoller() {
  addHandlerActiveTasks(model.deleteTask, null, null, model.state.tasks);
}

function controlAddTask (task) {
  model.addNewTask(task)
  activeTasksUpdateUI();
}

function init() {
  activeTaskContoller();
  activeTasksUpdateUI();
  addTask(controlAddTask);
}
init();
