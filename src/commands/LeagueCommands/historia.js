const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../../kayn')
const versions = require('../../api/versions')
const { prefix } = require('../../config.json')

exports.run = async (client, message, args) => {
    if(args[0]) {

        let versao = await versions.data()
        let name_champ = titleize(args.join(''))
        let champion = await getHistoryChampion(name_champ)

        const embed = new Discord.MessageEmbed()
        .setColor('#330000')
        .setAuthor(`${champion.data[name_champ].name}, ${champion.data[name_champ].title} ` ,`https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
        .addField('**História**', champion['data'][`${name_champ}`]['lore'])
        .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name_champ}_0.jpg`)
        message.channel.send(embed)
        
    }
    else {
        const embed = new Discord.MessageEmbed()

        .setColor('#330000')
        .setTitle('História')
        .setDescription(`Para continuar, digite ${prefix}historia [nomeDoCampeão]`)
        message.channel.send(embed)
    }
    
}

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}
getHistoryChampion = async(name) => {
    return kayn.kaynObject.DDragon.Champion.get(name).version(await versions.data())
}
