// Data van Json Fetchen
async function fetchSongsData() {
    try {
        const response = await fetch("./datasongs.json");
        const songsInfoJSON = await response.json();
        return songsInfoJSON;
    } catch (error) {
        console.error("Error fetching songs data:", error);
        return null;
    }
}

// Hier zet is de songs erin
async function addSongs() {
    // Fetch songsdata
    const songsInfoJSON = await fetchSongsData();

    // error code voor de zekerheid
    if (!songsInfoJSON) {
        console.error("Failed to fetch songs data. Check the network or JSON file.");
        return;
    }

    // alles aanmaken
    const songList = document.getElementById("songlist");
    const audioPlayer = document.getElementById("audioPlayer");
    const cdBackground = document.querySelector(".cd");
    const backButton = document.querySelector("button");

    let currentPlayingElement = null;

    // Function to reset the UI elements
    function resetUI() {
        audioPlayer.src = "";
        audioPlayer.pause();

        // Remove 'playing' class from the current playing element
        if (currentPlayingElement) {
            currentPlayingElement.classList.remove("playing");
            console.log("Removed 'playing' class");
        }
        currentPlayingElement = null;

        // Reset CD background image
        cdBackground.style.backgroundImage = 'url(./images/cd.png)';
    }

    // button voor als je klikt, het reserUI function gebeurt
    backButton.addEventListener("click", resetUI);

    // Loop door elk lied en zet de informatie erbij
    songsInfoJSON.songs.forEach(song => {
        const {
            title: songName,
            artist: artistName,
            preview_url: songUrl,
            coverUrl
        } = song;

        // html elementen aanmaken
        const songElement = document.createElement("li");
        const hgroup = document.createElement("hgroup");
        const songTitle = document.createElement("h2");
        const artistTitle = document.createElement("p");

        // text content voor artiest en lied erin zetten
        songTitle.textContent = songName;
        artistTitle.textContent = artistName;

        // Append title and artist naar de hgroup
        hgroup.appendChild(songTitle);
        hgroup.appendChild(artistTitle);
        songElement.appendChild(hgroup);

        // audio element aanmaken en source bepalen
        const audioElement = document.createElement("audio");
        audioElement.src = songUrl;
        audioElement.classList.add("audio-preview");
        songElement.appendChild(audioElement);

        // wanneer je het liedje klikt 
        songElement.addEventListener("click", () => {
            resetUI();

            // speelt het liedje
            audioPlayer.src = songUrl;
            audioPlayer.play();

            // background img veranderen naar coverurl (met warning)
            if (coverUrl) {
                cdBackground.style.backgroundImage = `url(${coverUrl})`;
            } else {
                console.warn("coverUrl is not available for this song.");
            }
        });

        // Append the song element naar de song list
        songList.appendChild(songElement);
    });

}

// function oproepen
addSongs();