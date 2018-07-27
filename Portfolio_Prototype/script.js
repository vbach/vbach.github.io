// Set the Heading
var heading = document.querySelector('h1');
heading.innerHTML = "World of Warcraft: Mounts";

// Set introduction to explain page
var intro = document.querySelector('p');
intro.innerHTML = "World of Warcraft has numerous mounts that can be earned through many different achievements, " +
    "quests, class and race choices, etc. Here is a full list of all the mounts currently available within the game," +
    " that you can learn. Click the 'Read More' links to be get further information on achieving these mounts.";

// Create functions to easily create html element nodes.
function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

// Establishing ul selector and api URL
const ul = document.getElementById('mounts');
const url = 'https://us.api.battle.net/wow/mount/?locale=en_US&apikey=dcyyqq587vbf4z424h36rcaddafw6dgr';

// Fetch the API
fetch(url)
    .then(function(response){
    return response.json();
})
    .then(function(myJson){

        let getMounts = myJson.mounts;
        return getMounts.map(function(mount){
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = 'https://wow.zamimg.com/images/wow/icons/large/' + mount.icon + '.jpg';
            span.innerHTML = mount.name + '<br> <a href="http://www.wowhead.com/spell=' + mount.spellId + '"> Read More </a>';
            append(li, img);
            append(li, span);
            append(ul, li);

        })
    })
// Catch any errors and report to console
.catch(function(error)
{
    console.log(error);
});