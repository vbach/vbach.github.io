// Change Title
document.querySelector("#gallery h2").innerHTML = "World of Warcraft Game Play";

// JSON Array
var txt = '{ "WoW" : [' +
    '{ "imageUrl" : "http://i64.tinypic.com/242h72c.jpg", "title" : "Game Play" } ] }';
var images = JSON.parse(txt);


function changeImage(event){
    var image = event.target.src;
    var parent = event.target.parentElement;
    var largeImage = document.querySelector('#gallery img');

    largeImage.src = image;
}

// Add event listener to next button
var nextButton = document.querySelectorAll('.pagination li:last-of-type');
nextButton.addEventListener('click', changeImage);

var previousButton = document.querySelectorAll('.pagination li:first-of-type');
previousButton.addEventListener('click', changeImage);

// Change Image via Next Button





// Load data in from JSON
document.querySelector('#gallery img').innerHTML = images.WoW[0].image;

// IF user selects NEXT, go to next image
// Keep Track of CURRENT IMAGE
// IF user selects PREVIOUS, go to previous image