import { NewsHTMLConverter } from "./news.js";
import { useArticles, getArticles } from "./newsProvider.js";


const contentTarget = document.querySelector(".newsList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", () => {
    NewsList()
})


const render = (newsArray) => {
    
    const allArticlesConvertedToStrings = newsArray.map((news) => {
        return NewsHTMLConverter(news)
    }).join("")

    contentTarget.innerHTML = allArticlesConvertedToStrings
}
// takes the array of articles objects from the database and pushes each through the HTML converter
//then joins them as one string


export const NewsList = () => {
    getArticles()
        .then(() => {
            const allArticles = useArticles()
            render(allArticles)
        })
}
// Renders the article onto the DOM 
