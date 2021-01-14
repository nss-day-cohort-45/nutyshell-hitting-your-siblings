export const EventHTMLConverter = (event) => {
    return `
        <section class="event" id="${event.id}>
            <div class="event__Name">Event Name: ${ event.EventName }</div>
            <div class="event__text">Event Details: ${ event.text }</div>
            <div class="event__location">Location: ${ event.location }</div>
            <div class="event__date">Event Date: ${ event.date }</div>
            <div class="event__timestamp">${new Date(event.timestamp).toLocaleDateString('en-US')}</div>
            <button id="deleteEvent--${event.id}">Delete</button>
        </section>
    `
}

