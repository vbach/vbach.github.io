/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/


var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);

        var i;

        // Gallery Content

        var galleryContent = '';

        for(i = 0; i < responseObject.locations.length; i++){

            galleryContent += '<h2>' + responseObject.locations[i].city +', ' +responseObject.locations[i].state + '</h2>';
            galleryContent += '<p><strong>' + responseObject.locations[i].title + '</strong>';
        }

        var gallery = document.querySelector('section#gallerySlide');

        if(gallery !== null){
            gallery.innerHTML = galleryContent;
        }

        // Blog Content

        var blogContent = '';

        for (i = 0; i < responseObject.posts.length; i++) {

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

        if (blogPosts !== null) {
            blogPosts.innerHTML = blogContent;
        }


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

        if (events !== null) {
            events.innerHTML = eventContent;
        }

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

        if (hikers !== null) {
            hikers.innerHTML = newHikers;
        }

        // About Section

        var about = '';
        about += '<h3>About</h3>';
        about += '<p><strong>' + responseObject.about.title + '</strong> ' + responseObject.about.text + '</p>';
        about += '<p>' + responseObject.about.copyright + '</p>';

        var aboutInfo = document.querySelector('section#about');

        if (aboutInfo !== null) {
            aboutInfo.innerHTML = about;
        }

        // destinations.html
        var locationContent = '';
        locationContent += '<h1>Destinations</h1>';

        for (i = 0; i < responseObject.locations.length; i++) {

            locationContent += '<h3>' + responseObject.locations[i].title + '</h3>';
            locationContent += '<p><strong>' + responseObject.locations[i].city + ', ' + responseObject.locations[i].state + '</p></strong>';
            locationContent += '<p>' + responseObject.locations[i].text + '</p>';
        }

        var destinations = document.querySelector('section#destinations');

        if (destinations !== null) {
            destinations.innerHTML = locationContent;
        }

        // events.html
            var upcomingContent = '';

            upcomingContent += '<h1>Events</h1>';
            upcomingContent += '<table>\n' +
                '<tr>\n' +
                '<th>DATE</th>\n' +
                '<th>INFORMATION</th>\n' +
                '</tr>\n';

            for (i = 0; i < responseObject.events.length; i++) {
                upcomingContent += '<tr>';
                upcomingContent += '<td>' + responseObject.events[i].date + '</td>';
                upcomingContent += '<td><strong>' + responseObject.events[i].title + '</strong> <p>' + responseObject.events[i].text + '</p></td>';
                upcomingContent += '</tr>';
            }

            upcomingContent += '</table>';

            var upcomingEvents = document.querySelector('section#upcomingEvents');

        if (upcomingEvents !== null) {
            upcomingEvents.innerHTML = upcomingContent;
        }
    }
};


xhr.open('GET', 'https://jbonline.bitbucket.io/data/hikersguide.json', true);
xhr.send(null);