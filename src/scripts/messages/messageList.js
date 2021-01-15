import {getMessages, useMessages, deleteMessage} from "./messageProvider.js"
import {MessageHTMLConverter} from "./message"



const contentTarget = document.querySelector(".Messages")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("messageStateChanged", () => {
    MessageList()
})



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteMessage--")) {
        const [prefix, messageId] = clickEvent.target.id.split("--")
        
        deleteMessage(messageId)
    }
    }
    )


const render = (MessagesArray) => {
    const allMessagesConvertedToStrings = MessagesArray.map(
        (message) => {
         return   MessageHTMLConverter(message)  
        }
    ).join("")

    contentTarget.innerHTML = allMessagesConvertedToStrings
}





export const MessageList = () => {
    getMessages()
        .then(() => {
            const allMessages = useMessages()
            render(allMessages)
        })
}
