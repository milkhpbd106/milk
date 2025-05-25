// script.js
const correctPassword = "Milk10/6";
//const unlockDate = new Date("2025-06-10T00:00:00");

function checkPassword() {
  const input = document.getElementById("password-input").value;
//  const now = new Date();

//  if (input === correctPassword) {
    if (now < unlockDate) {
//      document.getElementById("lock-message").textContent = "Món quà có thể mở vào ngày 10/6 💫";
    } else {
      document.getElementById("lock-screen").style.display = "none";
      startBirthdayExperience();
    }
  } else {
    document.getElementById("lock-message").textContent = "Sai mật khẩu mất rồi 😢";
  }
}

function startBirthdayExperience() {
  const bgm = document.getElementById("bgm");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const greetings = document.querySelectorAll("#greetings .line");
  const moreGreetings = document.querySelectorAll("#more-greetings .line");
  const moreGreetingsBox = document.getElementById("more-greetings");
  const giftBtn = document.getElementById("gift-btn");
  const butterflies = document.getElementById("butterflies");

  document.getElementById("main-content").classList.remove("hidden");
  bgm.play();

  // Show 3 câu chúc đầu từng dòng
  greetings.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
    }, i * 1000);
  });

  // 7s sau chuyển video và ẩn 3 câu chúc đầu
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
    document.getElementById("greetings").style.display = "none";
  }, 7000);

  // Hiện 2 câu chúc tiếp theo
  setTimeout(() => {
    moreGreetingsBox.classList.remove("hidden");
    moreGreetings.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("show");
      }, i * 1000);
    });
  }, 7500);

  // 3s sau hiện nút mở quà
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 10500);

  // Tạo hiệu ứng bướm bay lặp lại
  createButterflies();
  setInterval(() => createButterflies(), 11000);
}

function toggleGift() {
  const giftImage = document.getElementById("gift-image");
  giftImage.classList.toggle("hidden");
}

function createButterflies() {
  const container = document.getElementById("butterflies");
  container.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const b = document.createElement("div");
    b.classList.add("butterfly");
    b.style.position = "absolute";
    b.style.width = "30px";
    b.style.height = "30px";
    b.style.background = "url('butterfly.png') center/contain no-repeat";
    b.style.left = Math.random() * 100 + "%";
    b.style.top = Math.random() * 100 + "%";
    b.style.animation = `fly ${6 + Math.random() * 5}s ease-in-out infinite`;
    container.appendChild(b);
  }
}
