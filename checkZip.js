var zipCodes = [11111, 22222, 33333, 44444, 55555, 66666,
                77777, 88888, 99999, 12345, 54321, 23451,
                15432, 34512, 21543, 45123, 32154, 51234,
                43215, 10001, 20002, 30003, 40004, 50005,
                10000, 20000, 30000, 40000, 50000, 20202];

var zipButtonAlert = document.getElementById("zipButtonAlert");

function zipChecker() {
    var zipInput = Number(document.getElementById("zipInput").value);

    if (zipInput != 0) {
        if (zipCodes.includes(zipInput)) {
            zipButtonAlert.innerHTML = "We've got your area covered!";
            zipButtonAlert.style.color = "ForestGreen";
        } else {
            zipButtonAlert.innerHTML = "Sorry, we haven't expanded to that area yet.";
            zipButtonAlert.style.color = "Red";
        }
    } else {
        zipButtonAlert.innerHTML = "Please enter a Zip Code";
        zipButtonAlert.style.color = "Red";
    }

    zipButtonAlert.style.display = "block";
}