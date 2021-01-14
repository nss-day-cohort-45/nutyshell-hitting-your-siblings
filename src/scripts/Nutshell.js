import { EventList } from "./events/eventList.js"
import {EventForm} from "./events/eventForm.js"


const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(
    EventList(),
    EventForm().container)

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = Nutshell()
})



export const Nutshell = () => {
    // Render all your UI components here
}