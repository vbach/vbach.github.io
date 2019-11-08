/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);

        var i;

        // Convert Month Number to Month Name
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        function monthNumtoName(monthNum){
            return months[monthNum - 1] || '';
        }


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
        var blogPosts = document.querySelector('section#blogPosts');
        if (blogPosts !== null) {
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
            blogPosts.innerHTML = blogContent;
        }


        // Events Content
        var events = document.querySelector('section#events');

        if (events !== null) {
        var eventContent = '';
        eventContent += '<h2>Upcoming Events</h2>';
        eventContent += '<ul>';

        for (i = 0; i <=2; i++) {

            var month = responseObject.events[i].date.slice(5, 8).split('-').join("");
            var displayMonthName = monthNumtoName(month);
            var day = responseObject.events[i].date.slice(8, 10).split('-').join("");
            eventContent += '<li class="dateBlock"><span class="month">' + displayMonthName + '</br></span><span class="day">' + day + '</span>';
            eventContent += '<li><strong>' + responseObject.events[i].title + '</strong></br>' +
                responseObject.events[i].location + '</li>';
            eventContent += '</li>';
        }

        eventContent += '</ul>';

            events.innerHTML = eventContent;
        }


        // New Hikers
        var hikers = document.querySelector('section#hikers');

        if (hikers !== null) {
        var newHikers = '';
        newHikers += '<h2>New Hikers</h2>';


        for (i = 0; i < responseObject.hikers.length; i++) {
            newHikers += '<ul>';
            newHikers += '<li><img src="' + responseObject.hikers[i].imageURL + '" width="200px" height="200px"/></li>';
            newHikers += '<li><strong>' + responseObject.hikers[i].lastname + ', ' + responseObject.hikers[i].firstname + '</strong>' +
                '</br>' + responseObject.hikers[i].city + ', ' + responseObject.hikers[i].state + '</li>';
            newHikers += '</ul>';
        }
            hikers.innerHTML = newHikers;
        }

        // About Section

        var aboutInfo = document.querySelector('section#about');

        if (aboutInfo !== null) {

        var about = '';
        about += '<h2>About</h2>';
        about += '<p><strong>' + responseObject.about.title + '</strong> ' + responseObject.about.text + '</p>';
        about += '<p>' + responseObject.about.copyright + '</p>';


            aboutInfo.innerHTML = about;
        }

        // destinations.html

        var destinations = document.querySelector('section#destinations');

        if (destinations !== null) {
        var locationContent = '';
        locationContent += '<h2>Destinations</h2>';

        for (i = 0; i < responseObject.locations.length; i++) {
            locationContent += '<article>';
            locationContent += '<ul>';
            locationContent += '<li><img src="https://images.unsplash.com/photo-1533557603879-ebdd7a92e4e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d08c991169da5df017efdbedb195909&auto=format&fit=crop&w=2250&q=80"/></li>'
            locationContent += '<li><h3>' + responseObject.locations[i].title + '</h3></li>';
            locationContent += '<li><p><strong>' + responseObject.locations[i].city + ', ' + responseObject.locations[i].state + '</p></strong></li>';
            locationContent += '<li><p>' + responseObject.locations[i].text + '</p></li>';
            locationContent += '</ul>';
            locationContent += '</article>';
        }
            destinations.innerHTML = locationContent;
        }

        // events.html

        var upcomingEvents = document.querySelector('section#upcomingEvents');
        if (upcomingEvents !== null) {
            var upcomingContent = '';
            upcomingContent += '<table>\n' +
                '<tr>\n' +
                '<th>DATE</th>\n' +
                '<th>INFORMATION</th>\n' +
                '</tr>\n';

            for (i = 0; i < responseObject.events.length; i++) {

                var month = responseObject.events[i].date.slice(5, 8).split('-').join("");
                var displayMonthName = monthNumtoName(month);
                var day = responseObject.events[i].date.slice(8, 10).split('-').join("");
                upcomingContent += '<tr>';
                upcomingContent += '<td class="dateBlock"><span class="month">'+ displayMonthName + '</span>  <span class="day">' + day + '</span></td>';
                upcomingContent += '<td class="eventDetails arrow_box"><h4>' + responseObject.events[i].title + '</h4> <details><summary>Details</summary><p>' + responseObject.events[i].text + '</details></td>';
                upcomingContent += '</tr>';
            }

            upcomingContent += '</table>';

            upcomingEvents.innerHTML = upcomingContent;
        }
    }
};


xhr.open('GET', 'https://jbonline.bitbucket.io/data/hikersguide.json', true);
xhr.send(null);