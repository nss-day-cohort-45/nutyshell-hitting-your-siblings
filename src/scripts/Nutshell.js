import { newsForm } from "./news/newsForm.js"
import { NewsList } from "./news/newsList.js"
import { EventList } from './events/eventList.js'
import { EventForm } from "./events/eventForm.js"
import { TaskList } from "./Tasks/TaskList.js"
import { taskForm } from "./Tasks/TaskForm.js"
import { getTasks } from "./Tasks/TaskProvider.js"
import { getArticles } from "./news/newsProvider.js"
import { getEvents } from "./events/eventProvider.js"
import { getUsers } from "./users/usersProvider.js"
import { getMessages } from "./messages/messageProvider.js"


const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = Nutshell()
})

const modules = [
getUsers(),
getTasks(),
getArticles(),
getEvents(),
// getMessages()
]

export const Nutshell = () => {
    // Render all your UI components here
    getUsers().then(() =>{
        Promise.all(modules).then(render)
    })
}

const render = () => {
   contentTarget.innerHTML = `
   <main>
      <div class="nutshell">
        <article>
          <section class="Events">
          <h2 class="text-center">EVENTS</h2>
            ${EventList()}
          </section>
          <section class="newsList">
          <h2 class="text-center">ARTICLES</h2>
          ${NewsList()}   
        </section>
        </article>
        <article>
        
          <section class="taskList">
            <h2 class="text-center">TASKS</h2>
            ${TaskList()}   
            </section>
        </article>
      </div>
    </main>
    `
}

{/* <section class="Messages">
        <h2 class="text-center">MESSAGES</h2>
          ${MessageList()}
        </section> */}