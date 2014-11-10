
var deployMenu=document.getElementById("deployLoginLink");
var hideMenu=document.getElementById("loginLink");
var loginMenu = document.querySelector('.loginMenu');

deployMenu.addEventListener('click', toggleMenu, false);
hideMenu.addEventListener('click', toggleMenu, false);

function toggleMenu(){
    if (loginMenu.classList.contains('opened')) {
        loginMenu.classList.remove('opened');
        loginMenu.classList.add('closed');
    } else {
        loginMenu.classList.remove('closed');
        loginMenu.classList.add('opened');
    }
}