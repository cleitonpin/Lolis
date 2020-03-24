const Discord = require('discord.js')
const client = new Discord.Client()


exports.run = async (client, message, args, con) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) 
        return message.channel.send('Você não tem permissão para usar este comando.')
    
    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) 
        return message.channel.send("Eu não tenho permissão para adicionar cargos!")

    let mute = message.mentions.members.first() || message.guild.members.get(args[0])

    if(!mute) 
        return message.channel.send("Mutado")

    let reason = args.slice(1).join(" ")
    if(!reason) 
        reason = 'Sem reação'

    let muterole = message.guild.roles.find(r => r.name === 'Muted')

    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGE: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch (e) {
            console.log(e.stack)
        }
    }

    mute.addRole(muterole.id).then(() => {
        message.delete()
        mute.send(`Olá, vai toma no cu islan você sendo mutado por: ${reason}, por alguem no ${message.guild.name}`)
        message.channel.send(`${mute.user.username} CALADO COM SUCESSO!`)
    })

    let embed = new Discord.RichEmbed()
        .setColor('#7e143f')
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Moderação: ", "cala a boca")
        .addField("Mutado:", mute.user.username)
        .addField("Mutado por: ", message.author.username)
        .addField("Motivo:", reason)
        .addField("Data:", message.createdAt.toLocaleString())
    message.channel.send(embed)
}

