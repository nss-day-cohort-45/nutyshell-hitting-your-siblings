import {getEvents, useEvents} from "./eventProvider.js"

const contentTarget = document.querySelector(".Events")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("eventStateChanged", () => {
    EventList()
})



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, eventId] = clickEvent.target.id.split("--")
        
       deleteNote(eventId)
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


