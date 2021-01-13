import { getTasks, saveTask } from "./TaskProvider.js"


const contentTarget = document.querySelector(".taskFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveTask") {

      // Need to gather the data from the form
      const name = document.querySelector("#task__title").value
      const date = document.querySelector("#due__date").value
     


      // Make a new object representation of a task
      const newTask = {
        taskTitle: name,
        dueDate: date,
        timestamp: Date.now()
      }
      // Change API state and application state
      saveTask(newTask)
  }
})

const render = () => {
   

    contentTarget.innerHTML = `
      <section class="taskForm">
        <input type="text" id="" placeholder="Task Name">
        <textarea id="text" placeholder="Completion Date"></textarea>
        <button id="saveTask">Save Task</button>
      </section>
    `
        
        
}

export const taskForm = () => {
    getTasks()
    .then( () => render())
}