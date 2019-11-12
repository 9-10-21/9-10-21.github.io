function load() {
  document.getElementById("page").style.display = "block";
  document.getElementById("preloader").style.display = "none";
}

function displayPage() {
  setTimeout(function(){ load(); },2300);
}