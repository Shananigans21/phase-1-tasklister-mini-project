document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Select the form by its id
const form = document.getElementById('create-task-form');

// Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Your code to handle the task input will go here
});
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Gather the input data by selecting the input field using its 'name' attribute
  const taskDescription = event.target.elements['new-task-description'].value;

  // You can now store the task in a variable
  console.log('Task description:', taskDescription);
  
  // Call the buildToDo function (you will define this in the next step)
  buildToDo(taskDescription);
});
// Function to create a new todo item
function buildToDo(task) {
  // Create a new 'li' element
  const li = document.createElement('li');
  li.textContent = task;
const taskList = document.getElementById('tasks');
taskList.appendChild(li);

// Set the text content to the task passed into the function
li.textContent = task;

// Find the task list (element with id 'task') and append the new 'li' to it
taskList.appendChild(li);
}
