import {getEvents, useEvents, deleteEvent} from "./eventProvider.js"
import {EventHTMLConverter} from "./event.js"



const contentTarget = document.querySelector(".Events")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("eventStateChanged", () => {
    EventList()
})



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, eventId] = clickEvent.target.id.split("--")
        
        deleteEvent(eventId)
    }
    }
    )


const render = (eventsArray) => {
    const allEventsConvertedToStrings = eventsArray.map(
        (event) => {
         return   EventHTMLConverter(event)  
        }
    ).join("")

    contentTarget.innerHTML = allEventsConvertedToStrings
}





export const EventList = () => {
    getEvents()
        .then(() => {
            const allEvents = useEvents()
            render(allEvents)
        })
}


