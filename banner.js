/*This program displays a banner on top of the home page
    after 5 seconds of when the page loads and closes 
    with the user clicking on the exit button placed 
    on the top right of the banner*/

//initialize timer to display the banner after 5 seconds
setTimeout(showBanner, 5000);

var banner = document.getElementById("banner");
var bannerLogo = document.getElementById("discount");
var closeButton = document.getElementById("close");
var count = 0;

//change color of banner text after every 1 second
var colorChange = setInterval(colorChanger, 1000);

//close/hide the banner when close button is clicked
closeButton.addEventListener("click", buttonPress);

//function to show the banner
function showBanner() {
    banner.style.display = "block";
}

//function that alternates text color between red and purple
function colorChanger() {
    if (count == 0) {
        bannerLogo.style.color = "FireBrick";
        count++;
    } else {
        bannerLogo.style.color = "purple";
        count--;
    }
}

//function that closes/hides the banner
function buttonPress() {
    clearInterval(colorChange);
    closeButton.parentElement.style.display = "none";
}