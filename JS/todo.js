const addNewTaskBtn = document.getElementById("open-task-form-btn");

const closeTaskBtn = document.getElementById("close-task-form-btn");

const addTaskBtn = document.getElementById("add-task-btn");

const cancelBtn = document.getElementById("cancel-btn");

const discardBtn = document.getElementById("discard-btn");

const taskForm = document.getElementById("task-form");

const inputTaskTitle = document.getElementById("task-title");

const description = document.getElementById("task-desc");

const dateInput = document.getElementById("task-date");

const taskContainer = document.getElementById("task-container");

const confirmCloseDialog = document.getElementById("confirm-close-dialog-btn-container");



const taskData = JSON.parse(localStorage.getItem("data")) || [];
const currentTask = {};

const addOrUpdateTask = () => {
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

    const taskObj = {
        id : `${inputTaskTitle.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title : inputTaskTitle.value,
        date : dateInput.value,
        description : description.value
    }
    
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;
    }

    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer();
    reset();
};




const updateTaskContainer = () => {
    taskContainer.innerHTML = "";
    taskData.forEach(({id, title, date, description}) => {
        taskContainer.innerHTML += `
        <div class="task" id="${id}">
        <p><strong>Title:</strong> ${inputTaskTitle}</p>
        <p><strong>Date:</strong> ${dateInput}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button onclick="editTask(this)" type="button" class="btn">Edit</button>
        <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
        </div>
        `
    });
};




const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
}






const editTask = () => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);

    currentTask = taskData[dataArrIndex];

    inputTaskTitle.value = currentTask.title;
    dateInput.value = currentTask.date;
    description.value = currentTask.description;

    addTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
}



const reset = () => {
    
    addTaskBtn.innerText = "Add Task";
    inputTaskTitle.value = "";
    dateInput.value = "";
    description.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};

}


if(taskForm.length) {

    updateTaskContainer();

}

addNewTaskBtn.addEventListener("click", () => {

    taskForm.classList.toggle("hidden");


});



closeTaskBtn.addEventListener("click", () => {

    const formInputContainsValues = inputTaskTitle.value || dateInput.value || description.value;

    const formValuesUpdated = inputTaskTitle.value !== currentTask.inputTaskTitle || dateInput.value !== currentTask.dateInput
    || description.value !== currentTask.description;

    if (formInputContainsValues && formValuesUpdated) {

        confirmCloseDialog.showModal();
        
    } else {

        reset();

    }


    cancelBtn.addEventListener("click", () => {


        confirmCloseDialog.close();


    })


    discardBtn.addEventListener("click", () => {


        confirmCloseDialog.close();
        reset();


    })




    taskForm.addEventListener("click", (e) => {


        e.preventDefault();



        addOrUpdateTask();



    })
    


});