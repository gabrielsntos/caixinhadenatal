document.addEventListener("DOMContentLoaded", function () {
    //hide content
    document.getElementById("content").style.display = "none";
    // Display the loader
    document.getElementById("loader").style.display = "block";

    // Load your image
    var backgroundImage = new Image();
    backgroundImage.src = "/assets/ornamentImproved.jpg";

    backgroundImage.onload = function () {
        // Hide the loader once the image is loaded
        document.getElementById("loader").style.display = "none";
        // Display your content
        document.getElementById("content").style.display = "block";
    };
});