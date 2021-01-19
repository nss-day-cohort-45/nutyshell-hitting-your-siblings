//form that you can enter a users name and per the instruction you have to know the users name 
//and you have to type in the users name and do a .find on the db so it will find whatver user name is typed in.
//after it finds it it will render that to the dom. we need a friends list to render the frinds list in.
//when you type in another users name it should save it

import { useUsers } from "../users/usersProvider.js"
import { saveFriend } from "../friends/FriendDataProvider.js"

const contentTarget = document.querySelector(".friends")
const eventHub = document.querySelector(".container")

export const renderSearchBar = () => {
    contentTarget.innerHTML = `
    <h2>Add a friend</h2>
    <input type="search" id="friend__searchBar">
    <button id="friend__addButton">Add</button>  
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "friend__addButton") {
        const newFriend = document.querySelector("#friend__searchBar").value
        friendCheck(newFriend)
    }
})

const friendCheck = (name) => {
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    const users = useUsers()
    const userFriendId = users.find(friend => friend.username === name)

    if (userFriendId) {
        const newFriend = {
            userId,
            userFriendId: userFriendId.id
        }

        saveFriend(newFriend)
    } else {
        window.alert("User doesn't exist")
    }
}
