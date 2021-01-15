const eventHub = document.querySelector(".container")
let messages = []




export const useMessages = () => {
    return messages.slice()
}



const dispatchStateChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("messageStateChanged")

    eventHub.dispatchEvent(messageStateChangedEvent)
}


export const getMessages = () => {
    return fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then(parsedMessages => {
            messages = parsedMessages
        })
}



export const saveMessage = message => {
    const stringifiedObj = JSON.stringify(message)
     return fetch('http://localhost:8088/messages', {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: stringifiedObj
     })
     .then(getMessages)
     .then(dispatchStateChangeEvent)
    }


    export const deleteMessage= messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
            .then(dispatchStateChangeEvent)
    }