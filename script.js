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

    // Add a user interaction event for autoplay
    function startMusic() {
        if (audio.paused) {
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
        }
    }

    // Only start the music when the "Yes" button is clicked on the 4th page
    const yesButton = document.querySelector(".btn a"); // Adjust if needed
    if (yesButton) {
        yesButton.addEventListener("click", function () {
            startMusic(); // Start the music when "Yes" is clicked
        });
    }
});

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
