// ==========================
// Theme Toggle
// ==========================

// Select the theme button
const themeBtn = document.getElementById("themeBtn");

// Add click event to the button
themeBtn.addEventListener("click", () => {

    // Toggle dark mode
    document.body.classList.toggle("dark");

});


// ==========================
// Dynamic Task List
// ==========================

// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

// Function to display tasks
function renderTasks() {

    // Clear previous list
    taskList.innerHTML = "";

    // Loop through the array
    tasks.forEach((task) => {

        // Create list item
        const li = document.createElement("li");

        // Add task text
        li.innerText = task;

        // Add to webpage
        taskList.appendChild(li);

    });

}

// Add button click
addTaskBtn.addEventListener("click", () => {

    // Get input value
    const newTask = taskInput.value.trim();

    // Check empty input
    if(newTask === ""){

        alert("Please enter a task.");

        return;

    }

    // Store task in array
    tasks.push(newTask);

    // Show tasks
    renderTasks();

    // Clear input
    taskInput.value = "";

});


// ==========================
// Fetch Random Quote
// ==========================

// Select elements
const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");

// Button click
quoteBtn.addEventListener("click", () => {

    fetch("https://dummyjson.com/quotes/random")

    .then(response => response.json())

    .then(data => {

        quote.innerHTML =
        `"${data.quote}" <br><br><strong>- ${data.author}</strong>`;

    })

    .catch(error => {

        quote.innerHTML = "Unable to load quote.";

        console.log(error);

    });

});