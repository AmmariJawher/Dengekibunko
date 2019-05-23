//TODO: Fix slider.
/* MAIN SLIDER */

const mainSliderList = document.querySelector(".main-slider-list");
const mainSliderItem = document.querySelectorAll(".main-slider-item");

//Buttons: Navigate forth and back in the slider
const prevBtn = document.querySelector("#main-slider-controls-prev");
const nextBtn = document.querySelector("#main-slider-controls-next");

//Counters: Keep 
let counter = 1;
const size = mainSliderItem[0].clientWidth;


mainSliderList.style.transform = "translateX(-840px)";
console.log(counter);


//Slider Navigation Dots: Navigete through the slider items
const navDot = document.querySelectorAll(".nav-dot");

function moveSlide(argument) {
    mainSliderList.style.transition = "transform 0.2s ease-out";
    if (argument === true) {
        counter++
    } else if (argument === false) {
        counter--;
    }
    mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
}

//TODO: Automate the slider.
function autoNextSlide() {
    setInterval(moveSlide(true), 3000);
}
document.onload = autoNextSlide;
//Buttons Listener: Make sure counter value between 1 and 5, animation add it, counter plus 1 or minus 1 and slider will change.
nextBtn.addEventListener("click", () => {
    if (counter === 6) {
        return;
    };
    console.log(counter);
    moveSlide(true);
    console.log(counter);

});
prevBtn.addEventListener("click", () => {
    if (counter === 0) {
        return;
    };
    moveSlide(false);
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
    }
    
    ///Any changes to the Slider will affect the Navigation List style
    for (let index = 0; index < navDot.length; index++) {
        navDot[index].style.opacity = "0.6";
    }
    navDot[counter].style.opacity = "1";
});

//Control Slider from the Navigation List.
function checkIndex(event) {
    counter = (Array.from(navDot).indexOf(event.target));
    mainSliderList.style.transition = "transform 0.2s ease-in-out";
    mainSliderList.style.transform = "translateX(" + (-size * counter) + "px)";
};

navDot.forEach(function (check) {
    check.addEventListener('click', checkIndex);
});