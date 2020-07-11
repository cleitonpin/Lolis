const Discord = require('discord.js')
const championApi = require('../../api/champion-api')
const masteryApi = require('../../api/mastery-api')
const version = require("../../api/versions")
const { virgulaPoints, getMasteryEmoji, getEloEmoji } = require('../commonFunctions')

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

    
exports.run = async (client, message, args) => {


    let name_champ = args.join('')
    let apiChamp = await championApi.data()
    let champions = apiChamp.data.champions
    let versao = await version.data()
    let id = champions[titleize(name_champ)]
    let mastery = await masteryApi.data(id.key)
    
    const topplayer = new Discord.MessageEmbed()
    .setColor('#170B3B')
    .setAuthor('Comando Top Players', `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${titleize(name_champ)}.png`)
    .addField('Rank/Invocador', `🥇 [1] - ${mastery[0].name}\n🥈 [2] - ${mastery[1].name}\n🥉 [3] - ${mastery[2].name}\n🏅 [4] - ${mastery[3].name}\n🏅 [5] - ${mastery[4].name}\n🏅 [6] - ${mastery[5].name}\n🏅 [7] - ${mastery[6].name}\n🏅 [8] - ${mastery[7].name}\n🏅 [9] - ${mastery[8].name}\n🏅 [10] - ${mastery[9].name}`, true)
    .addField('Pontos de maestria', `${getMasteryEmoji(client, mastery[0].mastery_level)} ${virgulaPoints(mastery[0].points.toString())}\n${getMasteryEmoji(client, mastery[1].mastery_level)} ${virgulaPoints(mastery[1].points.toString())}\n${getMasteryEmoji(client, mastery[2].mastery_level)} ${virgulaPoints(mastery[2].points.toString())}\n${getMasteryEmoji(client, mastery[3].mastery_level)} ${virgulaPoints(mastery[3].points.toString())}\n${getMasteryEmoji(client, mastery[4].mastery_level)} ${virgulaPoints(mastery[4].points.toString())}\n${getMasteryEmoji(client, mastery[5].mastery_level)} ${virgulaPoints(mastery[5].points.toString())}\n${getMasteryEmoji(client, mastery[6].mastery_level)} ${virgulaPoints(mastery[6].points.toString())}\n${getMasteryEmoji(client, mastery[7].mastery_level)} ${virgulaPoints(mastery[7].points.toString())}\n${getMasteryEmoji(client, mastery[8].mastery_level)} ${virgulaPoints(mastery[8].points.toString())}\n${getMasteryEmoji(client, mastery[9].mastery_level)} ${virgulaPoints(mastery[9].points.toString())}`, true)
    .addField('Server/Ranked', `${mastery[0].server.toUpperCase()} - ${getEloEmoji(client, mastery[0].ranked_tier)} ${mastery[0].ranked_tier}\n${mastery[1].server.toUpperCase()} - ${getEloEmoji(client, mastery[1].ranked_tier)} ${mastery[1].ranked_tier}\n${mastery[2].server.toUpperCase()} - ${getEloEmoji(client, mastery[2].ranked_tier)} ${mastery[2].ranked_tier}\n${mastery[3].server.toUpperCase()} - ${getEloEmoji(client, mastery[3].ranked_tier)} ${mastery[3].ranked_tier}\n${mastery[4].server.toUpperCase()} - ${getEloEmoji(client, mastery[4].ranked_tier)} ${mastery[4].ranked_tier}\n${mastery[5].server.toUpperCase()} - ${getEloEmoji(client, mastery[5].ranked_tier)} ${mastery[5].ranked_tier}\n${mastery[6].server.toUpperCase()} - ${getEloEmoji(client, mastery[6].ranked_tier)} ${mastery[6].ranked_tier}\n${mastery[7].server.toUpperCase()} - ${getEloEmoji(client, mastery[7].ranked_tier)} ${mastery[7].ranked_tier}\n${mastery[8].server.toUpperCase()} - ${getEloEmoji(client, mastery[8].ranked_tier)} ${mastery[8].ranked_tier}\n${mastery[9].server.toUpperCase()} - ${getEloEmoji(client, mastery[9].ranked_tier)} ${mastery[9].ranked_tier}\n`, true)
    message.channel.send(topplayer)

}