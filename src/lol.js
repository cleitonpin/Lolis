const { Client } = require('discord.js')
const client = new Client()

require('dotenv').config()
const bot_prefix = '$'
const bot_token = process.env.BOT_TOKEN
const { 
    messages, 
    notCommandMusic, 
    status,
    updateRoles 
} = require('./functions/funcionalidades')

client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`)
    status(client)

})

client.on('guildMemberRemove', async member => {
    if(member.kickable == true){
        member.
        client.channels.cache.get(`575815357609148428`).send(`
        ${member.user.username} deixou o servidor!
        `)
    }
})
client.on('raw', async dados  => {
    updateRoles(client,dados)
})

client.on("message", async message => {
    
    if(message.author.bot || message.channel.type == "dm") 
        return;

    messages(message, client)
    notCommandMusic(message)
    
    if(message.tts == true) {
        message.channel.send('^^ Mensagem TTS')
    }


    if(!message.content.toLowerCase().startsWith(bot_prefix))
        return

    const args = message.content.slice(bot_prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()

    try {
        let commands = require(`./commands/${comando}.js`)
        commands.run(client, message, args)
    } catch (e) {
        message.channel.send('Comando inválido')
    }
        
})

client.login(bot_token)