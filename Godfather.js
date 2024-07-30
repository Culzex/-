const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, delay, decodeJid } = require('@whiskeysockets/baileys')
const { SendGroupInviteMessageToUser } = require("@queenanya/invite")
const Config = require("./Config")
const os = require('os')
const fs = require('fs')
const mathjs = require('mathjs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const chalk = require('chalk')
    const dictionary = require('word-definition');
const wikipedia = require('wikipedia');
const npt = require("node-periodic-table");
const pTable = require("ptable"); 
const mver = require('./package.json').version
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./Godfather/lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./Godfather/lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./Godfather/lib/myfunc')
let afk = require("./Godfather/lib/afk");

const { fetchBuffer, buffergif } = require("./Godfather/lib/myfunc2")

/////log
 global.modnumber = '2347080376875' 
//Gallery/database
let ntilinkall =JSON.parse(fs.readFileSync('./Godfather/database/antilink.json'));
// let autoblck =JSON.parse(fs.readFileSync('./Godfather/database/autoblock.json'));
const isnsfw = JSON.parse(fs.readFileSync('./Godfather/database/nsfw.json'));

let _afk = JSON.parse(fs.readFileSync('./Godfather/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./Godfather/database/total-hit-user.json'))

//time
const replay = (teks) => {
            fenixzo.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var fenixzoytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var fenixzoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var fenixzoytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var fenixzoytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var fenixzoytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var fenixzoytimewisher = `Good Morning 🌄`
 } 
module.exports = fenixzo = async (fenixzo, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        
        const prefix = global.prefa || "."
        const isCmd = body.startsWith(prefix)
        if (!isCmd || !body.startsWith(prefix)) return;
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await fenixzo.decodeJid(fenixzo.user.id)
        const itsMe = m.sender == botNumber ? true : false
        
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await fenixzo.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [botNumber,...global.ownernumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : true;
   //   const AutoBlock = m.isGroup ? autoblck.includes(from) : true;
      const isNsfw = m.isGroup ? isnsfw.includes(from) : false;
      const AntiNsfw = m.isGroup ? isnsfw.includes(from) : false
 /////
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

	//random
	    // Function to filter JPG and PNG files from a directory
const getRandomImage = (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
    });

  if (files.length === 0) return null;

  const randomFile = files[Math.floor(Math.random() * files.length)];
  const randomFilePath = path.join(directory, randomFile);

  if (fs.existsSync(randomFilePath)) {
    return randomFilePath;
  } else {
    console.log(`Selected file ${randomFile} does not exist.`);
    return null;
  }
};

const imageDirectory = './Godfather/Theme-logo';
  const randomImage = getRandomImage(imageDirectory);

//group chat msg by 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋
const reply = (teks) => {
fenixzo.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` powered by Alex`,
"body": `🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Godfather/gdfather.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

//////////

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}



async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const fenixzoyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: '💙𓆩‎✘🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋✘𓆪_✰',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            fenixzoyresult.push(result)
        }
    resolve(fenixzoyresult)
    })
}

        if (!fenixzo.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            fenixzo.readMessages([m.key])
        }
        if (global.autoTyping) {

        fenixzo.sendPresenceUpdate('composing', from)


        }

        if (global.autoRecording) {

        fenixzo.sendPresenceUpdate('recording', from)

        }

        
        //bot number online status, available=online, unavailable=offline
        fenixzo.sendPresenceUpdate('unavailable', from)
        
        if (global.autorecordtype) {
        let fenixzorecordin = ['recording','composing']

        let fenixzorecordinfinal = fenixzorecordin[Math.floor(Math.random() * fenixzorecordin.length)]

        fenixzo.sendPresenceUpdate(fenixzorecordinfinal, from)

        }
        
        if (autobio) {
            fenixzo.updateProfileStatus(`Hey, future leaders! 🌟  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-Md is here to inspire and lead, thanks to 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Botz, Inc. 🚀 ${runtime(process.uptime())} `).catch(_ => _)
        }
        if (m.sender.startsWith('212') && global.anti212 === true) {
            return fenixzo.updateBlockStatus(m.sender, 'block')
        }


	
   
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            
			console.log(chalk.redBright(` Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '  ' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '  ' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            
			console.log(chalk.redBright(` Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '  ' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./Godfather/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./Godfather/database/total-hit-user.json'))[0].hit_cmd
        }
        const photooxy = require('./Godfather/lib/photooxy')
        
        

        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk *Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./Godfather/database/afk-user.json', JSON.stringify(_afk))
                fenixzo.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        
/*------ Not allowing  212 and 210 country codes to use bot in DM ---------- */

  const messSenderMain = m.sender;
  const messForm = m.chat;
  if ( !m.isGroup ){
    if (messForm.startsWith("212") || messForm.startsWith("210") ){
      return;
    }
  }
        
        
        ///Auto Block 
      if (Config.AUTO_BLOCK == 'true' && m.chat.endsWith("@s.whatsapp.net")) {
            return fenixzo.updateBlockStatus(m.sender, 'block')
        }
        
     
     // anti bot
        if (Config.ANTI_BOT == 'true' && m.isBaileys) {
    if (!isBotAdmins) {
     m.reply("\`\`\`🤖 Bot Detected!!\`\`\`  _but I'm not an admin_");
      return;
    }

   m.reply(`\`\`\`🤖 Bot Detected!!\`\`\` _✅ Kicked *@${m.sender.split("@")[0]}*_`, { mentions: [m.sender] });
   fenixzo.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
   m.deleteMsg(m.key);
    return;
  }

    
    
 ///antilink 
 if (AntiLinkAll)
               if (budy.match('http') && budy.match('https'))   
   {
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\` you are a group admin thats why i wont kick you, but remember from next time`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
        await fenixzo.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			fenixzo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
fenixzo.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\` @${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
	    //total features by xeon sir
const fenixzofeature = () =>{
            var mytext = fs.readFileSync("./Godfather.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
}
  
            switch (command) {
            
            case 'stealdp': {
            const user = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        if (user === botNumber) return m.reply('_🙅🏻 I can not steal my own profile picture, Darling 🍭_');
        const {key} = await m.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕 😇 🍭");
        let picture;
        try {
            picture = await getBuffer(await fenixzo.profilePictureUrl(user, 'image'));
        } catch (err) {
            return m.edit(`_❌ @${user.split('@')[0]} Doesn't have a profile picture, or it's hidden.`, key, { mentions: [user] });
        }
        fenixzo.updateProfilePicture(botNumber, picture)
        .then(() => m.edit('✅ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞 𝐏𝐢𝐜𝐭𝐮𝐫𝐞 𝐒𝐭𝐞𝐚𝐥𝐞𝐝', key))
        .catch((error) => {
            console.error(error);
            m.edit('Error! try again later', key);
        });
        }
        break;
            case 'upload': {
            let media = await fenixzo.downloadAndSaveMediaMessage(qmsg)
     await m.copyNForward(ownernumber+'@s.whatsapp.net')
   //  await pika.copyNForward(pika.chat, true, { readViewOnce: true, quoted: pika,  });
            }
            break;
           
 /* case 'autoblock': {
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (AutoBlock) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./Godfather/database/autoblock.json', JSON.stringify(ntilinkall))
reply('Success in turning on all autoblock in this group')
var groupe = await fenixzo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
fenixzo.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\` Dont DM or PM or Inbox To The Bot Else You'll Be Blocked l`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AutoBlock) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./Godfather/database/autoblock.json', JSON.stringify(ntilinkall))
reply('Success in turning off all autoblock in this group')
} else {
  await reply(`Please Type The Option Example: ${prefix + command} on  Example: ${prefix + command} off on to enable  off to disable`)
  }
  }
  break;
  */
  
   case 'antilink': {
                            if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiLinkAll) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./Godfather/database/antilink.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await fenixzo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
fenixzo.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\` If you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./Godfather/database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option Example: ${prefix + command} on  Example: ${prefix + command} off on to enable  off to disable`)
  }
  }
  break;
  
  case 'setppbot': case 'setbotpp': {
if (!isCreator) return replay(mess.botowner)
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await fenixzo.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await fenixzo.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Succes`)
} else {
var memeg = await fenixzo.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`𝑺𝒖𝒄𝒄𝒆𝒔𝒔, 𝑻𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒘 𝒑𝒓𝒐𝒇𝒊𝒍𝒆 𝒑𝒉𝒐𝒕𝒐, 𝒎𝒚 𝒅𝒂𝒓𝒍𝒊𝒏𝒈 😚`)
}
}
break;

            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply(mess.owner)
                fs.readdir("./Godfather/session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files `
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}  `
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./Godfather/session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break;
            case 'join': {
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await fenixzo.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break;     
                }
            case 'session': {
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./Godfather-access/creds.json')
                fenixzo.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                }
                break;

                case 'ship': {
    let usep = m.sender;
    let recp = '';
    let jj = '';
    let rate = '';

       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (users == 'none') {
         recp = `@${m.sender.split("@")[0]} x  themselves`;
        console.log(recp);
    } else {
         recp = `@${m.sender.split("@")[0]} x  @${users.split("@")[0]}`;
        console.log(recp);
    }

const ll = Math.floor(Math.random() * 100);

if (ll < 30 && ll < 40) {
  jj = `					*ShipCent : ${ll}%*   		There's still time to reconsider your choices`;
  rate = "Not Good";
} else if (ll >= 40 && ll <= 50) {
  // Add a condition for the range between 40 and 50
  jj = `					*ShipCent : ${ll}%*   		 Not bad, but not great either`;
  rate = "Fair";
} else if (ll > 50 && ll < 60) {
  jj = `					*ShipCent : ${ll}%*   		 Good enough, I guess!💫`;
  rate = "Average";
} else if (ll >= 60 && ll <= 70) {
  // Add a condition for the range between 60 and 70
  jj = `					*ShipCent : ${ll}%*   		 Pretty good, you have potential`;
  rate = "Above Average";
} else if (ll > 70 && ll < 80) {
  jj = `					*ShipCent : ${ll}%*   			Stay together and you'll find a way⭐️`;
  rate = "Good";
} else if (ll >= 80 && ll <= 90) {
  // Add a condition for the range between 80 and 90
  jj = `					*ShipCent : ${ll}%*   			You two are a great match💕`;
  rate = "Great";
} else if (ll > 90) {
  jj = `					*ShipCent : ${ll}%*   	Amazing! You two will be a good couple💖`;
  rate = "Amazing";
} else if (ll == 100) {
  jj = `					*ShipCent : ${ll}%*   	You two are fated to be together💙`;
  rate = "Fated to be together";
}

let caption = `	❣️ *Matchmaking...* ❣️   `;
    caption += `		---------------------------------  `;
    caption += `*${recp}*  `;
    caption += `		---------------------------------  `;
    caption += `${jj}`;

    fenixzo.sendMessage(m.chat, { text: caption, mentions: [ users, m.sender ] }, { quoted: m });
    }
break;





            case 'shutdown': {
                if (!isCreator) return reply(mess.owner)
                reply(`♠️Goodbye........`)
                await sleep(3000)
                process.exit()
                }
                break;
                
            case 'restart': {
                if (!isCreator) return reply(mess.owner)
                reply('In Process....')
                exec('pm2 restart all')
                }
                break;
                
            case 'autoread': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                }
                break;
                
                case 'autotyping': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                }
                break;
                
                case 'autorecording': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                }
                break;
                
                case 'autorecordtype': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                }
                break;
                
                case 'autoswview': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread_status = true
                    reply(`🟨Successfully changed auto status/story view to ${q}`)
                } else if (q === 'off') {
                    autoread_status = false
                    reply(`🟨Successfully changed auto status/story view to ${q}`)
                }
                }
                break;
                
            case 'autobio': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`🟨Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`🟨Successfully Changed AutoBio To ${q}`)
                }
                }
                break;
                
            case 'mode': {
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`📑 Check out this example: ${prefix + command} in public/self`)
                if (q == 'public') {
                    fenixzo.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    fenixzo.public = false
                    reply(mess.done)
                }
                }
                break;
                
            case 'setexif': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to • Packname : ${global.packname}  • Author : ${global.author}`)
                }
                break;
                
            case 'setpp':
            case 'setpp':
            case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await fenixzo.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await fenixzo.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await fenixzo.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                }
                break;
                
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fenixzo.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fenixzo.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'leave':
                if (!isCreator) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('🟨Bye Everyone 🥺')
                await fenixzo.groupLeave(m.chat)
                break;
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text? Example : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await fenixzo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(2500)
                    let a = '```' + `  📒${text} ` + '```' + ' *'
                    fenixzo.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: ' *🎐 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Broadcast🎐* ',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/3fd18ee11521117c7c882.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Broadcast Sent !`)
            }
            break;
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("Godfather.js").toString().split('case \'' + cases + '\'')[1].split("break;")[0] + "break;"
                }
                reply(`${getCase(q)}`)
                break;
            case 'delete':
            case 'del': {
                if (!isCreator) return reply(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return reply('The message was not sent by a bot!')
                fenixzo.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break;

            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*  second  minute  hour  day *Example*  10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin  now only admin can send messages`
                    fenixzo.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break;
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*  second  minute  hour  day *Example*  10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin  Now members can send messages`
                    fenixzo.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break;
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fenixzo.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                break;
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                caption = []
                for (const i of blockwwww) {
            const onwa = await fenixzo.onWhatsApp(i.split('@')[0]);
            console.log(onwa);
         //   console.log(blockwwww);
      //      console.log(i);
        /*    if (onwa.length < 1) {
            //    caption.push(`❌ Can't find *@${i.split('@')[0]}* on WhatsApp`);
            } else { */
                const result = await fenixzo.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                console.log(result[0]);
                const status = {
                200: `✅ Added *@${i.split('@')[0]}*`,
                408: `❌ *@${i.split('@')[0]}* previously left the chat, couldn't add`,
               403: `_Couldn\'t add. Invite sent! to *@${i.split('@')[0]}*_`,
                409: `⭕ *@${i.split('@')[0]}* already a member`,
                401: `❌ *@${i.split('@')[0]}* has banned my number`
            }
            
         /*  if (status[result[0].status]) {
            //    caption.push(status[result[0].status]);
            } else 
            */
            if (result[0].status == 403) {
			m.reply("inviting");
			console.log(i);
			await delay(3000);
		 await SendGroupInviteMessageToUser(result[0].jid, fenixzo, m.chat);
		 await delay(2000);
		 m.reply("Invited");
		}
		}
                break;
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fenixzo.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await fenixzo.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break;
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await fenixzo.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break;
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await fenixzo.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(json(err)))
                break;
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await fenixzo.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await fenixzo.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await fenixzo.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break;
case 'tag': case 'tagall': case 'all':{
      

 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `🧩𝗧𝗮𝗴𝗮𝗹𝗹🧩
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}* `
 for (let mem of participants) {
 teks += `🔮 @${mem.id.split('@')[0]}  `
 }
 fenixzo.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break;
 
 
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                fenixzo.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break;
            case 'group':
            case 'grup':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await fenixzo.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`*_SUCCESSFULLY CLOSED THE GRUP_ grup has been closed for the time being 😽*`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await fenixzo.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`*THE GROUP HAS BEEN OPENED SUCCESSFULLY*`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}   Type ${prefix + command}open/close`)
                }
                break;
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await fenixzo.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await fenixzo.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}   Type ${prefix + command}on/off`)
                }
                break;
            case "gclink":
      case "grouplink":
        {
                              if (!m.isGroup) return reply(mess.group)
                  if (!isBotAdmins) return reply(mess.botAdmin)            

          let response = await fenixzo.groupInviteCode(m.chat);
          fenixzo.sendText(
            m.sender,
            ` BotName :-  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋  The Group:- ${groupMetadata.subject}  The link:- https://chat.whatsapp.com/${response}`,
            m,
            { detectLink: true }
          );
        }
        await fenixzo.sendMessage(m.chat, { video: { url: `https://media.tenor.com/hzWYhzhMTeEAAAPo/maria-useless.mp4` }, caption: 'I sent you the Group Link in personal message.   Pls check.', gifPlayback: true }, { quoted: m });
        break;
        
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
                await fenixzo.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
                break;
                
            
            case "sc": case "script": case"repo": {
const axios = require("axios");
let repoInfo = await axios.get("Coming soon");
        let repo = repoInfo.data;
        console.log(repo);

   const scritxt = `*🚀 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋🚀*  
  *🌟Creator:*  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋  
  *🌟 Repo:* ${repo.html_url}  
  *🌟 Total Forks:* ${repo.forks_count}  
  *⭐ Total Stars:* ${repo.stargazers_count}  
  *📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB  
  *📅 Last Updated:* ${repo.updated_at}  
 
©️ *🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Bots inc* 
*❝ Dont forget to give a Star ⭐ to the repo.*`

        fenixzo.sendMessage(from, { video: { url: 'https://media.tenor.com/Zco-fadJri4AAAPo/code-matrix.mp4' }, gifPlayback: true, caption: scritxt }, { quoted: m })
}
        break;
        
        
            

                                case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(` Reply to Video/Image with Caption ${prefix + command} `)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await fenixzo.sendImageAsSticker(m.chat, media, m, {
                        
                        author: global.stickername
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await fenixzo.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.stickername,
                       
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(` 🍭𝑹𝒆𝒑𝒍𝒚 𝒕𝒐 𝑽𝒊𝒅𝒆𝒐/𝑰𝒎𝒂𝒈𝒆 𝑾𝒊𝒕𝒉 𝑪𝒂𝒑𝒕𝒊𝒐𝒏 ${prefix + command} 𝒅𝒂𝒓𝒍𝒊𝒏𝒈`)
                }
            }
            break;
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await fenixzo.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await fenixzo.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.stickername,
                    
                })
                fs.unlinkSync(pop)
            }
            break;
case 'swm': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
fenixzo.downloadAndSaveMediaMessage(quoted, "gifee")
fenixzo.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await fenixzo.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await fenixzo.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break;
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`*Please Mention Media*  ${prefix + command}`)
                reply(mess.wait)
                let media = await fenixzo.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    fenixzo.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break;
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`*Please Mention Media*  ${prefix + command}`)
                reply(mess.wait)
                let media = await fenixzo.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await fenixzo.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break;
            case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}  *Dead At Age :* ${predea.data.age} Year. _Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break;
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await fenixzo.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                fenixzo.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: ` 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-bot.mp3`
                }, {
                    quoted: m
                })

            }
            break;
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await fenixzo.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./Godfather/lib/converter')
                let audio = await toPTT(media, 'mp4')
                fenixzo.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break;
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await fenixzo.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await fenixzo.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break;
            case 'tourl': {
                reply(mess.wait)
                let media = await fenixzo.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break;
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await fenixzo.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.stickername,
                       
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break;
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await fenixzo.downloadAndSaveMediaMessage(quoted)
                    fenixzo.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await fenixzo.downloadAndSaveMediaMessage(quoted)
                    fenixzo.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break;
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await fenixzo.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break;
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:  ${prefix}fliptext 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋y`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`  *•> Normal :*  ${quere}  *•> Flip :*  ${flipe}`)
            }
            break;

            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK  With reason : ${reason}`)
                break;
      case 'qc': {
                const {
                    quote
                } = require('./Godfather/lib/quote.js')
                if (!q) return reply('Enter Text')
                let ppnyauser = await await fenixzo.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(mess.wait)
                fenixzo.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.stickername}`

                })
            }
            break;

case 'play':  case 'song': {
fenixzo.sendMessage(from, { react: { text: "📥", key: m.key }}) 
if (!text) return reply(`🍭𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒆𝒏𝒕𝒊𝒐𝒏 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆 𝒅𝒂𝒓𝒍𝒊𝒏𝒈   𝑬𝒙𝒂𝒎𝒑𝒍𝒆: ${prefix + command}  𝒂𝒏𝒊𝒎𝒆 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒔𝒕𝒂𝒕𝒖𝒔`)
const fenixzoplaymp3 = require('./Godfather/lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await fenixzoplaymp3.mp3(anup3k.url);
reply('```abeg try dey wait e no easy```');
await fenixzo.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break;

case 'ytmp4': case 'ytvideo': {
const fenixzovidoh = require('./Godfather/lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !fenixzovidoh.isYTUrl(text)) reply(`Where is the link?? Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await fenixzovidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await fenixzo.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break;
///////////////////////////////////////////////////

case 'chatgpt': case 'gpt':{
fenixzo.sendMessage(from, { react: { text: "🤖", key: m.key }}) 
              if (!q) return reply(`Please provide a text query. Example: ${prefix + command} Hello, ChatGPT!`);
            
              const apiUrl1 = `https://vihangayt.me/tools/chatgpt?q=${encodeURIComponent(q)}`;
              const apiUrl2 = `https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(q)}&model=llama`;
            
              try {
                
                const response1 = await fetch(apiUrl1);
                const responseData1 = await response1.json();
            
                if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
                  
                  const message = responseData1.data;
                  const me = m.sender;
                  await fenixzo.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                } else {
                  
                  const response2 = await fetch(apiUrl2);
                  const responseData2 = await response2.json();
            
                  if (response2.status === 200 && responseData2 && responseData2.data) {
                    
                    const message = responseData2.data;
                    const me = m.sender;
                    await fenixzo.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
                  } else {
                    reply("Sorry, I couldn't fetch a response from both APIs at the moment.");
                  }
                }
              } catch (error) {
                console.error(error);
                reply("An error occurred while fetching the response from both APIs.");
              }
            }
              break;
             case 'dalle': {
       

        if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);

        const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(q)}`;

        try {
          await fenixzo.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;


         
//////////////////////////////
            case "rules":
      
        const helptxt = `_*📍[Rules for  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Md usage]📍*_   *>>>* use ${prefix}support to get the Official group link in your dm. *--->* If you want to add  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-Md in your group the contact the owner by *${prefix}owner/${prefix}mods*  *--->* Dont use wrong command, use the command given in the *${prefix}help* list  * Dont spam the bot with commands if  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-Md is not responding, its means the maybe owner is offline or facing internet issue.  *IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED* 🚫    *©️ 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Bots inc* `

        fenixzo.sendMessage(from, { video: { url: 'https://c.tenor.com/geMdtLCXZkAAAAPo/rules.mp4' }, gifPlayback: true, caption: helptxt }, { quoted: m })

        break;
      case 'hii': case 'hi': case 'Hi':
       
        
        let txxt = `*U^I^U ♡* Konichiwa ${pushname} Senpai, I'm  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-MD Created by

 *_Team 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋_*.`

        fenixzo.sendMessage(m.chat, { image: { url: " None" }, caption: txxt}, { quoted: m });
        
        break;
      case "support":
     
        let tex = `  [🎀𝙎𝙐𝙋𝙋𝙊𝙍𝙏 𝙂𝙍𝙊𝙐𝙋🎀] 🔖_Coming soon_`

        await fenixzo.sendMessage(m.sender,{ video: {url: "https://media.tenor.com/q5Lo2BINkaUAAAPo/beast-tamer-kanade.mp4"}, caption: `${tex}`,gifPlayback: true},);

        await fenixzo.sendMessage(m.chat, { video: { url: "https://media.tenor.com/27yYlTvQ6B0AAAPo/my-dress-up-darling-my-dress-up-darling-gif.mp4" }, caption: '🎀𝑪𝒉𝒆𝒄𝒌 𝑰 𝑺𝒆𝒏𝒕 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒈𝒓𝒐𝒖𝒑 𝒍𝒊𝒏𝒌 𝒊𝒏 𝒚𝒐𝒖𝒓 𝑫𝑴  𝑴𝒚 😇', gifPlayback: true }, { quoted: m });
        break;

      case "info":
            fenixzo.sendMessage(from, { react: { text: "", key: m.key }}) 
        let pifx = `❁ ════ ❃•💙 *fenixzo* 💙•❃ ════ ❁

\`\`\`A FULL FLEDGED MULTI DEVICE WHATSAPP BOT WITH COOL FEATURES\`\`\`

❁ ═══ ❃•📕 *INFORMATION*📕•❃ ═══ ❁
\`\`\`A simple and easy-to-use WhatsApp bot project based on Multi-Device Baileys and written in JavaScript\`\`\`

❁ ══════ ❃•📄 *NOTE* 📄•❃ ══════ ❁
\`\`\`This bot is a free open source project by THE TEAM 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋\`\`\`

❁ ═════ ❃•📑 *GITHUB* 📑•❃ ═════ ❁
*_LINK:- Coming soon_*


❁ ═══ ❃•✍🏻 *CONTRIBUTE* ✍🏻•❃ ═══ ❁
\`\`\`Feel free to open issues regarding any problems or if you have any feature feel free to contact owner by typing ${prefix}owner or ${prefix}mods`

fenixzo.sendMessage(m.chat, { image: { url: " None" }, caption: pifx, gifPlayback: true }, { quoted: m });
        break;





 case 'owner': {
                fenixzo.sendContact(m.chat, Config.ownernumber, m)
            }
            break;
            
      
    
            
///////////////////////////////////////////////////


case 'wanumber': case 'nowa': case 'searchnumber':{
           	if (!text) return reply(`📵🔢 Enter a number ending with 'x' Example: ${prefix + command}  2347080376875`)
var inputnumber = text.split(" ")[0]
        
        reply(`abeg try dey wait e no easy`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🔖 *WhatsApp Numbers Directory* `
        var nobio = `  *Bio:* ||   Hey there! I am using WhatsApp.  `
        var nowhatsapp = `  *Numbers with no WhatsApp account within provided range.*  `
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await fenixzo.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await fenixzo.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}  `
                } else {
                    text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}   🌐 ️*Bio :* ${anu1.status}  ⏳️*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')} `
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}  `
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break;

case 'dare':
       
	                if (!m.isGroup) return reply(mess.group)
                   const dare =[
"eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "break;dance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "break;up with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const fenixzodareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                   fenixzo.sendMessage(from, { image: buffer, caption: '*You have chosen Dare* '+ fenixzodareww }, {quoted:m})
                   break;
                       

case 'truth':
                      if (!m.isGroup) return reply(mess.group)
    
	
                           const truth =[
                                  "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const fenixzotruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://graph.org/file/8dd92e67cd4019b092f53.jpg`)
                           fenixzo.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*  '+ fenixzotruthww }, {quoted:m})
                           break;
case 'insult': {
	if (!m.isGroup) return reply(mess.group)
	const insults = [
  "You're as useless as the 'ueue' in 'queue'.",
  "I'm jealous of all the people who haven't met you.",
  "You bring everyone a lot of joy... when you leave the room.",
  "If laughter is the best medicine, your face must be curing the world.",
  "I'd like to see things from your point of view, but I can't seem to get my head that far up my butt.",
  "If I wanted to kill myself, I'd climb your ego and jump to your IQ.",
  "You're not stupid; you just have bad luck when thinking.",
  "I'd slap you, but that would be animal abuse.",
  "If you were any slower, you’d be going backward.",
  "You must have been born on a highway because that's where most accidents happen.",
  "I'd insult you, but then I'd have to explain it afterward.",
  "You're not dumb. You just have bad luck thinking.",
  "You're like a cloud. When you disappear, it's a beautiful day.",
  "I bet your brain feels as good as new, seeing that you never use it.",
  "You're the reason the gene pool needs a lifeguard.",
  "It looks like your face caught on fire, and someone tried to put it out with a fork.",
  "I'm sorry, I didn't mean to give you the impression that I actually cared about your opinion.",
  "If brains were dynamite, you wouldn’t have enough to blow your nose.",
  "If you were twice as smart, you'd still be stupid.",
  "I'm not insulting you; I'm describing you.",
  "I'm not saying you're stupid; I'm just saying you have bad luck when it comes to thinking.",
  "The only way you'll ever get laid is if you crawl up a chicken's butt and wait.",
  "You must have been born at a low altitude because your brain seems to lack oxygen.",
  "You're not just a clown; you're the entire circus.",
  "If you were any more inbred, you'd be a sandwich.",
  "I'd agree with you, but then we'd both be wrong.",
  "I'd call you a tool, but even they serve a purpose.",
  "You're like Monday mornings - nobody likes you.",
  "If ignorance is bliss, you must be the happiest person on Earth.",
  "You're not the dumbest person in the world, but you'd better hope they don't die.",
  
];


function getRandomInsult() {
  return insults[Math.floor(Math.random() * insults.length)];
}

  const randomInsult = getRandomInsult();
  reply(randomInsult);
}
break;


case 'flirt': {
	if (!m.isGroup) return reply(mess.group)
	const flirtLines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Do you have a map? Because I just got lost in your eyes.",
  "Are you made of copper and tellurium? Because you're Cu-Te.",
  "Are you a camera? Because every time I look at you, I smile.",
  "Is it hot in here or is it just you?",
  "Do you believe in love at first sight, or should I walk by again?",
  "Excuse me, but I think the stars are shining a little brighter tonight because you're around.",
  "If beauty were a crime, you'd be serving a life sentence.",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
  "Do you have a name, or can I call you mine?",
  "Do you believe in fate? Because I think we were meant to meet.",
  "If you were a vegetable, you'd be a cute-cumber.",
  "Do you have a sunburn, or are you always this hot?",
  "Do you have a map? I keep getting lost in your eyes.",
  "If you were a fruit, you'd be a fineapple.",
  "If kisses were snowflakes, I'd send you a blizzard.",
  "Can I follow you home? Cause my parents always told me to follow my dreams.",
  "Do you have a name or can I call you mine?",
  "Are you a parking ticket? Because you've got FINE written all over you.",
  "Do you have a name or can I call you mine?",
  "If looks could kill, you'd be a weapon of mass destruction.",
  "You must be made of copper and tellurium because you're Cu-Te.",
  "Do you have a name, or can I call you mine?",
  "Are you a time traveler? Because I can see you in my future.",
  "Is there an airport nearby or is it my heart taking off?",
  "Are you a Wi-Fi signal? Because I'm really feeling a connection.",
  "I must be a snowflake because I've fallen for you.",
  "Do you believe in love at first sight, or should I walk by again?",
  "I'm not a photographer, but I can definitely picture us together.",
  "Do you have a name, or can I call you mine?",
  "Do you have a name, or can I call you mine?",
];
function getRandomFlirtLine() {
  return flirtLines[Math.floor(Math.random() * flirtLines.length)];
}
  const randomFlirtLine = getRandomFlirtLine();
  reply(randomFlirtLine);
}
break;
  

case 'shayari': {
	if (!m.isGroup) return reply(mess.group)
	const shayariLines = [
  "Dil se roya humne, aankhon se nikla hai pyaar,  Zakhm gehra humne khaya, dil se hai yaar.  ",
  "Khuda ke bando pe naaz hai insaan ko,  Apne hi hatho se khud ne ki hai tabaahi.  ",
  "Mohabbat ek aisi bheed hai,  Jisme har ek dil hai tanha.  ",
  "Dil ko chhune wale shabd kya kamaal ke hote hain,  Unki misaalein di jaati hain, aashiq to sirf yaad kiye jaate hain.  ",
  "Tere bina jeena kya, tere sang mar jaana hai,  Teri baahon mein kho jaana, yahi toh pyaar ka asli matlab hai.  ",
  "Mohabbat ka izhaar karne mein waqt toh lagta hai,  Par sachai aur dil se nikle alfaz kabhi nahin bhoolte.  ",
  "Har raat rote hain hum, har subah umeed se guzar jaati hai,  Kuchh rishte aise bhi hote hain, jinke saath guzarti zindagi bhi yaadon mein dafan ho jaati hai.  ",
  "Rishte toh khoon se bhi gehre hote hain,  Par woh rishte jo dil se jud jaate hain, unka toh koi saani nahin hota.  ",
  "Mohabbat mein zindagi ko pyaari kar dena,  Aur pyaar mein zindagi ko jeena seekh lena,  Yahi toh hai asli mohabbat ka matlab.  ",
  
];


function getRandomShayariLine() {
  return shayariLines[Math.floor(Math.random() * shayariLines.length)];
}
  const randomShayariLine = getRandomShayariLine();
  reply(randomShayariLine);
}
break;




case 'joke': {
	if (!m.isGroup) return reply(mess.group)
	
	const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why did the math book look sad? Because it had too many problems!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What did one plate say to the other plate? Dinner's on me!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted!",
  "Why did the man put his money in the blender? He wanted to make liquid assets!",
  "Why don't eggs tell jokes? Because they'd crack each other up!",
  "What do you call a bear with no teeth? A gummy bear!",
  "What did one hat say to the other hat? Stay here, I'm going on ahead!",
  "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  "What do you call a fish wearing a bowtie? Sophis-fish-ticated!",
  "What do you get when you cross a snowman and a dog? Frostbite!",
  "Why did the picture go to jail? Because it was framed!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "Why did the math book look sad? Because it had too many problems!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one plate say to the other plate? Dinner's on me!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "What did one hat say to the other hat? Stay here, I'm going on ahead!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
];

function getRandomJoke() {
  return jokes[Math.floor(Math.random() * jokes.length)];
}
  const randomJoke = getRandomJoke();
  reply(randomJoke);
}
break;
                         
                           
  case 'menu':
      const txt = `
╭─「 *${pushname}* 」
╰────────────┈平和
《⟡━━━⟪ 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 ⟫━━━⟡》
╔┈────⟨ ɪɴꜰᴏ ᴜꜱᴇʀ
╭୧⍤⃝───────────┈◦•◦❥•◦
╎父 ᴜꜱᴇʀ: *${pushname}*
╎父 ᴍᴜʟᴛɪ: ${prefix}
╎父 ᴄʀᴇᴀᴛᴇᴅ ʙʏ Alex
╎父 ʟɪᴍɪᴛᴇ : ɪɴꜰɪɴɪᴛᴇ
╚────⬣
╔┈────⟨ ꜰᴏʀ ʜᴇʟᴘ
╎︎ .MҽɳυLιʂƚ
╎︎ .Mҽɳυ *<future bot>*
╚────⬣
‼‴ʜᴇʏ ${pushname} ʜᴀɴᴅꜱᴏᴍᴇ ♝
${readmore}

╭─「 *ARE YOUR CALL ME?* 」
│ *⋊* 𝕌𝕤𝕖𝕣: ${pushname} 
│ *⋊* 𝔹𝕠𝕥:  ${botname}
│ *⋊* ℙ𝕣𝕖𝕗𝕚𝕩:  *${prefix}*
│ *⋊* 𝔻𝕒𝕥𝕖: ${xdate}
│ *⋊* 𝕋𝕚𝕞𝕖:  ${xtime}
│ *⋊* 𝕆𝕨𝕟𝕖𝕣: ${ownername}
│ *⋊* 𝕧𝕖𝕣𝕤𝕚𝕠𝕟: ${mver}
│ *⋊* ℍ𝕠𝕤𝕥: ${os.hostname()}
│ *⋊* ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞: ${os.platform()} 
│ *⋊* ℝ𝕦𝕟𝕥𝕚𝕞𝕖: ${runtime(process.uptime())}
│ *⋊* 𝕋𝕠𝕥𝕒𝕝𝕔𝕞𝕕: ${fenixzofeature()}
╰────────────┈平和
꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
 ${readmore}
𓅇┈┈ 「 *𓄋ɢᴇɴᴇʀᴀʟ𓄋* 」
 ┌──⊰ _*GLOBAL*_
 │ *⋊*  ${prefix}hi
 │ *⋊*  ${prefix}dev
 │ *⋊*  ${prefix}info
 │ *⋊*  ${prefix}support
 │ *⋊*  ${prefix}rules
 │ *⋊*  ${prefix}term
 │ *⋊*  ${prefix}help
 │ *⋊*  ${prefix}runtime
 │ *⋊*  ${prefix}ping
 │ *⋊*  ${prefix}owner
 │ *⋊*  ${prefix}script
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
 ╭୧⍤⃝───────────┈◦•◦❥•◦
 │    _*💻Coding💻*_
 │ *⋊* ${prefix}exec
 │ *⋊* ${prefix}run
 │ *⋊* ${prefix}gitclone
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*🧩OWNER🧩*_
 │ *⋊* ️ ${prefix}session
 │ *⋊* ️ ${prefix}join
 │ *⋊* ️ ${prefix}mode *[self/public]*
 │ *⋊* ️ ${prefix}shutdown
 │ *⋊* ️ ${prefix}restart
 │ *⋊* ️ ${prefix}autoread *[option]*
 │ *⋊* ️ ${prefix}autotyping *[option]*
 │ *⋊* ️ ${prefix}autorecording *[option]*
 │ *⋊* ️ ${prefix}autorecordtyp *[option]*
 │ *⋊* ️ ${prefix}autobio *[option]*
 │ *⋊* ️ ${prefix}autoswview *[option]*
 │ *⋊* ️ ${prefix}setppbot
 │ *⋊* ️ ${prefix}stealdp
 │ *⋊* ️ ${prefix}block
 │ *⋊* ️ ${prefix}unblock
 │ *⋊* ️ ${prefix}backup
 │ *⋊* ️ ${prefix}getcase
 │ *⋊* ️ ${prefix}creategc
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*👮🏻‍♂️GROUP👮🏻‍♂️*_
 │ *⋊*  ${prefix}antilink
 │ *⋊*  ${prefix}closetime
 │ *⋊*  ${prefix}opentime
 │ *⋊*  ${prefix}kick
 │ *⋊*  ${prefix}promote
 │ *⋊*  ${prefix}demote
 │ *⋊*  ${prefix}setdesc
 │ *⋊*  ${prefix}setppgc
 │ *⋊*  ${prefix}tagall
 │ *⋊*  ${prefix}hidetag
 │ *⋊*  ${prefix}totag
 │ *⋊*  ${prefix}group *[option]*
 │ *⋊*  ${prefix}editinfo
 │ *⋊*  ${prefix}gclink
 │ *⋊*  ${prefix}revoke
 │ *⋊*  ${prefix}listonline
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*🎓Education🎓*_
 │ *⋊*  ${prefix}element 
 │ *⋊*  ${prefix}calculator 
 │ *⋊*  ${prefix}sciencefact
 │ *⋊*  ${prefix}sciencenews
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*🎉FUN🎉*_
 │ *⋊*  ${prefix}truth
 │ *⋊*  ${prefix}dare
 │ *⋊*  ${prefix}couple 
 │ *⋊*  ${prefix}Ship
 │ *⋊*  ${prefix}insult 
 │ *⋊*  ${prefix}flirt
 │ *⋊*  ${prefix}shayari
 │ *⋊*  ${prefix}joke
 │ *⋊*  ${prefix}soulmate
 │ *⋊*  ${prefix}checkdeath
 │ *⋊*  ${prefix}uglycheck
 │ *⋊*  ${prefix}lovelycheck
 │ *⋊*  ${prefix}prettycheck
 │ *⋊*  ${prefix}hornycheck
 │ *⋊*  ${prefix}lesbiancheck
 │ *⋊*  ${prefix}lesbicheck
 │ *⋊*  ${prefix}lesbiancheck
 │ *⋊*  ${prefix}cutecheck
 │ *⋊*  ${prefix}gaycheck
 │ *⋊*  ${prefix}greatcheck
 │ *⋊*  ${prefix}awesomecheck 
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*📂download📂*_
 │ *⋊*  ${prefix}play
 │ *⋊*  ${prefix}ytmp3
 │ *⋊*  ${prefix}ytmp4
 │ *⋊*  ${prefix}igimage 
 │ *⋊*  ${prefix}igvideo 
 │ *⋊*  ${prefix}pinterest
 │ *⋊*  ${prefix}apk
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*🎐SnapBlend🎐*_
 │ *⋊*  ${prefix}shadow
 │ *⋊*  ${prefix}write
 │ *⋊*  ${prefix}smoke
 │ *⋊*  ${prefix}burnpaper
 │ *⋊*  ${prefix}romantic
 │ *⋊*  ${prefix}writeart
 │ *⋊*  ${prefix}rainboweffect
 │ *⋊*  ${prefix}smokyneon
 │ *⋊*  ${prefix}underwaterocean
 │ *⋊*  ${prefix}coffecup
 │ *⋊*  ${prefix}doublelove
 │ *⋊*  ${prefix}undergrass
 │ *⋊*  ${prefix}love
 │ *⋊*  ${prefix}narutobanner
 │ *⋊*  ${prefix}shinetext
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*⛩️OTHERS⛩️*_
 │ *⋊*  ${prefix}sticker
 │ *⋊*  ${prefix}qc
 │ *⋊*  ${prefix}smeme
 │ *⋊*  ${prefix}take
 │ *⋊*  ${prefix}toimage
 │ *⋊*  ${prefix}tovideo
 │ *⋊*  ${prefix}toaudio
 │ *⋊*  ${prefix}tomp3
 │ *⋊*  ${prefix}tovn
 │ *⋊*  ${prefix}togif
 │ *⋊*  ${prefix}tourl
 │ *⋊*  ${prefix}toqr
 │ *⋊*  ${prefix}toviewonce
 │ *⋊*  ${prefix}fliptext
 │ *⋊*  ${prefix}emojimix
 │ *⋊*  ${prefix}circlevideo
 │ *⋊*  ${prefix}google
 │ *⋊*  ${prefix}pinterest
 │ *⋊*  ${prefix}dalle
 │ *⋊*  ${prefix}gpt
 │ *⋊*  ${prefix}say
 │ *⋊*  ${prefix}tts
 │ *⋊*  ${prefix}obfuscate
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*🃏Games🃏*_
 │ *⋊*  ${prefix}slot
 │ *⋊*  ${prefix}poker
 │ *⋊*  ${prefix}dice
 │ *⋊*  ${prefix}flipcoin
 │ *⋊*  ${prefix}Rps
 │ *⋊*  ${prefix}guess
 │ *⋊*  ${prefix}roulette
 │ *⋊*  ${prefix}blackjack
 │ *⋊*  ${prefix}compliment
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙
  ╭୧⍤⃝───────────┈◦•◦❥•◦
 ┌──⊰ _*✨️WALLPAPER✨️*_
 │ *⋊*  ${prefix}Doraemon
 │ *⋊*  ${prefix}pokemon 
 │ *⋊*  ${prefix}zero-two 
 └──────────⊰
 ꒰⚘݄꒱₊___________________˓˓ ␥
𓅇┈┈┈┈┈┈┈┈◙ by Alex

`

  if (randomImage) {
    fenixzo.sendMessage(from, { image: { url: randomImage }, caption: txt }, { quoted: m });
  }

  break;
     
       case 'circlevideo': {
try {
const fenixzobaileys = await require("@whiskeysockets/baileys").generateWAMessageContent({ video: await m.quoted.download() }, { upload: fenixzo.waUploadToServer })
await fenixzo.relayMessage(from, { ptvMessage: { ...fenixzobaileys.videoMessage } }, {})
} catch (err) {
reply(`Reply to a Video with Caption ${prefix + command}`)
}
}
break;

    case 'say': case 'tts': case 'gtts':{
if (!text) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return fenixzo.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
        
        case 'obfus': case 'obfuscate':{
if (!q) return reply(`Example ${prefix+command} const  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break

case "couple":
        {
          if (!m.isGroup) return reply(mess.group);
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          fenixzo.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` powered by Alex`,
                  body: `${ownername}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./Godfather/gdfather.jpg`
                  ),
                  sourceUrl: `${link}`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
        
        //mode 
        
case 'public': {
                if (!isCreator) return reply(mess.owner)
                fenixzo.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break;
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                fenixzo.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break;


        ///nsfw commands
      case 'nsfwmenu':
        if (!isNsfw) return reply(mess.nsfw);
        if (!m.isGroup) return reply(mess.group);
        
        const nsfwmenu=`┌──⊰ _*🔞NSFW 🔞*_
│👄  ${prefix}blowjob
│👄  ${prefix}cum
│👄  ${prefix}foot
│👄  ${prefix}gangbang
│👄  ${prefix}hentai
│👄  ${prefix}pussy
│👄  ${prefix}ass
│👄  ${prefix}trap
│👄  ${prefix}maal
│👄  ${prefix}ʀɪʙʙᴏɴꜱ
│👄  ${prefix}ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ
│👄  ${prefix}ʜᴇᴀᴅʙᴀɴᴅ
│👄  ${prefix}ꜰᴏxɢɪʀʟ
│👄  ${prefix}ᴀɴɪᴍᴀʟᴇᴀʀꜱ
│👄  ${prefix}ʙʀᴀ
│👄  ${prefix}ꜱᴋɪʀᴛ
│👄  ${prefix}ʙʀᴇᴀꜱᴛꜱ
│👄  ${prefix}ᴛᴀᴛᴛᴏᴏ
│👄  ${prefix}ᴄʜᴀɪɴ
└──────────⊰ 
`
        fenixzo.sendMessage(m.chat, { image: { url: "./Godfather/nsfw.jpg" }, caption: nsfwmenu }, { quoted: m });
        break;
              case 'nsfw': {
   fenixzo.sendMessage(from, { react: { text: "🔞", key: m.key }}) 
 if (!m.isGroup) return reply(mess.group);
                 if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiNsfw) return reply('Already activated✅️')
isnsfw.push(from)
fs.writeFileSync('./Godfather/database/nsfw.json', JSON.stringify(isnsfw))
reply('Successfully activating nsfw mode in this group ✔️')
var groupe = await fenixzo.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
fenixzo.sendMessage(from, {text:  `\`\`\`「 ⚠️Warning⚠️ 」\`\`\` Nsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('Already deactivated')
let off = isnsfw.indexOf(from)
isnsfw.splice(off, 1)
fs.writeFileSync('./Godfather/database/nsfw.json', JSON.stringify(isnsfw))
reply('Successfully deactivating nsfw mode in this group ✔️')
} else {
  await reply(`*Kindly input the choice as follows:*
*Example: ${prefix + command} on*
*Example: ${prefix + command} off*
🟢 *Use 'on' to enable and 'off' to disable.* 🔴`)
  }
  }
  break;  
  
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
    if (!m.isGroup) return reply(mess.group);
    if (!isNsfw) return reply(mess.nsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    fenixzo.sendMessage(m.chat, { caption: 'OMG🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;
    
        case 'blowjob':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/blowjob.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'cum':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/cum.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'foot':
 if (!m.isGroup) return reply(mess.group); 
  if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/foot.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'gangbang':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/gangbang.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'hentai':
 if (!m.isGroup) return reply(mess.group);
   if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/hentai.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'pussy':
 if (!m.isGroup) return reply(mess.group);   
if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/pussy.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'ass':
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
var ahegaonsfw = JSON.parse(fs.readFileSync('./Godfather/nsfw/ass.json'))
var fenixzoyresult = pickRandom(ahegaonsfw)
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url: fenixzoyresult.url } }, { quoted: m })
break;

case 'trap' :
 if (!m.isGroup) return reply(mess.group);  
 if (!isNsfw) return reply(mess.nsfw);
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
fenixzo.sendMessage(m.chat, { caption: mess.done, image: { url:waifudd.data.url } }, { quoted: m })
break;

case 'maal': {
  if (!isNsfw) return reply(mess.nsfw);
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await fenixzo.sendMessage(m.chat, {
    image: await getBuffer('https://ayushhh.onrender.com'),
    caption: 'OMG 🥵',
  }, { quoted: m });
}
break;

case 'doraemon': {
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await fenixzo.sendMessage(m.chat, {
    image: await getBuffer('https://doremon-api.onrender.com'), // Change the URL to your Doraemon wallpaper
    caption: 'Check out this Doraemon wallpaper! 🤖✨ © 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Botz.Inc', // Customize the caption as you like
  }, { quoted: m });
}
break;

case 'pokemon': {
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await fenixzo.sendMessage(m.chat, {
    image: await getBuffer('https://ayush-pokemon.onrender.com/'), // Change the URL to your Pokemon wallpaper
    caption: 'Here is a Pokemon wallpaper for you! ⚡🔥 © 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Botz.Inc', // Customize the caption as you like
  }, { quoted: m });
}
break;

case 'zero-two': {
  if (!m.isGroup) return reply(mess.group);
  reply(mess.wait);
  await fenixzo.sendMessage(m.chat, {
    image: await getBuffer('https://ayush-zero-two.onrender.com'), // Change the URL to your Zero-Two wallpaper
    caption: 'Enjoy this Zero-Two wallpaper! ❤️🖤 © 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋 Botz.Inc', // Customize the caption as you like
  }, { quoted: m });
}
break;

			    ////
			    case 'hd': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			reply(mess.wait)
			const { remini } = require('./Godfather/lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			fenixzo.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
			}
			break;
              case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return reply(mess.group);
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
fenixzo.sendMessage(from, { text: 'Question : *' + cex + '*  Checker : ' + `@${mentionByReply.split('@')[0]}` + '  Answer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
fenixzo.sendMessage(from, { text: 'Question : *' + cex + '*  Checker : ' + `@${mentionByTag[0].split('@')[0]}` + '  Answer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
fenixzo.sendMessage(from, { text: 'Question : *' + cex + '*  Checker : ' + `@${sender.split('@')[0]}` + '  Answer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break;
////////
case 'hidetag': {  
           if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 fenixzo.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break;
 case'admin': case 'tagadmin':{		
 if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botAdmin)
 if (!text) return replay(`🧩*Please quote or write a meaningful message to tag admins to*`)
 let teks = `*🧩𝗚𝗿𝗼𝘂𝗽 𝗔𝗱𝗺𝗶𝗻𝘀🧩*
  
 *Message : ${text}* `
 for (let mem of groupAdmins) {
 teks += `🤴 @${mem.split('@')[0]}  `
 }
 fenixzo.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break;
 

			    
         case 'pinterest':
      case 'img': {
      if (!args.join(" ")) return reply(`🧩${pushname}Please provide a search term!`);
        reply(mess.waiting)
        let { pinterest } = require('./Godfather/lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
          fenixzo.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;  
			    
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*  🎉 *${runtime(process.uptime())}*`
                reply(lowq)
            	}
            break;
			///////////////////////////////////////////////////////
case 'igimage':
case 'igimg':{
if (!text) return reply("🧩Link?")
let resfenixzo = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let jsonfenixzo = await resfenixzo.json()
fenixzo.sendMessage(m.chat, { image: { url: jsonfenixzo.data.data[0].url }, caption: mess.done}, {quoted:m})
.catch(console.error)
}
break;
case 'igvideo':
case 'igvid':{
if (!q) return  reply("🧩Link?")
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
fenixzo.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: mess.done}, {quoted: m})
.catch(console.error)
}
break;

case 'apk':
case 'apkdl':{
if (!text) return reply("🧩What apk u wanna download?")
let resfenixzo = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonfenixzo = await resfenixzo.json()
fenixzo.sendMessage(from, { document: { url: jsonfenixzo.data.dllink}, fileName : jsonfenixzo.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break;

case 'mediafire': {
	if (args.length == 0) return reply(`🧩Where is the link ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`🧩The link you provided is invalid`)
	const { mediafireDl } = require('./Godfather/lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return reply('Oops, the file is too big...')
	const result4 = `𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀
*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
reply(`${result4}`)
fenixzo.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break;

case 'welcome':
            case 'left': {
              if (!m.isGroup) return reply(mess.group)
                if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} is disabled`)
               }
            }
            break;


case 'git': case 'gitclone':
if (!text) return reply(`🧩Where is the link?  🔮Example :  ${prefix}${command} Coming soon `)
if (!isUrl(text) && !text.includes('github.com')) return reply(`Link invalid!!`)
    let repo = text.split('/');
    let url = `https://api.github.com/repos/${repo[3]}/${repo[4]}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    fenixzo.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break;

case '':
    if (isCmd) {
        let nexh = `😇 𝑫𝒊𝒅 𝒀𝒐𝒖 𝑴𝒆𝒂𝒏 ${prefix}𝒉𝒆𝒍𝒑`
fenixzo.sendMessage(m.chat, { video: { url: "https://media.tenor.com/M_MWR-Y4eigAAAPo/clannad-after-story-clannad.mp4" }, caption: nexh, gifPlayback: true }, { quoted: m });
    }
    break;
    

case 'telestick':{
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let fenixzoresources = await Telesticker(args[0])
		await reply(`Sending ${fenixzoresources.length} stickers...`)
		if (m.isGroup && fenixzoresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < fenixzoresources.length; i++) {
				fenixzo.sendMessage(m.sender, { sticker: { url: fenixzoresources[i].url }})
			}
		} else {
			for (let i = 0; i < fenixzoresources.length; i++) {
				fenixzo.sendMessage(m.chat, { sticker: { url: fenixzoresources[i].url }})
			}
		}
	} else reply(`🧩Telegram sticker Link??  🔮Example. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break;

case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return reply(`🔮Example : ${prefix+command} 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
fenixzo.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.done}` }, { quoted: m })
}
break;

case 'poll': {
if (!m.isGroup) return replay(mess.grouponly)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options  Example: ${prefix}poll Who is best admin?|🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋, 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋,Owner...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await fenixzo.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break;
case "creategc":
      case "creategroup":
        {
          if (!isCreator) return replay(mess.botowner);
          if (!args.join(" "))
            return reply(`Use ${prefix + command} groupname`);
          try {
            let cret = await fenixzo.groupCreate(args.join(" "), []);
            let response = await fenixzo.groupInviteCode(cret.id);
            teks = ` 《༒𝙂𝙧𝙤𝙪𝙥 𝘾𝙧𝙚𝙖𝙩𝙚༒》

☤Name : ${cret.subject}
☤Owner : @${cret.owner.split("@")[0]}

https://chat.whatsapp.com/${response}
       `;
            fenixzo.sendMessage(
              m.chat,
              {
                text: teks,
                mentions: await fenixzo.parseMention(teks),
              },
              { quoted: m }
            );
          } catch {
            reply("Error!");
          }
        }
        break;
        case 'test': case 'p': case 'ping': 
        let timestampe = speed()
        let latensie = speed() - timestampe
         reply(`🧧Testing successfull, Bot is active 📍*ping* ${latensie.toFixed(4)} miliseconds 🎀Type ${prefix}help to display the menu`)
        break;   
    
   
    ////games 
    
   case 'compliment': {
    let compliments = [
        "You're amazing!",
        "You've got a great sense of humor!",
        "Your kindness is contagious!",
        "You're a true inspiration!",
        "Keep shining bright!",
        "You make the world a better place!",
        "Your smile lights up the room!",
        "You're one of a kind!",
        "You're doing an awesome job!",
        "You're simply fantastic!",
    ];

    let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

     caption = `	\uD83C\uDF89 *Compliment Generator* \uD83C\uDF89   `;
caption += `		---------------------------------  `;
caption += `@${m.sender.split("@")[0]}, ${randomCompliment} \uD83D\uDE0A`;
caption += `  		---------------------------------`;
    fenixzo.sendMessage(m.chat, { text: caption, mentions: [user, m.sender] }, { quoted: m });
    }
break;

case 'dice': {
    const lastPlayTimestamps = new Map();
    const lastPlayTime = lastPlayTimestamps.get(m.sender) || 0;
    const currentTime = Date.now();
    const timeDifference = currentTime - lastPlayTime;
    const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

    // Check if the player has reached the maximum play limit
    if (timeDifference < sixHours && lastPlayTime !== 0) {
        caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit. Please try again later.`;
    } else {
        // Check if the player has already played 20 times
        const playCount = lastPlayTimestamps.get(m.sender + '_count') || 0;
        if (playCount >= 20) {
            caption = `\uD83D\uDEAB Sorry, you have reached the maximum play limit of 20 times in 6 hours. Please try again later.`;
        } else {
            // Update the last play timestamp and play count for the player
            lastPlayTimestamps.set(m.sender, currentTime);
            lastPlayTimestamps.set(m.sender + '_count', playCount + 1);

            // Proceed with the dice game
            let userNumber = parseInt(m.text.split(' ')[1], 10);
            if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
                caption = `\uD83E\uDD37 Please choose a number between 1 and 6 for the dice game.`;
            } else {
                let playerNumber = userNumber;
                let casinoNumber = Math.floor(Math.random() * 6) + 1;
                let resultMessage;

                if (playerNumber > casinoNumber) {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You win! \uD83C\uDF89`;
                } else if (playerNumber < casinoNumber) {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. You lose! \uD83D\uDE22`;
                } else {
                    resultMessage = `\uD83C\uDFB2 You chose ${playerNumber}! Casino rolled a ${casinoNumber}. It's a tie! \uD83C\uDF9D`;
                }

                caption = `	\uD83D\uDD22 *Dice Roll Game* \uD83D\uDD22   `;
                caption += `		---------------------------------  `;
                caption += `${resultMessage}`;
                caption += `  		---------------------------------`;
            }
        }
    }

    // Send the result message
    fenixzo.sendMessage(m.chat, { text: caption, mentions: [m.sender] }, { quoted: m });
}
break;



// Function to get user balance
function getUserBalance(userId) {
    const filePath = `balances/${userId}.json`;
    try {
        const balanceData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(balanceData).balance || 0;
    } catch (error) {
        return 0;
    }
}

// Function to update user balance
function updateUserBalance(userId, newBalance) {
    const filePath = `balances/${userId}.json`;
    const balanceData = { balance: newBalance };
    fs.writeFileSync(filePath, JSON.stringify(balanceData), 'utf8');
}

// Command for poker game


case 'poker': {
    let users;

    if (m.mentionedJid && m.mentionedJid.length > 0) {
        users = m.mentionedJid[0];
    } else if (m.quoted && m.quoted.sender) {
        users = m.quoted.sender;
    } else {
        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    }

    // Function to simulate a poker hand
    function playPoker() {
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const userHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];
        const fenixzoHand = [cards[Math.floor(Math.random() * cards.length)], cards[Math.floor(Math.random() * cards.length)]];

        // Add logic to determine the winner based on hand strength (e.g., pair, two pairs, etc.)
        const userScore = calculateHandScore(userHand);
        const fenixzoScore = calculateHandScore(fenixzoHand);

        let resultMessage = `	\uD83C\uDCCF *Poker Prestige* \uD83C\uDCCF  `;
        resultMessage += `		---------------------------------  `;
        resultMessage += `*@${m.sender.split("@")[0]}*'s Hand: ${userHand.join(', ')}  `;
        resultMessage += `*fenixzo*'s Hand: ${fenixzoHand[0]},   `;
        resultMessage += `		---------------------------------  `;

        if (userScore > fenixzoScore) {
            resultMessage += `		\uD83C\uDF89 Congratulations! You win! \uD83C\uDF89`;
        } else if (userScore < fenixzoScore) {
            resultMessage += `		\uD83D\uDE22 Better luck next time. fenixzo wins. \uD83D\uDE22`;
        } else {
            resultMessage += `		\uD83C\uDF9D It's a tie! \uD83C\uDF9D`;
        }

        return resultMessage;
    }

    // Function to calculate the poker hand score
    function calculateHandScore(hand) {
        // Add logic to determine the hand score (e.g., check for pairs, two pairs, etc.)
        // For simplicity, let's assume a basic scoring where the highest card wins
        const cardValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
        const sortedHand = hand.sort((a, b) => cardValues[b] - cardValues[a]);
        return cardValues[sortedHand[0]];
    }

    const pokerResult = playPoker();
    fenixzo.sendMessage(m.chat, { text: pokerResult, mentions: [users, m.sender] }, { quoted: m });
}
break;

case 'slot':
case 'spin': {
    if (!m.isGroup) return reply(mess.grouponly);

    const symbols = ["🍍", "🥥", "🍎"];
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    const resultMessage = playSlotMachine(reel1, reel2, reel3, m.sender);

    reply(resultMessage);
    break;
}

function playSlotMachine(reel1, reel2, reel3, player) {
    const symbols = [reel1, reel2, reel3];
    const slotSymbols = ['🍒', '🍇', '🍊', '🍋', '🍉', '🍎', '🍓', '🍈'];
    const winMessages = [`*You harvested a basket of* _--> ${slotSymbols[0]}+${slotSymbols[0]}+${slotSymbols[0]}_`, 
                        `*Impressive, You must be a specialist in plucking coconuts* _--> ${slotSymbols[1]}+${slotSymbols[1]}+${slotSymbols[1]}_`, 
                        `*Amazing, you are going to be making pineapple juice for the family* _--> ${slotSymbols[2]}+${slotSymbols[2]}+${slotSymbols[2]}_`];
    const loseMessages = [`*You suck at playing this game* _--> ${slotSymbols[0]}-${slotSymbols[1]}-${slotSymbols[2]}_`, 
                         `*Totally out of line* _--> ${slotSymbols[1]}-${slotSymbols[2]}-${slotSymbols[0]}_`,
                         `*Are you a newbie?* _--> ${slotSymbols[2]}-${slotSymbols[0]}-${slotSymbols[1]}_`];

    // Perform slot machine logic
    if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
        return `🎰 *Slot Symphony* 🎰  -------------------------  ${winMessages[Math.floor(Math.random() * winMessages.length)]}  -------------------------  @${player.split("@")[0]} Congratulations, you won!*`;
    } else {
        return `🎰 *Slot Symphony* 🎰  -------------------------  ${loseMessages[Math.floor(Math.random() * loseMessages.length)]}  -------------------------  @${player.split("@")[0]} Better luck next time!*`;
    }
}

case 'guesspokemon': {
    const pokemonData = [
        { name: 'Pikachu', type: 'Electric', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
        { name: 'Charmander', type: 'Fire', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
        { name: 'Bulbasaur', type: 'Grass', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
        { name: 'Squirtle', type: 'Water', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
        // Add more Pokémon with their types and image URLs here
    ];

    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    const randomPokemon = pokemonData[randomIndex];

    // Send the type and an image of the Pokémon to the user and ask them to guess
    const message = `Guess the Pokémon based on its type: *${randomPokemon.type}*. Reply with the name of the Pokémon! Image: ${randomPokemon.image}`;
    fenixzo.sendMessage(m.chat, { text: message, mentions: [m.sender] }, { quoted: m });

    // Function to check if the guess is correct
    function checkGuess(guess) {
        if (guess.trim().toLowerCase() === randomPokemon.name.toLowerCase()) {
            return `🎉 Congratulations! You guessed it right! It's ${randomPokemon.name}!`;
        } else {
            return `❌ Wrong guess! Keep trying!`;
        }
    }

    // Listen for the user's reply and check if it's the correct Pokémon name
    fenixzo.onMessage((msg) => {
        if (msg.body && msg.body.toLowerCase() === randomPokemon.name.toLowerCase() && msg.sender === m.sender) {
            const resultMessage = checkGuess(msg.body);
            fenixzo.sendMessage(m.chat, { text: resultMessage }, { quoted: m });
            fenixzo.removeAllListeners('message');
        }
    });
}
break;

case 'element':
    if(!args[0]) return reply(`Please use this command like this: ${prefix}element br`);
    const queryy = args.join(" ");
   const search = await pTable(queryy);
   if (search === undefined) return reply(`❗️Please provide me a valid element by visiting here ! https://en.m.wikipedia.org/wiki/Periodic_table`);

   const responsee = await npt.getByNumber(search.number);
   let caption  = "";
    caption = "              *『  Element Details  』* ";
    caption += `🔴 *Elelment:* ${responsee.name}  `;
caption += `⬜ *Atomic Number:* ${responsee.number}  `;
caption += `🟡 *Atomic Mass:* ${responsee.atomic_mass}  `;
caption += `⬛ *Symbol:* ${responsee.symbol}  `;
caption += `❓ *Appearance:* ${responsee.apearance}  `;
caption += `🟢 *Phase:* ${responsee.phase}  `;
caption += `♨️ *Boiling Point:* ${responsee.boil} K  ️`;
caption += `💧 *Melting Point:* ${responsee.melt} K  `;
caption += `🟣 *Density:* ${responsee.density} g/mL  `;
caption += `⚫ *Shells:* ${responsee.shells.join(", ")}  `;
caption += `🌐 *URL:* ${responsee.source} `;
caption += `💬 *Summary:* ${responsee.summary}  `;
    await fenixzo.sendMessage(from,  {image: {url: ' None'},caption: caption}, {quoted: m });
break;


case 'pokemon': {
if (!text) return m.reply("❌ No query provided!")
		try {
		let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
	 if (!data.name) return m.reply(`❌ No such pokemon`)
	 let yu =`💫 *Name: ${data.name}*  〽️ *Pokedex ID: ${data.id}*  ⚖ *Weight: ${data.weight}*  🔆 *Height: ${data.height}*  🌟 *Base Experience: ${data.base_experience}*  📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*  🎀 *Type: ${data.types[0].type.name}*  ✳ *HP: ${data.stats[0].base_stat}*  ⚔ *Attack: ${data.stats[1].base_stat}*  🔰 *Defense: ${data.stats[2].base_stat}*  ☄ *Special Attack: ${data.stats[3].base_stat}*  🛡 *Special Defense:${data.stats[4].base_stat}*  🎐 *Speed: ${data.stats[5].base_stat}*  `
fenixzo.sendMessage(m.chat, { image: { url: data.sprites.front_default }, caption: yu }, { quoted: m })
		} catch (err) {
m.reply("An Error Occurred")
console.log(err)
}
}
               break
 
 case 'flipcoin': case 'coin': {
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break;    
    
          case 'rps': {
        // Check if the command includes a valid move (rock, paper, or scissors)
        const validMoves = ['rock', 'paper', 'scissors'];
        if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
          return reply('Please provide a valid move: rock, paper, or scissors.');
        }

        // Generate a random move for the bot
        const botMove = validMoves[Math.floor(Math.random() * validMoves.length)];

        // Determine the winner
        const userMove = args[0].toLowerCase();
        let result;

        if (userMove === botMove) {
          result = 'It\'s a tie!';
        } else if (
          (userMove === 'rock' && botMove === 'scissors') ||
          (userMove === 'paper' && botMove === 'rock') ||
          (userMove === 'scissors' && botMove === 'paper')
        ) {
          result = `You win! 🥳 ${userMove} beats ${botMove}.`;
        } else {
          result = `You lose! 🫳🏻 ${botMove} beats ${userMove}.`;
        }

        // Send the result as a response
        reply(`You chose ${userMove}.  The bot chose ${botMove}.  ${result}`);
      }
        break;
      
          
                   case 'calculator': case 'cal': case 'calculate': {
        if (args.length < 1) return reply(`*Example :*  ${prefix}calculator 2*5 `)
        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error ❌')
        } else {
          reply(`\`\`\`「 🧮 Calculator Tool 🧮 」\`\`\` *Input :* ${qsd}  *Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;
        
case 'guess': {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Check if the user provided a guess
    const userGuess = parseInt(args[0]);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        return reply('Please provide a valid guess between 1 and 100.');
    }

    // Compare the user's guess with the random number
    if (userGuess === randomNumber) {
        reply(`Congratulations! 🎉 You guessed the correct number ${randomNumber}!`);
    } else {
        const difference = Math.abs(randomNumber - userGuess);
        let hint = '';
        if (difference <= 10) {
            hint = 'Close! 🔥';
        } else {
            hint = 'Not quite! ❄️';
        }
        reply(`Wrong guess! ${hint} The correct number was ${randomNumber}.`);
    }
}
break;   

  
case 'google': {
fenixzo.sendMessage(from, { react: { text: "🔎", key: m.key }}) 
if (!q) return reply(`Example : ${prefix + command} 𝘈𝘺𝘶𝘴𝘩 𝘱𝘢𝘯𝘥𝘦𝘺`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「🏮 *Google Search Engine*🏮」  
`
for (let g of res) {
teks += `🧧 *Title* : ${g.title}  `
teks += `🔮 *Description* : ${g.snippet}  `
teks += `📎 *Link* : ${g.link} ──────────────────── `
} 
reply(teks)
})
}
break



case 'define':
    if (!args[0]) return reply(`Please specify a word to define. For example: ${prefix}define computer`);
    
    const word = args[0];

    dictionary.getDef(word, 'en', null, async function(definition) {
        if (!definition || !definition.definition) {
            return reply(`Definition for "${word}" not found.`);
        }

        const meaning = definition.definition;

        await fenixzo.sendMessage(from, `📚 *Definition of ${word}* ${meaning}`, { quoted: m });
    });
    break;
                   
                   case 'sciencefact':
    // Call a function to fetch a random science fact
    const scienceFact = await fetchRandomScienceFact();
    
    if (scienceFact) {
        reply(`*Random Science Fact:* ${scienceFact}`);
    } else {
        reply('Failed to fetch a random science fact.');
    }
    break;

// Function to fetch a random science fact
async function fetchRandomScienceFact() {
    try {
        // Call an API or fetch data from a science facts database
        // Example:
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        
        // Extract the science fact from the response
        const fact = data.text;
        
        return fact;
    } catch (error) {
        console.error('Error fetching random science fact:', error);
        return null;
    }
}
    
    case 'sciencenews':
    // Call a function to fetch the latest science news headlines
    const headlines = await fetchScienceNewsHeadlines();
    
    if (headlines && headlines.length > 0) {
        reply(`*Latest Science News Headlines:* ${headlines.join('  ')}`);
    } else {
        reply('Failed to fetch science news headlines.');
    }
    break;

// Function to fetch the latest science news headlines using the News API
async function fetchScienceNewsHeadlines() {
    const apiKey = 'bf17483564e24e2aa83ff6dc6a8e79eb'; // Provided News API key
    
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=science&apiKey=${apiKey}`);
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
            // Extract the headlines from the response
            const headlines = data.articles.map(article => article.title);
            return headlines;
        } else {
            console.error('No articles found in the response.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching science news headlines:', error);
        return null;
    }
}

// Add more cases for other games as needed

//Function of games
case 'chat':
 
    const axios = require("axios");
    
    botreply = await axios.get(
      `http://api.brainshop.ai/get?bid=180857&key=SeLyK3P24U91Ed7a&uid=[Mariabot]&msg=[text]`
    );

    txtChatbot = `${botreply.data.cnt}`;
    m.reply(txtChatbot);
  
  break;
    
    case "exec":
      case "run":      
        if (!text) {
          return m.reply(
            `😇 𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒕𝒐 𝒆𝒙𝒆𝒄𝒖𝒕𝒆!   𝑬𝒙𝒂𝒎𝒑𝒍𝒆: *${prefix}𝒆𝒙𝒆𝒄 𝒎.𝒓𝒆𝒑𝒍𝒚("3𝒓𝒅 𝒑𝒂𝒓𝒕𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒃𝒆𝒊𝒏𝒈 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒅...")*`
          );
        }
        try {
          const result = eval(text);
          out = JSON.stringify(result, null, "	") || "Evaluated JavaScript";
        } catch (e) {
          m.reply(`Error: ${e.message}`);
        }
        break;
        
        
case "info":
            fenixzo.sendMessage(from, { react: { text: "", key: m.key }}) 
        let ifx = `❁ ════ ❃•💙 * 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋* 💙•❃ ════ ❁

\`\`\`A FULL FLEDGED MULTI DEVICE WHATSAPP BOT WITH COOL FEATURES\`\`\`

❁ ═══ ❃•📕 *INFORMATION*📕•❃ ═══ ❁
\`\`\`A simple and easy-to-use WhatsApp bot project based on Multi-Device Baileys and written in JavaScript\`\`\`

❁ ══════ ❃•📄 *NOTE* 📄•❃ ══════ ❁
\`\`\`This bot is a free open source project by THE TEAM 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋\`\`\`

❁ ═════ ❃•📑 *GITHUB* 📑•❃ ═════ ❁
*_LINK:- Coming soon_*


❁ ═══ ❃•✍🏻 *CONTRIBUTE* ✍🏻•❃ ═══ ❁
\`\`\`Feel free to open issues regarding any problems or if you have any feature feel free to contact owner by typing ${prefix}owner or ${prefix}mods`

fenixzo.sendMessage(m.chat, { image: { url: " None" }, caption: ifx, gifPlayback: true }, { quoted: m });
        break;


    
      case "term":
            fenixzo.sendMessage(from, { react: { text: "™️", key: m.key }}) 
        let tifx = `*𝚃𝙴𝚁𝙼𝚜 𝙰𝙽𝙳 𝙲𝙾𝙽𝙳𝙸𝚃𝙸𝙾𝙽* 
⍟ *────────────────* ⍟ 

📝 Note: Beware of fake  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-MD bots! People may falsely claim to represent  🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-MD. Please exercise caution.

_Whatsapp Bots have become increasingly popular, but with that comes the risk of encountering fake accounts. Stay vigilant._

*Ban from using the bot:*

*⛔ Breaking the following rules will result in a ban:*
*⛔ Calling any of the bot numbers*
*⛔ Using unlisted commands (commands not listed in help)*
*⛔ Insulting / ignoring bot staff / warnings*

*Contact information:*

_We will update the bot's terms and conditions periodically, so it's your responsibility to check our support groups for updates._
_If you have any questions regarding our terms, please reach out to us._
_For everything else, use common sense._

*FUTURE IS NOW🚀~ 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋-MD*
*_🚀Team 🦋⁂༄ᛕꪖʍ𝙨ﺂ𝓁༄⁂🦋_*

⍟ *────────────────* ⍟`

fenixzo.sendMessage(m.chat, { image: { url: " None" }, caption: tifx, gifPlayback: true }, { quoted: m });
        break;
/////////////////////////////////////////////////////

if(isCmd){
          reply (`No such command, 😂😂😅!`)
  
      }	 			

		
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
        }
    } catch (err) {
        fenixzo.sendText(m.chat, util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("Socket connection timeout")) return
if (e.includes("item-not-found")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
