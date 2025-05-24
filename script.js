document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";

  // Tạm bỏ kiểm tra ngày để test
  const userPassword = prompt("Hãy nhập mật khẩu để mở món quà:");

  if (userPassword === password) {
    const introVideo = document.getElementById("intro-video");
    const loopVideo = document.getElementById("loop-video");
    const bgMusic = document.getElementById("bg-music");
    const message = document.getElementById("message");
    const gift = document.getElementById("gift");
    const initialMessage = document.getElementById("initial-message");
    const finalMessage = document.getElementById("final-message");
    const flowerContainer = document.getElementById("flower-container");
    const mainContent = document.getElementById("main-content");

    mainContent.style.display = "block";
    introVideo.style.display = "block";
    introVideo.play();

    // Phát nhạc ngay lập tức với âm lượng nhẹ nhàng
    bgMusic.volume = 0.4;
    bgMusic.play();

    // Hiện lời chúc đầu tiên sau 1s
    setTimeout(() => {
      initialMessage.style.display = "block";
    }, 1000);

    // Sau 8s, chuyển sang video mây và hiển thị lời chúc cuối
    setTimeout(() => {
      introVideo.style.display = "none";
      initialMessage.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();
      finalMessage.style.display = "block";
      message.style.display = "block";
    }, 8000);

    // Hiệu ứng hoa bay dễ thương màu pastel
    const flowerColors = ["#f8d5ec", "#e3d0ff", "#d6f5ff", "#fbe4ff", "#e0f7ff"];
    for (let i = 0; i < 25; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDelay = Math.random() * 10 + "s";
      flower.style.animationDuration = 4 + Math.random() * 6 + "s";
      flower.style.backgroundColor = flowerColors[Math.floor(Math.random() * flowerColors.length)];
      flowerContainer.appendChild(flower);
    }
  } else {
    alert("Sai mật khẩu rồi nè :< Hãy thử lại nha ~");
  }
});

function showGift() {
  document.getElementById("gift").style.display = "block";
}
