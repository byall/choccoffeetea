// JavaScript File
var myImage = document.getElementById("ch");
var imageArray = ["images/choc600.jpeg", "images/chopieces.jpg", "images/chom.jpg", "images/chocaker.jpg"];
var imageIndex = 0;
function changeImage () {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length) {
        imageIndex=0;
    }
}
setInterval(changeImage, 3500);