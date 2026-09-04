console.log("SONG LIST PAGE LOADED");

async function loadSongs() {
    const response = await fetch("http://127.0.0.1:3000/songs");
    const songs = await response.json();

    const list = document.getElementById("songList");
    list.innerHTML = "";

    songs.forEach(song => {
        const item = document.createElement("div");
        item.className = "song-item";
        item.textContent = `${song.title} — ${song.artist}`;
        item.onclick = () => {
            window.location.href = `song.html?id=${song.id}`;
        };
        list.appendChild(item);
    });
}

loadSongs();
