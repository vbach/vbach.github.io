/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/


var xhr = new XMLHttpRequest();
    xhr.onload = function () {

        var responseObject = JSON.parse(xhr.responseText);

        // Blog Content

        var blogContent = '';

        for (var i = 0; i < responseObject.posts.length; i++) {

            blogContent += '<ul>';
            blogContent += '<li><img src="' + responseObject.posts[i].imageURL + '" width="200px" height="200px" /></li>';
            blogContent += '<li><h4>' + responseObject.posts[i].title + '</h4></li>';

            if (responseObject.posts[i].subtitle) {
                blogContent += '<li><h5>' + responseObject.posts[i].subtitle + '</h5>';
            }

            blogContent += '<li>' + responseObject.posts[i].text + '</li>';

            if (responseObject.posts[i].moreLink) {
                blogContent += '<li> <a href="' + responseObject.posts[i].moreLink + '"><input type="button" id="readMore" value="Read More"/></a></li>';
            } else {
                blogContent += '<li><a href="#"><input type="button" id="readMore" value="Read More"/></a></li>';
            }

            blogContent += '</ul>';
        }

        var blogPosts = document.querySelector('article#blogposts');
        blogPosts.innerHTML = blogContent;


        // Events Content
        var eventContent = '';
        eventContent += '<h3>Upcoming Events</h3>';
        eventContent += '<ul>';

        for (i = 0; i < responseObject.events.length; i++) {

            eventContent += '<li><strong>' + responseObject.events[i].date + '</strong>';
            eventContent += '<ul>';
            eventContent += '<li><strong>' + responseObject.events[i].title + '</strong></li>';
            eventContent += '<li>' + responseObject.events[i].location + '</li>';
            eventContent += '</ul>';
            eventContent += '</li>';
        }

        eventContent += '</ul>';
        var events = document.querySelector('section#events');
        events.innerHTML = eventContent;


        // New Hikers

        var newHikers = '';
        newHikers += '<h3>New Hikers</h3>';
        newHikers += '<ul>';

        for (i = 0; i < responseObject.hikers.length; i++) {

            newHikers += '<li><img src="' + responseObject.hikers[i].imageURL + '" width="200px" height="200px"/></li>';
            newHikers += '<ul>';
            newHikers += '<li><strong>' + responseObject.hikers[i].lastname + ', ' + responseObject.hikers[i].firstname + '</strong></li>';
            newHikers += '<li>' + responseObject.hikers[i].city + ', ' + responseObject.hikers[i].state + '</li>';
            newHikers += '</ul>';
        }

        newHikers += '</ul>';
        var hikers = document.querySelector('section#hikers');
        hikers.innerHTML = newHikers;

        // About Section

        var about = '';
        about += '<h3>About</h3>';
        about += '<p><strong>' + responseObject.about.title + '</strong> ' + responseObject.about.text + '</p>';
        about += '<p>' + responseObject.about.copyright + '</p>';

        var aboutInfo = document.querySelector('section#about');
        aboutInfo.innerHTML = about;





// Destinations

        var locationContent = '';
        locationContent += '<h1>Destinations</h1>';

        for (var i = 0; i < responseObject.locations.length; i++) {

            locationContent += '<h2>' + responseObject.locations[i].title + '</h2>';
            locationContent += '<p><strong>' + responseObject.locations[i].city + ', ' + responseObject.locations[i].state + '</p></strong>';
            locationContent += '<p>' + responseObject.locations[i].text + '</p>';
        }

        var locationHeader = document.querySelector('section#destinations');
        locationHeader.innerHTML = locationContent;
    };


    xhr.open('GET', 'https://jbonline.bitbucket.io/data/hikersguide.json', true);
    xhr.send(null);



// Upcoming Events Page
/*
    var upcomingContent ='';
    upcomingContent += '<h1>Events</h1>';
    upcomingContent += '<table>\n' +
        '<tr>\n' +
        '<th>DATE</th>\n' +
        '<th>INFORMATION</th>\n' +
        '</tr>\n' +

    for(i = 0; i < responseObject.events.length; i++){
        upcomingContent += '<tr>';
        upcomingContent += '<td>' + responseObject.events.date + '</td>'
        upcomingContent += '<td><strong>' + responseObject.events.title +'</strong> <p>' + responseObject.events.text + '</p></td>';
        upcomingContent += '</tr>';
    }

    upcomingContent += '</table>';

    var upcomingEvents = document.querySelector('section#upcomingEvents');
    upcomingEvents.innerHTML = upcomingContent;*/
