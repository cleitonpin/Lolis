const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../kayn')

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.DDragon.Champion.get(`${args[0]}`).region('br')
        .version('9.19.1') /* Explicit */
        .callback(function(error, champion) {
            console.log(champion)
            const embed = new Discord.RichEmbed()
            .setColor('#330000')
            .addField(`**${args[0]}**`, champion['data'][`${args[0]}`]['title'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_0.jpg`)
            message.channel.send(embed)
            message.channel.send(champion['data'][`${args[0]}`]['lore'])
        })
    }
    else {
        message.channel.send('**Digite o nome do campeão!**')
    }
    
}
