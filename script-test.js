document.addEventListener("DOMContentLoaded", () => {
  const introVideo = document.getElementById("intro-video");
  const loopVideo = document.getElementById("loop-video");
  const bgMusic = document.getElementById("bg-music");
  const greetings = document.getElementById("greetings");
  const finalMessage = document.getElementById("final-message");
  const openGiftBtn = document.getElementById("open-gift");
  const giftImage = document.getElementById("gift-image");

  // Khi intro video kết thúc
  introVideo.onended = () => {
    introVideo.classList.add("hidden");
    loopVideo.classList.remove("hidden");
    loopVideo.play();

    // Hiện lời chúc sau intro video 1s
    setTimeout(() => {
      greetings.classList.remove("hidden");
      bgMusic.play();
    }, 1000);

    // 5s sau lời chúc thì hiện final message + nút mở quà
    setTimeout(() => {
      greetings.classList.add("hidden");
      finalMessage.classList.remove("hidden");
      openGiftBtn.classList.remove("hidden");
    }, 7000);
  };

  // Nhấn mở quà
  openGiftBtn.addEventListener("click", () => {
    giftImage.classList.remove("hidden");
    openGiftBtn.classList.add("hidden");
  });
});
