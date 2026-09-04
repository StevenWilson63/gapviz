const fpScreen = document.getElementById("fingerprint-screen");
const fpIcon = document.getElementById("fp-icon");
const fpTop = document.getElementById("fp-top-text");
const fpBottom = document.getElementById("fp-bottom-text");

const songStoryScreen = document.getElementById("song-story-screen");

fpScreen.addEventListener("click", () => {

    // Remove TAP + bottom text instantly
    fpTop.style.display = "none";
    fpBottom.style.display = "none";

    // Start fingerprint pulse
    fpIcon.style.animation = "fpPulse 2.5s infinite";

    // Create status text
    const listening = document.createElement("div");
    listening.className = "fp-status";
    listening.innerText = "Listening...";
    fpScreen.appendChild(listening);

    // Fade in "Listening..."
    listening.style.animation = "fpFadeIn 1.5s forwards";

    // After 3 seconds, fade out "Listening..."
    setTimeout(() => {
        listening.style.opacity = 0;

        // Replace text with "We know the song..."
        setTimeout(() => {
            listening.innerHTML = "We know the song<br>unlocking the story...";
            listening.style.animation = "none";
            void listening.offsetWidth; // restart animation
            listening.style.animation = "fpFadeIn 1.5s forwards";
        }, 50);

    }, 3000);

    // After 6 seconds, fade out fingerprint screen
    setTimeout(() => {
        fpScreen.style.animation = "screenFadeOut 1s forwards";

        // After fade-out completes, show Song + Story screen
        setTimeout(() => {
            fpScreen.style.pointerEvents = "none";
            songStoryScreen.style.pointerEvents = "auto";
            songStoryScreen.style.animation = "screenFadeIn 1s forwards";
        }, 1000);

    }, 6000);
});
