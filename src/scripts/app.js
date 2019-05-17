var i = 0;
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

window.onload = changeImg;