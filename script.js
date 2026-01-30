// Таймер
const weddingDate = new Date("2026-04-11T18:00:00");

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;

  document.getElementById("timer").textContent =
    `До свадьбы: ${d} дней ${h} часов`;
}, 1000);

// Toggle история
document.querySelector(".toggle-title")
  .addEventListener("click", e =>
    e.target.parentElement.classList.toggle("open")
  );

// RSVP → Google Sheets
document.getElementById("rsvp-form").addEventListener("submit", e => {
  e.preventDefault();
  fetch("ВАШ_WEB_APP_URL", {
    method: "POST",
    body: new FormData(e.target)
  }).then(() => {
    document.getElementById("form-status").textContent =
      "Спасибо! Мы получили ваш ответ 🤍";
    e.target.reset();
  });
});
