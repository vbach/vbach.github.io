// Change Title
document.querySelector("#gallery h2").innerHTML = "World of Warcraft Game Play";

// use Ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // Save the JSON data locally
    var data = JSON.parse(xhr.responseText);

    var arrayOfImages = ["http://i67.tinypic.com/11ty5ux.jpg", "http://i65.tinypic.com/2ewdqva.jpg",
        "http://i66.tinypic.com/o08d1k.jpg", "http://i66.tinypic.com/657qs3.jpg", "http://i67.tinypic.com/2ibn30g.jpg"];
    var gallery = document.querySelector("#gallery img");
    var nextButton = document.getElementById('next');
    var previousButton = document.getElementById('previous');
    var i = 0;

// Next Image

    function nextImage() {
        i = i + 1;
        i = i % data.games.length;
        return data.games[i].image;
    }

    function previousImage() {
        // Coding for previous image here
        if (i === 0) {
            i = data.games.length;
        }
        i = i - 1;
        return data.games[i].image;
    }

    gallery.src = data.games[i].image;


// Event listener for next button
    nextButton.addEventListener('click',
        function (e) {
            gallery.src = nextImage();
        }
    );
    previousButton.addEventListener('click',
        function (e) {
            gallery.src = previousImage();
        }
    );
}

xhr.open('GET', 'https://vbach.github.io/Gallery/js/gallery.json', true);
xhr.send(null);

//////////SCRAP///////////
/*
function nextImage(arrayOfImages){
    var currentIndex = '';

for(var i = 0; i < arrayOfImages.length; i++){
    if(currentIndex >= 0 && currentIndex < arrayOfImages.length){
        currentIndex = arrayOfImages[i + 1];
    }
}
    gallery.src = currentIndex;

}
*/


