
const Discord = require('discord.js')
const kayn = require('../../kayn')
const embeds = require('../../functions/embeds')
const { getChampionEmoji, Teams, Spells, getEloEmoji, getRunesEmoji} = require('../commonFunctions')

exports.run = async (client, message, args) => {

    let SR = client.emojis.cache.get('730240704009338930')
    let red = client.emojis.cache.get('730243169241006172')
    let live = client.emojis.cache.get('730260574331600908')

    let summoner_Name = args.join('').trim()
    let dataSumoner = await getSummonerId(summoner_Name)
    .catch(err => {
        return
    })
    if(!dataSumoner) {
        const emb = new Discord.MessageEmbed()
        .setColor('#170B3B')
        .setTitle(`${live} Partida ao vivo`)
        .setDescription('O jogador informado **_não existe_**.')
        message.channel.send(emb)
    } else {
        let CurrentGame = await getCurrentLive(dataSumoner.id)
        .catch(err => {
            return
        }) 
        
        
        if (summoner_Name) {


            
            if(CurrentGame == null) {
                const emb = new Discord.MessageEmbed()
                .setColor('#')
                .setTitle(`${live} Partida ao vivo`)
                .setDescription('O jogador informado não está em partida.')
                message.channel.send(emb)
            }


            // @@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            else if(CurrentGame.bannedChampions) {
                
                
            let tempoP = (CurrentGame.gameLength / 60 ).toFixed(0).toString()
            let segundos = (CurrentGame.gameLength / 60 ).toFixed(2).toString()
            let t = segundos.slice(3)
            let r = tempoP.length == 1 ? '0'+tempoP + ':' + t : tempoP + ':' + t

                if(CurrentGame.gameMode== 'CLASSIC') var mapa = `Summoner's Rift`
                else mapa = CurrentGame.gameMode

                emojiteam = (id) =>{
                    let emojiTeam = CurrentGame.participants[id].teamId == 100 ? '🔹' : red

                    return emojiTeam
                }

                const embed = new Discord.MessageEmbed()



                .setColor('#170B3B')
                .setTitle(`${live} Partida ao vivo`)
                .setDescription(`${SR} ${mapa} | ${r}`)
                .addField(`${emojiteam(0)} Time ${Teams(CurrentGame.participants[0].teamId)}:`, [
                        `${getRunesEmoji(CurrentGame.participants[0].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[0].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[0].championId)} ${threePoints(CurrentGame.participants[0].summonerName)} ${Spells(client, CurrentGame.participants[0].spell1Id) }${Spells(client, CurrentGame.participants[0].spell2Id)}`,
                        `${getRunesEmoji(CurrentGame.participants[1].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[1].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[1].championId)} ${threePoints(CurrentGame.participants[1].summonerName)} ${Spells(client, CurrentGame.participants[1].spell1Id) }${Spells(client, CurrentGame.participants[1].spell2Id)}`,
                        `${getRunesEmoji(CurrentGame.participants[2].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[2].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[2].championId)} ${threePoints(CurrentGame.participants[2].summonerName)} ${Spells(client, CurrentGame.participants[2].spell1Id) }${Spells(client, CurrentGame.participants[2].spell2Id)}`,
                        `${getRunesEmoji(CurrentGame.participants[3].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[3].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[3].championId)} ${threePoints(CurrentGame.participants[3].summonerName)} ${Spells(client, CurrentGame.participants[3].spell1Id) }${Spells(client, CurrentGame.participants[3].spell2Id)}`,
                        `${getRunesEmoji(CurrentGame.participants[4].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[4].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[4].championId)} ${threePoints(CurrentGame.participants[4].summonerName)} ${Spells(client, CurrentGame.participants[4].spell1Id) }${Spells(client, CurrentGame.participants[4].spell2Id)}`
                ], true)
                .addField('Rank', [
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[0].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[0].summonerId)} ${await embeds.rank(CurrentGame.participants[0].summonerId)} (${await embeds.LP(CurrentGame.participants[0].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[1].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[1].summonerId)} ${await embeds.rank(CurrentGame.participants[1].summonerId)} (${await embeds.LP(CurrentGame.participants[1].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[2].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[2].summonerId)} ${await embeds.rank(CurrentGame.participants[2].summonerId)} (${await embeds.LP(CurrentGame.participants[2].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[3].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[3].summonerId)} ${await embeds.rank(CurrentGame.participants[3].summonerId)} (${await embeds.LP(CurrentGame.participants[3].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[4].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[4].summonerId)} ${await embeds.rank(CurrentGame.participants[4].summonerId)} (${await embeds.LP(CurrentGame.participants[4].summonerId)} PDL's)`,
                ], true)
                .addField('\u200b', '\u200b', true)
                .addField(`${emojiteam(5)} Time ${Teams(CurrentGame.participants[5].teamId)}:`, [
                    `${getRunesEmoji(CurrentGame.participants[5].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[5].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[5].championId)} ${threePoints(CurrentGame.participants[5].summonerName)} ${Spells(client, CurrentGame.participants[5].spell1Id) }${Spells(client, CurrentGame.participants[5].spell2Id)}`,
                    `${getRunesEmoji(CurrentGame.participants[6].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[6].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[6].championId)} ${threePoints(CurrentGame.participants[6].summonerName)} ${Spells(client, CurrentGame.participants[6].spell1Id) }${Spells(client, CurrentGame.participants[6].spell2Id)}`,
                    `${getRunesEmoji(CurrentGame.participants[7].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[7].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[7].championId)} ${threePoints(CurrentGame.participants[7].summonerName)} ${Spells(client, CurrentGame.participants[7].spell1Id) }${Spells(client, CurrentGame.participants[7].spell2Id)}`,
                    `${getRunesEmoji(CurrentGame.participants[8].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[8].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[8].championId)} ${threePoints(CurrentGame.participants[8].summonerName)} ${Spells(client, CurrentGame.participants[8].spell1Id) }${Spells(client, CurrentGame.participants[8].spell2Id)}`,
                    `${getRunesEmoji(CurrentGame.participants[9].perks.perkStyle, client)} ${getRunesEmoji(CurrentGame.participants[9].perks.perkSubStyle, client)} ${getChampionEmoji(client,CurrentGame.participants[9].championId)} ${threePoints(CurrentGame.participants[9].summonerName)} ${Spells(client, CurrentGame.participants[9].spell1Id) }${Spells(client, CurrentGame.participants[9].spell2Id)}`
                ], true)
                .addField('Rank', [
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[5].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[5].summonerId)} ${await embeds.rank(CurrentGame.participants[5].summonerId)} (${await embeds.LP(CurrentGame.participants[5].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[6].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[6].summonerId)} ${await embeds.rank(CurrentGame.participants[6].summonerId)} (${await embeds.LP(CurrentGame.participants[6].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[7].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[7].summonerId)} ${await embeds.rank(CurrentGame.participants[7].summonerId)} (${await embeds.LP(CurrentGame.participants[7].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[8].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[8].summonerId)} ${await embeds.rank(CurrentGame.participants[8].summonerId)} (${await embeds.LP(CurrentGame.participants[8].summonerId)} PDL's)`,
                    `${getEloEmoji(client, await embeds.elo(CurrentGame.participants[9].summonerId))} ${await embeds.eloTranslate(CurrentGame.participants[9].summonerId)} ${await embeds.rank(CurrentGame.participants[9].summonerId)} (${await embeds.LP(CurrentGame.participants[9].summonerId)} PDL's)`,
                ], true)
                .addField('\u200b', '\u200b', true)
                .addField(`Bans`, [
                    `${emojiteam(0)} ${getChampionEmoji(client,CurrentGame.bannedChampions[0].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[1].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[2].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[3].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[4].championId)}`,
                    `${emojiteam(5)} ${getChampionEmoji(client,CurrentGame.bannedChampions[5].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[6].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[7].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[8].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[9].championId)}`,
                ], true)

                message.channel.send(embed)
        }
                
        }
    }
}

threePoints = (name) => {

    if(name.length > 7) {

        var cort = name.slice(0, 7)


    } else {
        return `**${name}**`
    }

    return `**${cort}...**`
}


getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}

getCurrentLive = async(id) => {
    return await kayn.kaynObject.CurrentGame.by.summonerID(id)
}

titleize = (text) => {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}
