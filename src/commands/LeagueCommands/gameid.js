const Discord = require("discord.js")
const matchInfoV4 = require("../../api/match-info-v4")
const embeds = require('../../functions/embeds')
const kayn = require('../../kayn')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    Spells,
    Teams
} = require('../commonFunctions')

exports.run = async (client, message, args) => {

    let msg = message.channel.send('```Carregando informações...```')
    let id_game = args.join()
    let part = await data(id_game, client)
    
    if(id_game.length < 10 || id_game.length > 10){
        await msg.then(ar => {
            ar.delete()
            message.channel.send('```Partida inexistente.```')
        })
    
    }
    await msg.then(ar => {
        ar.delete()
        message.channel.send(part)
    })

} 

data = async (id, client) => {

    
    let infoMtach = await matchInfoV4.data(id)
    const embed = new Discord.MessageEmbed()

    let red = client.emojis.cache.get('730243169241006172')
    let tempoPartida = infoMtach.gameDuration / 60
    let arrayWinner = []
    let arrayLost = []
    let time1 = Teams(infoMtach.participants[0].teamId)
    let time2 = Teams(infoMtach.participants[5].teamId)
    
    let SR = client.emojis.cache.get('730240704009338930')

    emojiteam = (id) =>{
        let emojiTeam = infoMtach.participants[id].teamId == 100 ? '🔹' : red

        return emojiTeam
    }

    
    
    arrayWinner.push(infoMtach.teams[0])

    arrayLost.push(infoMtach.teams[1])

    let lost = arrayLost.filter(w => w.win == 'Win')
    let winner = arrayWinner.filter(w => w.win == 'Fail')

    if(infoMtach.gameMode == 'CLASSIC') var mapa = `Summoner's Rift ${SR}`
    else mapa = infoMtach.gameMode

    if(lost == '' && winner == '') {
        
        lost = arrayLost.filter(w => w.win == 'Fail')
        winner = arrayWinner.filter(w => w.win == 'Win') 


        embed.setTitle('Informações detalhadas da partida')
        embed.setDescription([
            `Time vencedor: ${Teams(winner[0].teamId)} 🔹 `,
            `Modo de jogo: ${mapa}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`${emojiteam(0)} Time ${Teams(winner[0].teamId)} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${threePoints(infoMtach.participantIdentities[0].player.summonerName)} ${Spells(client, infoMtach.participants[0].spell1Id)} ${Spells(client, infoMtach.participants[0].spell2Id)} - **CS ${await minio(0, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${threePoints(infoMtach.participantIdentities[1].player.summonerName)} ${Spells(client, infoMtach.participants[1].spell1Id)} ${Spells(client, infoMtach.participants[1].spell2Id)} - **CS ${await minio(1, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${threePoints(infoMtach.participantIdentities[2].player.summonerName)} ${Spells(client, infoMtach.participants[2].spell1Id)} ${Spells(client, infoMtach.participants[2].spell2Id)} - **CS ${await minio(2, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${threePoints(infoMtach.participantIdentities[3].player.summonerName)} ${Spells(client, infoMtach.participants[3].spell1Id)} ${Spells(client, infoMtach.participants[3].spell2Id)} - **CS ${await minio(3, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${threePoints(infoMtach.participantIdentities[4].player.summonerName)} ${Spells(client, infoMtach.participants[4].spell1Id)} ${Spells(client, infoMtach.participants[4].spell2Id)} - **CS ${await minio(4, id)}**`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[0].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[0].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[1].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[1].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[2].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[2].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[3].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[3].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[4].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[4].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `Torres destruidas: ${winner[0].towerKills}`,
            `Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `Barons abatidos: ${winner[0].baronKills}`,
            `Dragon abatidos: ${winner[0].dragonKills}`,
        ], true)
        embed.addField(`${emojiteam(5)} Time ${Teams(lost[0].teamId)}`, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${threePoints(infoMtach.participantIdentities[5].player.summonerName)} ${Spells(client, infoMtach.participants[5].spell1Id)} ${Spells(client, infoMtach.participants[5].spell2Id)} - **CS ${await minio(5, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${threePoints(infoMtach.participantIdentities[6].player.summonerName)} ${Spells(client, infoMtach.participants[6].spell1Id)} ${Spells(client, infoMtach.participants[6].spell2Id)} - **CS ${await minio(6, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${threePoints(infoMtach.participantIdentities[7].player.summonerName)} ${Spells(client, infoMtach.participants[7].spell1Id)} ${Spells(client, infoMtach.participants[7].spell2Id)} - **CS ${await minio(7, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${threePoints(infoMtach.participantIdentities[8].player.summonerName)} ${Spells(client, infoMtach.participants[8].spell1Id)} ${Spells(client, infoMtach.participants[8].spell2Id)} - **CS ${await minio(8, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${threePoints(infoMtach.participantIdentities[9].player.summonerName)} ${Spells(client, infoMtach.participants[9].spell1Id)} ${Spells(client, infoMtach.participants[9].spell2Id)} - **CS ${await minio(9, id)}**`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[5].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[5].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[6].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[6].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[7].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[7].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[8].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[8].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[9].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[9].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `Torres destruidas: ${lost[0].towerKills}`,
            `Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `Barons abatidos: ${lost[0].baronKills}`,
            `Dragon abatidos: ${lost[0].dragonKills}`,
        ], true)

        
        if(infoMtach.teams[0].bans != '') {
            embed.addField(`Bans`, [
                `${emojiteam(0)} ${getChampionEmoji(client, infoMtach.teams[0].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[4].championId)}`,
                `${emojiteam(5)} ${getChampionEmoji(client, infoMtach.teams[1].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[4].championId)}`
            ], true)
            

            
        }
        
        
    }
    
    
    else {

        embed.setTitle('Informações detalhadas da partida')
        embed.setDescription([
            `Time vencedor: ${Teams(lost[0].teamId)} ${red} `,
            `Modo de jogo: ${mapa}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`${emojiteam(0)} Time ${time1} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${threePoints(infoMtach.participantIdentities[0].player.summonerName)} ${Spells(client, infoMtach.participants[0].spell1Id)} ${Spells(client, infoMtach.participants[0].spell2Id)} - **CS ${await minio(0, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${threePoints(infoMtach.participantIdentities[1].player.summonerName)} ${Spells(client, infoMtach.participants[1].spell1Id)} ${Spells(client, infoMtach.participants[1].spell2Id)} - **CS ${await minio(1, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${threePoints(infoMtach.participantIdentities[2].player.summonerName)} ${Spells(client, infoMtach.participants[2].spell1Id)} ${Spells(client, infoMtach.participants[2].spell2Id)} - **CS ${await minio(2, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${threePoints(infoMtach.participantIdentities[3].player.summonerName)} ${Spells(client, infoMtach.participants[3].spell1Id)} ${Spells(client, infoMtach.participants[3].spell2Id)} - **CS ${await minio(3, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${threePoints(infoMtach.participantIdentities[4].player.summonerName)} ${Spells(client, infoMtach.participants[4].spell1Id)} ${Spells(client, infoMtach.participants[4].spell2Id)} - **CS ${await minio(4, id)}**`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[0].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[0].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[1].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[1].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[2].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[2].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[3].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[3].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[4].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[4].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `Torres destruidas: ${lost[0].towerKills}`,
            `Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `Barons abatidos: ${lost[0].baronKills}`,
            `Dragon abatidos: ${lost[0].dragonKills}`,
        ], true)
        embed.addField(`${emojiteam(5)}Time ${time2}`, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${threePoints(infoMtach.participantIdentities[5].player.summonerName)} ${Spells(client, infoMtach.participants[5].spell1Id)} ${Spells(client, infoMtach.participants[5].spell2Id)} - **CS ${await minio(5, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${threePoints(infoMtach.participantIdentities[6].player.summonerName)} ${Spells(client, infoMtach.participants[6].spell1Id)} ${Spells(client, infoMtach.participants[6].spell2Id)} - **CS ${await minio(6, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${threePoints(infoMtach.participantIdentities[7].player.summonerName)} ${Spells(client, infoMtach.participants[7].spell1Id)} ${Spells(client, infoMtach.participants[7].spell2Id)} - **CS ${await minio(7, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${threePoints(infoMtach.participantIdentities[8].player.summonerName)} ${Spells(client, infoMtach.participants[8].spell1Id)} ${Spells(client, infoMtach.participants[8].spell2Id)} - **CS ${await minio(8, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${threePoints(infoMtach.participantIdentities[9].player.summonerName)} ${Spells(client, infoMtach.participants[9].spell1Id)} ${Spells(client, infoMtach.participants[9].spell2Id)} - **CS ${await minio(9, id)}**`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[5].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[5].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[6].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[6].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[7].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[7].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[8].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[8].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[9].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[9].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `Torres destruidas: ${winner[0].towerKills}`,
            `Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `Barons abatidos: ${winner[0].baronKills}`,
            `Dragon abatidos: ${winner[0].dragonKills}`,
        ], true)
        if(infoMtach.teams[0].bans != '') {
            embed.addField(`Bans`, [
                `${emojiteam(0)} ${getChampionEmoji(client, infoMtach.teams[0].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[4].championId)}`,
                `${emojiteam(5)} ${getChampionEmoji(client, infoMtach.teams[1].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[4].championId)}`
            ], true)
            
            
        }
        
        
    }

    return embed

}

threePoints = (name) => {

    if(name.length > 5) {

        var cort = name.slice(0, 5)


    } else {
        return `**${name}**`
    }

    return `**${cort}...**`
}


minio = async (number, id) => {

    
    let infoMtach = await matchInfoV4.data(id)
    var totalMinions = infoMtach.participants[number].stats.totalMinionsKilled
    var neutralMinions =  infoMtach.participants[number].stats.neutralMinionsKilled
    var resultMinions = totalMinions + neutralMinions


    return resultMinions
}
