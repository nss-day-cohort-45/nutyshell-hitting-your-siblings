import { saveEvent } from "./eventProvider.js"
import { useEvents, getEvents } from "./eventProvider.js"

const contentTarget = document.querySelector(".eventFormContainer")
const eventHub = document.querySelector(".container")





eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {


        const EventName = document.querySelector("#eventName").value
        const text = document.querySelector("#text").value
       
        const newEvent = {
            EventName: EventName,
            text: text,
            Date: Date.now()
        }

        saveEvent(newEvent)
    }
})

const render = () => {
    const eventsCollection = useEvents()
    
    contentTarget.innerHTML = `
    <input type="text" id="eventName" placeholder="Event name">
    <input type="location" id="eventLocation" type="text" placeholder="City, State"/>
    <textarea id="text" placeholder="Event Details"></textarea>
    <button id="saveEvent">Post Event</button>`
    
}

export const EventForm = () => {
render()
}

