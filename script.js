document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";
  const userPassword = prompt("Hãy nhập mật khẩu để mở món quà:");

  if (userPassword !== password) {
    alert("Sai mật khẩu rồi nè :<");
    return;
  }

  // Phát nhạc nền ngay lập tức
  const bgMusic = document.getElementById("bg-music");
  bgMusic.volume = 0.6;
  bgMusic.play().catch(() => {
    console.log("Autoplay bị chặn, đợi tương tác người dùng");
  });

  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const initialMessage = document.getElementById("initial-message");
  const finalMessage = document.getElementById("final-message");
  const message = document.querySelector(".message");

  // Bắt đầu hiện intro video + lời chúc
  introVideo.style.display = "block";
  introVideo.play();

  setTimeout(() => {
    initialMessage.style.display = "block";
  }, 1000);

  // Sau 8 giây chuyển sang nền mây và lời chúc cuối
  setTimeout(() => {
    introVideo.style.display = "none";
    initialMessage.style.display = "none";
    loopVideo.style.display = "block";
    loopVideo.play();
    finalMessage.style.display = "block";
    message.style.display = "block";
  }, 8000);

  // Tạo hiệu ứng hoa rơi 🌸
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDelay = Math.random() * 10 + "s";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.getElementById("flower-container").appendChild(flower);
  }

  // Bong bóng bay lên 💭
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDelay = Math.random() * 10 + "s";
    document.getElementById("bubble-container").appendChild(bubble);
  }

  // Lấp lánh ánh sáng ✨
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDelay = Math.random() * 5 + "s";
    document.getElementById("sparkle-container").appendChild(sparkle);
  }

  // Bướm trắng xanh bay lượn 🦋
  for (let i = 0; i < 6; i++) {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = Math.random() * 100 + "vw";
    butterfly.style.animationDelay = Math.random() * 5 + "s";
    document.getElementById("butterfly-container").appendChild(butterfly);
  }
});

// Khi nhấn nút hiện ảnh quà 🎁
function showGift() {
  const gift = document.getElementById("gift");
  gift.style.display = "block";
}
