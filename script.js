const messages = document.getElementById("messages");
const giftImage = document.getElementById("giftImage");
const openGift = document.getElementById("openGift");
const mainVideo = document.getElementById("mainVideo");
const loopVideo = document.getElementById("loopVideo");
const bgm = document.getElementById("bgm");

const createMessage = (text, delay, duration) => {
  setTimeout(() => {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = text;
    messages.appendChild(msg);

    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 3000);
    }, duration);
  }, delay);
};

// 3 câu chúc đầu - hiện 7s, biến mất trong 3s
createMessage("Chúc mừng sinh nhật cậu", 1000, 7000);
createMessage("Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ", 1000, 7000);
createMessage("Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu", 1000, 7000);

// Chuyển sang video nền mây + 2 câu chúc tiếp theo
mainVideo.addEventListener("ended", () => {
  mainVideo.style.display = "none";
  loopVideo.style.display = "block";
  loopVideo.play();

  createMessage("🌸 Happy Birthday Milk 💖", 500, 3000);
  createMessage("Let’s step into a dreamy world together", 500, 3000);
});

// Mở / đóng ảnh quà
openGift.addEventListener("click", () => {
  giftImage.style.display =
    giftImage.style.display === "none" ? "block" : "none";
});

// Tạo hiệu ứng bướm bay lặp lại
function spawnButterfly() {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  butterfly.style.left = `${Math.random() * 100}vw`;
  document.getElementById("butterfly-container").appendChild(butterfly);
  setTimeout(() => butterfly.remove(), 11000);
}
setInterval(spawnButterfly, 11000);

// Tạo hiệu ứng bong bóng nhẹ nhàng
function spawnBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = `${Math.random() * 100}vw`;
  document.getElementById("bubble-container").appendChild(bubble);
  setTimeout(() => bubble.remove(), 7000);
}
setInterval(spawnBubble, 2000);

// Tạo hiệu ứng bụi phép màu
function spawnMagic() {
  const dust = document.createElement("div");
  dust.className = "magic-dust";
  dust.style.left = `${Math.random() * 100}vw`;
  dust.style.top = `${Math.random() * 100}vh`;
  document.getElementById("magic-container").appendChild(dust);
  setTimeout(() => dust.remove(), 9000);
}
setInterval(spawnMagic, 3000);

// Tạo hiệu ứng sao bay
function spawnStar() {
  const star = document.createElement("div");
  star.className = "star-twinkle";
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  document.getElementById("star-container").appendChild(star);
  setTimeout(() => star.remove(), 9000);
}
setInterval(spawnStar, 5000);
