function checkPassword() {
  const input = document.getElementById("password-input").value;
  const overlay = document.getElementById("overlay");
  const main = document.getElementById("main-content");
  const message = document.getElementById("message");
  const video = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const music = document.getElementById("bg-music");
  const error = document.getElementById("error-message");

  if (input === "Milk10/6") {
    const today = new Date();
    if (today.getMonth() === 5 && today.getDate() === 10) {
      overlay.style.display = "none";
      main.style.display = "block";
      video.style.display = "block";
      video.play();
      music.play();

      video.onended = () => {
        video.style.display = "none";
        loopVideo.style.display = "block";
        loopVideo.play();
        message.style.display = "block";
      };
    } else {
      error.textContent = "Món quà có thể mở vào ngày 10/6.";
    }
  } else {
    error.textContent = "Sai mật khẩu rồi ạ 😢";
  }
}

function showGift() {
  document.getElementById("gift").style.display = "block";
}

