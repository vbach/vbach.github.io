/*
 * events.js
 * 
*/

/* Login */
// Open Login
var popUp = function(e) {
    e.preventDefault();
    document.getElementById("login").style.display = "block";
};

document.addEventListener('DOMContentLoaded', function(){
    var login = document.getElementById('loginLink');
    login.addEventListener('click', popUp);
});

// Close Login
function closeLogin(){
    document.getElementById('login').style.display="none";
}

document.addEventListener('DOMContentLoaded', function(){
    var loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', closeLogin);

    var closeX = document.getElementById('closeX');
    closeX.addEventListener('click', closeLogin);
});

/* Form Validation */

function validateForm(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    //Connect Form
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('message');
    var error = document.getElementById('error');
    var success = document.getElementById('success');

    if(!name.checkValidity() ){
        error.style.display = "block";
        success.style.display = "none";
        error.innerHTML = "You forgot your name!<br/>";
    }

    if(!email.checkValidity()){
        error.style.display = "block";
        success.style.display = "none";
        error.insertAdjacentHTML('beforeend', "You forgot your email!<br/>");
    }

    if(!msg.checkValidity()){
        error.style.display = "block";
        success.style.display = "none";
        error.insertAdjacentHTML('beforeend', "We can't help you if you don't leave a message!");
    }

    else {
        error.style.display = "none";
        success.style.display = "block";

        success.insertAdjacentHTML('afterbegin', "Thank you, " + name.value + "! We'll get back to you shortly!");
        document.getElementById("contact").reset();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form');

    for (var i = forms.length -1; i >= 0; i--) {
        var form = forms[i];

        form.noValidate = true;
        form.addEventListener('submit', validateForm);
    }
});


