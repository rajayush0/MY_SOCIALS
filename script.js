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
  
