lobal.location="Lahore,Pakistan."


@@ -20,7 +20,7 @@ global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



@@ -32,7 +32,7 @@ global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]


//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 
@@ -41,15 +41,15 @@ global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
@JosephFridlin
JosephFridlin 2 weeks ago
50936467806

@CYBER-RASTHA	Reply…
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";

@JosephFridlin
JosephFridlin 2 weeks ago
36467806

@CYBER-RASTHA	Reply…

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
@@ -58,11 +58,11 @@ global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "" ;
global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {
@@ -71,11 +71,11 @@ module.exports = {

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

@@ -90,8 +90,7 @@ module.exports = {
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),

@@ -101,7 +100,8 @@ module.exports = {




global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";



@@ -140,3 +140,5 @@ fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
3 comments on commit 66a5438
@Nawabzadabaloch0ffical
Nawabzadabaloch0ffical commented on 66a5438 2 weeks ago
Nice

@JosephFridlin
JosephFridlin commented on 66a5438 2 weeks ago
Fridlin ou papi.miel

@JosephFridlin
JosephFridlin commented on 66a5438 2 weeks ago
SUHAIL_02_19_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFTVk95WFljcGc3Nk8rbGk1ekhoSWlKNmVkWmd3bWh0VXZHUGNtL0dLa2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg3WkQyZnVtUkVXQVhpWDkwMWc5VHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjVlOTA3NTEtOTA3NS00ZWUwLThhZDAtNmI1ODNlNTExNzMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTQ5LFxuICAgICAgMTk4LFxuICAgICAgMjEzLFxuICAgICAgMTgxLFxuICAgICAgMTc2LFxuICAgICAgMjU0LFxuICAgICAgNjIsXG4gICAgICAyMzMsXG4gICAgICAxMTUsXG4gICAgICAxNjAsXG4gICAgICAxOTQsXG4gICAgICAwLFxuICAgICAgODgsXG4gICAgICAxLFxuICAgICAgMTczLFxuICAgICAgMTYxLFxuICAgICAgNzksXG4gICAgICAxNTYsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyNDYsXG4gICAgICA4NyxcbiAgICAgIDEwMCxcbiAgICAgIDEzMCxcbiAgICAgIDExNSxcbiAgICAgIDE0NyxcbiAgICAgIDIxNCxcbiAgICAgIDg1LFxuICAgICAgNTEsXG4gICAgICAyNyxcbiAgICAgIDQsXG4gICAgICAxMzUsXG4gICAgICAxOTUsXG4gICAgICAxNDQsXG4gICAgICAzMyxcbiAgICAgIDIwMyxcbiAgICAgIDE5MyxcbiAgICAgIDE1MCxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01pZ3QvVURFTG52a2JFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWhGWlVmaW1qcHBqMGN1Z01pUnQrN1VQY2kreWJrdE1xZ2g2b25ZOVUzdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoUEp5NGpiOU02VzBsQ0V1VHdVZXNtc1pubGdDT0piWGk3enhENUh4TGliZHN1alIvQmMwcGc5ZmJDa3lvcXZncFNubnJ3WHlMSGlxZHFJS2FGellDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxT1hLWWNyK3B3RTBHRWs4WlhEb3RRYkpTNW5iWnJJTUJkVXhNbTFCbFgyUzVnQ2ZEUmtXNDZtU1NRV2ZpS1MwY0pXTUZ3R1VIanhpb2ZBUTFLcTNDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM2NDY3ODA2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MzIyMjI4MTk3ODA5MzoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQQVBJLk1JRUzwn5Cd8J+Nr1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzY0Njc4MDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNjY1OTc5XG59Igp9

@CYBER-RASTHA
Comment
 
Leave a comment
 
