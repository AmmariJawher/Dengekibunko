const mainSliderList=document.querySelector(".main-slider-list"),mainSliderItem=document.querySelectorAll(".main-slider-item"),prevBtn=document.querySelector("#main-slider-controls-prev"),nextBtn=document.querySelector("#main-slider-controls-next");let counter=1;const size=mainSliderItem[0].clientWidth;mainSliderList.style.transform="translateX(-840px)",console.log(counter);const navDot=document.querySelectorAll(".nav-dot");function moveSlide(e){mainSliderList.style.transition="transform 0.2s ease-out",!0===e?counter++:!1===e&&counter--,mainSliderList.style.transform="translateX("+-size*counter+"px)"}function autoNextSlide(){setInterval(moveSlide(!0),3e3)}function checkIndex(e){counter=Array.from(navDot).indexOf(e.target),mainSliderList.style.transition="transform 0.2s ease-in-out",mainSliderList.style.transform="translateX("+-size*counter+"px)"}document.onload=autoNextSlide,nextBtn.addEventListener("click",()=>{6!==counter&&(console.log(counter),moveSlide(!0),console.log(counter))}),prevBtn.addEventListener("click",()=>{0!==counter&&moveSlide(!1)}),mainSliderList.addEventListener("transitionend",()=>{"lastClone"===mainSliderItem[counter].id&&(mainSliderList.style.transition="none",counter=mainSliderList.childElementCount-2,mainSliderList.style.transform="translateX("+-size*counter+"px)"),"firstClone"===mainSliderItem[counter].id&&(mainSliderList.style.transition="none",counter=mainSliderList.childElementCount-6,mainSliderList.style.transform="translateX("+-size*counter+"px)");for(let e=0;e<navDot.length;e++)navDot[e].style.opacity="0.6";navDot[counter].style.opacity="1"}),navDot.forEach(function(e){e.addEventListener("click",checkIndex)});