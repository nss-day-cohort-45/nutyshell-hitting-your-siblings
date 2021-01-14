import { updateTasks, useTasks } from "./TaskProvider.js"

const eventHub = document.querySelector(".container")

export const TaskHTMLConverter = (taskObject) => {
    return `
        <section class="task">
            <div id="title" class="taskTitle">${taskObject.taskTitle}</div>
            <div id="date" class="dueDate">${taskObject.dueDate}</div>
            <input type="checkbox" id="task--${taskObject.id}" name="task" value="complete">
                <label for="task"> This task is complete.</label>
            <button id="deleteTask--${taskObject.id}">DELETE<//div>
        </section>
    `
}

eventHub.addEventListener("click", clickevent =>{
    if (clickevent.target.id.startsWith("task--")) {
        const [prefix, id] = clickevent.target.id.split("--")

       const arrayOfTasks = useTasks()
       const foundTasks = arrayOfTasks.find(
           (task) => {
               return task.id === parseInt(id)
           }
        )
        foundTasks.isComplete = true 
        updateTasks(foundTasks)  
    }
})





