// Change Title
document.querySelector("#gallery h2").innerHTML = "World of Warcraft Gallery";


// use Ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // Save the JSON data locally
    var data = JSON.parse(xhr.responseText);

    var gallery = document.querySelector("#gallery img");
    var title = document.querySelectorAll('h3');
    var alt = document.getElementById('alt');
    var nextButton = document.getElementById('next');
    var previousButton = document.getElementById('previous');
    var i = 0;


// Next Image
    function nextImage() {
        i = i + 1;
        i = i % data.games.length;
        return data.games[i].image;
    }

// Next Title
    function nextTitle() {
        i = i + 1;
        i = i % data.games.length;
        return data.games[i].image_title;
    }

// Previous Image
    function previousImage() {
        // Coding for previous image here
        if (i === 0) {
            i = data.games.length;
        }
        i = i - 1;
        return data.games[i].image;
    }

// Previous Title
    function previousTitle() {
        // Coding for previous image here
        if (i === 0) {
            i = data.games.length;
        }
        i = i - 1;
        return data.games[i].image_title;
    }

// Setting the initial image of the array.
    gallery.src = data.games[i].image;
    title.textContent = data.games[i].image_title;


// Event listener for next button
    nextButton.addEventListener('click',
        // On click run this function to retrieve data from nextImage function
        function (e) {
            gallery.src = nextImage();
            title.textContent = nextTitle();
        }
    );

// Event listener for previous button
    previousButton.addEventListener('click',
        // On click run this function to retrieve data from previousImage function
        function (e) {
            gallery.src = previousImage();
            title.textContent = previousTitle();
        }
    );
}

// Call Ajax and close
xhr.open('GET', 'https://vbach.github.io/Gallery/js/gallery.json', true);
xhr.send(null);


