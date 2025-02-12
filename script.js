function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}

// Music controls: auto-play on yes.html (the final page)
document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on the yes.html page
  if (window.location.pathname.endsWith("yes.html")) {
    const music = document.getElementById("background-music");
    if (music) {
      music.volume = 0.3;  // Set volume
      music.play().catch(error => console.log("Autoplay blocked:", error));
    }
  }
});
