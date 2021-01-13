const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articlesStateChangedEvent = new CustomEvent("articlesStateChanged")

    eventHub.dispatchEvent(articlesStateChangedEvent)
}



let articles = []

export const useArticles = () => {
    articles.slice()
}
//takes the array of articles and .slice() allows us to use that data in another module


export const getArticles = () => { 
    return fetch("http://localhost:8088/database/articles")
    .then(response => response.json())
    .then(parsedArticles => {
        articles = parsedArticles
    })
}
//fetch article data from api and move each article into the articles array

export const saveArticles = article => {  
    let stringifyObj = JSON.stringify(article)
    return fetch('http://localhost:8088/database/articles', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifyObj
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}
//takes the input from the form, turns it into json format then stringifies to save into database

export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/database/articles/${articleId}`, {
        method: "DELETE"
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}
//delete the article with the matching id then uses getArticles to update the articles list without the deleted article