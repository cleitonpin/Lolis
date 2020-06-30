const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../kayn')
//const { Kayn, REGIONS } = require('kayn')
const { getChampionEmoji, Teams, Spells } = require('./commonFunctions')

EmojiElos = (elos) => {
    switch(elos) {
        case 'IRON': return client.emojis.get("631528448665321472"); break;
        case 'BRONZE': return client.emojis.get("633781786865958952"); break;
        case 'SILVER': return client.emojis.get("633785110642294804"); break;
        case 'GOLD': return client.emojis.get("651479455897747486"); break;
        case 'PLATINUM': return client.emojis.get("633784209877762048"); break;
        case 'DIAMOND': return client.emojis.get("633783805655908364"); break;
        case 'MASTER': return client.emojis.get("633783098512900116"); break;
        case 'GRANDMASTER': return client.emojis.get("633782348357304328"); break;
        case 'CHALLENGER': return client.emojis.get("631536146014404608"); break;
    }
}

exports.run = async (client, message, args) => {
    if (args[0]) {
        //pegar id do player
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
            //pegar partida ao vivo
            kayn.CurrentGame.by.summonerID(summoner.id)
                .region(kayn.regions.BRAZIL)
                .callback(function(err, CurrentGame) {
                //É EM PARTIDA.JS
                
                kayn.League.Entries.by.summonerID(`${CurrentGame.participants[0].summonerID}`)
                callback(function(err, summonerLeague) {
                    console.log(summonerLeague)
                    const embed = new Discord.RichEmbed()
                    
                    //console.log(CurrentGame)     
                    //console.log(summonerLeague)  
                    console.log(summonerLeague)

                    if(CurrentGame == null) {
                        const emb = new Discord.RichEmbed()
                            .setColor('0x0099ff')
                            .setTitle('O jogador não está em partida')
                        message.channel.send(emb)
                    }
                    //@@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    else if(CurrentGame.bannedChampions) {
                        if(CurrentGame.gameMode== 'CLASSIC') 
                            var mapa = 'Summoners Rift'
                        else if(CurrentGame.gameMode== 'URF') 
                            var mapa = 'URF'

                        embed.setColor('#170B3B')
                        embed.setTitle(`**Partida ao vivo de ${args[0]}**`)
                        embed.addField(`***Time ${Teams(CurrentGame.participants[0].teamId)}:***`, `${getChampionEmoji(CurrentGame.participants[0].championId)} \u200b __**${CurrentGame.participants[0].summonerName}**__ ${EmojiElos(summonerLeague[0].tier)}\u200b ${Spells(CurrentGame.participants[0].spell1Id)}${Spells(CurrentGame.participants[0].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[1].championId)} \u200b __**${CurrentGame.participants[1].summonerName}**__  ${EmojiElos(summonerLeague[1].tier) } \u200b ${Spells(CurrentGame.participants[1].spell1Id)}${Spells(CurrentGame.participants[1].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[2].championId)} \u200b __**${CurrentGame.participants[2].summonerName}**__ \u200b ${Spells(CurrentGame.participants[2].spell1Id)}${Spells(CurrentGame.participants[2].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[3].championId)} \u200b __**${CurrentGame.participants[3].summonerName}**__ \u200b ${Spells(CurrentGame.participants[3].spell1Id)}${Spells(CurrentGame.participants[3].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[4].championId)} \u200b __**${CurrentGame.participants[4].summonerName}**__ ${EmojiElos(summonerLeague[4].tier)} \u200b ${Spells(CurrentGame.participants[4].spell1Id)}${Spells(CurrentGame.participants[4].spell2Id)}`, true)
                        embed.addField(`***Time ${Teams(CurrentGame.participants[5].teamId)}:***`, `${getChampionEmoji(CurrentGame.participants[5].championId)} \u200b __**${CurrentGame.participants[5].summonerName}**__ ${EmojiElos(summonerLeague[5].tier)}\u200b ${Spells(CurrentGame.participants[5].spell1Id)}${Spells(CurrentGame.participants[5].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[6].championId)} \u200b __**${CurrentGame.participants[6].summonerName}**__ \u200b ${Spells(CurrentGame.participants[6].spell1Id)}${Spells(CurrentGame.participants[6].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[7].championId)} \u200b __**${CurrentGame.participants[7].summonerName}**__ \u200b ${Spells(CurrentGame.participants[7].spell1Id)}${Spells(CurrentGame.participants[7].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[8].championId)} \u200b __**${CurrentGame.participants[8].summonerName}**__ \u200b ${Spells(CurrentGame.participants[8].spell1Id)}${Spells(CurrentGame.participants[8].spell2Id)}\n${getChampionEmoji(CurrentGame.participants[9].championId)} \u200b __**${CurrentGame.participants[9].summonerName}**__ \u200b ${Spells(CurrentGame.participants[9].spell1Id)}${Spells(CurrentGame.participants[9].spell2Id)}`, true)
                        embed.addField('\u200b', '\u200b')
                        embed.addField(`Bans do time ${Teams(CurrentGame.bannedChampions[0].teamId)}`, `${getChampionEmoji(CurrentGame.bannedChampions[0].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[1].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[2].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[3].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[4].championId)}`, true)
                        embed.addField(`Bans do time ${Teams(CurrentGame.bannedChampions[5].teamId)}`, `${getChampionEmoji(CurrentGame.bannedChampions[5].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[6].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[7].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[8].championId)} ${getChampionEmoji(CurrentGame.bannedChampions[9].championId)}` ,true)
                        embed.setFooter(`Jogando no ${mapa} (RANKED/ALTERNADA)`) 

                        return message.channel.send(embed)     
                    }
                })
            })
        })
    }
}
