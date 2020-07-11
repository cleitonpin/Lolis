const { matchID } = require("../../api/match-v4")
const Discord = require("discord.js")
const kayn = require('../../kayn')
const matchInfoV4 = require("../../api/match-info-v4")
const versions = require('../../api/versions')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    Spells
} = require('../commonFunctions')
const { prefix } = require('../../config.json')

exports.run = async (client, message, args) => {

    let msg = message.channel.send('```Analisando partida...```')
    let name_id = args.join('')

    getSummonerId(name_id).then(async summoner => {


        let plataformMatch = await matchID(summoner.accountId)
        let matchIDs = plataformMatch.matches
        

        const matchEmbed = new Discord.MessageEmbed()
        .setColor('#170B3B')
        matchEmbed.setAuthor(`Histórico de partida de ${summoner.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
        matchEmbed.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
        .setColor('#170B3B')
        if(matchIDs.length < 10) {
            matchEmbed.setDescription('Este jogador não joga à tempos.')
        } else{

            matchEmbed.addField('Resultado/Campeão/KDA', [
                `${await data(matchIDs[0].gameId, summoner.name, client)}`,
                `${await data(matchIDs[1].gameId, summoner.name, client)}`,
                `${await data(matchIDs[2].gameId, summoner.name, client)}`,
                `${await data(matchIDs[3].gameId, summoner.name, client)}`,
                `${await data(matchIDs[4].gameId, summoner.name, client)}`,
                `${await data(matchIDs[5].gameId, summoner.name, client)}`,
                `${await data(matchIDs[6].gameId, summoner.name, client)}`,
                `${await data(matchIDs[7].gameId, summoner.name, client)}`,
                `${await data(matchIDs[8].gameId, summoner.name, client)}`,
                `${await data(matchIDs[9].gameId, summoner.name, client)}`
            
            ], true)
            matchEmbed.addField('Spell/Farm', [
                `${await matchSpell(matchIDs[0].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[1].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[2].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[3].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[4].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[5].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[6].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[7].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[8].gameId, summoner.name, client)}`,
                `${await matchSpell(matchIDs[9].gameId, summoner.name, client)}`
            ], true)
            matchEmbed.addField('GAME ID ', [
                `🆔 **${matchIDs[0].gameId}**`,
                `🆔 **${matchIDs[1].gameId}**`,
                `🆔 **${matchIDs[2].gameId}**`,
                `🆔 **${matchIDs[3].gameId}**`,
                `🆔 **${matchIDs[4].gameId}**`,
                `🆔 **${matchIDs[5].gameId}**`,
                `🆔 **${matchIDs[6].gameId}**`,
                `🆔 **${matchIDs[7].gameId}**`,
                `🆔 **${matchIDs[8].gameId}**`,
                `🆔 **${matchIDs[9].gameId}**`
            ], true)
            .setFooter(`Para ver mais informações da partida digite ${prefix}gameid [GAMEID]`)
        }



        await msg.then(async ar => {
            ar.delete()
            message.channel.send(matchEmbed)
            const filter = (reaction, user) => {
                switch(reaction.emoji.name) {
                    case "1️⃣":  return user.id === message.author.id
                    case "2️⃣":  return user.id === message.author.id
                    case "3️⃣":  return user.id === message.author.id
                    case "4️⃣":  return user.id === message.author.id
                    case "5️⃣":  return user.id === message.author.id
                }
            }

        })
        
    }) .catch(async (err) => {

        await msg.then(async ar => {
            ar.delete()
            const ERROEmbed = new Discord.MessageEmbed()
            .setColor('#170B3B')
            .setTitle('Histórico de partidas')
            .setDescription('O jogador informado **_não existe_**')
            message.channel.send(ERROEmbed)
        })
        //console.log(err)
    })

}
// 

matchSpell = async (id, name, client) => {

    let infoMtach = await matchInfoV4.data(id)

    for(var ele of infoMtach.participantIdentities) {
        let array = []
        array.push(ele)
        
        let nameParticipant = array.find(n => n.player.summonerName == name)

        if(nameParticipant) {

            let info = infoMtach.participants.find(f => f.participantId == nameParticipant.participantId)

            var spell1 = info.spell1Id
            var spell2 = info.spell2Id

            var totalMinions = info.stats.totalMinionsKilled
            var neutralMinions = info.stats.neutralMinionsKilled
            var resultMinions = totalMinions + neutralMinions
            
        }
        
    }
    
    if(!Spells(client, spell1) && !Spells(client, spell2) && !resultMinions) {
        return 'N/A'
    }

    return `${Spells(client, spell1)}${Spells(client, spell2)} - ${resultMinions} CS`


}
data = async (id, name, client) => {

    
    let infoMtach = await matchInfoV4.data(id)
    
    for(var ele of infoMtach.participantIdentities) {
        let array = []
        array.push(ele)
        
        let nameParticipant = array.find(n => n.player.summonerName == name)

        if(nameParticipant) {


            let info = infoMtach.participants.find(f => f.participantId == nameParticipant.participantId)

            var champID = info.championId
            var spell1 = info.spell1Id
            var spell2 = info.spell2Id
            var kills = info.stats.kills
            var deaths = info.stats.deaths
            var assists = info.stats.assists
            var minions = info.stats.totalMinionsKilled
            let teamId = info.teamId

            let result;
            var emoji;

            infoMtach.teams[0].teamId == teamId ? result = infoMtach.teams[0].win : false
            infoMtach.teams[1].teamId == teamId ? result = infoMtach.teams[1].win : false
            
            

            result == 'Win' ? emoji = client.emojis.cache.get('729744152681644152') : emoji = client.emojis.cache.get('729744152224464967')
            
        }
        
    }
    
    
    if(!emoji && !getChampionEmoji(client, champID) && !IDtoName(champID) && !kills && !deaths && !assists) {
        return `N/A`
    } 

    return `${emoji} ${getChampionEmoji(client, champID)} ${IDtoName(champID)}- ${kills}/${deaths}/${assists}`


}

getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}
