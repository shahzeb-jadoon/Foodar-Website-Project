/*This file creates a coupon value for each restaurant displayed
    on the home screen and displays it when someone hovers over
    the display picture of the restaurant*/

//retrieve images
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

//assign coupon values
image1.nextElementSibling.firstElementChild.innerHTML = randomString(5, "012345789abcdefghij");
image2.nextElementSibling.firstElementChild.innerHTML = randomString(5, "012345789abcdefghij");
image3.nextElementSibling.firstElementChild.innerHTML = randomString(5, "012345789abcdefghij");

//show coupon value when mouse hovers over image
image1.addEventListener("mouseover", function() {
    image1.nextElementSibling.style.display = "block";
});

image2.addEventListener("mouseover", function() {
    image2.nextElementSibling.style.display = "block";
});

image3.addEventListener("mouseover", function() {
    image3.nextElementSibling.style.display = "block";
});

//hide coupon value when mouse is no longer on the image
image1.addEventListener("mouseout", function() {
    image1.nextElementSibling.style.display = "none";
});

image2.addEventListener("mouseout", function() {
    image2.nextElementSibling.style.display = "none";
});

image3.addEventListener("mouseout", function() {
    image3.nextElementSibling.style.display = "none";
});

/*Retrieved from
    https://www.geeksforgeeks.org/generate-random-alpha-numeric-string-in-javascript/*/

//generate a random string of characters
function randomString(numOfChar, stringOfChar) { 
    var val = ''; 

    for (var i = numOfChar; i > 0; i--) { 
        val += stringOfChar[Math.floor(Math.random() * stringOfChar.length)]; 
    } 

    return val; 
} 