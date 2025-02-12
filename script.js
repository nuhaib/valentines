// Move button when hovered (Random movement)
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

// Music controls (This doesn't need to change)
const music = document.getElementById("background-music");
if (music) {
  music.volume = 0.3;  // Set volume if audio element is present
}
