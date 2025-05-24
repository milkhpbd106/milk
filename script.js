document.addEventListener("DOMContentLoaded", function () {
  const password = "Milk10/6";
  // TẠM BỎ QUA điều kiện ngày tháng để test giao diện
  const isJune10 = new Date().getDate() === 10 && new Date().getMonth() === 5;

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
    const initialMessage = document.getElementById("initial-message");
    const finalMessage = document.getElementById("final-message");

    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";

    introVideo.style.display = "block";
    introVideo.play();
    bgMusic.play();

    // Hiện lời chúc đầu tiên (5-7 giây)
    setTimeout(() => {
      initialMessage.style.display = "block";
    }, 1000);

    // Sau 7s, chuyển sang video mây + lời chúc cuối
    setTimeout(() => {
      introVideo.style.display = "none";
      initialMessage.style.display = "none";
      loopVideo.style.display = "block";
      loopVideo.play();
      finalMessage.style.display = "block";
      message.style.display = "block";
    }, 8000);

    // Hiệu ứng hoa bay
    for (let i = 0; i < 20; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDelay = Math.random() * 10 + "s";
      flower.style.animationDuration = 5 + Math.random() * 5 + "s";
      document.getElementById("flower-container").appendChild(flower);
    }
  } else {
    alert("Sai mật khẩu rồi nè :<");
  }
});

function showGift() {
  document.getElementById("gift").style.display = "block";
}
