const addNewTaskBtn = document.getElementById("open-task-form-btn");
const closeTaskBtn = document.getElementById("close-task-form-btn");
const addTaskBtn = document.getElementById("add-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const taskForm = document.getElementById("task-form");
const inputTaskTitle = document.getElementById("task-title");
const description = document.getElementById("task-desc");
const dateInput = document.getElementById("task-date");

const isEmpty = (value) => value === "";



addNewTaskBtn.addEventListener("click", () => {

    taskForm.style.display = "block";
    addNewTaskBtn.style.display = "none";

});

closeTaskBtn.addEventListener("click", () => {
    taskForm.style.display = "none";
    addNewTaskBtn.style.display = "block";
});