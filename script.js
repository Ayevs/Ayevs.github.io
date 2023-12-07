function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}
function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

setInterval(function () {
  showPopup();
  setTimeout(hidePopup, 7000);
}, 16000);
