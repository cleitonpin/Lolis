const Discord = require('discord.js')
const leagueMetaApi = require('../../api/league-meta-api')
const version = require('../../api/versions')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    virgulaPoints 
} = require('../commonFunctions')

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}


exports.run = async (client, message, args) => {
    //const emojiList = client.emojis.get("624323979619991582")
    
    let name_champ = args.join('')
    let counters = await leagueMetaApi.data(name_champ)


    let winrate = counters.data.roles[0].winRate
    let banrate = counters.data.roles[0].banRate
    let forte_contra = counters.data.roles[0].matchups.strongAgainstGame
    let fraco_contra = counters.data.roles[0].matchups.weakAgainstGame

    const embed = new Discord.MessageEmbed()

    .setTitle('Counters de '+titleize(name_champ))
    .setDescription(`Winrate: ${winrate}%\nBanrate: ${banrate}%`)
    .addField('Forte contra', `${getChampionEmoji(client, forte_contra[0].championId)} ${forte_contra[0].name}: ${forte_contra[0].winRate}%\n ${getChampionEmoji(client, forte_contra[1].championId)} ${forte_contra[1].name}: ${forte_contra[1].winRate}%\n ${getChampionEmoji(client, forte_contra[2].championId)} ${forte_contra[2].name}: ${forte_contra[2].winRate}%\n ${getChampionEmoji(client, forte_contra[3].championId)} ${forte_contra[3].name}: ${forte_contra[3].winRate}%\n ${getChampionEmoji(client, forte_contra[4].championId)} ${forte_contra[4].name}: ${forte_contra[4].winRate}%\n ${getChampionEmoji(client, forte_contra[5].championId)} ${forte_contra[5].name}: ${forte_contra[5].winRate}%\n ${getChampionEmoji(client, forte_contra[6].championId)} ${forte_contra[6].name}: ${forte_contra[6].winRate}%\n ${getChampionEmoji(client, forte_contra[7].championId)} ${forte_contra[7].name}: ${forte_contra[7].winRate}%\n ${getChampionEmoji(client, forte_contra[8].championId)} ${forte_contra[8].name}: ${forte_contra[8].winRate}%\n`, true)
    .addField('Fraco contra', `${getChampionEmoji(client, fraco_contra[0].championId)} ${fraco_contra[0].name}: ${fraco_contra[0].winRate}%\n ${getChampionEmoji(client, fraco_contra[1].championId)} ${fraco_contra[1].name}: ${fraco_contra[1].winRate}%\n ${getChampionEmoji(client, fraco_contra[2].championId)} ${fraco_contra[2].name}: ${fraco_contra[2].winRate}%\n ${getChampionEmoji(client, fraco_contra[3].championId)} ${fraco_contra[3].name}: ${fraco_contra[3].winRate}%\n ${getChampionEmoji(client, fraco_contra[4].championId)} ${fraco_contra[4].name}: ${fraco_contra[4].winRate}%\n ${getChampionEmoji(client, fraco_contra[5].championId)} ${fraco_contra[5].name}: ${fraco_contra[5].winRate}%\n ${getChampionEmoji(client, fraco_contra[6].championId)} ${fraco_contra[6].name}: ${fraco_contra[6].winRate}%\n ${getChampionEmoji(client, fraco_contra[7].championId)} ${fraco_contra[7].name}: ${fraco_contra[7].winRate}%\n ${getChampionEmoji(client, fraco_contra[8].championId)} ${fraco_contra[8].name}: ${fraco_contra[8].winRate}%\n`, true)
    .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await version.data()}/img/champion/${titleize(name_champ)}.png`)
    .setFooter('Lembrando que é counter no geral, e não na lane')
    message.channel.send(embed)

}

