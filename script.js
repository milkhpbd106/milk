// script.js - Điều khiển kịch bản trang sinh nhật dễ thương

document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";
  const userPassword = prompt("Hãy nhập mật khẩu để mở món quà:");

  if (userPassword === password) {
    const introVideo = document.getElementById("intro-video");
    const loopVideo = document.getElementById("loop-video");
    const bgMusic = document.getElementById("bg-music");
    const initialMessage = document.getElementById("initial-message");
    const finalMessage = document.getElementById("final-message");
    const flowerContainer = document.getElementById("flower-container");
    const mainContent = document.getElementById("main-content");

    mainContent.style.display = "block";
    introVideo.style.display = "block";
    introVideo.play();

    // Nhạc phát ngay khi vào
    bgMusic.volume = 0.5;
    bgMusic.play();

    // Hiện lời chúc đầu tiên sau 1s
    setTimeout(() => {
      initialMessage.style.display = "block";
    }, 1000);

    // Sau 8s chuyển sang nền mây và lời chúc cuối
    setTimeout(() => {
      introVideo.style.display = "none";
      initialMessage.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();
      finalMessage.style.display = "block";

      // Hoa bay
      for (let i = 0; i < 20; i++) {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDelay = Math.random() * 10 + "s";
        flower.style.animationDuration = 5 + Math.random() * 5 + "s";
        flowerContainer.appendChild(flower);
      }
    }, 8000);
  } else {
    alert("Sai mật khẩu rồi nè :<");
  }
});

function showGift() {
  document.getElementById("gift-image").style.display = "block";
}
