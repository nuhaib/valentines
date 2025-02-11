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

    // Invisible interaction (e.g., simulate a click or touch)
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

    // Create a small invisible div that simulates a click
    let invisibleDiv = document.createElement("div");
    invisibleDiv.style.position = "absolute";
    invisibleDiv.style.width = "1px";
    invisibleDiv.style.height = "1px";
    invisibleDiv.style.top = "0px";
    invisibleDiv.style.left = "0px";
    invisibleDiv.style.zIndex = "-1"; // Make it invisible
    document.body.appendChild(invisibleDiv);

    // Trigger the music play by simulating a click on the invisible div
    invisibleDiv.addEventListener("click", startMusic);

    // Automatically simulate the "click" to start music
    invisibleDiv.click();
});
