// Function to move elements randomly
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Background Music with Smooth Fade-In
document.addEventListener("DOMContentLoaded", function () {
  let audio = document.createElement("audio");
  audio.id = "background-music";
  audio.loop = true;
  audio.volume = 0.0; // Start muted to avoid autoplay restrictions

  let source = document.createElement("source");
  source.src = "assets/teenage_dream.mp3"; // Corrected file name
  source.type = "audio/mpeg";

  audio.appendChild(source);
  document.body.appendChild(audio);

  // Ensure audio loads properly
  audio.load();

  // Play the music and apply a smooth fade-in effect
  audio.play().then(() => {
    let volume = 0.0;
    let fadeIn = setInterval(function () {
      if (volume < 1.0) {
        volume += 0.05; // Adjust fade speed
        audio.volume = volume.toFixed(2);
      } else {
        clearInterval(fadeIn);
      }
    }, 200);
  }).catch(error => console.log("Autoplay blocked:", error));
});
