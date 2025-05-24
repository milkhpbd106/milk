function checkPassword() {
  const input = document.getElementById("password-input").value;
  const overlay = document.getElementById("overlay");
  const main = document.getElementById("main-content");
  const video = document.getElementById("video");
  const loopVideo = document.getElementById("loop-video");
  const message = document.getElementById("message");
  const music = document.getElementById("bg-music");
  const error = document.getElementById("error-message");

  // Kiểm tra mật khẩu
  if (input === "Milk10/6") {
    // Giả lập ngày 10/6 để test thử
    const today = new Date("2025-06-10");

    if (today.getMonth() === 5 && today.getDate() === 10) {
      overlay.style.display = "none";
      main.style.display = "none";
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
    error.textContent = "Sai mật khẩu rồi 😢";
  }
}

