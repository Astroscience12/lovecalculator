// ✅ Cloudflare Worker URL (yahin apna actual URL rakho)
const WORKER_URL = "https://lovecalculatorr.vocabfood.workers.dev";

function sendDataToWorker(yourName, yourDOB, crushName, crushDOB) {
  try {
    fetch(WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        yourName: yourName,
        yourDOB: yourDOB,
        crushName: crushName,
        crushDOB: crushDOB
      })
    });
  } catch (error) {
    console.log("Worker request failed");
  }
}

function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  const yourDOB = document.getElementById("yourDOB").value;
  const crushName = document.getElementById("crushName").value.trim();
  const crushDOB = document.getElementById("crushDOB").value;

  if (!yourName || !yourDOB || !crushName || !crushDOB) {
    alert("Please enter all details ❤️");
    return;
  }

  // ✅ Backend (Cloudflare Worker) ko data bhejo
  sendDataToWorker(yourName, yourDOB, crushName, crushDOB);

  // ✅ Fake love percentage
  const lovePercent = Math.floor(Math.random() * 30) + 70; // 70–99%

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", lovePercent);

  // ✅ Redirect (backend fail ho tab bhi)
  setTimeout(() => {
    window.location.href = "love.html";
  }, 200);
}
