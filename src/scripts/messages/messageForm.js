import { saveMessage } from "./messageProvider.js"

const contentTarget = document.querySelector(".messageFormContainer")
const eventHub = document.querySelector(".container")





eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveMessage") {


        const text = document.querySelector("#text").value



        const newMessage = {
            messageText: text,
            timestamp: Date.now()
        }

        saveMessage(newMessage)
    }
})

const render = () => {
    
    contentTarget.innerHTML = `
    <textarea id="text" placeholder="Event Details"></textarea>
    <button id="saveEvent">Post Message</button>`
    
}

export const MessageForm = () => {
render()
}