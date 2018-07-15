// Change Title
document.querySelector("#gallery h2").innerHTML = "World of Warcraft Gallery";


// use Ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // Save the JSON data locally
    var data = JSON.parse(xhr.responseText);

    /*var arrayOfImages = ["http://i67.tinypic.com/11ty5ux.jpg", "http://i65.tinypic.com/2ewdqva.jpg",
        "http://i66.tinypic.com/o08d1k.jpg", "http://i66.tinypic.com/657qs3.jpg", "http://i67.tinypic.com/2ibn30g.jpg"];
    var arrayOfTitles = ["World of Warcraft: Legion"]; */
    var gallery = document.querySelector("#gallery img");
    var title = document.querySelectorAll('h3');
    var nextButton = document.getElementById('next');
    var previousButton = document.getElementById('previous');
    var i = 0;

// Next Image
    function nextImage() {
        i = i + 1;
        i = i % arrayOfImages.length;
        return arrayOfImages[i];
    }

// Previous Image
    function previousImage() {
        // Coding for previous image here
        if (i === 0) {
            i = arrayOfImages.length;
        }
        i = i - 1;
        return arrayOfImages[i];
    }

// Setting the initial image of the array.
    gallery.src = arrayOfImages[i];

// Event listener for next button
    nextButton.addEventListener('click',
        // On click run this function to retrieve data from nextImage function
        function (e) {
            gallery.src = nextImage();
        }
    );

// Event listener for previous button
    previousButton.addEventListener('click',
        // On click run this function to retrieve data from previousImage function
        function (e) {
            gallery.src = previousImage();
        }
    );
}

// Call Ajax and close
xhr.open('GET', 'https://vbach.github.io/Gallery/js/gallery.json', true);
xhr.send(null);