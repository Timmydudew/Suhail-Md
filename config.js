const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="timifresh101@gmail.com"
global.location="Port Harcourt,Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348050261876" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348050261876";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVhWcXFwcS8xMXMzLzQ3cjR5RGZGazkyN0plcVhWRTMvR1JaOHdDSHZCMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzMTk3MDEwNTIzMzk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEREU5NDQ3RkYzQjhGODlDN0I3QjM4NDBDNTBCNTE3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNzkxMjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzMTk3MDEwNTIzMzk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTEyODlCNUVDQTc2NjE5NDcxMDMwNkIzOUY1NDdCN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNzkxMjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzMTk3MDEwNTIzMzk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNjI2N0Q0NzMyQkZBMUEyNjA4MTMwMThERTkxMzMxMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzNzkxMzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMWJXWTFTUlVSdi0ySGtwc1B0eUZDUVwiLFxuICBcInBob25lSWRcIjogXCI2YzcwNDNlZi05NDU0LTQ4ODAtODNjNC05MTA4MWQxZWI5YjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjA1LFxuICAgICAgMTI0LFxuICAgICAgMTcsXG4gICAgICAxMjMsXG4gICAgICA0MyxcbiAgICAgIDIwOCxcbiAgICAgIDE2NSxcbiAgICAgIDMxLFxuICAgICAgMzUsXG4gICAgICAxNjksXG4gICAgICAwLFxuICAgICAgNzEsXG4gICAgICAyMjIsXG4gICAgICAwLFxuICAgICAgMTE5LFxuICAgICAgMTE4LFxuICAgICAgMTMwLFxuICAgICAgNTUsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDgxLFxuICAgICAgMjU1LFxuICAgICAgMjM5LFxuICAgICAgMjA0LFxuICAgICAgMjEwLFxuICAgICAgNjMsXG4gICAgICA4OCxcbiAgICAgIDEzNSxcbiAgICAgIDIzMCxcbiAgICAgIDIxMSxcbiAgICAgIDI0NyxcbiAgICAgIDE0NixcbiAgICAgIDIyNCxcbiAgICAgIDIyMyxcbiAgICAgIDE0OSxcbiAgICAgIDI0OCxcbiAgICAgIDQ3LFxuICAgICAgNDMsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlBSRk5MUExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjMxOTcwMTA1MjMzOTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRpbW15XCIsXG4gICAgXCJsaWRcIjogXCIxOTY3MzE0MzAwMzE0MjM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUDZrTUFFRVBIRXNiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtwZktKakxuNXR0Mk16QjBSYmJRK3YzOGtRRm1odmN2SFJMOXRBeDVEd0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVNPbXFRZDlKcWd3Ny9CT2pXejdLZnFkYklaelNRU1I0clFRNU5XbytQMFg0b3pFVnc3WUZHNEdRYTh3NWlpSkk0MFpvNUkrNG5DbVovcWNqc3luQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWU5uSHFiMzMxMGFZM0pTNngxYkd1T3FGTHB6M2FFQzlMNmw0WExlNkRkVVRJd0MwUzAzVDhxZWVSaDkxSXFEUERxeVRXcW9lTGNOVUk4eUFtdkR5aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzE5NzAxMDUyMzM5ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODM3OTEyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURkVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGRULmpzb24iOiAie1wia2V5RGF0YVwiOlwiVm9QWitjbkFPV3hLbzlHNmxINDlMVzFzTUJPZUJNeGFaLzBoZDYvNDJEND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjA4MjM3NDExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNzkxMjczMjdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Night",
  packname: process.env.PACK_NAME || "JT",
  botname : process.env.BOT_NAME  || "Night",
  ownername:process.env.OWNER_NAME|| "Night X JT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
