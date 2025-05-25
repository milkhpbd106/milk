// script.js

const pwdBox    = document.getElementById('passwordScreen');
const pwdInput  = document.getElementById('passwordInput');
const btnOpen   = document.getElementById('submitPassword');
const errMsg    = document.getElementById('errorMessage');
const bgVid     = document.getElementById('dreamyVideo');
const bgMusic   = document.getElementById('bgMusic');
const msgCont   = document.getElementById('messageContainer');
const giftBtn   = document.getElementById('openGiftButton');
const giftImage = document.getElementById('giftImage');

// 3 câu chúc đầu
const msgs1 = [
  "🎉 Chúc mừng sinh nhật cậu 🎂",
  "🌟 Cảm ơn vì đã luôn là ánh sáng dịu dàng trong thế giới của tớ 💫",
  "🎁 Hãy nhấn vào đây để mở món quà nhỏ xíu tớ dành riêng cho cậu 💖"
];
// 2 câu chúc sau
const msgs2 = [
  "🌸 Happy Birthday Milk 💖",
  "Let’s step into a dreamy world together 🌈"
];

// Hiện message từng câu
async function showMsgs(list, showMs, fadeMs) {
  // tạo 1 container mới
  const box = document.createElement('div');
  box.className = 'message';
  box.innerHTML = list.map(m=>`<p>${m}</p>`).join('');
  msgCont.appendChild(box);
  // fade in
  await new Promise(r=>setTimeout(r, 50));
  box.style.opacity = 1;
  // chờ showMs
  await new Promise(r=>setTimeout(r, showMs));
  // fade out
  box.style.opacity = 0;
  await new Promise(r=>setTimeout(r, fadeMs));
  box.remove();
}

// Bỏ kiểm tra ngày 10/6 để test ngay
btnOpen.addEventListener('click', async () => {
  if (pwdInput.value === 'Milk10/6') {
    // ẩn màn hình password
    pwdBox.style.display = 'none';
    // play video + nhạc
    bgVid.style.display = 'block';
    bgVid.play(); 
    bgMusic.play();
    // show 3 msgs đầu: 7s hiện + 3s fade
    await showMsgs(msgs1, 7000, 3000);
    // show 2 msgs sau: 3s hiện + 3s fade
    await showMsgs(msgs2, 3000, 3000);
    // show nút quà
    giftBtn.style.display = 'inline-block';
  } else {
    errMsg.textContent = 'Sai mật khẩu rồi đó 😢';
  }
});

// toggling quà
giftBtn.addEventListener('click', () => {
  giftImage.style.display =
    giftImage.style.display === 'block' ? 'none' : 'block';
});
