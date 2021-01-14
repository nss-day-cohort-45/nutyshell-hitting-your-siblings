const eventHub = document.querySelector(".container")
let events = []




export const useEvents = () => {
    return events.slice()
}



const dispatchStateChangeEvent = () => {
    const eventStateChangedEvent = new CustomEvent("eventStateChanged")

    eventHub.dispatchEvent(eventStateChangedEvent)
}


export const getEvents = () => {
    return fetch('http://localhost:8088/events')
        .then(response => response.json())
        .then(parsedEvents => {
            events = parsedEvents
        })
}



export const saveEvent = event => {
    const stringifiedObj = JSON.stringify(event)
     return fetch('http://localhost:8088/events', {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: stringifiedObj
     })
     .then(getEvents)
     .then(dispatchStateChangeEvent)
    }


    export const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
            .then(dispatchStateChangeEvent)
    }