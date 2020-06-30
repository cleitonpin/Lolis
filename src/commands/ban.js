const Discord = require("discord.js")

exports.run = async (message, args, client) => {

    let member = message.mentions.members.first() || message.guild.member(args[0])
    let motivo = args.join(' ').slice(22) || args.slice(1).join(' ')
    let avatarURL = message.mentions.members.first().user.displayAvatarURL()

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply('Você não tem permissão para banir membros.')
    if(!member) return message.reply('Não foi possível encontrar este membro.')
    if(!motivo) motivo = "O motivo não foi informado"
    

    try {

        const motivoEmbed = new Discord.MessageEmbed()

        .setColor('#982f2d')
        .setTitle('Banimento')
        .setThumbnail(avatarURL)
        .addField('Motivo do banimento', motivo)

        message.guild.member(member).ban(motivo)
        message.channel.send(motivoEmbed)
    } catch (e) {
        message.reply(error)
    }

}