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
  document.getElementById("enter-site").addEventListener("click", () => {
    const audio = document.getElementById("bb-audio");
    const intro = document.getElementById("intro-screen");

    audio.play(); // Start audio
    intro.style.opacity = "0"; // Fade out
    setTimeout(() => intro.style.display = "none", 1000); // Remove after fade
  });
