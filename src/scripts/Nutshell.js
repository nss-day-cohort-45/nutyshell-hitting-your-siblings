const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = Nutshell()
})



export const Nutshell = () => {
    // Render all your UI components here
}