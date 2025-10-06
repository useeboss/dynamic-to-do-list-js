// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Alert if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add event to remove the task when button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button to list item, then list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add task when button is clicked
  addButton.addEventListener('click', addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: invoke addTask on DOMContentLoaded if needed
  // addTask(); // Uncomment if you want to run addTask on load
});
