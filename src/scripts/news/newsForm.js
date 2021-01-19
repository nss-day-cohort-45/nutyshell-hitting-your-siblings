import { saveArticles }  from "./newsProvider.js"
import { getArticles } from "./newsProvider.js"

const contentTarget = document.querySelector(".newsForm")
const eventHub = document.querySelector(".container")

const render = () => {

    contentTarget.innerHTML = `
    <section class="articleForm">
        <textarea id="link" placeholder="article link"></textarea>
        <textarea id="text" placeholder="article description"></textarea>
        <button id="saveArticle">Save This Article</button>
    </section>
    `
}
// creates a form on the DOM to add new articles and a save button

export const newsForm = () => {
    getArticles()
    .then( () => render())
}
// gets the articles form the database, then uses render to show the form

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {
        const text = document.querySelector("#text").value
        const link = document.querySelector("#link").value
        const newArticle = {
            text: text,
            link: link,
            timestamp: Date.now()
        }
        saveArticles(newArticle)
    }
})
//has listener for clickEvent on the save button.  When clicked, the article will 
//be saved in json format in database