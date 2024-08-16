const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DHA BOTXZ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6282287486762'] // ubah aja pake nomor lu
global.versionbot = "V.5.0.0"
global.owner2 = '6282287486762'
global.nobot = '6285783092103'
global.creator = "6282287486762"
global.linkgc = "https://chat.whatsapp.com/CxBxbx2C8qRE1ZMLHInu7Y"
global.botname = 'DhaBotxz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.grouptesti = "https://whatsapp.com/channel/0029Vad2XFfFXUuhTwSLrT0o"
global.prefa = [' ','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.idchannel = '120363309257397952@newsletter'
global.linkgc = 'https://chat.whatsapp.com/CxBxbx2C8qRE1ZMLHInu7Y'
global.namebot = "DHAxDEV-BOTZ"
global.thumbnail = 'https://telegra.ph/file/4e9b8bc6efb8972864882.jpg'
global.foter1 = 'DHABOTZ'
global.urlwa = "https://wa.me/6282287486762"
global.botname = "DHA BOTXZ"
global.foter2 = 'DHA BOTZ'
global.autobio = true // AutoBio
global.autoread = true // ReadChat
global.Ghost = '`'
global.packname = 'DHA'
global.author = '𝗕𝗢𝗧𝗭'
global.skizo = "YUDXXZ"
//APIKEY OPENAI
global.keyopenai = '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'
//tesksc
global.tesksc = "𝖲𝖢 𝖨𝖭𝖨 TIDAK 𝖣𝖨𝖩𝖴𝖠𝖫 MAKASIH"
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
global.dana = "082288783972"
global.ovo = "082288783972"
global.gopay = "082288783972"
global.qris = "https://telegra.ph/file/7ce6191a8821fe6efd463.jpg"

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
