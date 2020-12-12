const { MessageEmbed, Message } = require("discord.js")

module.exports = {
    name: 'serverimage',
    aliases: ['simg', 'simage', 'serveravatar', 'savatar'],
    async execute(client, message = new Message(), args) {
        const embed = new MessageEmbed();
        embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
        await message.channel.send(embed);
    }
}