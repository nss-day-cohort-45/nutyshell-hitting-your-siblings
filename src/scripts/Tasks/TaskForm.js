import { getTasks, saveTask } from "./TaskProvider.js"


const contentTarget = document.querySelector(".taskFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveTask") {

      // Need to gather the data from the form
      const name = document.querySelector("#title").value
      const date = document.querySelector("#text").value
      const userId = parseInt(sessionStorage.getItem('activeUser'))


      // Make a new object representation of a task
      const newTask = {
        userID: userId,
        taskTitle: name,
        dueDate: date,
        timestamp: Date.now(),
        isComplete: false
      }
      // Change API state and application state
      saveTask(newTask)
  }
})

const render = () => {
   

    contentTarget.innerHTML = `
      <section class="taskForm">
        <input type="text" id="title" placeholder="Task Name">
        <textarea id="text" placeholder="Completion Date"></textarea>
        <button id="saveTask">Save Task</button>
      </section>
    `
        
        
}

export const taskForm = () => {
    getTasks()
    .then( () => render())
}