// Function to run when the DOM is loaded
function domLoaded() {
    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addBtnClick);
}

// Function to get text upon button click
function addBtnClick() {
    // Extract the text entered in the textbox
    const taskInput = document.getElementById("taskInput"); 
    const taskText = taskInput.value;

    // Prevent empty tasks
    if (taskText === "") {
        taskInput.focus();
        return;
    }

    // Call addTask() with the new task
    addTask(taskText);
}

// Function to add item to custom list.
function addTask(newTask) {  
    // Create a new <li> element
    const newLi = document.createElement('li');

    // Set new <li> element html
    newLi.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">✖</button>`;

    // Append the new <li> to the <ul>
    itemList.appendChild(newLi);
}
