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
