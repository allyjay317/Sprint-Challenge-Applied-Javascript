// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((axiosData) =>{
        console.log(axiosData)
        let cardContainer = document.querySelector(".cards-container")
        axiosData.data.articles.bootstrap.forEach(element => {
            cardContainer.append(cardCreator(element, "bootstrap"))
        });
        axiosData.data.articles.javascript.forEach(element => {
            cardContainer.append(cardCreator(element, "javascript"))
        });
        axiosData.data.articles.jquery.forEach(element => {
            cardContainer.append(cardCreator(element, "jquery"))
        });
        axiosData.data.articles.node.forEach(element => {
            cardContainer.append(cardCreator(element, "node.js"))
        });
        axiosData.data.articles.technology.forEach(element => {
            cardContainer.append(cardCreator(element, "technology"))
        });
    })

let cardCreator = function(cardData, tab){
    let card = document.createElement("div") 
    card.classList.add("card")
    let cardHeadline = document.createElement("div") 
    cardHeadline.classList.add("headline")
    cardHeadline.textContent = cardData.headline;
    let cardAuthor = document.createElement("div") 
    cardAuthor.classList.add("author")
    let cardImgContainer = document.createElement("div") 
    cardImgContainer.classList.add("img-container")
    let cardImg = document.createElement("img") 
    cardImg.src= cardData.authorPhoto
    
    let cardByline = document.createElement("span")
    cardByline.textContent = `By ${cardData.authorName}`

    card.append(cardHeadline, cardAuthor)
    cardAuthor.append(cardImgContainer, cardByline)
    cardImgContainer.append(cardImg)
    card.setAttribute("data-tab", tab)

    return card;

}