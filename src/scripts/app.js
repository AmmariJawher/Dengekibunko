var i = 0;
var images = [];
var time = 3000;

// Image List
images[0] = "img/silde0.png";
images[1] = "img/silde1.png";
images[2] = "img/silde2.png";

// Change Image
function changeImg(){
    document.slide.src  = images[i];

    if (i < images.length -1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", Time);
}

window.onload = changeImg;