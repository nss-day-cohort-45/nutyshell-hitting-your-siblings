export const MessageHTMLConverter = (message) => {
    return `
        <section class="message" id="${message.id}>
        <div class ="message Author">${message.user.username}</div>
        <div class="Message__text">${ message.MessageText }</div>
        <div class="Message__timestamp">${new Date(message.timestamp).toLocaleDateString('en-US')}</div>
        <button id="deleteMessage--${message.id}">Delete</button>
        </section>
        `
    }
    
 