/*
 * events.js
 * 
*/

/* Modal Forms */
var login = document.getElementById('loginBtn');

login.onclick = function () {
    document.getElementById('signUpForm').style.display='none';
    document.getElementById('login').style.display='block';
}

var signUp = document.getElementById('signUpBtn');

signUp.onclick = function(){
    document.getElementById('login').style.display='none';
    document.getElementById('signUpForm').style.display='block';
}