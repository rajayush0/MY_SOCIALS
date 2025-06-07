const countURL = 'https://api.countapi.xyz/hit/raj-socials.netlify.app/visits';

fetch(countURL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('viewCount').innerText = data.value;
  });
  window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bb-audio");
    const btn = document.getElementById("audio-btn");

    // Try autoplay (in case browser blocks)
    audio.play().catch(() => {
      btn.textContent = "▶️"; // Show play icon if autoplay fails
    });

    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = "⏸️";
      } else {
        audio.pause();
        btn.textContent = "▶️";
      }
    });
  });