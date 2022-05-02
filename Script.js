//AIzaSyCnoSUwanzO4LkvKJpRh-rszFK0GywIOX4
$("#unjalo").click(function() {
  window.location.href = 'https://prosiradj.bandcamp.com/track/umuhle-unjalo-reloaded';
});
$("#bully").click(function() {
  window.location.href = 'https://ampl.ink/4oj8V';
});
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}