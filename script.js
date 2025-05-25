// script.js
const correctPassword = "Milk10/6";
// Tạm tắt kiểm tra ngày để test
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

  // Hiện 3 lời chúc đầu trong 5 giây
  const lines = greetings.querySelectorAll(".line");
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
    }, i * 1700); // hiện lần lượt cách nhau 1.7s
  });

  // Sau 8 giây: đổi video nền
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
  }, 7000); // video lặp lại 7s

  // Hiện 2 lời chúc sau
  setTimeout(() => {
    moreGreetings.classList.remove("hidden");
    const moreLines = moreGreetings.querySelectorAll(".line");
    moreLines.forEach((line, i) => {
      setTimeout(() => {
        line.style.opacity = "1";
      }, i * 3000);
    });
  }, 8000);

  // Hiện nút quà
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 15000);
}

function toggleGift() {
  const gift = document.getElementById("gift-image");
  gift.classList.toggle("hidden");
}
"fix test script"
