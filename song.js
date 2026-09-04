console.log("SONG DETAIL PAGE LOADED");

// Get song ID from URL
const params = new URLSearchParams(window.location.search);
const songId = params.get("id");

async function loadSong() {

    // 1. Get the song details from your backend
    const response = await fetch(`http://127.0.0.1:3000/songs/${songId}`);
    const song = await response.json();

    // 2. Fill the page with the song's metadata
    document.getElementById("songTitle").textContent = song.title;
    document.getElementById("songArtist").textContent = song.artist;
    document.getElementById("songAlbum").textContent = song.album;
    document.getElementById("songYear").textContent = song.year;
    document.getElementById("songGenre").textContent = song.genre;
    document.getElementById("songLabel").textContent = song.label;
    document.getElementById("songProducer").textContent = song.producer;
    document.getElementById("songStudio").textContent = song.recording_studio;
    document.getElementById("songWriters").textContent = song.writers;
    document.getElementById("songEngineers").textContent = song.engineers;
    document.getElementById("songReleaseDate").textContent = song.release_date;
    document.getElementById("songISRC").textContent = song.isrc;
    document.getElementById("songDuration").textContent = song.duration;
    document.getElementById("songBPM").textContent = song.bpm;
    document.getElementById("songKey").textContent = song.musical_key;
    document.getElementById("songTrack").textContent = song.track_number;
    document.getElementById("songTotalTracks").textContent = song.total_tracks;
    document.getElementById("songArt").textContent = song.album_art_url;

    // 3. Ask your backend for RAG commentary (MusicBrainz)
    const ragResponse = await fetch(`http://127.0.0.1:3000/rag/${songId}`);
    const ragData = await ragResponse.json();

    // 4. Show the RAG commentary on the page
    document.getElementById("songRagCommentary").textContent = ragData.commentary;

    // 5. Simple personal commentary (for now)
    const personalCommentary = `
You can really hear the vibe of ${song.year} in this one. 
${song.artist}'s delivery gives the track its character, and the album "${song.album}" frames it perfectly. 
It feels like a snapshot of the era — warm, direct, and unmistakably personal.
    `;

    document.getElementById("songPersonalCommentary").textContent = personalCommentary;
}

// Run everything
loadSong();
