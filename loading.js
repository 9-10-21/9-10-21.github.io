var preloader = document.getElementById('preloader')
var page = document.getElementById('page')

function load(){
    page.style.display = "block"
}

function displayPage() {
    setTimeout(function(){ load(); },2200);
}