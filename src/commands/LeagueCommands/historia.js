const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../../kayn')

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.Champion.get(args[0]) /* Explicit */
        .callback(function(error, champion) {
            console.log(champion)
            const embed = new Discord.MessageEmbed()
            .setColor('#330000')
            .setTitle(`${champion.data[`${args[0]}`].name},\u200b ${champion['data'][`${args[0]}`]['title']}`)
            .addField('**História**', champion['data'][`${args[0]}`]['lore'])
            .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_0.jpg`)
            message.channel.send(embed)
        })
    }
    else {
        message.channel.send('Digite o nome do campeão!')
    }
    
}
