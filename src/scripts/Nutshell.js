import { newsForm } from "./news/newsForm.js"
import { NewsList} from "./news/newsList.js"
import { EventList } from './events/eventList.js'
import { EventForm } from "./events/eventForm.js"
import { TaskList } from "./Tasks/TaskList.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { getTasks, useTasks } from "./Tasks/TaskProvider.js"
import { getArticles,  useArticles  } from "./news/newsProvider.js"
import { getEvents, useEvents } from "./events/eventProvider.js"
import { getUsers, useUsers } from "./users/usersProvider.js"
import { getMessages } from "./messages/messageProvider.js"
import { NewsHTMLConverter } from "./news/news.js";
import { EventHTMLConverter } from "./events/event.js";
import { TaskHTMLConverter } from "./Tasks/Tasks.js";
import { useFriends }  from "./friends/friendDataProvider.js";
import { FriendList }  from "./friends/FriendList.js";





const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    
    contentTarget.innerHTML = Nutshell()
})

const modules = [
useUsers(),
useTasks(),
useArticles(),
useEvents(),
useFriends()
]

export const Nutshell = () => {
    // Render all your UI components here
   
    render()
    
}

const render = () => {
  NewsList()
  TaskList()
  EventList()
  EventForm()
  taskForm()
  newsForm()
  FriendList()
    
}   



