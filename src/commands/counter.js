const Discord = require('discord.js')
const leagueMetaApi = require('../api/league-meta-api')
const version = require('../api/versions')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    virgulaPoints 
} = require('./commonFunctions')

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}


module.exports = {
    //const emojiList = client.emojis.get("624323979619991582")
    
    name: 'counter',
    aliases: ['counters'],
    async execute(client, message, args) {
        let name_champ = args.join('')
        let counters = await leagueMetaApi.data(name_champ)
        let red = client.emojis.cache.get('730241924879089745')
        let verde = client.emojis.cache.get('730241924744740895')
    
        let winrate = counters.data.roles[0].winRate
        let banrate = counters.data.roles[0].banRate
        let pickrate = counters.data.roles[0].pickRate
        let forte_contra = counters.data.roles[0].matchups.strongAgainstGame
        let fraco_contra = counters.data.roles[0].matchups.weakAgainstGame
    
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Counters de '+titleize(name_champ))
        .setDescription(`Taxa de vitória: ${winrate}%\nTaxa de ban: ${banrate}%\nTaxa de escolha: ${pickrate}%`)
        .setColor('#170B3B')
        if(forte_contra && fraco_contra == '') {
            embed.setFooter('Parece que não há informações sobre este campeão')
        } else {
    
            const forte = forte_contra.map(o => {
                const novoEstado = {...o}
    
    
                novoEstado.championId = getChampionEmoji(client, novoEstado.championId)
        
                return `${novoEstado.championId} ${novoEstado.name}: ${novoEstado.winRate}%`
            })
            const fraco = fraco_contra.map(o => {
                const novoEstado = {...o}
    
    
                novoEstado.championId = getChampionEmoji(client, novoEstado.championId)
        
                return `${novoEstado.championId} ${novoEstado.name}: ${novoEstado.winRate}%`
            })
    
            embed.addField(`${red} Forte contra`, forte.join('\n'), true)
            embed.addField(`${verde} Fraco contra`, fraco.join('\n'), true)
            embed.setFooter('Lembrando que é counter no geral, e não na lane')
        }
        embed.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await version.data()}/img/champion/${titleize(name_champ)}.png`)
        
        message.channel.send(embed)
    }
}
