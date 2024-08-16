var audio = document.getElementById("sounds");
var audioEndTime;

audio.addEventListener(
  "timeupdate",
  function () {
    if (audioEndTime && audio.currentTime >= audioEndTime) {
      audio.pause();
    }
    console.log(audio.currentTime);
  },
  false,
);

function playAudio(startTime, endTime) {
  audioEndTime = endTime;
  audio.currentTime = startTime;
  audio.play();
}
