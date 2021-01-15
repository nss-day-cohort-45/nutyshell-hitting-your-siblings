export const FriendHTMLConverter = (user, friend) => {
    return `
        <section class="friend" id="friend.id">
            <h3>${user.username}</h3>
            <div class="friend__Name">Friend Name: ${friend.FriendName}</div>
            <button id="deleteFriend--${friend.id}">Unfriend</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteFriend--")) {
        //const [foo, newsObjectId] = clickEvent.target.id.split("--")
        const [foo, friendId] = clickEvent.target.id.split("--")

        deleteAFriend(friendId)
    }

})