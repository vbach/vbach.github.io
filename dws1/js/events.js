/*
 * events.js
 * 
*/

/* Login and Sign Up Pop Up Forms */
// Open Login
var popUp = function(e) {
    e.preventDefault();
    document.getElementById("login").style.display = "block";
};

document.addEventListener('DOMContentLoaded', function(){
    var login = document.getElementById('loginLink');
    login.addEventListener('click', popUp);
});


/* Form Validation */
var validateForm = function(submitEvent){

    if(!submitEvent.target.checkValidity()) {
        submitEvent.preventDefault();
        submitEvent.stopImmediatePropagation();
        submitEvent.stopPropagation();

        var form = submitEvent.target,
            elements = form.elements;

        for(var i = 0, len = elements.length; i < len; i++){
            var element = elements[i];

            if(element.willValidate === true && element.validity.valid !== true){
                var message = 'Please do not leave blank',
                    parent = element.parentNode,
                    div = document.createElement('div');

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


