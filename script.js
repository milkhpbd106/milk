const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitPassword');
const countdown = document.getElementById('timeLeft');
const errorMessage = document.getElementById('errorMessage');
const passwordScreen = document.getElementById('passwordScreen');
const videoContainer = document.getElementById('videoContainer');
const girlVideo = document.getElementById('girlVideo');
const dreamyVideo = document.getElementById('dreamyVideo');
const bgMusic = document.getElementById('bgMusic');
const openGiftButton = document.getElementById('openGiftButton');
const giftImage = document.getElementById('giftImage');

function updateCountdown() {
  const now = new Date();
  const releaseDate = new Date('2025-06-10T00:00:00');
  const diff = releaseDate - now;

  if (diff <= 0) {
    countdown.innerText = '🎉 Đã đến ngày mở quà!';
    passwordInput.disabled = false;
    submitBtn.disabled = false;
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdown.innerText = `${days} ngày ${hours}h ${minutes}m ${seconds}s`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

submitBtn.addEventListener('click', () => {
  const input = passwordInput.value.trim();
  const now = new Date();
  const unlockDate = new Date('2025-06-10T00:00:00');

  if (input !== 'Milk10/6') {
    errorMessage.innerText = '❌ Mật khẩu sai rồi nè!';
    return;
  }

  if (now < unlockDate) {
    errorMessage.innerText = '📅 Món quà có thể mở vào ngày 10/6 nhé!';
    return;
  }

  passwordScreen.style.display = 'none';
  videoContainer.style.display = 'block';
  girlVideo.play();
  bgMusic.play();

  setTimeout(() => {
    girlVideo.style.display = 'none';
    dreamyVideo.style.display = 'block';
  }, 7000);

  setTimeout(() => {
    openGiftButton.style.display = 'block';
  }, 12000);
});

openGiftButton.addEventListener('click', () => {
  giftImage.style.display = giftImage.style.display === 'block' ? 'none' : 'block';
});
button:active {
  transform: scale(0.95);
}
