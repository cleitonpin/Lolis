const Discord = require('discord.js')
const kayn = require('../../kayn')
const mastery_points = require('../../api/mastery_points')
const { getChampionEmoji, getMasteryEmoji, IDtoName, virgulaPoints } = require('../commonFunctions')
const versions = require('../../api/versions')

exports.run = async (client, message, args) => {

    let name = args.join('')
    let id = await getSummonerId(name).catch(err => {})

    let embed = new Discord.MessageEmbed()
    .setColor('#170B3B')

    if(!id) {
        embed.setTitle('Este jogador não existe.')
        embed.setDescription('Informações de maestria não encontrados.')
        message.channel.send(embed)
    } else {
        let data_mastery = await getdataMastery(name)
        let data = await mastery_points.data(id.id).catch(err => {})

        if(data.length < 10) {
            embed.setAuthor(`Pontos de maestria de ${id.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${id['profileIconId']}.png`)
    
            embed.setDescription('Informações de maestria não encontrados.')
            message.channel.send(embed)
        } else{

            embed.setDescription('Os campeões com o maior número de pontos são:')
            .setAuthor(`Pontos de maestria de ${id.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${id['profileIconId']}.png`)
            embed.addField('Campeão/Pontos', [
                `${getMasteryEmoji(client, data[0].championLevel)} ${getChampionEmoji(client, data[0].championId)} ${IDtoName(data[0].championId)}: ${virgulaPoints(data[0].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[1].championLevel)} ${getChampionEmoji(client, data[1].championId)} ${IDtoName(data[1].championId)}: ${virgulaPoints(data[1].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[2].championLevel)} ${getChampionEmoji(client, data[2].championId)} ${IDtoName(data[2].championId)}: ${virgulaPoints(data[2].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[3].championLevel)} ${getChampionEmoji(client, data[3].championId)} ${IDtoName(data[3].championId)}: ${virgulaPoints(data[3].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[4].championLevel)} ${getChampionEmoji(client, data[4].championId)} ${IDtoName(data[4].championId)}: ${virgulaPoints(data[4].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[5].championLevel)} ${getChampionEmoji(client, data[5].championId)} ${IDtoName(data[5].championId)}: ${virgulaPoints(data[5].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[6].championLevel)} ${getChampionEmoji(client, data[6].championId)} ${IDtoName(data[6].championId)}: ${virgulaPoints(data[6].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[7].championLevel)} ${getChampionEmoji(client, data[7].championId)} ${IDtoName(data[7].championId)}: ${virgulaPoints(data[7].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[8].championLevel)} ${getChampionEmoji(client, data[8].championId)} ${IDtoName(data[8].championId)}: ${virgulaPoints(data[8].championPoints.toString())} `,
                `${getMasteryEmoji(client, data[9].championLevel)} ${getChampionEmoji(client, data[9].championId)} ${IDtoName(data[9].championId)}: ${virgulaPoints(data[9].championPoints.toString())} `,

            ], true)
            .addField('Último jogo', [
                getDataDays(data[0].lastPlayTime),
                getDataDays(data[1].lastPlayTime),
                getDataDays(data[2].lastPlayTime),
                getDataDays(data[3].lastPlayTime),
                getDataDays(data[4].lastPlayTime),
                getDataDays(data[5].lastPlayTime),
                getDataDays(data[6].lastPlayTime),
                getDataDays(data[7].lastPlayTime),
                getDataDays(data[8].lastPlayTime),
                getDataDays(data[9].lastPlayTime),
            ], true)
            .addField('Baús/Fragmentos', [
                getEmoji(data[0].championLevel, data[0].chestGranted, client, data[0].championPointsUntilNextLevel, data[0].tokensEarned),
                getEmoji(data[1].championLevel, data[1].chestGranted, client, data[1].championPointsUntilNextLevel, data[1].tokensEarned),
                getEmoji(data[2].championLevel, data[2].chestGranted, client, data[2].championPointsUntilNextLevel, data[2].tokensEarned),
                getEmoji(data[3].championLevel, data[3].chestGranted, client, data[3].championPointsUntilNextLevel, data[3].tokensEarned),
                getEmoji(data[4].championLevel, data[4].chestGranted, client, data[4].championPointsUntilNextLevel, data[4].tokensEarned),
                getEmoji(data[5].championLevel, data[5].chestGranted, client, data[5].championPointsUntilNextLevel, data[5].tokensEarned),
                getEmoji(data[6].championLevel, data[6].chestGranted, client, data[6].championPointsUntilNextLevel, data[6].tokensEarned),
                getEmoji(data[7].championLevel, data[7].chestGranted, client, data[7].championPointsUntilNextLevel, data[7].tokensEarned),
                getEmoji(data[8].championLevel, data[8].chestGranted, client, data[8].championPointsUntilNextLevel, data[8].tokensEarned),
                getEmoji(data[9].championLevel, data[9].chestGranted, client, data[9].championPointsUntilNextLevel, data[9].tokensEarned),

            ], true)
            .addField('\u200b', [
            `Total de campeões: **${data_mastery.total_champions}**`,
            `Total de maestrias ${getMasteryEmoji(client, 7)}: **${data_mastery.total_mastered}**.`,
            `Total de maestrias ${getMasteryEmoji(client,6)}: **${data_mastery.total_mastered6}**.`,
            `Total de maestrias ${getMasteryEmoji(client,5)}: **${data_mastery.total_mastered5}**.`,
            `Level de maestria: **${data_mastery.total_mastery_level}**.`,
            `Total de pontos: **${virgulaPoints(data_mastery.total_points.toString())}**`
            ])
            message.channel.send(embed)
        }
    }
}

getdataMastery = async (name)=> {
    const axios = require('axios')

    const url = `https://www.masterypoints.com/api/v1.1/summoner/${name}/br`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data.summoner_mastery


}

getEmoji = (level, chest, client, points, tokens) => {

    let emojiChest;

    chest == true ? emojiChest = client.emojis.cache.get('732661605459951667') : emojiChest = client.emojis.cache.get('732661590746202163')

    if(level == 7 && points == 0) return `${emojiChest} - Maximizado`


    return `${emojiChest} - ${tokens} Fragmentos.`

}

getDataDays = (number) => {
    var now = new Date()
    var dataUltimo = new Date(number)
    
    var resultado = Math.abs(now.getTime() - dataUltimo.getTime())
    const months = Math.ceil(resultado / (1000 * 60 * 60 * 24 * 30));

    if(months == 1) return 'No último mês.'
    else if(months > 12) {
        let meses = months - 12
        return `Há 1 ano e ${meses} meses.`

    } 
    else if(months > 24) {
        let meses = months - 24
        return `Há 2 anos e ${meses} meses.`

    }

    return `${months} meses atrás.`
}

getSummonerId = async (args) => {
    let user = await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);

    return user
}



