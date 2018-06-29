document.querySelector("#blog h2").innerHTML = "Popular MMO Games";

// use Ajax to load JSON file
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // Save the JSON data locally
    var data = JSON.parse(xhr.responseText);

    // Insert the HTML articles & into section ( insertAdjacentHTML )
    var blogSection = document.querySelector('#blog');
    if(blogSection){
        var games = '';

        for(var i = 0; i < data.games.length; i++) {
            games.innerHTML += '<article>';


            games.innerHTML += '<p class="thumbnail"><img src="' + data.games[i].image + '"alt ="' + data.games[i].name + '"></p>';
            games.innerHTML += '<h3>' + data.games[i].name + '</h3>';

            games.innerHTML += '<p>' + data.games[i].description + '</p>';

            games.innerHTML += '<dl>';
                games.innerHTML += '<dt>Rating</dt>';
                games.innerHTML += '<dd>' + data.games[i].rating + ' out of 5 stars</dd>';
                games.innerHTML += '<dt>Player Count</dt>';
                games.innerHTML += '<dd>' + data.games[i].player_count + '</dd>';

                games.innerHTML += '<dt>Servers</dt>';
                games.innerHTML += '<dd>' + data.games[i].servers + '</dd>';
             games.innerHTML += '</dl>';
            games.innerHTML += '<p><a href="' + data.games[i].url + '">Read More</a></p>';


            games.innerHTML += '</article>';

        }

        blogSection.querySelector('h2').insertAdjacentHTML('afterend', games);
    }
}

// Call Ajax and close
xhr.open('GET', 'https://vbach.github.io/data.json', true);
xhr.send(null);