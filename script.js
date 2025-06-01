const scrollTopBtn = document.getElementById("scrollTopBtn");
const toggleBtn = document.getElementById("toggleDarkMode");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function updateTime() {
  const now = new Date();
  document.getElementById("timeNow").textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

 const titles = ["Web Developer", "Software Engineer", "Learner"];
  let index = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetween = 1500;

  const typewriterElement = document.getElementById("typewriter");

  function type() {
    if (charIndex < titles[index].length) {
      typewriterElement.textContent += titles[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetween);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriterElement.textContent = titles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      index = (index + 1) % titles.length;
      setTimeout(type, typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (titles.length) setTimeout(type, delayBetween);
  });