const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝗪𝗔𝗬𝗦𝗚𝗔𝗡𝗭-𝗕𝗢𝗧𝗭' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['628568773831'] // ubah aja pake nomor lu
global.versionbot = "V.5.0.0"
global.owner2 = '6281312544437'
global.nobot = '628568773831'
global.creator = "628568773831"
global.linkgc = "https://chat.whatsapp.com/DhZMAD2pfD4IiCwBDoC0Ad"
global.botname = 'WaysDev' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.grouptesti = "https://whatsapp.com/channel/0029Vad2XFfFXUuhTwSLrT0o"
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'WaysDev' //Gausah Juga
global.idchannel = '120363309257397952@newsletter'
global.linkgc = 'https://chat.whatsapp.com/DhZMAD2pfD4IiCwBDoC0Ad'
global.namebot = "WAYSDEV-BOTZ"
global.thumbnail = 'https://telegra.ph/file/ddd8dd03c8639922d44ff.jpg'
global.foter1 = 'WAYSBOTZ'
global.urlwa = "https://wa.me/628568773831"
global.botname = "𝗪𝗔𝗬𝗦𝗚𝗔𝗡𝗭-𝗕𝗢𝗧𝗭"
global.foter2 = 'WAYSBOTZZ CREATED BY WAYSDEV'
global.autobio = true // AutoBio
global.autoread = false // ReadChat
global.Ghost = '`'
global.packname = '𝗪𝗔𝗬𝗦𝗕𝗢𝗧𝗭'
global.author = '𝗪𝗔𝗬𝗦𝗕𝗢𝗧𝗭'
global.skizo = "𝗪𝗔𝗬𝗦𝗕𝗢𝗧𝗭"
//APIKEY OPENAI
global.keyopenai = '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'
//tesksc
global.tesksc = "𝖲𝖢 𝖨𝖭𝖨 𝖣𝖨𝖩𝖴𝖠𝖫 𝖲𝖤𝖧𝖠𝖱𝖦𝖠 𝟤𝟢𝖪 𝖸𝖠 𝖪𝖠𝖪 𝖣𝖠𝖭 𝖲𝖴𝖣𝖠𝖧 𝖣𝖨𝖯𝖠𝖲𝖳𝖨𝖪𝖠𝖭 𝖠𝖪𝖠𝖭 𝖬𝖤𝖭𝖣𝖠𝖯𝖠𝖳𝖪𝖠𝖭 𝖴𝖯𝖣𝖠𝖳𝖤 𝖠𝖭 𝖲𝖢𝖭𝖸𝖠"
global.tesksesudahsc = "𝖩𝖨𝖪𝖠 𝖨𝖭𝖦𝖨𝖭 𝖬𝖤𝖬𝖡𝖤𝖫𝖨 𝖲𝖢𝖭𝖸𝖠 𝖲𝖨𝖫𝖠𝖧𝖪𝖠𝖭 𝖢𝖫𝖨𝖢𝖪 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱"
//TESKSENDPAYMENT
global.tesksendpay = "𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗣𝗜𝗟𝗜𝗛 𝗣𝗔𝗬𝗠𝗘𝗡𝗧 𝗬𝗔𝗡𝗚 𝗦𝗨𝗗𝗔𝗛 𝗗𝗜 𝗦𝗘𝗗𝗜𝗔𝗞𝗔𝗡 𝗗𝗜 𝗕𝗔𝗪𝗔𝗛 𝗜𝗡𝗜"
global.tesksesudahsendpay = "_𝖣𝖾𝗆𝗂 𝖪𝖾𝖺𝗆𝖺𝗇𝖺𝗇 𝖡𝖾𝗋𝗌𝖺𝗆𝖺, 𝖡𝗎𝗒𝗒𝖾𝗋 𝖶𝖺𝗃𝗂𝖻 𝖬𝖾𝗇𝗀𝗂𝗋𝗂𝗆 𝖡𝗎𝗄𝗍𝗂 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝖠𝗀𝖺𝗋 𝖳𝗂𝖽𝖺𝗄 𝖳𝖾𝗋𝗃𝖺𝖽𝗂 𝖧𝖺𝗅 𝖸𝖺𝗇𝗀 𝖳𝗂𝖽𝖺𝗄 𝖣𝗂 𝖨𝗇𝗀𝗂𝗇𝗄𝖺𝗇!_"
global.sendpayteskqris = "*𝖴𝗇𝗍𝗎𝗄 𝖯𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝖬𝖾𝗅𝖺𝗅𝗎𝗂 𝖰𝖱𝖨𝖲 𝖠𝗅𝗅 𝖯𝖺𝗒𝗆𝖾𝗇𝗍, 𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖲𝖼𝖺𝗇 𝖥𝗈𝗍𝗈 𝖰𝖱𝖨𝖲 𝖣𝗂𝖺𝗍𝖺𝗌 𝖨𝗇𝗂*"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "https://ptero.rainxzet.com"
global.apikey = "ptla_ckPPXovWS1X0kXkmGvrBsJbJBy1Y1jPtU1g88zQhEVm"
global.capikey = "ptlc_iBAJsd4ajAttHZArhcTVtYMVYmL1KgaEstWWOY7rT4r"
global.egg = "5"
global.loc = "1"

//Send Pay
global.dana = "-"
global.ovo = "-"
global.gopay = "081312544337"
global.qris = "https://telegra.ph/file/0ede8bf86f3b29f4591c9.jpg"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})