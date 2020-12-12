const { Message } = require('discord.js');

module.exports = {

    name: 'mention',
    aliases: ['random'],
    execute(client, message, args) {
        const members = message.guild.members.cache;
        const memberN = members.size;
        const random = Math.floor(Math.random() * (0 + memberN))
    
        message.channel.send(`${message.author.username} te marcou aleatoriamente <@!${members.map(r => r.user.id)[random]}>!`)
    }
}

