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

    console.log(name_id)

    getSummonerId(name_id).then(async summoner => {
        //console.log(args[1])

        let plataformMatch = await matchID(summoner.accountId)
        let matchIDs = plataformMatch.matches
        

        const matchEmbed = new Discord.MessageEmbed()
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

            // let emb = await message.channel.send(matchEmbed)
            // await emb.react('1️⃣')
            // await emb.react('2️⃣')
            // await emb.react('3️⃣')
            // await emb.react('4️⃣')
            // await emb.react('5️⃣')

            // const collector = emb.createReactionCollector(filter, { max: undefined});

            // collector.on('collect', async (reaction, user) => {

            //     const embedEdit = new Discord.MessageEmbed()

            //     if(reaction.emoji.name == '1️⃣') return emb.edit(matchEmbed)
            //     else if (reaction.emoji.name == '2️⃣') {

            //         embedEdit.setAuthor(`Histórico de partida de ${summoner.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.addField('Resultado/Campeão/KDA', [
            //             `${await data(matchIDs[10].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[11].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[12].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[13].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[14].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[15].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[16].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[17].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[18].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[19].gameId, summoner.name, client)}`
                    
            //         ], true)
            //         embedEdit.addField('Spell/Farm', [
            //             `${await matchSpell(matchIDs[10].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[11].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[12].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[13].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[14].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[15].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[16].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[17].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[18].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[19].gameId, summoner.name, client)}`
            //         ], true)
            //         embedEdit.addField('GAME ID ', [
            //             `🆔 **${matchIDs[10].gameId}**`,
            //             `🆔 **${matchIDs[11].gameId}**`,
            //             `🆔 **${matchIDs[12].gameId}**`,
            //             `🆔 **${matchIDs[13].gameId}**`,
            //             `🆔 **${matchIDs[14].gameId}**`,
            //             `🆔 **${matchIDs[15].gameId}**`,
            //             `🆔 **${matchIDs[16].gameId}**`,
            //             `🆔 **${matchIDs[17].gameId}**`,
            //             `🆔 **${matchIDs[18].gameId}**`,
            //             `🆔 **${matchIDs[19].gameId}**`
            //         ], true)
            //         .setColor('#170B3B')
            //         .setFooter(`Para ver mais informações da partida digite ${prefix}gameid [GAMEID]`)
            //         emb.edit(embedEdit)
            //     }
            //     else if(reaction.emoji.name == '3️⃣') {
            //         embedEdit.setAuthor(`Histórico de partida de ${summoner.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.addField('Resultado/Campeão/KDA', [
            //             `${await data(matchIDs[20].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[21].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[22].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[23].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[24].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[25].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[26].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[27].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[28].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[29].gameId, summoner.name, client)}`
                    
            //         ], true)
            //         embedEdit.addField('Spell/Farm', [
            //             `${await matchSpell(matchIDs[20].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[21].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[22].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[23].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[24].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[25].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[26].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[27].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[28].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[29].gameId, summoner.name, client)}`
            //         ], true)
            //         embedEdit.addField('GAME ID ', [
            //             `🆔 **${matchIDs[20].gameId}**`,
            //             `🆔 **${matchIDs[21].gameId}**`,
            //             `🆔 **${matchIDs[22].gameId}**`,
            //             `🆔 **${matchIDs[23].gameId}**`,
            //             `🆔 **${matchIDs[24].gameId}**`,
            //             `🆔 **${matchIDs[25].gameId}**`,
            //             `🆔 **${matchIDs[26].gameId}**`,
            //             `🆔 **${matchIDs[27].gameId}**`,
            //             `🆔 **${matchIDs[28].gameId}**`,
            //             `🆔 **${matchIDs[29].gameId}**`
            //         ], true)
            //         .setColor('#170B3B')
            //         .setFooter(`Para ver mais informações da partida digite ${prefix}gameid [GAMEID]`)
            //         emb.edit(embedEdit)
            //     }
            //     else if(reaction.emoji.name == '4️⃣') {
            //         embedEdit.setAuthor(`Histórico de partida de ${summoner.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.addField('Resultado/Campeão/KDA', [
            //             `${await data(matchIDs[30].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[31].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[32].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[33].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[34].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[35].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[36].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[37].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[38].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[39].gameId, summoner.name, client)}`
                    
            //         ], true)
            //         embedEdit.addField('Spell/Farm', [
            //             `${await matchSpell(matchIDs[30].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[31].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[32].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[33].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[34].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[35].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[36].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[37].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[38].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[39].gameId, summoner.name, client)}`
            //         ], true)
            //         embedEdit.addField('GAME ID ', [
            //             `🆔 **${matchIDs[30].gameId}**`,
            //             `🆔 **${matchIDs[31].gameId}**`,
            //             `🆔 **${matchIDs[32].gameId}**`,
            //             `🆔 **${matchIDs[33].gameId}**`,
            //             `🆔 **${matchIDs[34].gameId}**`,
            //             `🆔 **${matchIDs[35].gameId}**`,
            //             `🆔 **${matchIDs[36].gameId}**`,
            //             `🆔 **${matchIDs[37].gameId}**`,
            //             `🆔 **${matchIDs[38].gameId}**`,
            //             `🆔 **${matchIDs[39].gameId}**`
            //         ], true)
            //         .setColor('#170B3B')
            //         .setFooter(`Para ver mais informações da partida digite ${prefix}gameid [GAMEID]`)
            //         emb.edit(embedEdit)
            //     }
            //     else if(reaction.emoji.name == '5️⃣'){
            //         embedEdit.setAuthor(`Histórico de partida de ${summoner.name}`, `https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
            //         embedEdit.addField('Resultado/Campeão/KDA', [
            //             `${await data(matchIDs[40].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[41].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[42].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[43].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[44].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[45].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[46].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[47].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[48].gameId, summoner.name, client)}`,
            //             `${await data(matchIDs[49].gameId, summoner.name, client)}`
                    
            //         ], true)
            //         embedEdit.addField('Spell/Farm', [
            //             `${await matchSpell(matchIDs[40].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[41].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[42].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[43].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[44].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[45].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[46].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[47].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[48].gameId, summoner.name, client)}`,
            //             `${await matchSpell(matchIDs[49].gameId, summoner.name, client)}`
            //         ], true)
            //         embedEdit.addField('GAME ID ', [
            //             `🆔 **${matchIDs[40].gameId}**`,
            //             `🆔 **${matchIDs[41].gameId}**`,
            //             `🆔 **${matchIDs[42].gameId}**`,
            //             `🆔 **${matchIDs[43].gameId}**`,
            //             `🆔 **${matchIDs[44].gameId}**`,
            //             `🆔 **${matchIDs[45].gameId}**`,
            //             `🆔 **${matchIDs[46].gameId}**`,
            //             `🆔 **${matchIDs[47].gameId}**`,
            //             `🆔 **${matchIDs[48].gameId}**`,
            //             `🆔 **${matchIDs[49].gameId}**`
            //         ], true)
            //         .setColor('#170B3B')
            //         .setFooter(`Para ver mais informações da partida digite ${prefix}gameid [GAMEID]`)
            //         emb.edit(embedEdit)
            //     }
                
            // })

        })
        
    }) .catch(async (err) => {
        console.log(err)
        message.channel.send('``` Jogador inexistente ```')
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
    
    
    return `${emoji} ${getChampionEmoji(client, champID)} ${IDtoName(champID)}- ${kills}/${deaths}/${assists}`


}

getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}
