import { saveEvent } from "./eventProvider.js"


const contentTarget = document.querySelector(".eventFormContainer")
const eventHub = document.querySelector(".container")





eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {


        const EventName = document.querySelector("#eventName").value
        const text = document.querySelector("#text").value
        const location = document.querySelector("#eventLocation").value
        const date = document.querySelector("#eventDate").value



        const newEvent = {
            EventName: EventName,
            text: text,
            location: location, 
            date : date,
            timestamp: Date.now()
        }

        saveEvent(newEvent)
    }
})

const render = () => {
    
    
    contentTarget.innerHTML = `
    <input type="text" id="eventName" placeholder="Event name">
    <input type="location" id="eventLocation" type="text" placeholder="City, State"/>
    <textarea id="text" placeholder="Event Details"></textarea>
    <div class="fieldset">
    <label for="eventDate">Date of event</label>
    <input type="date" name="eventDate" id="eventDate">
    </div> 
    <button id="saveEvent">Post Event</button>`
    
}

export const EventForm = () => {
render()
}

