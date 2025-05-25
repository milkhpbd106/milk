const correctPassword = "Milk10/6";
const unlockDate = new Date("2025-06-10T00:00:00");

function checkPassword() {
  const input = document.getElementById("password-input").value;
  // const now = new Date();

  if (input === correctPassword) {
    // Nếu muốn test tạm thì bỏ kiểm tra ngày đi:
    // if (now < unlockDate) {
    //   document.getElementById("lock-message").textContent = "Món quà có thể mở vào ngày 10/6 💝";
    // } else {
      document.getElementById("lock-screen").style.display = "none";
      startBirthdayExperience();
    // }
  } else {
    document.getElementById("lock-message").textContent = "Sai mật khẩu rồi nè 🥺";
  }
}

function startBirthdayExperience() {
  const bgm = document.getElementById("bgm");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");

  bgm.play();

  const greetings = document.getElementById("greetings");
  const lines = greetings.querySelectorAll(".line");
  let delay = 0;

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show");
    }, delay);
    delay += 2000;
  });

  // Sau 8s thì chuyển video + hiện lời chúc tiếp theo
  setTimeout(() => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
    showMoreGreetings();
  }, 8000);
}

function showMoreGreetings() {
  const more = document.getElementById("more-greetings");
  const lines = more.querySelectorAll(".line");
  const giftBtn = document.getElementById("gift-btn");

  more.classList.remove("hidden");

  let delay = 0;
  lines.forEach((line) => {
    setTimeout(() => {
      line.classList.add("show");
    }, delay);
    delay += 2000;
  });

  // Hiện nút mở quà sau 5s
  setTimeout(() => {
    giftBtn.classList.remove("hidden");
  }, 5000);
}

function toggleGift() {
  const gift = document.getElementById("gift-image");
  if (gift.classList.contains("hidden")) {
    gift.classList.remove("hidden");
  } else {
    gift.classList.add("hidden");
  }
}
