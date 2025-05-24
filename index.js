const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// سيرفر ويب صغير لمنع الإغلاق
app.get("/", (req, res) => {
  res.send("Bot is alive!");
});
app.listen(3000, () => {
  console.log("Web server is running");
});

// إعدادات البوت
const bot = mineflayer.createBot({
  host: "your-server.aternos.me", // ← غيّر هذا لعنوان سيرفرك
  port: 25565,
  username: "AFK_Bot"             // ← اسم البوت (يمكن يكون أي اسم)
});

bot.on('spawn', () => {
  console.log("Bot has joined the server");
});
