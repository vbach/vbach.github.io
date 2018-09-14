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

        // var galleryContent = '';
        //
        // for(i = 0; i < responseObject.locations.length; i++){
        //
        //     galleryContent += '<h2>' + responseObject.locations[i].city +', ' +responseObject.locations[i].state + '</h2>';
        //     galleryContent += '<p><strong>' + responseObject.locations[i].title + '</strong></p>';
        // }
        //
        // var gallery = document.querySelector('section#gallerySlide');
        //
        // if(gallery !== null){
        //     gallery.innerHTML = galleryContent;
        // }

        // Blog Content

        var blogContent = '';


        for (i = 0; i < responseObject.posts.length; i++) {
            blogContent += '<article>';
            blogContent += '<ul>';
            blogContent += '<li><img src="' + responseObject.posts[i].imageURL + '"/></li>';
            blogContent += '<li><h4>' + responseObject.posts[i].title + '</h4></li>';

            var textStr = responseObject.posts[i].text;

            if(textStr.length > 200){
                textStr = textStr.substring(0,200);
                blogContent += '<li>' + textStr + '...</li>';
            } else {
                blogContent += '<li>' + responseObject.posts[i].text + '</li>';
            }

            if (responseObject.posts[i].moreLink) {
                blogContent += '<li> <a href="' + responseObject.posts[i].moreLink + '"><input type="button" class="button" value="Read More"/></a></li>';
            } else {
                blogContent += '<li><a href="#"><input type="button" class="button" value="Read More"/></a></li>';
            }
            blogContent += '</ul>';
            blogContent += '</article>';
        }


        var blogPosts = document.querySelector('section#blogPosts');

        if (blogPosts !== null) {
            blogPosts.innerHTML = blogContent;
        }


        // Events Content


        var eventContent = '';
        eventContent += '<h3>Upcoming Events</h3>';
        eventContent += '<ul>';

        for (i = 0; i < responseObject.events.length; i++) {
            var month = responseObject.events[i].date.slice(5, 8).split('-').join("");
            var day = responseObject.events[i].date.slice(8, 10).split('-').join("");
            eventContent += '<li class="dateBlock">' + month + '</br><span class="day">' + day + '</span>';
            eventContent += '<li><strong>' + responseObject.events[i].title + '</strong></br>' +
                responseObject.events[i].location + '</li>';
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


        for (i = 0; i < responseObject.hikers.length; i++) {
            newHikers += '<ul>';
            newHikers += '<li><img src="' + responseObject.hikers[i].imageURL + '" width="200px" height="200px"/></li>';
            newHikers += '<li><strong>' + responseObject.hikers[i].lastname + ', ' + responseObject.hikers[i].firstname + '</strong>' +
                '</br>' + responseObject.hikers[i].city + ', ' + responseObject.hikers[i].state + '</li>';
            newHikers += '</ul>';
        }


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