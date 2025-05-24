document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";
  const today = new Date();
  const isJune10 = today.getDate() === 10 && today.getMonth() === 5;

  const userPassword = prompt("Hãy nhập mật khẩu để mở món quà:");

  if (userPassword === password) {
    if (!isJune10) {
      alert("Món quà có thể mở vào ngày 10/6.");
      return;
    }

    const introVideo = document.getElementById("intro-video");
    const loopVideo = document.getElementById("loop-video");
    const bgMusic = document.getElementById("bg-music");
    const message = document.getElementById("message");
    const gift = document.getElementById("gift");

    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";

    introVideo.style.display = "block";
    introVideo.play();
    bgMusic.play();

    // Hiện lời chúc sau 1s
    setTimeout(() => {
      message.style.display = "block";
    }, 1000);

    // Sau 7s, ẩn intro, ẩn lời chúc, hiện nền mây + dòng chữ mới
    setTimeout(() => {
      introVideo.style.display = "none";
      message.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();

      // Thêm đoạn chữ "Happy Birthday Milk..."
      const dreamyText = document.createElement("div");
      dreamyText.innerHTML = `
        <h1 style="color: white; font-size: 2em; text-align: center; margin-top: 20px;">
          🌸 Happy Birthday Milk 💖<br/>
          <span style="font-size: 1.2em;">Let’s step into a dreamy world together</span>
        </h1>
      `;
      dreamyText.style.position = "absolute";
      dreamyText.style.top = "50%";
      dreamyText.style.left = "50%";
      dreamyText.style.transform = "translate(-50%, -50%)";
      dreamyText.style.color = "white";
      dreamyText.style.textAlign = "center";
      dreamyText.style.zIndex = "10";

      document.body.appendChild(dreamyText);
    }, 7000);
  } else {
    alert("Sai mật khẩu rồi nè :<");
  }
});

function showGift() {
  document.getElementById("gift").style.display = "block";
}
window.onload = function () {
  const main = document.getElementById("main-content");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const message = document.getElementById("message");
  const finalMessage = document.getElementById("final-message");
  const bgMusic = document.getElementById("bg-music");

  main.style.display = "block";
  bgMusic.play();

  // Tạo hoa rơi
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 10 + "s";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.getElementById("flower-container").appendChild(flower);
  }

  // Khi video intro kết thúc thì chuyển sang loop
  introVideo.onended = function () {
    introVideo.style.display = "none";
    loopVideo.style.display = "block";
    message.style.display = "block";

    // Sau 7 giây thì hiện lời cuối
    setTimeout(() => {
      message.style.display = "none";
      finalMessage.style.display = "block";
    }, 7000);
  };
};

function showGift() {
  document.getElementById("gift").style.display = "block";
}
