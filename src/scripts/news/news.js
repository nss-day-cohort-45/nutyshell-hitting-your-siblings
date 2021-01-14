import { deleteArticle } from "./newsProvider.js"

export const NewsHTMLConverter = (newsObject) => {
    return ` 
    <section class="news">
        <div class="news_text">${ newsObject.text}</div> 
        <div class="news_timestamp">Timestamp: ${ new Date(newsObject.timestamp).toLocaleDateString('en-US') }</div>
        <button id="deleteArticle--${newsObject.id}">Delete</button>
    </section>
    `
}
//converting the newsObject from the data base into html 

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickevent => {
    if (clickevent.target.id.startsWithis("deleteArticle--")) {
        const [foo, newsObjectId] = clickEvent.target.id.split("--")

        deleteArticle(articleId)
    }

})
// dispatching the click event on the delete button for news article with the matching ID 