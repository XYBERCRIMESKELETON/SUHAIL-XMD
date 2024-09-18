const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_04_09_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJuSTVtSHZLZFE2N2Joc0lhdWN5cEdTY2JQMndKUlhvMyt4aWY0bGYxanc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjQxYlI1eHEwUzVpY0tyd19vLW9nQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmJlYzRiZDctMGNiMS00NzY1LTg1YWUtNWIwZTgxZTM4OWMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDUxLFxuICAgICAgNzUsXG4gICAgICA3MCxcbiAgICAgIDE1NCxcbiAgICAgIDE3MCxcbiAgICAgIDYzLFxuICAgICAgMTMxLFxuICAgICAgNTYsXG4gICAgICAyMjIsXG4gICAgICAxMjUsXG4gICAgICA0MCxcbiAgICAgIDYsXG4gICAgICAxNzYsXG4gICAgICAxNzgsXG4gICAgICA5MyxcbiAgICAgIDc4LFxuICAgICAgNzUsXG4gICAgICAyMzksXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAzNixcbiAgICAgIDExNCxcbiAgICAgIDIzNSxcbiAgICAgIDIyOCxcbiAgICAgIDUwLFxuICAgICAgMzgsXG4gICAgICAxMTYsXG4gICAgICAxOTgsXG4gICAgICA5LFxuICAgICAgMTE2LFxuICAgICAgNzcsXG4gICAgICAyMDgsXG4gICAgICAxNDcsXG4gICAgICA5NixcbiAgICAgIDMxLFxuICAgICAgMTE5LFxuICAgICAgMTk2LFxuICAgICAgMjMwLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1JaSkFSOFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxOTcxODc3NzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlhZQkVSIFNLRUxFVE9OIEtFWVwiLFxuICAgIFwibGlkXCI6IFwiMjM5MjA0NDQ1NDgzMjYwOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qSnNyY0VFSkt5cUxjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSVc4WnlZanJFZElTbHVpUUY4c2Q1UlMxL0NqSy8wZHFHS0tqOUZlUHZFMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJNXZVWHk0ZkJtYWhjLzVzd1A0YXBXYjE1L0dGM0U4T25idkJUdHZSOFBtVDJ3VUNhOUJ4STM5UDF5cnQ0VU1IOHBSUzhYZnNyblMxVFY4b05KR0VDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQRjhIbVFCdmF4WnZYNDQ5bnhoVUxhWUUycGhobUhqejREcWRqMkR5bW1NUEpkMmZOa2cvc3YvWUtyRUVDKytHT0hJQURRTEI2NDZ6Z1pSTlZ0NGVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTk3MTg3Nzc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY2MTc4NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh0ei5qc29uIjogIntcImtleURhdGFcIjpcIlo5QWNIUTRBdVY4SlRJaVRKOEhFdjl1RDcyRERLa00wbWRmYlVDZlVhWEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4OTkxMzgzMSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
