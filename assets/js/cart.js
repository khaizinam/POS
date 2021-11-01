
document.getElementById("btn-user").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("user-Dropdown").classList.toggle("show");
}
