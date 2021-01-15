import { newsForm } from "./news/newsForm.js"
import { NewsList } from "./news/newsList.js"
import { EventList } from './events/eventList.js'
import { EventForm } from "./events/eventForm.js"
import { TaskList } from "./Tasks/TaskList.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { getTasks } from "./Tasks/TaskProvider.js"
import { getArticles } from "./news/newsProvider.js"
import { getEvents } from "./events/eventProvider.js"


const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = Nutshell()
})

const modules = [
getTasks(),
getArticles(),
getEvents()
]

export const Nutshell = () => {
    // Render all your UI components here
    
}
