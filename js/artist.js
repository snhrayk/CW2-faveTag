const artist = document.querySelectorAll(".artist.selected");

artist.forEach(function (artist) {
  artist.addEventListener("click", function () {
    artist.style.border = "3px solid #c74a82";
  });
});
