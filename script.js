const countURL = 'https://api.countapi.xyz/hit/raj-socials.netlify.app/visits';

fetch(countURL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('viewCount').innerText = data.value;
  });

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bb-audio");
  const enterBtn = document.getElementById("enter-btn");
  const entryScreen = document.getElementById("entry-screen");
  const volumeBtn = document.getElementById("volume-btn");
  const volumeSlider = document.getElementById("volume-slider");

  // Try autoplay on load, fallback to user click
  audio.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user click.");
    document.body.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });

  // Entry button hides the splash screen & plays audio
  enterBtn.addEventListener("click", () => {
    audio.play().then(() => {
      entryScreen.style.display = "none";
    }).catch(err => {
      console.log("Audio play failed:", err);
    });
  });

  // Toggle mute/unmute button
  volumeBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    volumeBtn.textContent = audio.muted ? "🔇" : "🔊";
  });

  // Volume slider changes audio volume and icon
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
    if (audio.volume == 0) {
      volumeBtn.textContent = "🔇";
    } else if (audio.volume < 0.5) {
      volumeBtn.textContent = "🔈";
    } else if (audio.volume < 0.9) {
      volumeBtn.textContent = "🔉";
    } else {
      volumeBtn.textContent = "🔊";
    }
  });
});
