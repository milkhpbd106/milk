// script.js
const correctPassword = "Milk10/6";
// Để test: bỏ khóa ngày
const unlockDate = new Date("2025-06-10T00:00:00");

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const now = new Date();

  if (input === correctPassword) {
    if (now >= unlockDate) {
      document.getElementById("lock-screen").style.display = "none";
      startBirthdayExperience();
    } else {
      document.getElementById("lock-message").textContent =
        "🎁 Món quà có thể mở vào ngày 10/6 🎈";
    }
  } else {
    document.getElementById("lock-message").textContent = "❌ Sai mật khẩu rồi nè";
  }
}

function startBirthdayExperience() {
  const bgm = document.getElementById("bgm");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const greetings = document.getElementById("greetings");
  const moreGreetings = document.getElementById("more-greetings");
  const giftBtn = document.getElementById("gift-btn");

  document.getElementById("main-content").classList.remove("hidden");
  bgm.play();

  // Hiệu ứng bướm nhỏ bay nhẹ và bóng cầu vồng lặp lại
  startButterflies();
  startBubbles();

  const lines = greetings.querySelectorAll(".line");
  lines[0].textContent = "🌈 Chúc mừng sinh nhật cậu 💖";
  lines[1].textContent = "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸";
  lines[2].textContent = "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷";

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("fade-in");
      line.style.opacity = "1";
    }, i * 1800);
  });

  // Tan dần sau 5 giây mỗi dòng (hiệu ứng fade-out mượt mà)
  setTimeout(() => {
    lines.forEach((line) => {
      line.classList.add("fade-out-smooth");
    });
  }, 5000);

  // Đổi video nền sau 7 giây và bắt đầu lặp lại mãi mãi
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
    loopVideo.play();
    loopVideo.loop = true;
  }, 7000);

  // Hiện 2 lời chúc sau lần lượt với hiệu ứng tỏa sáng
  setTimeout(() => {
    moreGreetings.classList.remove("hidden");
    const moreLines = moreGreetings.querySelectorAll(".line");
    moreLines[0].textContent = "🌸 Happy Birthday Milk 💖";
    moreLines[1].textContent = "🌈 Let’s step into a dreamy world together ✨";
    moreLines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("shine");
        line.style.opacity = "1";
      }, i * 3000);
    });
  }, 8000);

  // Hiện nút mở quà sau 15 giây
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 15000);
}

function toggleGift() {
  const gift = document.getElementById("gift-image");
  gift.classList.toggle("hidden");

  if (!gift.classList.contains("hidden")) {
    playBellSound();
    showMagicDust();
  }
}

function playBellSound() {
  const bell = new Audio("https://cdn.pixabay.com/download/audio/2023/03/16/audio_aa1b5b5e98.mp3?filename=bubble-pop-112351.mp3");
  bell.play();
}

function showMagicDust() {
  const dust = document.createElement("div");
  dust.className = "magic-dust";
  document.body.appendChild(dust);
  setTimeout(() => {
    document.body.removeChild(dust);
  }, 3000);
}

function startButterflies() {
  setInterval(() => {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = Math.random() * 100 + "%";
    document.getElementById("butterflies").appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 3000);
  }, 3000);
}

function startBubbles() {
  setInterval(() => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 100 + "%";
    document.getElementById("main-content").appendChild(bubble);
    setTimeout(() => bubble.remove(), 5000);
  }, 5000);
}
const unlockDate = new Date("2025-06-10T00:00:00");

function updateCountdown() {
  const now = new Date();
  const distance = unlockDate - now;

  if (distance <= 0) {
    const countdownBox = document.getElementById("countdown-box");
    if (countdownBox) countdownBox.style.display = "none";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.textContent =
      `${days} ngày ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

window.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("countdown-box")) {
    const box = document.createElement("div");
    box.id = "countdown-box";
    box.style.textAlign = "center";
    box.style.fontSize = "1.5rem";
    box.style.marginTop = "20px";
    box.style.color = "#bb99ff";
    box.innerHTML = `🎁 Đếm ngược đến ngày mở quà 🎈<br/><span id="countdown" style="font-weight: bold;"></span>`;
    document.body.prepend(box);
  }
});
