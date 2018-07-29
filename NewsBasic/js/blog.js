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


            games += '<article>';

            games += '<p class="thumbnail"><img src="' + data.games[i].image + '"alt ="' + data.games[i].name + '"></p>';
            games += '<h3>' + data.games[i].name + '</h3>';

            games += '<p>' + data.games[i].description + '</p>';

            games += '<dl>';
            games += '<dt>Rating</dt>';
            games += '<dd>' + data.games[i].rating + ' out of 5 stars</dd>';
            games += '<dt>Player Count</dt>';
            games += '<dd>' + data.games[i].player_count + '</dd>';

            games += '<dt>Servers</dt>';
            games += '<dd>' + data.games[i].servers + '</dd>';
            games += '</dl>';
            games += '<p><a href="' + data.games[i].url + '">Read More</a></p>';


            games += '</article>';

        }

        games += '<p><a href="https://www.mmo-champion.com/content/?"> <button>Load More</button> </a></p>';

        blogSection.querySelector('h2').insertAdjacentHTML('afterend', games);
    }
}

// Call Ajax and close
xhr.open('GET', 'https://vbach.github.io/NewsBasic/data.json', true);
xhr.send(null);