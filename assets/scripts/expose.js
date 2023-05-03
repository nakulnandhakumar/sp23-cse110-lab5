// expose.js
var hornSelect;
var hornImage;
var volumeControls;
var volumeInput;
var audio;
var button;
var jsConfetti;

window.addEventListener('DOMContentLoaded', init);

function init() {
  hornSelect = document.getElementById("horn-select");
  hornImage = document.querySelector("#expose img");
  volumeControls = document.querySelector("#volume-controls img");
  volumeInput = document.getElementById("volume");
  audio = document.querySelector("audio.hidden");
  button = document.querySelector("button");

  volumeInput.addEventListener("input", changeVolumeImage);
  hornSelect.addEventListener("input", changeHorn);
  button.addEventListener("click", playAudio);
  jsConfetti = new JSConfetti();
} 

function changeVolumeImage() {
  if (volumeInput.value == 0) {
    volumeControls.src = "assets/icons/volume-level-0.svg";
  } else if (volumeInput.value < 33) {
    volumeControls.src = "assets/icons/volume-level-1.svg";
  } else if (volumeInput.value < 66) {
    volumeControls.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeControls.src = "assets/icons/volume-level-3.svg";
  }
  audio.volume = volumeInput.value/100;
}

function changeHorn() {
  if (hornSelect.value == 'air-horn') {
    hornImage.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } else if (hornSelect.value == 'car-horn') {
    hornImage.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } else if (hornSelect.value == 'party-horn') {
    hornImage.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  } else {
    hornImage.src = "assets/images/no-image.png";
    audio.src = "";
  }
}

function playAudio() {
  if (hornSelect.value == 'party-horn') {
    jsConfetti.addConfetti();
    jsConfetti.clearCanvas();
  }
  audio.play();
}