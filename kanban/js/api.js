// Fetch Data
const base = 'https://angry-egg.glitch.me/api';
const auth = '5b1064585f4ab8706d275f90';
const url = `${base}/lists?accessToken=${auth}`;
const post = `${base}/items?accessToken=${auth}`;
const addPopUp = document.querySelector('.addTaskPopUp');

const option = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

//Convert Date
function convertDate(date) {
    var newDate = new Date(date);
    var output = (newDate.getMonth() + 1) + "/" + (newDate.getDate() + 1) + "/" + newDate.getFullYear();
    return output;
}


fetch(url, option)
    .then(response => {
        return response.json();
    })
    .then(data => {

        const myJson = data;
        console.log(myJson);


        // Looping through lists
        let i = ''; //lists
        let j = ''; //items

        const taskContainer = document.querySelector('.task-container');
        if (taskContainer !== null) {

            let html = '';
            for (i = 0; i < myJson.length; i++) {
                html += `<section id=${myJson[i].id}>`;
                html += `<h2>${myJson[i].title}</h2>`;
                html += `<button class="addTask-toggle">Add Task</button>`;

                for (j = 0; j < myJson[i].items.length; j++) {
                    var dateToConvert = myJson[i].items[j].dueDate;
                    var convertedDate = convertDate(dateToConvert);
                    var taskDate = new Date(convertedDate).getDate();
                    var currentDate = new Date().getDate();
                    var previousDate = new Date().getDate() - 2;

                    if(taskDate == currentDate || taskDate == (currentDate + 1) && taskDate > previousDate || taskDate < currentDate){
                    html += `<article class="deadline24">`;
                    } else if (taskDate == (currentDate + 2)){
                        html += `<article class="deadline48">`;
                    }else {
                        html += `<article>`;
                    }

                    html += `<h3>${myJson[i].items[j].title}</h3>
                    <p>${myJson[i].items[j].description}</p>
                    <p class="date right">${convertedDate} </p>
                    </article>`;
                    
                }

                html += `</section>`;
            }
            taskContainer.innerHTML = html;
        }


        //Add Task Form
        const addBtn = document.querySelectorAll('.addTask-toggle');


        for (let i = 0; i < addBtn.length; i++) {
            addBtn[i].onclick = function() {
                addPopUp.style.display = "block";
                document.getElementById('category').focus();
            };
        }

        document.querySelector('.close').addEventListener('click', e => {
            e.preventDefault();
            addPopUp.style.display = "none";
        });
    })
    .catch(err => {
        console.log(err)
    })

// Form Validation
const form = document.getElementById('addTaskForm');
let title = document.getElementById('title');
let dueDate = document.getElementById('dueDate');

// Validating the date is correct
function checkDate(e) {
    return !isNaN(new Date(e));
}

title.addEventListener('input', e => {
    if (title.validity.valid) {
        title.classList.remove('error');
        let errorTxt = document.querySelector('.error-txt');
        if(errorTxt){
            errorTxt.style.display = "none";
            }
    }
}, false);

dueDate.addEventListener('input', e => {
    if (dueDate.validity.valid) {
        dueDate.classList.remove('error');

        let errorTxt = document.querySelector('.error-txt');
        if(errorTxt){
        errorTxt.style.display = "none";
        } 
    }
}, false);



form.addEventListener('submit', e => {
    e.preventDefault();
    let date = dueDate.value;
    
    if (!checkDate(date)) {
        dueDate.validity.valid = false;
        dueDate.classList.add('error');
        dueDate.insertAdjacentHTML('afterend', `<div class='error-txt'>Please select a valid date.</div>`);

    } else if (title.value === "") {
        title.validity.valid = false;
        title.classList.add('error');
        title.insertAdjacentHTML('afterend', `<div class='error-txt'>Please enter a title.</div>`);
    } else {
        // Hide Modal on successful form validation
        addPopUp.style.display = "none";
        

        // Set up to send to API
        let category = document.getElementById('category').value;

        const dataToSendToServer = {
            listId: category,
            title: title.value,
            description: description.value,
            dueDate: dueDate.value
        }

        const config = {
            method: 'POST',
            body: JSON.stringify(dataToSendToServer),
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        fetch(post, config)
            .then(response => response.json())
            .then(responseAsJson => {
                console.log(responseAsJson);

                // Adding task card to list on page
                let list = responseAsJson.listId;
                let date = convertDate(responseAsJson.dueDate);
                var taskDate = new Date(date).getDate();
                var currentDate = new Date().getDate();
                var previousDate = new Date().getDate() - 2;
                let html = '';
                if(taskDate == currentDate || taskDate == (currentDate + 1) && taskDate > previousDate || taskDate < currentDate){
                    html += `<article class="deadline24 articleTransform">`;
                    } else if (taskDate == (currentDate + 2)){
                        html += `<article class="deadline48 articleTransform">`;
                    }else {
                        html += `<article class="articleTransform">`;
                    }
                   

                    html += `<h3>${title.value}</h3><p>${description.value}</p><p class='right'>${date}
                        </p></article>`;

                let section = document.querySelectorAll('section')[list - 1];
                section.insertAdjacentHTML('beforeend', html);
            })
            .catch(err => {
                console.log(err)
            })
    }
}, false);

// Web Storage/Color Theme Change        

if (localStorage.getItem('bgcolor')) {
    setStyles();
}

function setStyles() {
    let backgroundColor = document.querySelector('header');
    const currentColor = localStorage.getItem('bgcolor');
    backgroundColor.style.backgroundColor = 'rgb(' + currentColor + ')';
}
const dropBtn = document.querySelector('dropbtn');
document.addEventListener('click', e => {        

        const colorBar = document.querySelector('[type=color]').value;
        localStorage.setItem('bgcolor', colorBar)
        setStyles();
        // const colorBar = document.querySelectorAll('.dropdown-content a');

        // if (target == colorBar[0]) {
        //     localStorage.setItem('bgcolor', '55, 33, 84');

        //     setStyles();
        // } else if (target == colorBar[1]) {
        //     localStorage.setItem('bgcolor', '0, 0, 0');

        //     setStyles();
        // } else if (target == colorBar[2]) {
        //     localStorage.setItem('bgcolor', '242, 99, 99');

        //     setStyles();
        // } else if (target == colorBar[3]) {
        //     localStorage.setItem('bgcolor', '89, 181, 217');

        //     setStyles();
        // }
    }, false)