import { saveMessage } from "./messageProvider.js"

const contentTarget = document.querySelector(".messageFormContainer")
const eventHub = document.querySelector(".container")





eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveMessage") {


        const MessageText = document.querySelector("#messageText").value

        const activeUser = parseInt(sessionStorage.getItem('activeUser'));

        const newMessage = {
            MessageText: MessageText,
            timestamp: Date.now(),
            userId: activeUser
        }

        saveMessage(newMessage)
    }
})

const render = () => {
    
    contentTarget.innerHTML = `
    <textarea id="messageText" placeholder="New Message"></textarea>
    <button id="saveMessage">Post Message</button>`
    
}

export const MessageForm = () => {
render()
}