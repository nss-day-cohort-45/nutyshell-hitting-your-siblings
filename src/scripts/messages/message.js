export const MessageHTMLConverter = (message) => {
    return `
        <section class="message" id="${message.id}>
            <div class="Message__text">${ message.messageText }</div>
            <div class="Message__timestamp">${new Date(message.timestamp).toLocaleDateString('en-US')}</div>
            <button id="deleteMessage--${message.id}">Delete</button>
        </section>
    `
}
