export const EventHTMLConverter = (event) => {
    return `
        <section class="event" id="${event.id}>

            <h3>"${event.name}"</h3>
            <div class="event__text">Text: ${ event.text }</div>
            <div class="event__date">${new Date(event.date).toLocaleDateString('en-US')}</div>
            <button id="deleteEvent--${event.id}">Delete</button>
        </section>
    `
}

