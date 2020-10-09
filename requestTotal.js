/*This program changes the value of Total displayed on the screen
    within the request.html page as the user inputs*/

var form = document.getElementById("form");

//check whether there has been a change made to the form
form.addEventListener("change", updateTotal);

//function to calculate the total payment required for the order
function updateTotal() {
    console.log("Updating totalValue...");

    var total = 0;
    var stlyeList = document.getElementsByClassName("requestInputStyle");

    //Retrieving the style value
    for (i = 0; i < stlyeList.length; i++) {
        if (stlyeList[i].checked) {
            total = Number(stlyeList[i].value);
        }
    }

    var tipList = document.getElementsByClassName("requestInputTip");
    
    //Retrieving the tip value
    for (i = 0; i < tipList.length; i++) {
        if (tipList[i].checked) {
            total *= 1 + tipList[i].value/100;
        }
    }

    //Fixing final total value to have only two digits after
    //the decimal point
    total = total.toFixed(2);
    console.log("The total cost plus tip is: " + total);

    var totalCost = document.getElementById("totalValue");
    totalCost.innerHTML = total;
}