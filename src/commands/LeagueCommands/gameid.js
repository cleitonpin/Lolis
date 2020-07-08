const Discord = require("discord.js")
const matchInfoV4 = require("../../api/match-info-v4")
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
    let gameMode = infoMtach.gameMode
    let tempoPartida = infoMtach.gameDuration / 60
    
    let time1 = Teams(infoMtach.participants[0].teamId)
    let time2 = Teams(infoMtach.participants[5].teamId)
    let SR = client.emojis.cache.get('730240704009338930')
    emojiteam = (id) =>{
        let emojiTeam = infoMtach.participants[id].teamId == 100 ? '🔹' : red

        return emojiTeam
    }

    let arrayWinner = []
    arrayWinner.push(infoMtach.teams[0])


    let arrayLost = []
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
        embed.addField(`Time ${Teams(winner[0].teamId)} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${infoMtach.participantIdentities[0].player.summonerName} ${Spells(client, infoMtach.participants[0].spell1Id)} ${Spells(client, infoMtach.participants[0].spell2Id)} - **CS ${await minio(0, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${infoMtach.participantIdentities[1].player.summonerName} ${Spells(client, infoMtach.participants[1].spell1Id)} ${Spells(client, infoMtach.participants[1].spell2Id)} - **CS ${await minio(1, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${infoMtach.participantIdentities[2].player.summonerName} ${Spells(client, infoMtach.participants[2].spell1Id)} ${Spells(client, infoMtach.participants[2].spell2Id)} - **CS ${await minio(2, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${infoMtach.participantIdentities[3].player.summonerName} ${Spells(client, infoMtach.participants[3].spell1Id)} ${Spells(client, infoMtach.participants[3].spell2Id)} - **CS ${await minio(3, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${infoMtach.participantIdentities[4].player.summonerName} ${Spells(client, infoMtach.participants[4].spell1Id)} ${Spells(client, infoMtach.participants[4].spell2Id)} - **CS ${await minio(4, id)}**`,

        ], true)
        embed.addField(`Time ${Teams(lost[0].teamId)}`, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${infoMtach.participantIdentities[5].player.summonerName} ${Spells(client, infoMtach.participants[5].spell1Id)} ${Spells(client, infoMtach.participants[5].spell2Id)} - **CS ${await minio(5, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${infoMtach.participantIdentities[6].player.summonerName} ${Spells(client, infoMtach.participants[6].spell1Id)} ${Spells(client, infoMtach.participants[6].spell2Id)} - **CS ${await minio(6, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${infoMtach.participantIdentities[7].player.summonerName} ${Spells(client, infoMtach.participants[7].spell1Id)} ${Spells(client, infoMtach.participants[7].spell2Id)} - **CS ${await minio(7, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${infoMtach.participantIdentities[8].player.summonerName} ${Spells(client, infoMtach.participants[8].spell1Id)} ${Spells(client, infoMtach.participants[8].spell2Id)} - **CS ${await minio(8, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${infoMtach.participantIdentities[9].player.summonerName} ${Spells(client, infoMtach.participants[9].spell1Id)} ${Spells(client, infoMtach.participants[9].spell2Id)} - **CS ${await minio(9, id)}**`,

        ], true)
        embed.addField('\u200b', '\u200b', true)
        
        if(infoMtach.teams[0].bans != '') {
            embed.addField(`Bans`, [
                `${emojiteam(0)} ${getChampionEmoji(client, infoMtach.teams[0].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[4].championId)}`,
                `${emojiteam(5)} ${getChampionEmoji(client, infoMtach.teams[1].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[4].championId)}`
            ], true)
            
            embed.addField('\u200b', '\u200b')
            
        }
        embed.addField('Info', [
            `Torres destruidas: ${winner[0].towerKills}`,
            `Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `Barons abatidos: ${winner[0].baronKills}`,
            `Dragon abatidos: ${winner[0].dragonKills}`,
        ], true)
        embed.addField('\u200b', [
            `Torres destruidas: ${lost[0].towerKills}`,
            `Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `Barons abatidos: ${lost[0].baronKills}`,
            `Dragon abatidos: ${lost[0].dragonKills}`,
        ], true)
    }
    
    
    else {
        embed.setTitle('Informações detalhadas da partida')
        embed.setDescription([
            `Time vencedor: ${Teams(lost[0].teamId)} ${red} `,
            `Modo de jogo: ${mapa}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`Time ${time1} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${infoMtach.participantIdentities[0].player.summonerName} ${Spells(client, infoMtach.participants[0].spell1Id)} ${Spells(client, infoMtach.participants[0].spell2Id)} - **CS ${await minio(0, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${infoMtach.participantIdentities[1].player.summonerName} ${Spells(client, infoMtach.participants[1].spell1Id)} ${Spells(client, infoMtach.participants[1].spell2Id)} - **CS ${await minio(1, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${infoMtach.participantIdentities[2].player.summonerName} ${Spells(client, infoMtach.participants[2].spell1Id)} ${Spells(client, infoMtach.participants[2].spell2Id)} - **CS ${await minio(2, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${infoMtach.participantIdentities[3].player.summonerName} ${Spells(client, infoMtach.participants[3].spell1Id)} ${Spells(client, infoMtach.participants[3].spell2Id)} - **CS ${await minio(3, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${infoMtach.participantIdentities[4].player.summonerName} ${Spells(client, infoMtach.participants[4].spell1Id)} ${Spells(client, infoMtach.participants[4].spell2Id)} - **CS ${await minio(4, id)}**`,

        ], true)
        embed.addField(`Time ${time2}`, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${infoMtach.participantIdentities[5].player.summonerName} ${Spells(client, infoMtach.participants[5].spell1Id)} ${Spells(client, infoMtach.participants[5].spell2Id)} - **CS ${await minio(5, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${infoMtach.participantIdentities[6].player.summonerName} ${Spells(client, infoMtach.participants[6].spell1Id)} ${Spells(client, infoMtach.participants[6].spell2Id)} - **CS ${await minio(6, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${infoMtach.participantIdentities[7].player.summonerName} ${Spells(client, infoMtach.participants[7].spell1Id)} ${Spells(client, infoMtach.participants[7].spell2Id)} - **CS ${await minio(7, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${infoMtach.participantIdentities[8].player.summonerName} ${Spells(client, infoMtach.participants[8].spell1Id)} ${Spells(client, infoMtach.participants[8].spell2Id)} - **CS ${await minio(8, id)}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${infoMtach.participantIdentities[9].player.summonerName} ${Spells(client, infoMtach.participants[9].spell1Id)} ${Spells(client, infoMtach.participants[9].spell2Id)} - **CS ${await minio(9, id)}**`,

        ], true)
        embed.addField('\u200b', '\u200b', true)
        if(infoMtach.teams[0].bans != '') {
            embed.addField(`Bans`, [
                `${emojiteam(0)} ${getChampionEmoji(client, infoMtach.teams[0].bans[0].championId)} ${IDtoName(infoMtach.teams[0].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[1].championId)} ${IDtoName(infoMtach.teams[0].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[2].championId)} ${IDtoName(infoMtach.teams[0].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[3].championId)} ${IDtoName(infoMtach.teams[0].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[0].bans[4].championId)} ${IDtoName(infoMtach.teams[0].bans[4].championId)}`,
                `${emojiteam(5)} ${getChampionEmoji(client, infoMtach.teams[1].bans[0].championId)} ${IDtoName(infoMtach.teams[1].bans[0].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[1].championId)} ${IDtoName(infoMtach.teams[1].bans[1].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[2].championId)} ${IDtoName(infoMtach.teams[1].bans[2].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[3].championId)} ${IDtoName(infoMtach.teams[1].bans[3].championId)} ${getChampionEmoji(client, infoMtach.teams[1].bans[4].championId)} ${IDtoName(infoMtach.teams[1].bans[4].championId)}`
            ], true)
            
            embed.addField('\u200b', '\u200b', true)
            
        }
        embed.addField('Info', [
            `Torres destruidas: ${lost[0].towerKills}`,
            `Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `Barons abatidos: ${lost[0].baronKills}`,
            `Dragon abatidos: ${lost[0].dragonKills}`,
        ], true)
        embed.addField('\u200b', [
            `Torres destruidas: ${winner[0].towerKills}`,
            `Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `Barons abatidos: ${winner[0].baronKills}`,
            `Dragon abatidos: ${winner[0].dragonKills}`,
        ], true)
    }

    return embed

}

minio = async (number, id) => {

    
    let infoMtach = await matchInfoV4.data(id)
    var totalMinions = infoMtach.participants[number].stats.totalMinionsKilled
    var neutralMinions =  infoMtach.participants[number].stats.neutralMinionsKilled
    var resultMinions = totalMinions + neutralMinions


    return resultMinions
}
