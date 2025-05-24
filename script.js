// script.js

window.addEventListener("DOMContentLoaded", () => {
  const PASSWORD = "Milk10/6";
  const IS_JUNE_10 = true; // Sửa lại thành điều kiện thực tế nếu cần

  const userPassword = prompt("Hãy nhập mật khẩu để mở món quà:");

  if (userPassword !== PASSWORD) {
    alert("Sai mật khẩu rồi nè :<");
    return;
  }

  if (!IS_JUNE_10) {
    alert("Món quà có thể mở vào ngày 10/6.");
    return;
  }

  const mainContent = document.getElementById("main-content");
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const bgMusic = document.getElementById("bg-music");
  const initialMessage = document.getElementById("initial-message");
  const finalMessage = document.getElementById("final-message");
  const buttonContainer = document.getElementById("message");

  // Hiện nội dung chính
  mainContent.style.display = "block";

  // Hiện intro video
  introVideo.style.display = "block";
  introVideo.play();

  // Phát nhạc nền ngay
  bgMusic.play().catch(() => {
    document.body.addEventListener("click", () => {
      bgMusic.play();
    }, { once: true });
  });

  // Hiện lời chúc sau 1 giây
  setTimeout(() => {
    initialMessage.style.display = "block";
  }, 1000);

  // Sau khoảng 8 giây chuyển sang video mây lặp và hiện nút mở quà
  setTimeout(() => {
    introVideo.style.display = "none";
    loopVideo.style.display = "block";
    loopVideo.play();

    initialMessage.style.display = "none";
    finalMessage.style.display = "block";
    buttonContainer.style.display = "block";
  }, 8000);

  // Hiệu ứng hoa rơi dễ thương
  const flowerContainer = document.getElementById("flower-container");
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 10 + "s";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    flowerContainer.appendChild(flower);
  }
});

function showGift() {
  const gift = document.getElementById("gift");
  gift.style.display = "block";
}
