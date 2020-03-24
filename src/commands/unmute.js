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
        reason = 'Sem motivo'

    let muterole = message.guild.roles.find(r => r.name === 'Muted')

    if(!muterole)
        return message.channel.send("Desmutado!")

    mute.removeRole(muterole.id).then(() => {
        message.delete()
        mute.send(`Você foi desmutado no servidor ${message.guild.name} por: ${reason}`)
        message.channel.send(`${mute.user.username} desmutado!`)
    })

    let embed = new Discord.RichEmbed()
        .setColor('#7e143f')
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Moderação: ", "desmutado")
        .addField("Mutado:", mute.user.username)
        .addField("Moderador: ", message.author.username)
        .addField("Motivo:", reason)
        .addField("Data:", message.createdAt.toLocaleString())
    message.channel.send(embed)
}