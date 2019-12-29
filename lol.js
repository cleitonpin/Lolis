const { Client, Attachment } = require('discord.js');
//const MessageAttachment = require('discord.js')
const client = new Client()
const config = require('./config.json')
//const mysql = require("mysql")






client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`)
    client.user.setStatus('Availabe')
    client.user.setPresence({
        game: {
            name: 'Liga das lendas',
            type: "STREAMING",
            url: "https://www.twitch.tv/cleitonpin"
        }
    })
})

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "sadb"
// });

// con.connect(err => {
//     if (err) throw err;
//     con.query("CREATE TABLE IF NOT EXISTS xpsystem(guildid varchar (30) not null, userID varchar(30) not null, level int(10) not null,xp int(30) not null, totalxp int(30) not null)");
//     console.log("Connected to database")

// });


// function generateXp() {
//     let min = 20;
//     let max = 30;

//     return Math.floor(Math.random() * (max - min + 1)) + 10
// }


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

//     con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
//         if (err) throw err;
        
//         let sql;

//         if(rows.length < 1) {
//             sql = `INSERT INTO xp(id, xp) VALUES ('${message.author.id}', '${generateXp()}')`
//         } else {
//             let xp = rows[0].xp;

//             sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;

//         }
//         con.query(sql)
//     })

//     con.query(`select * from xpsystem where guildid = '${message.guild.id}' and userID = '${message.author.id}'`, (err, rows) => {

//     const genXp = Math.floor(Math.random() * 15)
//     if (rows.length < 1) {
        
//         con.query(`insert into xpsystem(guildid, userID, level, xp, totalxp) values ('${message.guild.id}', '${message.author.id}', '${1}', '${genXp}', '${genXp}')`)
        
//     } else{
//         const requiredXp = rows[0].level * 40;

//         let xp = rows[0].xp;
//         let totalxp = rows[0].totalxp;
//         con.query(`UPDATE xpsystem SET xp = ${xp + genXp}, totalxp = ${totalxp + genXp} where guildid = '${message.guild.id}' and userid = '${message.author.id}'`)
        
        
//         if(xp + genXp >= requiredXp) {
//             message.reply(`Parabéns! Você é nível **${rows[0].level + 1}** agora!`)
//             con.query(`UPDATE xpsystem SET level = ${rows[0].level + 1} where guildid = '${message.guild.id}' and userID = '${message.author.id}'`)
        
        
//         }
//     }
// })
    
    if (message.content === 'rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png')
        message.channel.send(attachment)
    }
    if (message.content === '-play' || message.content === '-p' || message.content === '-skip' && message.channel.id == '575815357609148428') {
        message.delete(1000)
        message.reply('Sem comando de música aqui')
        .then(d_message => {
            d_message.delete(1000)
            console.log(`Deleted message from ${message.author.username}`)})
    }
    
    

   // if (message.author.id == '400734254365016068' || message.author.id == '611995739559559223'){
      //  return message.channel.send('Cala boca gustavo')
   // }
      if (message.content === 'not stonks') return message.channel.send('https://tenor.com/view/not-stonks-profit-down-sad-frown-arms-crossed-gif-15684535')
    else if(message.content === 'stonks') return message.channel.send('https://tenor.com/view/stonks-noice-glitch-gif-15021121')
    else if (message.content === 'genio') return message.channel.send(client.emojis.get("589690527742558209").toString())
    else if (message.content ==='kappa') return message.channel.send(client.emojis.get("592516025334104086").toString())
    else if(message.content ==='nosa') return message.channel.send(client.emojis.get("598994179464364076").toString())


    if(!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    //const emojiList = client.emojis.get("624323979619991582")

    try {
        let commands = require(`./commands/${comando}.js`);
        commands.run(client, message, args);
    } catch (e){
        console.log(e)
    } 

})


client.login(config.token);
