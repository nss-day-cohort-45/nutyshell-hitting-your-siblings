const eventHub = document.querySelector(".dashboard")

const dispatchStateChangeEvent = () => {
    const friendsEvent = new CustomEvent("friendsStateChanged")

    eventHub.dispatchEvent(friendsEvent)
}

let friends = []

export const useFriends = () => {
    return friends.slice()
}

export const getFriends = () => {
    fetch('http://localhost:8088/friends')
        .then(response => response.json())
        .then(parsedFriends => {
            friends = parsedFriends
        })
}
//gets users friends from the database and pushes them into the friends array

export const saveFriend = friend => {
    let stringifyObj = JSON.stringify(friend)
    return fetch('http://localhost:8088/friends', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifyObj
    })
        .then(getFriends)
        .then(dispatchStateChangeEvent)
}
// translates friend info into json for the api

export const deleteFriend = friendId => {
    fetch(`http://localhost:8088/friends/${friendId}`, {
        method: "DELETE"
    })
        .then(getFriends)
        .then(dispatchStateChangeEvent)
}

//does a fetch to find the friend ID then deletes that object from the database