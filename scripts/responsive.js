/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function pullDown() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 
