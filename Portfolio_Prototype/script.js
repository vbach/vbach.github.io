// Set the Heading

var heading = document.querySelector('h1');

heading.innerHTML = "World of Warcraft Classes & Specializations";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('classes');
const url = 'https://us.api.battle.net/data/wow/playable-class/7?namespace=static-us&locale=en_US&access_token=8wv3ucgge7jw75zvhsqnreqa';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let classes = data.results;
        return classes.map(function(wowclass) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            //img.src = author.picture.medium;
            span.innerHTML = `${classes.name} ${classes.specializations.name}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });