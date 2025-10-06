// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage and display them
  loadTasks();

  // Add task when button is clicked
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      } else {
        alert('Please enter a task.');
      }
    }
  });

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
  }

  // Function to add a task to the DOM and optionally save to Local Storage
  function addTask(taskText, save = true) {
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove task from DOM and Local Storage
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    // Append button and list item
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Function to remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
});
