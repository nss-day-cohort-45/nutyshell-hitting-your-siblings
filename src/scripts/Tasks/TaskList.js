import { getTasks, useTasks, deleteTask } from "./TaskProvider.js";
import { TaskHTMLConverter } from "./Tasks.js";


const contentTarget = document.querySelector(".taskList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("showTasksClicked", () => {
    TaskList()
})
eventHub.addEventListener("taskStateChanged", () => {
    TaskList()
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteTask--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")
     
     deleteTask(taskId)
  }
})


const render = (taskArray) => {
    
    const allTasksConvertedToStrings = taskArray.map((task) =>{
        return TaskHTMLConverter(task)
    }).join("")
    
    contentTarget.innerHTML = allTasksConvertedToStrings
}

export const TaskList = () => {
   
    getTasks()
        .then(() => {
            const allTasks = useTasks()
            const uncompleteTasks = allTasks.filter((tasks) => tasks.isComplete === false)
            render(uncompleteTasks)
        })
}