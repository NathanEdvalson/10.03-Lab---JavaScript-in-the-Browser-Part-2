// Function to run when the DOM is loaded
function domLoaded() {
    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addBtnClick);

    // Listen for Enter Key
    const taskInput = document.getElementById('taskInput');
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addBtnClick();
        }
    });
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
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('taskInput');
    
    // Create a new <li> element
    const newLi = document.createElement('li');

    // Set new <li> element html
    newLi.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">✖</button>`;

    // Append the new <li> to the <ul>
    itemList.appendChild(newLi);

    // Clear input field and refocus
    itemInput.value = "";
    itemInput.focus();

    // Attach Task Removal Button
    const doneButton = document.createElement('button');
    doneButton.className = 'done-btn';
    doneButton.textContent = '✖';
    doneButton.addEventListener('click', removeTask);
}

function removeTask(event) {
    // Get the parent <li> of the clicked button
    const taskItem = event.target.parentNode;
    
    // Get the parent <ol> element
    const taskList = taskItem.parentNode;

    // Remove the <li> from the <ol>
    taskList.removeChild(taskItem);
}
