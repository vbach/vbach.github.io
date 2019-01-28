const base = 'https://www.googleapis.com/blogger/v3/blogs/2044309205802613647/posts'
const auth = 'AIzaSyA7ugWJKJJwxM_h0rFbJG2a64LQ8umqVXA'
const url = base + '?key=' + auth;

const option = {
    method: 'GET',
    mode: 'cors'
}

// Convert Date Function
function convertDate(date) {
    let newDate = new Date(date);
    let output = (newDate.getMonth() + 1) + '/' + (newDate.getDate() + 1) + '/' + newDate.getFullYear();
    return output
}


// Fetching the API
fetch (url, option)
.then(response => {
    return response.json();
})
.then(data => {

    // Load blog data to page
    const myJson = data;
    console.log(myJson);

    const container = document.querySelector('.inner-box');

    let html = '';
    if (container != null){
        for(let i=0; i < myJson.items.length; i++){
            let date = convertDate(myJson.items[i].published);

            html += '<div class="lower-box">'
            if(myJson.items[i].title != ''){
            html += '<div class="post-share-options clearfix"><div class="pull-left">'
            
            html += '<h3><a href=' + myJson.items[i].url + '>' + myJson.items[i].title + '</a></h3>'
            html += '</div> </div>'
            }
            
            

            html += '<ul class="author">'
            html += '<li><i class="fa fa-user"></i>' + myJson.items[i].author.displayName + '</li>'
            html += '<li><i class="fa fa-calendar"></i>' + date + '</li>'
            html += '</ul>'

            html += '<div class="text">' + myJson.items[i].content + '</div>'
            
            html += '<div class="padd-9"></div>'
            html += '</div>'
        }
    }
    container.innerHTML = html;

    const recentBlogs = document.querySelector('.popular-posts')
    let recent = '';
    if(recentBlogs != null) {
        recent += '<div class="sidebar-title"><h2>Recent News</h2></div>'
        
        for(let i=0; i < myJson.items.length; i++){
            let date = convertDate(myJson.items[i].published);

            if(myJson.items[i].title != ''){
                recent += '<article class="post">'
                recent += '<div class="text"><a href="' + myJson.items[i].url + '">' + myJson.items[i].title + '</a></div>'
                recent += '<div class="post-info">' + date + '</div>' 
                recent += '</article>'
            }
        }

        recent += '</div>'
    }

    recentBlogs.innerHTML = recent;
})