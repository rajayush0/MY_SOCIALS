const countURL = 'https://api.countapi.xyz/hit/raj-socials.netlify.app/visits';

fetch(countURL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('viewCount').innerText = data.value;
  });
  window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bb-audio");

    // Try to play automatically
    audio.play().catch((err) => {
      console.log("Autoplay blocked. Waiting for user click.");

      // Fallback: user interaction
      document.body.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });
  });
  window.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enter-btn");
    const entryScreen = document.getElementById("entry-screen");
    const audio = document.getElementById("bb-audio");

    enterBtn.addEventListener("click", () => {
      audio.play().then(() => {
        entryScreen.style.display = "none";
      }).catch(err => {
        console.log("Audio play failed:", err);
      });
    });
  }); 
  window.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enter-btn");
    const entryScreen = document.getElementById("entry-screen");
    const audio = document.getElementById("bb-audio");
    const volumeBtn = document.getElementById("volume-btn");
  
    enterBtn.addEventListener("click", () => {
      audio.play().then(() => {
        entryScreen.style.display = "none";
      }).catch(err => {
        console.log("Audio autoplay blocked or failed:", err);
      });
    });
  
    // Volume toggle functionality
    volumeBtn.addEventListener("click", () => {
      if (audio.muted) {
        audio.muted = false;
        volumeBtn.textContent = "🔊";
      } else {
        audio.muted = true;
        volumeBtn.textContent = "🔇";
      }
    });
  });
  window.addEventListener("DOMContentLoaded", () => {
    const enterBtn = document.getElementById("enter-btn");
    const entryScreen = document.getElementById("entry-screen");
    const audio = document.getElementById("bb-audio");
    const volumeBtn = document.getElementById("volume-btn");
    const volumeSlider = document.getElementById("volume-slider");
  
    enterBtn.addEventListener("click", () => {
      audio.play().then(() => {
        entryScreen.style.display = "none";
      }).catch(err => {
        console.log("Audio autoplay blocked or failed:", err);
      });
    });
  
    volumeBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      volumeBtn.textContent = audio.muted ? "🔇" : "🔊";
    });
  
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
  