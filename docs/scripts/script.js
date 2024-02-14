// how do i fetch jsonfiles in javascript (chat gpt) zelf aangepast
// Rapid API gebruikt voor de data van spotify gebruiken
async function addSongs() {
    const response = await fetch("./datasongs.json");
    const songsInfoJSON = await response.json();
    const songList = document.getElementById("songlist");
    const audioPlayer = document.getElementById("audioPlayer");
    const cdBackground = document.querySelector(".cd");
    const backButton = document.querySelector("button");

    let currentPlayingElement = null;


    function resetUI() {
        audioPlayer.src = "";
        audioPlayer.pause();

        // Remove "playing" class from the previous element
        if (currentPlayingElement) {
            currentPlayingElement.classList.remove("playing");
            console.log("Removed 'playing' class");
        }
        currentPlayingElement = null;

        cdBackground.style.backgroundImage = 'url(./images/cd.png)';
    }

    backButton.addEventListener("click", resetUI);


    songsInfoJSON.songs.forEach(song => {
        const songName = song.title;
        const artistName = song.artist;
        const songUrl = song.preview_url;
        const coverUrl = song.coverUrl;


        const songElement = document.createElement("li");
        const hgroup = document.createElement("hgroup");
        const songTitle = document.createElement("h2");
        const artistTitle = document.createElement("p");

        songTitle.textContent = songName;
        artistTitle.textContent = artistName;

        hgroup.appendChild(songTitle);
        hgroup.appendChild(artistTitle)
        songElement.appendChild(hgroup);

        const audioElement = document.createElement("audio");
        audioElement.src = songUrl;
        audioElement.classList.add("audio-preview");
        songElement.appendChild(audioElement);

        songElement.addEventListener("click", () => {
            resetUI();

            audioPlayer.src = songUrl;
            audioPlayer.play();

            currentPlayingElement = songElement;
            currentPlayingElement.classList.add("playing");
            console.log("Song clicked:", songName);

            if (coverUrl) {
                cdBackground.style.backgroundImage = `url(${coverUrl})`;
            } else {
                console.warn("coverUrl is not available for this song.");
            }
        });

        songList.appendChild(songElement);

    })
    audioPlayer.addEventListener("pause", () => {
        if (currentPlayingElement) {
            currentPlayingElement.classList.remove("playing");
            console.log("Audio paused");
        }
    });

    audioPlayer.addEventListener("ended", () => {
        if (currentPlayingElement) {
            currentPlayingElement.classList.remove("playing");
            console.log("Audio ended");
        }
    });
    
}
addSongs()