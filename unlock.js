const unlockDate = new Date("2025-06-10T00:00:00");

function updateCountdown() {
  const now = new Date();
  const distance = unlockDate - now;

  const countdownBox = document.getElementById("countdown-box");
  const countdown = document.getElementById("countdown");

  if (distance <= 0) {
    if (countdownBox) countdownBox.style.display = "none";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  if (countdown) {
    countdown.textContent = `${days} ngày ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

function checkPassword() {
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");
  const now = new Date();
  const correctPassword = "Milk10/6";

  if (passwordInput.value === correctPassword) {
    if (now >= unlockDate) {
      window.location.href = "home.html"; // sẽ trỏ đến trang quà sau khi mở khóa
    } else {
      message.textContent = "🌸 Món quà có thể mở vào ngày 10/6 nha cậu ơi~";
    }
  } else {
    message.textContent = "Sai mật khẩu mất rồi... thử lại nhé 💦";
  }
}
