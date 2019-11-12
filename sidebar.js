// == TOGGLE MENU SECTION ==

document.getElementById("sideNav").style.padding = '0px';
document.getElementById("toggle").style.marginLeft = "0px";

var a = 0;

function toggle_menu() {
      if (a == 0) {
        document.getElementById("sideNav").style.width = "0px";
        document.getElementById("toggle").style.marginLeft = "-272px";
        document.getElementById("open-button").innerHTML = "&#9776;"; 
        a = 1;
      } else {
        document.getElementById("sideNav").style.width = "272px";
        document.getElementById("toggle").style.marginLeft = "0px";
        document.getElementById("open-button").innerHTML = "&times;";
        a = 0;
      }
  }