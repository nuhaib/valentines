document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has clicked the "Yes" button on the 4th page
    if (localStorage.getItem('musicStarted') === 'true') {
        startMusic();
    }
});

function startMusic() {
    let audio = document.createElement("audio");
    audio.id = "background-music";
    audio.loop = true;
    audio.volume = 0.5; // Set volume to an appropriate level

    let source = document.createElement("source");
    source.src = "assets/teenage_dream.mp3"; // Correct file path
    source.type = "audio/mpeg";
    
    audio.appendChild(source);
    document.body.appendChild(audio);
    
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}

// Set musicStarted flag when "Yes" button is clicked on the 4th page
const yesButton = document.querySelector(".btn a"); // Adjust if needed
if (yesButton) {
    yesButton.addEventListener("click", function () {
        localStorage.setItem('musicStarted', 'true');
    });
}
