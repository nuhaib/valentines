document.addEventListener("DOMContentLoaded", function () {
    // Check if audio element already exists, if not, create it
    let audio = document.getElementById("background-music");
    if (!audio) {
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.loop = true;
        audio.volume = 0.0; // Start muted to avoid autoplay restrictions

        let source = document.createElement("source");
        source.src = "assets/teenage_dream.mp3"; // Corrected file name
        source.type = "audio/mpeg";
        
        audio.appendChild(source);
        document.body.appendChild(audio);
    }

    // Start audio with fade-in effect
    const startMusic = () => {
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
    };

    // If audio isn't playing, try to start it
    if (audio.paused) {
        startMusic();
    }
});
