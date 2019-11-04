var preloader = document.getElementById('preloader')
var page = document.getElementById('page')

function load(){
    preloader.style.display = "none"
    page.style.display = "block"
}

function displayPage() {
    setTimeout(function(){ load(); },3000);
}