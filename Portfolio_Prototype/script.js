// Set the Heading

var heading = document.querySelector('h1');

heading.innerHTML = "World of Warcraft Classes & Specializations";

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}


const ul = document.getElementById('classes');
const url = 'https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=dcyyqq587vbf4z424h36rcaddafw6dgr';

// Fetch the API
fetch(url)
    .then((resp) => resp.json()) // Data into JSON
    .then(function(data) {
    let classes = data.results;
    return classes.map(function(wowclass) {
        let li = createNode('li'),
            span = createNode('span');
        span.innerHtml = '${classes.races.name} ${classes.races.side}';
        append(li, span);
        append(ul, li);

    })

})
.catch(function(error)
{
    console.log(error);
});