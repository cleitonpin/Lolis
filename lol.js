const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')


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

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    const emojiList = message.guild.emojis.map(e=>e.toString()).join("624320671660507156");
    const aatrox = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('Aatrox')
    .setThumbnail('https://i.imgur.com/9ML0ruQ.png')
    .addField('**Vida:**', '580 (+90 por nível)', true)
    .addField('**Dano de Ataque:**', '60 (+5 por nível)', true)
    .addField('**Velocidade de ataque:**', 'NaN (+2.5% por nível)', true)
    .addField('**Velocidade Movimento:**', '345' ,true)
    .addField('**Armadura:**', '38 (+3.25 por nível)', true)
    .addField('**Regeneração de vida:**', '3 (+1 por nível)', true)
    .addField(`**Resistência Mágica:**\n32.1 (+1.25 por nível)\n\nPode ser obtido em baús hextech ou comprando na loja por 6300 Essência azul ou por 975 de ${emojiList}`, 'Splash Art:')
    .setImage('https://i.imgur.com/cGxClRZ.jpg')

    const ahri = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setAuthor('Ahri')
    .setThumbnail('https://i.imgur.com/ne94Wkr.png')
    .addField('**Vida:**', '526 (+92 por nível)', true)
    .addField('**Dano de Ataque:**', '53.04 (+3 por nível)', true)
    .addField('**Velocidade de ataque:**', 'NaN (+2% por nível)', true)
    .addField('**Velocidade Movimento:**', '330' ,true)
    .addField('**Armadura:**', '20.88 (+3.5 por nível)', true)
    .addField('**Regeneração de vida:**', '6.5 (+0.6 por nível)', true)
    .addField('**Resistência Mágica:**', '30 (+0.5 por nível)\n\nPode ser obtido em baús hextech ou comprando na loja', true)
    .setImage('https://i.imgur.com/X4t8o0f.jpg')
    
    
    const akali = new Discord.RichEmbed()
    .setColor('#4F4F4F')
    .setAuthor('Akali')
    .setThumbnail('https://i.imgur.com/eqndQTi.png')
    .addField('**Vida:**', '575 (+95 por nível)', true)
    .addField('**Dano de Ataque:**', '62.4 (+3.3 por nível)', true)
    .addField('**Velocidade de ataque:**', 'NaN (+3.2% por nível)', true)
    .addField('**Velocidade Movimento:**', '345' ,true)
    .addField('**Armadura:**', '23 (+3.5 por nível)', true)
    .addField('**Regeneração de vida:**', '8 (+0.5 por nível)', true)
    .addField('**Resistência Mágica:**', '37 (+1.25 por nível)\n\nPode ser obtida em baús hextech ou comprando na loja', true)
    .setImage('https://i.imgur.com/yaKts5H.jpg')


    if(comando == 'info'){
        if(args[0]== 'aatrox') {          
            message.channel.send(aatrox);
        }

        if(args[0]== "ahri") message.channel.send(ahri)   

        if(args[0]== 'akali') message.channel.send(akali)
    }
    
})


client.login(config.token);