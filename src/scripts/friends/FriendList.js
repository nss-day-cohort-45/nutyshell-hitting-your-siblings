
import { FriendHTMLConverter } from "./Friend.js"
import { useUsers, getUsers } from "../users/usersProvider.js"
import { useFriends, getFriends } from "./FriendDataProvider.js"
import { renderSearchBar } from "./FriendForm.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friendContainer")

eventHub.addEventListener("friendStateChanged", () => FriendList())

// empty arrays for users and friends
let users = []
let friends = []

// responsible for filling arrays with users and friends and calling render
export const FriendList = () => {
    getUsers()
        .then(getFriends)
        .then(() => {
            users = useUsers()
            friends = useFriends()

            render()
        })
}

// responsible for filtering friends for current user and rendering
const render = () => {
    let friendHTML = ""

    const userFriendships = friends.filter(friend => friend.userId === parseInt(sessionStorage.getItem("activeUser")))

    userFriendships.forEach(rel => {
        const matchedUser = users.find(user => user.id === rel.username)
        friendHTML += FriendHTMLConverter(matchedUser, rel)
    })

    contentTarget.innerHTML = `
        <h3>Friends</h3>
        <button id="addFriend">Add Friend</button>
        ${friendHTML}
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addFriend")
        renderSearchBar()
})