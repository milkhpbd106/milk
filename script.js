// script.js
const correctPassword = "Milk10/6";
// Để test: bỏ khóa ngày
const unlockDate = new Date("2000-01-01T00:00:00");

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

  // Phát nhạc nền
  bgm.play();

  // Hiện 3 lời chúc đầu lần lượt, mỗi dòng 1.5s sau dòng trước, có icon
  const lines = greetings.querySelectorAll(".line");
  lines[0].textContent = "🌈 Chúc mừng sinh nhật cậu 💖";
  lines[1].textContent = "✨ Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 🌸";
  lines[2].textContent = "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 🌷";

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
    }, i * 1800); // cách nhau 1.8s
  });

  // Sau 7 giây: đổi video nền (intro lặp 7s)
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
  }, 7000);

  // Hiện 2 lời chúc sau lần lượt
  setTimeout(() => {
    moreGreetings.classList.remove("hidden");
    const moreLines = moreGreetings.querySelectorAll(".line");
    moreLines[0].textContent = "🌸 Happy Birthday Milk 💖";
    moreLines[1].textContent = "🌈 Let’s step into a dreamy world together ✨";
    moreLines.forEach((line, i) => {
      setTimeout(() => {
        line.style.opacity = "1";
      }, i * 3000);
    });
  }, 8000);

  // Hiện nút mở quà
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 15000);
}

function toggleGift() {
  const gift = document.getElementById("gift-image");
  gift.classList.toggle("hidden");
}
