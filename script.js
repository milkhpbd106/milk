// script.js

const passwordScreen = document.getElementById('passwordScreen');
const passwordInput  = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMessage   = document.getElementById('errorMessage');
const girlVideo      = document.getElementById('girlVideo');
const dreamyVideo    = document.getElementById('dreamyVideo');
const music          = document.getElementById('bgMusic');
const openGiftBtn    = document.getElementById('openGiftButton');
const giftImage      = document.getElementById('giftImage');

// Lời chúc đầu và sau
const messages1 = [
  "🎉 Chúc mừng sinh nhật cậu 🎂",
  "🌟 Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 💫",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 💖"
];
const messages2 = [
  "🌸 Happy Birthday Milk 💖",
  "Let’s step into a dreamy world together 🌈"
];

// Hiển thị lời chúc với hiệu ứng
async function showMessages(msgs, showMs, fadeMs) {
  const container = document.createElement('div');
  container.className = 'message fade-in-out';
  container.innerHTML = msgs.map(m=>`<p>${m}</p>`).join('');
  document.body.appendChild(container);
  await new Promise(r=>setTimeout(r, showMs));
  container.classList.add('hide');
  await new Promise(r=>setTimeout(r, fadeMs));
  container.remove();
}

// Bắt đầu khi nhập mật khẩu đúng
submitPassword.addEventListener('click', async () => {
  const pwd = passwordInput.value;
  if (pwd === 'Milk10/6') {
    // *** Bỏ kiểm tra ngày ở đây để test ngay ***
    passwordScreen.style.display = 'none';
    // Play nhạc & video đầu
    music.volume = 0.8; music.play();
    girlVideo.style.display = 'block'; girlVideo.play();

    // Lời chúc 1: 7s hiện → 3s fade
    await showMessages(messages1, 7000, 3000);

    // Khi video đầu end thì chuyển
    girlVideo.onended = async () => {
      girlVideo.style.display = 'none';
      dreamyVideo.style.display = 'block';
      dreamyVideo.play();

      // Lời chúc 2: 3s hiện → 3s fade
      await showMessages(messages2, 3000, 3000);

      // Hiện nút mở quà
      openGiftBtn.style.display = 'inline-block';
    };
  } else {
    errorMessage.textContent = 'Sai mật khẩu rồi đó 😢';
  }
});

// Mở/tắt quà
openGiftBtn.addEventListener('click', () => {
  giftImage.style.display = giftImage.style.display === 'block' ? 'none' : 'block';
});
