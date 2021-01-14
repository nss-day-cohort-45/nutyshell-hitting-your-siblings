import { deleteArticle } from "./newsProvider.js"

export const NewsHTMLConverter = (newsObject) => {
    return ` 
    <section class="news">
        <a href="${newsObject.link} class="news_link">${newsObject.link}</a>
        <div class="news_text">${ newsObject.text}</div> 
        <div class="news_timestamp">Timestamp: ${ new Date(newsObject.timestamp).toLocaleDateString('en-US') }</div>
        <button id="deleteArticle--${newsObject.id}">Delete</button>
    </section>
    `
}
//converting the newsObject from the data base into html 

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [foo, articleId] = clickEvent.target.id.split("--")

        deleteArticle(articleId)
    }

})
// dispatching the click event on the delete button for news article with the matching ID 