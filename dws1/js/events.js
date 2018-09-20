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

var validateForm = function(submitEvent){

    if(!submitEvent.target.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopImmediatePropagation();
        submitEvent.stopPropagation();

        var form = submitEvent.target,
            elements = form.elements,
            message = 'Please do not leave blank',
            div = document.createElement('div');

        for(var i = 0; i < elements.length; i++){
            var element = elements[i];

            if(element.willValidate === true && element.validity.valid !== true){
                var  parent = element.parentNode;

                element.classList.add('invalid');
                div.appendChild(document.createTextNode(message));
                div.classList.add('validation-message');

                parent.insertBefore(div, element.previousSibling);

                element.focus();
                break;
            }
        }

    } else {
        return true;
    }
};


document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form');

    for (var i = forms.length -1; i >= 0; i--) {
        var form = forms[i];

        form.noValidate = true;
        form.addEventListener('submit', validateForm);
    }
});


