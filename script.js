const password = "Milk10/6";
const today = new Date("2025-06-10"); // Giả lập hôm nay là ngày 10/6
const targetDate = new Date("2025-06-10");

function checkAccess() {
    const input = prompt("Hãy nhập mật khẩu để mở quà:");
    if (input === password) {
        if (today.toDateString() === targetDate.toDateString()) {
            document.getElementById("gift-section").style.display = "block";
        } else {
            alert("🎁 Món quà có thể mở vào ngày 10/6.");
        }
    } else {
        alert("Sai mật khẩu rồi 😢");
    }
}

window.onload = checkAccess;
