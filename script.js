document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 5, 10); // Tháng 6 = 5

  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const bgMusic = document.getElementById("bg-music");
  const mainContent = document.getElementById("main-content");
  const message = document.getElementById("message");
  const gift = document.getElementById("gift");

  const userPassword = prompt("Hãy nhập mật khẩu:");

  if (userPassword !== password) {
    alert("Sai mật khẩu rồi ạ :<");
    return;
  }

  // Nếu chưa đến ngày 10/6
  if (today < targetDate) {
    document.body.innerHTML = "<h2 style='text-align:center; margin-top:20vh;'>Món quà có thể mở vào ngày 10/6 💝</h2>";
    return;
  }

  // Nếu đúng ngày
  introVideo.style.display = "block";
  introVideo.play();

  introVideo.onended = function () {
    introVideo.style.display = "none";
    mainContent.style.display = "block";
    loopVideo.style.display = "block";
    loopVideo.play();
    bgMusic.play();
    message.style.display = "block";
  };
});

function showGift() {
  document.getElementById("gift").style.display = "block";
}
