const scrollTopBtn = document.getElementById("scrollTopBtn");
const toggleBtn = document.getElementById("toggleDarkMode");
const body = document.body;

// ===== Scroll To Top =====
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Dark Mode Persistence =====
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  if (toggleBtn) toggleBtn.checked = true;
}

if (toggleBtn) {
  toggleBtn.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

// ===== Page Loader Logic =====
const loader = document.getElementById("loader");

// Show loader when page first loads
window.addEventListener("load", () => {
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});

// Show loader again when navigating between pages
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      if (href && href.endsWith(".html")) {
        e.preventDefault();

        // show loader again before navigating
        if (loader) {
          loader.style.display = "flex";
          loader.style.opacity = "1";
        }

        setTimeout(() => {
          window.location.href = href;
        }, 500); // matches fade timing
      }
    });
  });

  // Fade in the body content after loader
  document.body.classList.add("fade-in");
});

// ===== Time Update =====
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("timeNow");
  if (timeElement) timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// ===== Typewriter Effect (Home Page Only) =====
const titles = ["Web Developer", "Software Engineer", "Learner"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 1500;

const typewriterElement = document.getElementById("typewriter");

function type() {
  if (typewriterElement && charIndex < titles[index].length) {
    typewriterElement.textContent += titles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (typewriterElement && charIndex > 0) {
    typewriterElement.textContent = titles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % titles.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titles.length && typewriterElement) setTimeout(type, delayBetween);
});
