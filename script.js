const passwordScreen = document.getElementById('passwordScreen');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMessage = document.getElementById('errorMessage');
const girlVideo = document.getElementById('girlVideo');
const dreamyVideo = document.getElementById('dreamyVideo');
const music = document.getElementById('bgMusic');
const giftBtn = document.getElementById('openGiftButton');
const giftImg = document.getElementById('giftImage');

// Lời chúc đầu (3 câu)
const messages1 = [
  "🎉 Chúc mừng sinh nhật cậu 🎂",
  "🌟 Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 💫",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 💖"
];

// Lời chúc sau (2 câu)
const messages2 = [
  "🌸 Happy Birthday Milk 💖",
  "Let’s step into a dreamy world together 🌈"
];

// Hiện lời chúc với hiệu ứng
function showMessages(messages, duration = 3000, fadeOut = 3000) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.classList.add("message");
    container.innerHTML = messages.map(msg => `<div>${msg}</div>`).join("");
    document.body.appendChild(container);

    setTimeout(() => {
      container.style.opacity = "0";
      setTimeout(() => {
        container.remove();
        resolve();
      }, fadeOut);
    }, duration);
  });
}

// Xử lý nút nhập mật khẩu
submitPassword.addEventListener('click', () => {
  const password = passwordInput.value;
  if (password === 'Milk10/6') {
    passwordScreen.style.display = 'none';
    startSequence();
  } else {
    errorMessage.textContent = "Sai mật khẩu rồi đó 😢";
  }
});

// Trình tự sau khi vào được
async function startSequence() {
  music.play();
  girlVideo.style.display = "block";
  girlVideo.play();

  // Hiện lời chúc đầu 7s + fade out 3s
  await showMessages(messages1, 7000, 3000);

  // Khi video cô gái kết thúc
  girlVideo.addEventListener("ended", async () => {
    girlVideo.style.display = "none";
    dreamyVideo.style.display = "block";
    dreamyVideo.play();

    // Hiện lời chúc tiếp theo 3s + fade out 3s
    await showMessages(messages2, 3000, 3000);

    // Sau đó hiện nút mở quà
    giftBtn.style.display = "inline-block";
  });
}
const countdownEl = document.getElementById("countdown");
const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const messageEl = document.getElementById("message");

const targetDate = new Date("2025-06-10T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "🎉 Đã đến lúc mở quà rồi!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

unlockButton.addEventListener("click", () => {
  const password = passwordInput.value;
  const now = new Date();

  if (password === "Milk10/6") {
    if (now.getFullYear() === 2025 && now.getMonth() === 5 && now.getDate() === 10) {
      window.location.href = "home.html";
    } else {
      messageEl.textContent = "⏳ Món quà có thể mở vào ngày 10/6!";
    }
  } else {
    messageEl.textContent = "❌ Sai mật khẩu rồi đó!";
  }
});

// Mở/tắt món quà
giftBtn.addEventListener('click', () => {
  giftImg.style.display = giftImg.style.display === "block" ? "none" : "block";
});
