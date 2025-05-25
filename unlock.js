const unlockDate = new Date("2025-06-10T00:00:00");

function updateCountdown() {
  const now = new Date();
  const distance = unlockDate - now;

  if (distance <= 0) {
    const box = document.getElementById("countdown-box");
    if (box) box.style.display = "none";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.textContent = `${days} ngày ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

window.addEventListener("DOMContentLoaded", () => {
  const box = document.createElement("div");
  box.id = "countdown-box";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.background = "rgba(255, 255, 255, 0.7)";
  box.style.border = "2px dashed #ffcce5";
  box.style.borderRadius = "20px";
  box.style.padding = "15px 25px";
  box.style.marginTop = "25px";
  box.style.fontSize = "1.3rem";
  box.style.color = "#cc66aa";
  box.style.fontFamily = "'Comic Neue', cursive";
  box.style.boxShadow = "0 0 15px rgba(255, 200, 255, 0.3)";
  box.style.animation = "fadeIn 2s ease-out infinite alternate";

  box.innerHTML = `🌸 <div style="margin-bottom: 8px;">Đếm ngược đến ngày mở quà 🎀</div>
    <span id="countdown" style="font-size: 1.6rem; font-weight: bold;"></span>`;

  document.querySelector(".container").appendChild(box);
});
