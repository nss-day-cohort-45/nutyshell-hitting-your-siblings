import { NewsHTMLConverter } from "./news.js";
import { useArticles, getArticles } from "../news/newsrProvider.js";


const contentTarget = document.querySelector(".newsList")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNewsClicked", () => {
    NewsList()
})

eventHub.addEventListener("newsStateChanged", () => {
    NewsList()
})


const render = (newsArray) => {
    
    const allArticlesConvertedToStrings = newsArray.map((news) => {
        return NewsHTMLConverter(news)
    }).join("")

    contentTarget.innerHTML = allNewsConvertedToStrings
}
// takes the array of articles objects from the databas and pushes each through the HTML converter
//then joins them as one string


export const NewsList = () => {
    getArticles()
        .then(() => {
            const allArticles = useArticles()
            render(allArticles)
        })
}
// Renders the article onto the DOM 
