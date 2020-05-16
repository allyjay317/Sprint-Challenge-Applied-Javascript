// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics")
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then((data) =>{
        console.log(data);
        data.data.topics.forEach(topic => {
            let tab = document.createElement("div")
            tab.classList.add("tab")
            tab.textContent = topic
            topics.append(tab);
            tab.addEventListener("click", (event) =>{
                let cards = document.querySelectorAll(".card")
                cards.forEach(element =>{
                    element.style.display = "flex"
                })
                if(tab.classList.contains("active-tab")){
                    tab.classList.remove("active-tab")
                } else {
                    let tabs = document.querySelectorAll(".tab")
                    tabs.forEach(loopTab => {
                        loopTab.classList.remove("active-tab")
                    })

                    tab.classList.add("active-tab")
                    cards.forEach(element =>{
                        if(element.getAttribute("data-tab") != tab.textContent){
                            element.style.display = "none"
                        }
                    })
                }
            })
        });
    })