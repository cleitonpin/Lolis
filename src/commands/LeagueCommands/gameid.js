const Discord = require("discord.js")
const matchInfoV4 = require("../../api/match-info-v4")
const embeds = require('../../functions/embeds')
const kayn = require('../../kayn')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    getEmojiItems, 
    getRunesEmoji, 
    Spells,
    Teams,
    fila
} = require('../commonFunctions')

exports.run = async (client, message, args) => {

    let msg = message.channel.send('```Carregando informações...```')
    let id_game = args.join()
    let part = await data(id_game, client)
    let part1 = await dataExtra(id_game, client)
    
    if(id_game.length < 10 || id_game.length > 10){
        await msg.then(ar => {
            ar.delete()
            message.channel.send('```Partida inexistente.```')
        })
    
    }
    await msg.then(async ar => {
        ar.delete()
        let embed = await message.channel.send(part)
                    await embed.react('1️⃣')
                    await embed.react('2️⃣')

        const filter = (reaction, user) => {
            switch(reaction.emoji.name) {
                case "1️⃣":  return user.id === message.author.id
                case "2️⃣":  return user.id === message.author.id
            }
        }
        const collector = embed.createReactionCollector(filter, { max: undefined});

        collector.on('collect', async (reaction, user) => {
            console.log(1)
            if(reaction.emoji.name == '1️⃣') {
                embed.edit(part)
                
            }
            if(reaction.emoji.name == '2️⃣') {
                console.log(1)
                embed.edit(part1)
                
            }
        })

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
    


    emojiteam = (id) =>{
        let emojiTeam = infoMtach.participants[id].teamId == 100 ? '🔹' : red

        return emojiTeam
    }

    let minion = client.emojis.cache.get('732072918854664322')
    let baron100 = client.emojis.cache.get('732046427081015337')
    let baron200 = client.emojis.cache.get('732046427211169892')
    let tower100 = client.emojis.cache.get('732046426762248326')
    let tower200 = client.emojis.cache.get('732046427181678602')
    let inib100 = client.emojis.cache.get('732046427257045062')
    let inib200 = client.emojis.cache.get('732046427060174971')
    let dragon100 = client.emojis.cache.get('732046426753990708')
    let dragon200 = client.emojis.cache.get('732046427185741925')
    let arauto100 = client.emojis.cache.get('732075195267022929')
    let arauto200 = client.emojis.cache.get('732075221120712764')

    
    
    
    arrayWinner.push(infoMtach.teams[0])

    arrayLost.push(infoMtach.teams[1])

    let lost = arrayLost.filter(w => w.win == 'Win')
    let winner = arrayWinner.filter(w => w.win == 'Fail')

    if(lost == '' && winner == '') {
        
        lost = arrayLost.filter(w => w.win == 'Fail')
        winner = arrayWinner.filter(w => w.win == 'Win') 


        embed.setTitle('Informações detalhadas da partida')
        .setColor('#170B3B')
        embed.setDescription([
            `Time vencedor: ${Teams(winner[0].teamId)} 🔹 `,
            `Modo de jogo: ${fila(infoMtach.queueId)}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`${emojiteam(0)} Time ${Teams(winner[0].teamId)} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${threePoints(infoMtach.participantIdentities[0].player.summonerName)} ${Spells(client, infoMtach.participants[0].spell1Id)} ${Spells(client, infoMtach.participants[0].spell2Id)} - ${minion} ${await minio(0, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${threePoints(infoMtach.participantIdentities[1].player.summonerName)} ${Spells(client, infoMtach.participants[1].spell1Id)} ${Spells(client, infoMtach.participants[1].spell2Id)} - ${minion} ${await minio(1, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${threePoints(infoMtach.participantIdentities[2].player.summonerName)} ${Spells(client, infoMtach.participants[2].spell1Id)} ${Spells(client, infoMtach.participants[2].spell2Id)} - ${minion} ${await minio(2, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${threePoints(infoMtach.participantIdentities[3].player.summonerName)} ${Spells(client, infoMtach.participants[3].spell1Id)} ${Spells(client, infoMtach.participants[3].spell2Id)} - ${minion} ${await minio(3, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${threePoints(infoMtach.participantIdentities[4].player.summonerName)} ${Spells(client, infoMtach.participants[4].spell1Id)} ${Spells(client, infoMtach.participants[4].spell2Id)} - ${minion} ${await minio(4, id)}`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[0].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[0].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[0].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[1].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[1].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[1].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[2].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[2].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[2].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[3].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[3].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[3].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[4].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[4].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[4].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `${tower100} Torres destruidas: ${winner[0].towerKills}`,
            `${inib100} Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `${baron100} Barons abatidos: ${winner[0].baronKills}`,
            `${dragon100} Dragon abatidos: ${winner[0].dragonKills}`,
            `${arauto100} Arautos abatidos: ${winner[0].riftHeraldKills}`
        ], true)
        embed.addField(`${emojiteam(5)} Time ${Teams(lost[0].teamId)}`, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${threePoints(infoMtach.participantIdentities[5].player.summonerName)} ${Spells(client, infoMtach.participants[5].spell1Id)} ${Spells(client, infoMtach.participants[5].spell2Id)} - ${minion} ${await minio(5, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${threePoints(infoMtach.participantIdentities[6].player.summonerName)} ${Spells(client, infoMtach.participants[6].spell1Id)} ${Spells(client, infoMtach.participants[6].spell2Id)} - ${minion} ${await minio(6, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${threePoints(infoMtach.participantIdentities[7].player.summonerName)} ${Spells(client, infoMtach.participants[7].spell1Id)} ${Spells(client, infoMtach.participants[7].spell2Id)} - ${minion} ${await minio(7, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${threePoints(infoMtach.participantIdentities[8].player.summonerName)} ${Spells(client, infoMtach.participants[8].spell1Id)} ${Spells(client, infoMtach.participants[8].spell2Id)} - ${minion} ${await minio(8, id)}`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${threePoints(infoMtach.participantIdentities[9].player.summonerName)} ${Spells(client, infoMtach.participants[9].spell1Id)} ${Spells(client, infoMtach.participants[9].spell2Id)} - ${minion} ${await minio(9, id)}`,

        ], true)
        embed.addField(`Rank`, [
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[5].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[5].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[5].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[6].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[6].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[6].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[7].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[7].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[7].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[8].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[8].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[8].player.summonerId)}`,
            `${getEloEmoji(client, await embeds.elo(infoMtach.participantIdentities[9].player.summonerId))} ${await embeds.eloTranslate(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.rank(infoMtach.participantIdentities[9].player.summonerId)} ${await embeds.LP(infoMtach.participantIdentities[9].player.summonerId)}`,
        ], true)
        embed.addField('Estatísticas', [
            `${tower200} Torres destruidas: ${lost[0].towerKills}`,
            `${inib200} Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `${baron200} Barons abatidos: ${lost[0].baronKills}`,
            `${dragon200} Dragon abatidos: ${lost[0].dragonKills}`,
            `${arauto200} Arautos abatidos: ${lost[0].riftHeraldKills}`
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
        .setColor('#170B3B')
        embed.setDescription([
            `Time vencedor: ${Teams(lost[0].teamId)} ${red} `,
            `Modo de jogo: ${fila(infoMtach.queueId)}`,
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
            `${tower100} Torres destruidas: ${lost[0].towerKills}`,
            `${inib100} Inibidores destruídos: ${lost[0].inhibitorKills}`,
            `${baron100} Barons abatidos: ${lost[0].baronKills}`,
            `${dragon100} Dragon abatidos: ${lost[0].dragonKills}`,
            `${arauto100} Arautos abatidos: ${lost[0].riftHeraldKills}`
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
            `${tower200} Torres destruidas: ${winner[0].towerKills}`,
            `${inib200} Inibidores destruídos: ${winner[0].inhibitorKills}`,
            `${baron200} Barons abatidos: ${winner[0].baronKills}`,
            `${dragon200} Dragon abatidos: ${winner[0].dragonKills}`,
            `${arauto200} Arautos abatidos: ${winner[0].riftHeraldKills}`
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

dataExtra = async (id, client) => {

    
    let infoMtach = await matchInfoV4.data(id)
    const embed = new Discord.MessageEmbed()

    let red = client.emojis.cache.get('730243169241006172')
    let tempoPartida = infoMtach.gameDuration / 60
    let arrayWinner = []
    let arrayLost = []
    let time1 = Teams(infoMtach.participants[0].teamId)
    let time2 = Teams(infoMtach.participants[5].teamId)
    


    emojiteam = (id) =>{
        let emojiTeam = infoMtach.participants[id].teamId == 100 ? '🔹' : red

        return emojiTeam
    }
    
    
    arrayWinner.push(infoMtach.teams[0])

    arrayLost.push(infoMtach.teams[1])

    let lost = arrayLost.filter(w => w.win == 'Win')
    let winner = arrayWinner.filter(w => w.win == 'Fail')

    if(lost == '' && winner == '') {

        lost = arrayLost.filter(w => w.win == 'Fail')
        winner = arrayWinner.filter(w => w.win == 'Win') 


        embed.setTitle('Informações detalhadas da partida')
        .setColor('#170B3B')
        embed.setDescription([
            `Time vencedor: ${Teams(winner[0].teamId)} 🔹 `,
            `Modo de jogo: ${fila(infoMtach.queueId, client)}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`${emojiteam(0)} Time ${Teams(winner[0].teamId)} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${infoMtach.participantIdentities[0].player.summonerName} - **${infoMtach.participants[0].stats.kills}/${infoMtach.participants[0].stats.deaths}/${infoMtach.participants[0].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${infoMtach.participantIdentities[1].player.summonerName} - **${infoMtach.participants[1].stats.kills}/${infoMtach.participants[1].stats.deaths}/${infoMtach.participants[1].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${infoMtach.participantIdentities[2].player.summonerName} - **${infoMtach.participants[2].stats.kills}/${infoMtach.participants[2].stats.deaths}/${infoMtach.participants[2].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${infoMtach.participantIdentities[3].player.summonerName} - **${infoMtach.participants[3].stats.kills}/${infoMtach.participants[3].stats.deaths}/${infoMtach.participants[3].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${infoMtach.participantIdentities[4].player.summonerName} - **${infoMtach.participants[4].stats.kills}/${infoMtach.participants[4].stats.deaths}/${infoMtach.participants[4].stats.assists}**`,

        ], true)
        embed.addField(`Runas`, [
            `${getRunesEmoji(infoMtach.participants[0].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[0].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[0].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[0].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[0].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[0].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[1].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[1].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[1].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[1].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[1].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[1].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[2].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[2].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[2].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[2].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[2].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[2].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[3].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[3].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[3].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[3].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[3].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[3].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[4].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[4].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[4].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[4].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[4].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[4].stats.perk3, client)}`,
        ], true)
        embed.addField(`Build`, [
            `${getEmojiItems(infoMtach.participants[0].stats.item0, client)}${getEmojiItems(infoMtach.participants[0].stats.item1, client)} ${getEmojiItems(infoMtach.participants[0].stats.item2,client)}${getEmojiItems(infoMtach.participants[0].stats.item3, client)}${getEmojiItems(infoMtach.participants[0].stats.item4, client)}${getEmojiItems(infoMtach.participants[0].stats.item5, client)}${getEmojiItems(infoMtach.participants[0].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[1].stats.item0, client)}${getEmojiItems(infoMtach.participants[1].stats.item1, client)} ${getEmojiItems(infoMtach.participants[1].stats.item2,client)}${getEmojiItems(infoMtach.participants[1].stats.item3, client)}${getEmojiItems(infoMtach.participants[1].stats.item4, client)}${getEmojiItems(infoMtach.participants[1].stats.item5, client)}${getEmojiItems(infoMtach.participants[1].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[2].stats.item0, client)}${getEmojiItems(infoMtach.participants[2].stats.item1, client)} ${getEmojiItems(infoMtach.participants[2].stats.item2,client)}${getEmojiItems(infoMtach.participants[2].stats.item3, client)}${getEmojiItems(infoMtach.participants[2].stats.item4, client)}${getEmojiItems(infoMtach.participants[2].stats.item5, client)}${getEmojiItems(infoMtach.participants[2].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[3].stats.item0, client)}${getEmojiItems(infoMtach.participants[3].stats.item1, client)} ${getEmojiItems(infoMtach.participants[3].stats.item2,client)}${getEmojiItems(infoMtach.participants[3].stats.item3, client)}${getEmojiItems(infoMtach.participants[3].stats.item4, client)}${getEmojiItems(infoMtach.participants[3].stats.item5, client)}${getEmojiItems(infoMtach.participants[3].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[4].stats.item0, client)}${getEmojiItems(infoMtach.participants[4].stats.item1, client)} ${getEmojiItems(infoMtach.participants[4].stats.item2,client)}${getEmojiItems(infoMtach.participants[4].stats.item3, client)}${getEmojiItems(infoMtach.participants[4].stats.item4, client)}${getEmojiItems(infoMtach.participants[4].stats.item5, client)}${getEmojiItems(infoMtach.participants[4].stats.item6, client)}`,
        ], true)


        embed.addField(`${emojiteam(5)} Time ${Teams(lost[0].teamId)} `, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${infoMtach.participantIdentities[5].player.summonerName} - **${infoMtach.participants[5].stats.kills}/${infoMtach.participants[5].stats.deaths}/${infoMtach.participants[5].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${infoMtach.participantIdentities[6].player.summonerName} - **${infoMtach.participants[6].stats.kills}/${infoMtach.participants[6].stats.deaths}/${infoMtach.participants[6].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${infoMtach.participantIdentities[7].player.summonerName} - **${infoMtach.participants[7].stats.kills}/${infoMtach.participants[7].stats.deaths}/${infoMtach.participants[7].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${infoMtach.participantIdentities[8].player.summonerName} - **${infoMtach.participants[8].stats.kills}/${infoMtach.participants[8].stats.deaths}/${infoMtach.participants[8].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${infoMtach.participantIdentities[9].player.summonerName} - **${infoMtach.participants[9].stats.kills}/${infoMtach.participants[9].stats.deaths}/${infoMtach.participants[9].stats.assists}**`,

        ], true)
        embed.addField(`Runas`, [
            `${getRunesEmoji(infoMtach.participants[5].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[5].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[5].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[5].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[5].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[5].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[6].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[6].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[6].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[6].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[6].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[6].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[7].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[7].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[7].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[7].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[7].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[7].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[8].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[8].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[8].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[8].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[8].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[8].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[9].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[9].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[9].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[9].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[9].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[9].stats.perk3, client)}`,
        ], true)
        embed.addField(`Build`, [
            `${getEmojiItems(infoMtach.participants[5].stats.item0, client)}${getEmojiItems(infoMtach.participants[5].stats.item1, client)} ${getEmojiItems(infoMtach.participants[5].stats.item2,client)}${getEmojiItems(infoMtach.participants[5].stats.item3, client)}${getEmojiItems(infoMtach.participants[5].stats.item4, client)}${getEmojiItems(infoMtach.participants[5].stats.item5, client)}${getEmojiItems(infoMtach.participants[5].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[6].stats.item0, client)}${getEmojiItems(infoMtach.participants[6].stats.item1, client)} ${getEmojiItems(infoMtach.participants[6].stats.item2,client)}${getEmojiItems(infoMtach.participants[6].stats.item3, client)}${getEmojiItems(infoMtach.participants[6].stats.item4, client)}${getEmojiItems(infoMtach.participants[6].stats.item5, client)}${getEmojiItems(infoMtach.participants[6].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[7].stats.item0, client)}${getEmojiItems(infoMtach.participants[7].stats.item1, client)} ${getEmojiItems(infoMtach.participants[7].stats.item2,client)}${getEmojiItems(infoMtach.participants[7].stats.item3, client)}${getEmojiItems(infoMtach.participants[7].stats.item4, client)}${getEmojiItems(infoMtach.participants[7].stats.item5, client)}${getEmojiItems(infoMtach.participants[7].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[8].stats.item0, client)}${getEmojiItems(infoMtach.participants[8].stats.item1, client)} ${getEmojiItems(infoMtach.participants[8].stats.item2,client)}${getEmojiItems(infoMtach.participants[8].stats.item3, client)}${getEmojiItems(infoMtach.participants[8].stats.item4, client)}${getEmojiItems(infoMtach.participants[8].stats.item5, client)}${getEmojiItems(infoMtach.participants[8].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[9].stats.item0, client)}${getEmojiItems(infoMtach.participants[9].stats.item1, client)} ${getEmojiItems(infoMtach.participants[9].stats.item2,client)}${getEmojiItems(infoMtach.participants[9].stats.item3, client)}${getEmojiItems(infoMtach.participants[9].stats.item4, client)}${getEmojiItems(infoMtach.participants[9].stats.item5, client)}${getEmojiItems(infoMtach.participants[9].stats.item6, client)}`,
        ], true)

        
    }
    
    
    else {

        embed.setTitle('Informações detalhadas da partida')
        .setColor('#170B3B')
        embed.setDescription([
            `Time vencedor: ${Teams(lost[0].teamId)} 🔹 `,
            `Modo de jogo: ${fila(infoMtach.queueId, client)}`,
            `Duração da partida: ${tempoPartida.toFixed(0)} minutos`
        ])
        embed.addField(`${emojiteam(0)} Time ${time1} `, [
            `${getChampionEmoji(client, infoMtach.participants[0].championId)} ${infoMtach.participantIdentities[0].player.summonerName} - **${infoMtach.participants[0].stats.kills}/${infoMtach.participants[0].stats.deaths}/${infoMtach.participants[0].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[1].championId)} ${infoMtach.participantIdentities[1].player.summonerName} - **${infoMtach.participants[1].stats.kills}/${infoMtach.participants[1].stats.deaths}/${infoMtach.participants[1].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[2].championId)} ${infoMtach.participantIdentities[2].player.summonerName} - **${infoMtach.participants[2].stats.kills}/${infoMtach.participants[2].stats.deaths}/${infoMtach.participants[2].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[3].championId)} ${infoMtach.participantIdentities[3].player.summonerName} - **${infoMtach.participants[3].stats.kills}/${infoMtach.participants[3].stats.deaths}/${infoMtach.participants[3].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[4].championId)} ${infoMtach.participantIdentities[4].player.summonerName} - **${infoMtach.participants[4].stats.kills}/${infoMtach.participants[4].stats.deaths}/${infoMtach.participants[4].stats.assists}**`,

        ], true)
        embed.addField(`Runas`, [
            `${getRunesEmoji(infoMtach.participants[0].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[0].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[0].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[0].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[0].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[0].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[1].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[1].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[1].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[1].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[1].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[1].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[2].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[2].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[2].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[2].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[2].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[2].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[3].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[3].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[3].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[3].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[3].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[3].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[4].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[4].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[4].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[4].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[4].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[4].stats.perk3, client)}`,
        ], true)
        embed.addField(`Build`, [
            `${getEmojiItems(infoMtach.participants[0].stats.item0, client)}${getEmojiItems(infoMtach.participants[0].stats.item1, client)} ${getEmojiItems(infoMtach.participants[0].stats.item2,client)}${getEmojiItems(infoMtach.participants[0].stats.item3, client)}${getEmojiItems(infoMtach.participants[0].stats.item4, client)}${getEmojiItems(infoMtach.participants[0].stats.item5, client)}${getEmojiItems(infoMtach.participants[0].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[1].stats.item0, client)}${getEmojiItems(infoMtach.participants[1].stats.item1, client)} ${getEmojiItems(infoMtach.participants[1].stats.item2,client)}${getEmojiItems(infoMtach.participants[1].stats.item3, client)}${getEmojiItems(infoMtach.participants[1].stats.item4, client)}${getEmojiItems(infoMtach.participants[1].stats.item5, client)}${getEmojiItems(infoMtach.participants[1].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[2].stats.item0, client)}${getEmojiItems(infoMtach.participants[2].stats.item1, client)} ${getEmojiItems(infoMtach.participants[2].stats.item2,client)}${getEmojiItems(infoMtach.participants[2].stats.item3, client)}${getEmojiItems(infoMtach.participants[2].stats.item4, client)}${getEmojiItems(infoMtach.participants[2].stats.item5, client)}${getEmojiItems(infoMtach.participants[2].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[3].stats.item0, client)}${getEmojiItems(infoMtach.participants[3].stats.item1, client)} ${getEmojiItems(infoMtach.participants[3].stats.item2,client)}${getEmojiItems(infoMtach.participants[3].stats.item3, client)}${getEmojiItems(infoMtach.participants[3].stats.item4, client)}${getEmojiItems(infoMtach.participants[3].stats.item5, client)}${getEmojiItems(infoMtach.participants[3].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[4].stats.item0, client)}${getEmojiItems(infoMtach.participants[4].stats.item1, client)} ${getEmojiItems(infoMtach.participants[4].stats.item2,client)}${getEmojiItems(infoMtach.participants[4].stats.item3, client)}${getEmojiItems(infoMtach.participants[4].stats.item4, client)}${getEmojiItems(infoMtach.participants[4].stats.item5, client)}${getEmojiItems(infoMtach.participants[4].stats.item6, client)}`,
        ], true)


        embed.addField(`${emojiteam(5)} Time ${time2} `, [
            `${getChampionEmoji(client, infoMtach.participants[5].championId)} ${infoMtach.participantIdentities[5].player.summonerName} - **${infoMtach.participants[5].stats.kills}/${infoMtach.participants[5].stats.deaths}/${infoMtach.participants[5].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[6].championId)} ${infoMtach.participantIdentities[6].player.summonerName} - **${infoMtach.participants[6].stats.kills}/${infoMtach.participants[6].stats.deaths}/${infoMtach.participants[6].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[7].championId)} ${infoMtach.participantIdentities[7].player.summonerName} - **${infoMtach.participants[7].stats.kills}/${infoMtach.participants[7].stats.deaths}/${infoMtach.participants[7].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[8].championId)} ${infoMtach.participantIdentities[8].player.summonerName} - **${infoMtach.participants[8].stats.kills}/${infoMtach.participants[8].stats.deaths}/${infoMtach.participants[8].stats.assists}**`,
            `${getChampionEmoji(client, infoMtach.participants[9].championId)} ${infoMtach.participantIdentities[9].player.summonerName} - **${infoMtach.participants[9].stats.kills}/${infoMtach.participants[9].stats.deaths}/${infoMtach.participants[9].stats.assists}**`,

        ], true)
        embed.addField(`Runas`, [
            `${getRunesEmoji(infoMtach.participants[5].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[5].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[5].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[5].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[5].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[5].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[6].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[6].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[6].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[6].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[6].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[6].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[7].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[7].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[7].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[7].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[7].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[7].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[8].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[8].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[8].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[8].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[8].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[8].stats.perk3, client)}`,
            `${getRunesEmoji(infoMtach.participants[9].stats.perkPrimaryStyle, client)}${getRunesEmoji(infoMtach.participants[9].stats.perkSubStyle, client)} ${getRunesEmoji(infoMtach.participants[9].stats.perk0,client)}${getRunesEmoji(infoMtach.participants[9].stats.perk1, client)}${getRunesEmoji(infoMtach.participants[9].stats.perk2, client)}${getRunesEmoji(infoMtach.participants[9].stats.perk3, client)}`,
        ], true)
        embed.addField(`Build`, [
            `${getEmojiItems(infoMtach.participants[5].stats.item0, client)}${getEmojiItems(infoMtach.participants[5].stats.item1, client)} ${getEmojiItems(infoMtach.participants[5].stats.item2,client)}${getEmojiItems(infoMtach.participants[5].stats.item3, client)}${getEmojiItems(infoMtach.participants[5].stats.item4, client)}${getEmojiItems(infoMtach.participants[5].stats.item5, client)}${getEmojiItems(infoMtach.participants[5].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[6].stats.item0, client)}${getEmojiItems(infoMtach.participants[6].stats.item1, client)} ${getEmojiItems(infoMtach.participants[6].stats.item2,client)}${getEmojiItems(infoMtach.participants[6].stats.item3, client)}${getEmojiItems(infoMtach.participants[6].stats.item4, client)}${getEmojiItems(infoMtach.participants[6].stats.item5, client)}${getEmojiItems(infoMtach.participants[6].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[7].stats.item0, client)}${getEmojiItems(infoMtach.participants[7].stats.item1, client)} ${getEmojiItems(infoMtach.participants[7].stats.item2,client)}${getEmojiItems(infoMtach.participants[7].stats.item3, client)}${getEmojiItems(infoMtach.participants[7].stats.item4, client)}${getEmojiItems(infoMtach.participants[7].stats.item5, client)}${getEmojiItems(infoMtach.participants[7].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[8].stats.item0, client)}${getEmojiItems(infoMtach.participants[8].stats.item1, client)} ${getEmojiItems(infoMtach.participants[8].stats.item2,client)}${getEmojiItems(infoMtach.participants[8].stats.item3, client)}${getEmojiItems(infoMtach.participants[8].stats.item4, client)}${getEmojiItems(infoMtach.participants[8].stats.item5, client)}${getEmojiItems(infoMtach.participants[8].stats.item6, client)}`,
            `${getEmojiItems(infoMtach.participants[9].stats.item0, client)}${getEmojiItems(infoMtach.participants[9].stats.item1, client)} ${getEmojiItems(infoMtach.participants[9].stats.item2,client)}${getEmojiItems(infoMtach.participants[9].stats.item3, client)}${getEmojiItems(infoMtach.participants[9].stats.item4, client)}${getEmojiItems(infoMtach.participants[9].stats.item5, client)}${getEmojiItems(infoMtach.participants[9].stats.item6, client)}`,
        ], true)


        
        
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
