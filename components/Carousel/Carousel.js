/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselCreator = function(){
  let index = 0
  let carousel = document.createElement("div") 
  carousel.classList.add("carousel")
  let carouselLBtn = document.createElement("div") 
  carouselLBtn.classList.add("left-button")
  let carouselImgs = [
    carouselImg("./assets/carousel/mountains.jpeg"),
    carouselImg("./assets/carousel/computer.jpeg"),
    carouselImg("./assets/carousel/trees.jpeg"),
    carouselImg("./assets/carousel/turntable.jpeg")
  ]
  carouselImgs[0].classList.add("imgShow")
  let carouselRBtn = document.createElement("div") 
  carouselRBtn.classList.add("right-button")

  carousel.append(carouselLBtn)
  carouselImgs.forEach(img => carousel.append(img))
  carousel.append(carouselRBtn)

  carouselLBtn.addEventListener("click", (event)=>{
    let oldIndex = index
    index = index == 0 ? carouselImgs.length-1 : --index;
    
    carouselImgs[oldIndex].classList.add("imgSlideLeft")
    setTimeout(function(){
      carouselImgs[oldIndex].classList.remove("imgShow")
      carouselImgs[oldIndex].classList.remove("imgSlideLeft")
      carouselImgs[index].classList.remove("slideLeftBegin")
    }, 1000)
    
    carouselImgs[index].classList.add("slideLeftBegin")
    carouselImgs[index].classList.add("imgShow")
    
  })
  carouselRBtn.addEventListener("click", (event) =>{
    let oldIndex = index
    index = index == carouselImgs.length-1 ? 0 : ++index;
    
    carouselImgs[oldIndex].classList.add("imgSlideRight")
    setTimeout(function(){
      carouselImgs[oldIndex].classList.remove("imgShow")
      carouselImgs[oldIndex].classList.remove("imgSlideRight")
      carouselImgs[index].classList.remove("slideRightBegin")
    }, 1000)
    
    carouselImgs[index].classList.add("slideRightBegin")
    carouselImgs[index].classList.add("imgShow")
  })

  return carousel
}

let carouselImg = function(source){
  let img = document.createElement("img")
  img.src = source

  return img
}

document.querySelector(".carousel-container").append(carouselCreator())

