const { Client, Attachment } = require('discord.js')
const client = new Client()
//const mysql = require("mysql")
require('dotenv').config()
const bot_prefix = '['
const bot_token = process.env.BOT_TOKEN

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

/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "sadb"
});

con.connect(err => {
    if (err) throw err;
    con.query("CREATE TABLE IF NOT EXISTS xpsystem(guildid varchar (30) not null, userID varchar(30) not null, level int(10) not null,xp int(30) not null, totalxp int(30) not null)");
    console.log("Connected to database")

});

function generateXp() {
    let min = 20;
    let max = 30;

    return Math.floor(Math.random() * (max - min + 1)) + 10
}*/

client.on('raw', async dados  => {
    if(dados.t !== "PRESENCE_UPDATE") return
    else if(dados.t === "PRESENCE_UPDATE" && client.guilds.get('575815357609148426').members.get(dados.d.user.id)) {
        //console.log(dados.d)
        let serv = client.guilds.get('575815357609148426')
        let membro = serv.members.get(dados.d.user.id)
        
        let roles = {
            lol: serv.roles.get('662333273263046667'),
            apex: serv.roles.get('662699156560936981'),
            dev: serv.roles.get('661743359735496705'),
            tft: serv.roles.get('664556186930118656'),
            js: serv.roles.get('665018735631007754')
        }

        if(dados.d.game == null || dados.d.game.name == null) return

        if (dados.d.game.details.includes('.js')) {
            if(!membro.roles.has(roles.js)) {
                rmembro.addRole(roles.js)
            }
        }
        //console.log(dados.d.game.details.search('.js'))

        if(dados.d.game.name == 'Visual Studio Code') {
            if(!membro.roles.has(roles.dev)) {
                membro.addRole(roles.dev)
            }
        }
        else if(dados.d.game.name == 'League of Legends') {
            if(dados.d.game.details == 'Teamfight Tactics (Normal)' || dados.d.game.details == 'Teamfight Tactics (Ranqueadas)') {
                if(!membro.roles.has(roles.tft)) {
                    membro.addRole(roles.tft)
                }
            }
            if(!membro.roles.has(roles.lol)) {
                membro.addRole(roles.lol)
            }
        }
        else if (dados.d.game.name == 'Apex Legends') {
            if(!membro.roles.has(roles.apex)) {
                membro.addRole(roles.apex)
            }
        }
    }
})

client.on("message", async message => {
    if(message.author.bot || message.channel.type == "dm") return;

    /*con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
        if (err) throw err;
    
        let sql;

        if(rows.length < 1) {
            sql = `INSERT INTO xp(id, xp) VALUES ('${message.author.id}', '${generateXp()}')`
        } else {
            let xp = rows[0].xp;

            sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;

        }
        con.query(sql)
    })

    con.query(`select * from xpsystem where guildid = '${message.guild.id}' and userID = '${message.author.id}'`, (err, rows) => {

    const genXp = Math.floor(Math.random() * 15)
    if (rows.length < 1) {

        con.query(`insert into xpsystem(guildid, userID, level, xp, totalxp) values ('${message.guild.id}', '${message.author.id}', '${1}', '${genXp}', '${genXp}')`)

    } else{
        const requiredXp = rows[0].level * 40;

        let xp = rows[0].xp;
        let totalxp = rows[0].totalxp;
        con.query(`UPDATE xpsystem SET xp = ${xp + genXp}, totalxp = ${totalxp + genXp} where guildid = '${message.guild.id}' and userid = '${message.author.id}'`)

        if(xp + genXp >= requiredXp) {
            message.reply(`Parabéns! Você é nível **${rows[0].level + 1}** agora!`)
            con.query(`UPDATE xpsystem SET level = ${rows[0].level + 1} where guildid = '${message.guild.id}' and userID = '${message.author.id}'`)

        }
    }
})*/

    if (message.content === 'rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png')
        message.channel.send(attachment)
    }
    /*else if (message.author.id == '400734254365016068' || message.author.id == '611995739559559223'){
        return message.channel.send('Cala boca gustavo')
    }*/
    else if (message.content === 'not stonks' || message.content.includes('not stonks')) return message.channel.send('https://tenor.com/view/not-stonks-profit-down-sad-frown-arms-crossed-gif-15684535')
    else if(message.content === 'stonks' || message.content.includes('stonks')) return message.channel.send('https://tenor.com/view/stonks-noice-glitch-gif-15021121')
    else if(message.content === 'ultra super mega stonks' || message.content.includes('ultra super mega stonks')) return message.channel.send('https://media.discordapp.net/attachments/575815357609148428/676604842399236126/EPoOW3HX4AITgGL.png?width=644&height=474')
    else if (message.content === 'genio' || message.content.includes('genio')) return message.channel.send(client.emojis.get("589690527742558209").toString())
    else if (message.content ==='kappa' || message.content.includes('kappa')) return message.channel.send(client.emojis.get("592516025334104086").toString())
    else if(message.content ==='nosa' || message.content.includes('nosa')) return message.channel.send(client.emojis.get("598994179464364076").toString())
    /*if(message.author.id == '445003940128358401') {
        var att = new Attachment('https://cdn.discordapp.com/attachments/575815357609148428/661022608577527809/5ab2dd770513f.png')
        message.channel.send(att)
    }*/
    if(!message.content.startsWith(bot_prefix)) return;

    const args = message.content.slice(bot_prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    //const emojiList = client.emojis.get("624323979619991582")

    if (['-play','-p','-skip'].includes(args[0]) && message.channel.id == '575815357609148428') {
        message.delete(1000)
        message.reply('Sem comando de música aqui')
        .then(d_message => {
            d_message.delete(1000)
            console.log(`Deleted message from ${message.author.username}`)
        })
    }
    
    try {
        let commands = require(`./commands/${comando}.js`);
        commands.run(client, message, args);
    } catch (e){
        console.log(e)
    }
})

client.login(bot_token);
