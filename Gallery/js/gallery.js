// Change Title
document.querySelector("#gallery h2").innerHTML = "World of Warcraft Game Play";

// Using AJAX to load in JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    // Save the JSON data locally
    var gallery = JSON.parse(xhr.responseText);


// Variables: currentImg, nextImg
    var currentImg;
    var nextImg;

// If user clicks next button, go to next image
    var gallerySection = document.getElementById('#gallery');

    if (gallerySection) {
        var images = '';
        for (var i = 0; i < gallery.images.length; i++) {
            images += '<p><img src=' + gallery.images[i].image + '></p>';
        }
    }
    gallerySection.querySelector('h2').insertAdjacentHTML('afterend', images);


    // Read in click event
    // Go to next img
    // For loop to keep count of currentImg and nextImg
    // If at last img, Next goes to 1st img.
// Previous event listener
    // Read on click event
    // Go to previous image
    // For loop to keep count of currentImg and nextImg
    // If first image, go to last image
// Load in JSON file

// Call Ajax and close
    xhr.open('GET', 'gallery.json', true);
    xhr.send(null);

}