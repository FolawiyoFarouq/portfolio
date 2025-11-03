// === PAGE LOADER ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});

// === NAV MENU TOGGLE ===
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// === DARK MODE TOGGLE ===
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
}

let savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  savedTheme = savedTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", savedTheme);
  applyTheme(savedTheme);
});

// === SCROLL TOP BUTTON ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === CYCLING TYPEWRITER EFFECT ===
const typewriter = document.getElementById("typewriter");

if (typewriter) {
  const roles = ["Web Developer", "Software Engineer", "Learner"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIndex];
    const displayed = current.substring(0, charIndex);
    typewriter.textContent = displayed;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(type, 120); // typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 60); // deleting speed
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1000); // pause before deleting
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // next role
        setTimeout(type, 200); // small delay before typing next
      }
    }
  }

  type();
}


// === ACTIVE NAV LINK HANDLER ===
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// === HAMBURGER MENU TOGGLE ===
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
  });
}
