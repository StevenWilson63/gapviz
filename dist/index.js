console.log("GAPVIZ JS LOADED — HARD RELOAD TEST");

document.addEventListener("DOMContentLoaded", () => {
console.log("GAPVIZ JS LOADED");

  async function loadSongs() {
    const response = await fetch("http://127.0.0.1:3000/songs");
    const songs = await response.json();

    const dropdown = document.getElementById("songSelect");
    dropdown.innerHTML = "";

    songs.forEach((song) => {
      const option = document.createElement("option");
      option.value = song.id;
      option.textContent = `${song.title} — ${song.artist}`;
      dropdown.appendChild(option);
    });
  }

  loadSongs();

  document.getElementById("generateBtn").addEventListener("click", async () => {
    const songId = parseInt(document.getElementById("songSelect").value);

    const response = await fetch("http://127.0.0.1:3000/commentary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId })
    });

    const data = await response.json();
    document.getElementById("output").innerText = data.commentary;
  });

  document.getElementById("addSongButton").addEventListener("click", async (event) => {
    event.preventDefault();

    console.log("READING TITLE:", document.getElementById("newTitle").value);

    console.log("TITLE VALUE:", document.getElementById("newTitle").value);

    console.log("TITLE ELEMENT:", document.getElementById("newTitle"));
    console.log("TITLE VALUE:", document.getElementById("newTitle").value);


    const title = document.getElementById("newTitle").value;
    const artist = document.getElementById("newArtist").value;
    const album = document.getElementById("newAlbum").value;
    const year = document.getElementById("newYear").value;
    const genre = document.getElementById("newGenre").value;
    const label = document.getElementById("newLabel").value;
    const producer = document.getElementById("newProducer").value;
    const recording_studio = document.getElementById("newStudio").value;
    const writers = document.getElementById("newWriters").value;
    const engineers = document.getElementById("newEngineers").value;
    const release_date = document.getElementById("newReleaseDate").value;
    const isrc = document.getElementById("newISRC").value;
    const duration = document.getElementById("newDuration").value;
    const bpm = document.getElementById("newBPM").value;
    const musical_key = document.getElementById("newKey").value;
    const track_number = document.getElementById("newTrackNumber").value;
    const total_tracks = document.getElementById("newTotalTracks").value;
    const album_art_url = document.getElementById("newAlbumArt").value;

    const response = await fetch("http://127.0.0.1:3000/songs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        artist,
        album,
        year,
        genre,
        label,
        producer,
        recording_studio,
        writers,
        engineers,
        release_date,
        isrc,
        duration,
        bpm,
        musical_key,
        track_number,
        total_tracks,
        album_art_url
      })
    });

    const newSong = await response.json();

    await loadSongs();

    // Clear form fields
    document.getElementById("newTitle").value = "";
    document.getElementById("newArtist").value = "";
    document.getElementById("newAlbum").value = "";
    document.getElementById("newYear").value = "";
    document.getElementById("newGenre").value = "";
    document.getElementById("newLabel").value = "";
    document.getElementById("newProducer").value = "";
    document.getElementById("newStudio").value = "";
    document.getElementById("newWriters").value = "";
    document.getElementById("newEngineers").value = "";
    document.getElementById("newReleaseDate").value = "";
    document.getElementById("newISRC").value = "";
    document.getElementById("newDuration").value = "";
    document.getElementById("newBPM").value = "";
    document.getElementById("newKey").value = "";
    document.getElementById("newTrackNumber").value = "";
    document.getElementById("newTotalTracks").value = "";
    document.getElementById("newAlbumArt").value = "";
  });

});
/* ============================================================
   SPLASH → HOME LINK
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const splash = document.getElementById("splash-screen");

    // Only run this on the splash screen
    if (splash) {

        splash.addEventListener("click", () => {

            // Fade out
            splash.style.transition = "opacity 0.6s ease";
            splash.style.opacity = "0";

            // Load Home Screen after fade
            setTimeout(() => {
                window.location.href = "../screens/home.html";
            }, 600);

        });

    }

});
/* ============================================================
   JOIN NOW CAPSULE — OVERRIDE SPLASH CLICK
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const joinCapsule = document.getElementById("join-capsule");

    if (joinCapsule) {

        joinCapsule.addEventListener("click", (event) => {

            event.stopPropagation();   // stops the splash click from firing

            // TEMPORARY: this will change once your login page exists
            window.location.href = "../user-setup/index.html";

        });

    }

});
