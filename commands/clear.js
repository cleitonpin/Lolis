const { Client, Attachment } = require('discord.js')
const client = new Client()


exports.run = async (message, args, client) => {


    function getUserFromMention(mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return client.users.get(mention);
        }
    }

    if (args[0]) {
        message.channel.bulkDelete(args[0], false)
    }

    if (getUserFromMention(args[0])) {
        if(args[1] == Number) return message.channel.bulkDelete(args[1])
    }
}