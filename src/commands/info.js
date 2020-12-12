const Discord = require('discord.js')
const kayn = require('../kayn')
const versions = require('../api/versions')

module.exports = {
    
    name: 'info',
    aliases: ['champ'],
    async execute(client, message, args) {
        if(args[0]) {
            let name_champ = titleize(args.join(' '))
            let champion = await getInfoChampions(name_champ)
            let versao = await versions.data()
    
            const embed = new Discord.MessageEmbed()
            .setColor('#170B3B')
            //.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data}/img/champion/${name_champ}.png`)
            .setAuthor(`${champion.data[name_champ].name}, ${champion.data[name_champ].title} ` ,`https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .addField(`**Tipo:**`,champion['data'][`${name_champ}`]['tags'],true)
            .addField('**Vida:**', `${champion['data'][`${name_champ}`]['stats']['hp']} (+${champion['data'][`${name_champ}`]['stats']['hpperlevel']} por nível)`, true)
            .addField('**Dano de Ataque:**', `${champion['data'][`${name_champ}`]['stats']['attackdamage']} (+${champion['data'][`${name_champ}`]['stats']['attackdamageperlevel']} por nível)`, true)
            .addField('**Velocidade de ataque:**', `${champion['data'][`${name_champ}`]['stats']['attackspeed']} (+${champion['data'][`${name_champ}`]['stats']['attackspeedperlevel']}% por nível)`, true)
            .addField('**Velocidade Movimento:**', `${champion['data'][`${name_champ}`]['stats']['movespeed']}` ,true)
            .addField('**Armadura:**', `${champion['data'][`${name_champ}`]['stats']['armor']} (+${champion['data'][`${name_champ}`]['stats']['armorperlevel']} por nível)`, true)
            .addField('**Regeneração de vida:**', `${champion['data'][`${name_champ}`]['stats']['hpregen']} (+${champion['data'][`${name_champ}`]['stats']['hpregenperlevel']} por nível)`, true)
            .addField('**Resistência Mágica:**\n', `${champion['data'][`${name_champ}`]['stats']['spellblock']} (+${champion['data'][`${name_champ}`]['stats']['spellblockperlevel']} por nível)\n\n`, true)
            .addField('**Regeneração de mana:**', `${champion['data'][`${name_champ}`]['stats']['mpregen']} (+${champion['data'][`${name_champ}`]['stats']['mpregenperlevel']} por nível)`, true)
            .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name_champ}_0.jpg`)
            message.channel.send(embed)
        } else {
            message.channel.send('**Digite o nome do campeão!**')
        }
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

getInfoChampions = async(name) => {
    return kayn.kaynObject.DDragon.Champion.get(name).region(kayn.regions.BRAZIL)
}