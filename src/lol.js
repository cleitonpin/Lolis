const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()
const bot_prefix = ':'
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

// client.on('guildMemberRemove', async member => {

//     let guildID = member.guild.id

//     if(member.kickable == true){
//         member.
//         client.channels.cache.get(guildID).send(`
//         ${member.user.username} deixou o servidor!
//         `)
//     }
// })
client.on('raw', async dados  => {
    updateRoles(client,dados)
})


client.on('guildMemberAdd', member => {
    console.log(member)
})

client.on("message", async message => {
    
    if(message.author.bot || message.channel.type == "dm") 
        return;

    

    messages(message, client)
    notCommandMusic(message) 
    
    if(!message.content.toLowerCase().startsWith(bot_prefix))
        return

    const args = message.content.slice(bot_prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()
    



    
    try {

        try {
            
            const commandsLeague = require(`./commands/LeagueCommands/${comando}.js`)

            commandsLeague.run(client, message, args)
            
        } catch (e) {
            const commands = require(`./commands/${comando}.js`) 
            commands.run(client, message, args,)
        }

    } catch (e) {
        console.log(e)
        const commandsLeague = require(`./commands/LeagueCommands/${comando}.js`)

        commandsLeague.run(client, message, args)
        
        message.channel.send('Comando inválido')
    }
        
})

client.login(bot_token)
