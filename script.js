document.addEventListener("DOMContentLoaded", function () {
    // Check if the music has started already
    if (localStorage.getItem('musicStarted') === 'true') {
        startMusic();
    }

    // Disable "No" button interaction (but keep hover effect)
    const noButton = document.querySelector("#move-random");
    if (noButton) {
        noButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default behavior (navigation)
            // Optionally, you can display a message or handle the "No" action here
            alert("You can only click 'Yes' to proceed!");
        });
    }

    // Start music function
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
});
