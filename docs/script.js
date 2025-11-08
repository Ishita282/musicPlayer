// script.js
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const volumeControl = document.getElementById("volume");
const songTitle = document.getElementById("song-title");

// Playlist
const songs = [
  { title: "Deewana_Kar_Raha_Hai", src: "./songs/Deewana_Kar_Raha_Hai.mp3" },
  { title: "Yeh_Tu_Ne_Kya_Kiya", src: "./songs/Yeh_Tu_Ne_Kya_Kiya.mp3" }
];

let currentSong = 0;

// Load Song
function loadSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  songTitle.textContent = song.title;
  audioPlayer.load();
}

// Play Controls
playBtn.addEventListener("click", () => audioPlayer.play());
pauseBtn.addEventListener("click", () => audioPlayer.pause());

// Next/Prev Controls
nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audioPlayer.play();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audioPlayer.play();
});

// Volume Control
volumeControl.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

// Initialize
loadSong(currentSong);
