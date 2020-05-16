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

let cardCreator = function(cardData){
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

    return card;

}