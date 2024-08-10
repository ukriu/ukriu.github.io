function togglePlayPause() {
    var audio = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");

    if (audio.paused) {
        audio.play();
        playButton.style.color = "crimson";
    } else {
        audio.pause();
        playButton.style.color = "lavenderblush";
    }
}

document.getElementById("audioPlayer").addEventListener("ended", function() {
    document.getElementById("playButton").style.color = "rgb(255, 0, 255)";
});