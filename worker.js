export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const data = await request.json();

      // 🔴 STEP A: getUpdates se latest chat_id uthao
      const updatesRes = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/getUpdates`
      );
      const updates = await updatesRes.json();

      if (!updates.ok || updates.result.length === 0) {
        return new Response("No chat found. Send /start to bot.", { status: 500 });
      }

      // 🔥 MOST RECENT CHAT_ID
      const chatId =
        updates.result[updates.result.length - 1].message.chat.id;

      const message = `
📩 New Submission

👤 Name: ${data.yourName}
🎂 DOB: ${data.yourDOB}

❤️ Crush Name: ${data.crushName}
🎂 Crush DOB: ${data.crushDOB}
`;

      // 🔴 STEP B: sendMessage with REAL chat_id
      const sendRes = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          })
        }
      );

      const sendResult = await sendRes.text();
      console.log("Telegram send:", sendResult);

      return new Response("OK", { status: 200 });

    } catch (err) {
      console.log("Worker error:", err);
      return new Response("ERROR", { status: 500 });
    }
  }
};
