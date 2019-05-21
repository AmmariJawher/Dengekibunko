/* var i = 0;
var images = [];
var time = 3000;

// Image List
images[0] = "/dist/img/slide0.png";
images[1] = "/dist/img/slide1.jpg";
images[2] = "/dist/img/slide2.png";


function changeImg(){
    console.log(images[i]);
    document.getElementById("slide-img").src = images[i];

    if (i < images.length -1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
    console.log("end");
}

window.onload = changeImg; */





/* MAIN SLIDER */

const mainSliderList = document.querySelector(".main-slider-list");
const mainSliderItem = document.querySelectorAll(".main-slider-item");

//Buttons: Navigate forth and back in the slider
const prevBtn = document.querySelector("#main-slider-controls-prev")
const nextBtn = document.querySelector("#main-slider-controls-next")

//Counters: Keep 
let counter = 1;
let navDotCounter;
const size = mainSliderItem[0].clientWidth;

mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";

//Slider Navigation Dots: Navigete through the slider items
const navDot = document.querySelectorAll(".nav-dot");


//Buttons Listener: Make sure counter value between 1 and 5, animation add it, counter plus 1 or minus 1 and slider will change.
nextBtn.addEventListener("click", () => {
    if (counter >= mainSliderList.childElementCount - 1) return;
    mainSliderList.style.transition = "transform 0.2s ease-out";
    counter++;
    mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
});
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    mainSliderList.style.transition = "transform 0.2s ease-in-out";
    counter--;
    mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
});

//Main Slider Listener: Make sure to keep the slide in an infinite loop by changing the slide to the original slide instantly without the user notice.
mainSliderList.addEventListener("transitionend", () => {
    if (mainSliderItem[counter].id === "lastClone") {
        mainSliderList.style.transition = "none";
        counter = mainSliderList.childElementCount - 2;
        mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
    };

    if (mainSliderItem[counter].id === "firstClone") {
        mainSliderList.style.transition = "none";
        counter = mainSliderList.childElementCount - 6;
        mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
    };
});


//Dot navigation list Listener: 
navDot.forEach(function (check) {
    check.addEventListener('click', checkIndex);
})

function checkIndex(event) {
    navDotCounter = (Array.from(navDot).indexOf(event.target));
    counter = navDotCounter + 1;
    mainSliderList.style.transition = "transform 0.2s ease-in-out";
    mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
}

mainSliderList.addEventListener("transitionend", () => {
    for (index = 0; index < navDot.length; index++) {
        navDot[index].style.opacity = "0.6";
    }
    navDotCounter = counter - 1;
    navDot[navDotCounter].style.opacity = "1";

});