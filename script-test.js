// script-test.js

const passwordScreen = document.getElementById('passwordScreen');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMessage = document.getElementById('errorMessage');
const videoContainer = document.getElementById('videoContainer');
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

// Không kiểm tra ngày (mở tự do để kiểm tra)
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

  await showMessages(messages1, 7000, 3000);

  girlVideo.addEventListener("ended", async () => {
    girlVideo.style.display = "none";
    dreamyVideo.style.display = "block";
    dreamyVideo.play();

    await showMessages(messages2, 3000, 3000);
    giftBtn.style.display = "inline-block";
  });
}

// Mở/tắt món quà
giftBtn.addEventListener('click', () => {
  giftImg.style.display = giftImg.style.display === "block" ? "none" : "block";
});
