// NAME ANIMATION
const text = "Марсель & Рухсора";
const el = document.getElementById("names");
let i = 0;
function type() {
  if (i < text.length) {
    el.textContent += text[i++];
    setTimeout(type, 80);
  }
}
type();

// TIMER
const date = new Date("2026-04-11T18:00:00");
setInterval(() => {
  const diff = date - new Date();
  if (diff <= 0) return;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  document.getElementById("timer").textContent =
    `До свадьбы: ${d} дней ${h} часов`;
}, 1000);

// TOGGLE STORY
document.querySelector(".toggle-title")
  .onclick = e => e.target.parentElement.classList.toggle("open");

// MUSIC
const audio = document.getElementById("bgMusic");
audio.volume = 0.15;
document.getElementById("musicBtn").onclick = () =>
  audio.paused ? audio.play() : audio.pause();

// LANG
let lang = "ru";
async function loadLang(l) {
  const res = await fetch(`lang/${l}.json`);
  const t = await res.json();
  document.querySelectorAll("[data-i18n]").forEach(el =>
    el.textContent = t[el.dataset.i18n]
  );
}
loadLang(lang);

document.querySelectorAll(".lang-switch button").forEach(b =>
  b.onclick = () => loadLang(b.dataset.lang)
);
