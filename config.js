//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0J3RlJPckh4bWdkQ1hjaUFHMDFVV1B6aXZXKy9JaGY5ZXR5bFM4U3RWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWF5aE9UbDJPK3JkUE01MVdXN1Z5VGJGdEdPaWNNK09FUVU1VEsyQ1FRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTjU4K0xiU0krNC9MQUo4S3l3WDF2YXF5ZFZwKzFBK1JWaUdweVhTb2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RC93ZTFYNHpuQXRjSUFtaFVLNlFyZmo4VHFSVzNkcFczWUROaGUzYWswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBYVZuSSs2c3hESS9TQTdWbHZET2RoZDQ3UE1xd0Y4NUFmb0lMRHRkRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUjFTbU0rTGlXNFBMeXZpSjcrVitZYzdEc2xlemZwWWU5WWFoeXRxQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZSNXlyMWNUN3d3OG5SUWlMbUxSMWV6cjZjbURDWWZIcmJ5V3FsY2VIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2E1TjcrRU5BNTdhd3pHck5MUk1jUk14amxBYjY0THBYSG5ONXVGRnhDUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitISlJiYlUwRW05UUlrZnhyUXp4Qk1JM1RJKzA4MFE4Q0pGVkwxVUgyWFkxclpReXZWQmUzMU5kKzg0ZnVkQ2U2N3pqbzJLaTVFSHl0MFNWcGNUT0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJmVEprODFwUEZYSzFjdTM4dk5QbzhkZGxRVUxBMzBhbjczVzlwWGpGWTZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUTDNHY3VIRFFiMlF5bzBHc1ZxRlRnIiwicGhvbmVJZCI6IjYwM2M4YjY4LWIzYzctNDVhZS1iOGRhLWU5ZTJjMmIzM2U5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNUpFR2VwaXZIWlFJZjRESWxhVVIxUkdLd2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmwwS2p0NmxXT09NeGt5SzY2OG4zME43NXhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktOUkVWQ1ZOIiwibWUiOnsiaWQiOiI5MTgyNTc4OTQxMTg6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhPdys0RkVMbjBtYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclNvZWVFMGNBa012YkNEZTFrZ3NFcFhjU0xOM3hrdkM0UzRNMVNTVGMyQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQTlQL1lmcVVzUmI0dTJvVFVodndtYlV1Z1N1bWt1OHR3am03a09hRmNPYURRNDNGZStUYTJBOTdYekVPeThhelk0MkVOSG4rY3V5V24xVGpJMmRtREE9PSIsImRldmljZVNpZ25hdHVyZSI6Imsrd1Jva0RnL3BuOGdNWHBZQStOaDRWcEg4aklHV3JhMUFrUldsckhRUm5qeWh6MmczTmlIV2h3UnFCNkpZaHk1b01WODc1aExYbEQzRjkwbVVpM0FnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4MjU3ODk0MTE4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTBxSG5oTkhBSkRMMndnM3RaSUxCS1YzRWl6ZDhaTHd1RXVETlVrazNOZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjE4NjMxMH0="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,!,#,/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "PROTECH",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "Pro-Md",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PROTECH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
