export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const data = await request.json();

    const message = `
📩 New Submission

👤 Name: ${data.yourName}
🎂 DOB: ${data.yourDOB}

❤️ Crush Name: ${data.crushName}
🎂 Crush DOB: ${data.crushDOB}
`;

    const telegramURL = `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`;

    await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.CHAT_ID,
        text: message
      })
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
