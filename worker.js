export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const data = await request.json();

      const message = `
📩 New Submission

👤 Name: ${data.yourName}
🎂 DOB: ${data.yourDOB}

❤️ Crush Name: ${data.crushName}
🎂 Crush DOB: ${data.crushDOB}
`;

      const telegramURL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`;

      const response = await fetch(telegramURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: "ashutoshyadav99", // ✅ USERNAME ONLY (NO @)
          text: message
        })
      });

      const result = await response.text();
      console.log("Telegram response:", result);

      return new Response("OK", { status: 200 });

    } catch (error) {
      console.log("Worker error:", error);
      return new Response("Error", { status: 500 });
    }
  }
};
