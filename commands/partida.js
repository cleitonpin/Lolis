// const Discord = require('discord.js')
// const client = new Discord.Client()
// const kayn = require('./kayn')
// //const { Kayn, REGIONS } = require('kayn')
// const { checkSkin, Bans, Teams, Spells } = require('./commonFunctions')

// exports.run = async (client, message, args) => {

//     let summoner_Name = args.join('').trim()
//     console.log(summoner_Name)
//     if (summoner_Name) {
//         //pegar id do player
//         kayn.kaynObject.Summoner.by.name(`${summoner_Name}`)
//         .callback(function(err, summoner) {
//             console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
//             //fim pegar id
//             if (err) console.log(err)
//             //pegar partida ao vivo
//             kayn.kaynObject.CurrentGame.by.summonerID(summoner.id)

//             .region(kayn.regions.BRAZIL)
//             .callback(function(err, CurrentGame) {
//                 //message.channel.send(`${Spells(client,1)} dsad`)
//                 if (err) console.log(err)
//                 if(CurrentGame == null) {
//                     const emb = new Discord.RichEmbed()
//                     .setColor('0x0099ff')
//                     .setTitle('O jogador não está em partida')
//                     message.channel.send(emb)
//                 }
//                 // @@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//                 else if(CurrentGame.bannedChampions) {
//                     if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                    
//                     const embed = new Discord.RichEmbed()
//                     .setColor('#170B3B')
//                     .setTitle(`**Partida ao vivo de ${args[0]}**`)
//                     .addField(`***Time ${Teams(client,CurrentGame.participants[0].teamId)}:***`, `${checkSkin(client,CurrentGame.participants[0].championId)} \u200b **${CurrentGame.participants[0].summonerName}** \u200b ${Spells(client, CurrentGame.participants[0].spell1Id) }${Spells(client, CurrentGame.participants[0].spell2Id)}\n${checkSkin(client,CurrentGame.participants[1].championId)} \u200b **${CurrentGame.participants[1].summonerName}** \u200b ${Spells(client,CurrentGame.participants[1].spell1Id)}${Spells(client,CurrentGame.participants[1].spell2Id)}\n${checkSkin(client,CurrentGame.participants[2].championId)} \u200b **${CurrentGame.participants[2].summonerName}** \u200b ${Spells(client,CurrentGame.participants[2].spell1Id)}${Spells(client,CurrentGame.participants[2].spell2Id)}\n${checkSkin(client,CurrentGame.participants[3].championId)} \u200b **${CurrentGame.participants[3].summonerName}** \u200b ${Spells(client,CurrentGame.participants[3].spell1Id)}${Spells(client,CurrentGame.participants[3].spell2Id)}\n${checkSkin(client,CurrentGame.participants[4].championId)} \u200b **${CurrentGame.participants[4].summonerName}** \u200b ${Spells(client,CurrentGame.participants[4].spell1Id)}${Spells(client,CurrentGame.participants[4].spell2Id)}`, true)
//                     .addField(`***Time ${Teams(client,CurrentGame.participants[5].teamId)}:***`, `${checkSkin(client,CurrentGame.participants[5].championId)} \u200b **${CurrentGame.participants[5].summonerName}** \u200b ${Spells(client, CurrentGame.participants[5].spell1Id)}${Spells(client, CurrentGame.participants[5].spell2Id)}\n${checkSkin(client,CurrentGame.participants[6].championId)} \u200b **${CurrentGame.participants[6].summonerName}** \u200b ${Spells(client,CurrentGame.participants[6].spell1Id)}${Spells(client,CurrentGame.participants[6].spell2Id)}\n${checkSkin(client,CurrentGame.participants[7].championId)} \u200b **${CurrentGame.participants[7].summonerName}** \u200b ${Spells(client,CurrentGame.participants[7].spell1Id)}${Spells(client,CurrentGame.participants[7].spell2Id)}\n${checkSkin(client,CurrentGame.participants[8].championId)} \u200b **${CurrentGame.participants[8].summonerName}** \u200b ${Spells(client,CurrentGame.participants[8].spell1Id)}${Spells(client,CurrentGame.participants[8].spell2Id)}\n${checkSkin(client,CurrentGame.participants[9].championId)} \u200b **${CurrentGame.participants[9].summonerName}** \u200b ${Spells(client,CurrentGame.participants[9].spell1Id)}${Spells(client,CurrentGame.participants[9].spell2Id)}`, true)
//                     .addField('\u200b', '\u200b')
//                     .addField(`Bans do time ${Teams(client,CurrentGame.participants[0].teamId)}`, `${Bans(client,CurrentGame.bannedChampions[0].championId)} ${Bans(client,CurrentGame.bannedChampions[1].championId)} ${Bans(client,CurrentGame.bannedChampions[2].championId)} ${Bans(client,CurrentGame.bannedChampions[3].championId)} ${Bans(client,CurrentGame.bannedChampions[4].championId)}`, true)
//                     .addField(`Bans do time ${Teams(client,CurrentGame.participants[5].teamId)}`, `${Bans(client,CurrentGame.bannedChampions[5].championId)} ${Bans(client,CurrentGame.bannedChampions[6].championId)} ${Bans(client,CurrentGame.bannedChampions[7].championId)} ${Bans(client,CurrentGame.bannedChampions[8].championId)} ${Bans(client,CurrentGame.bannedChampions[9].championId)}` ,true)
//                     .setFooter(`Jogando em ${mapa} (Ranqueadas)`)
//                     message.channel.send(embed)
//                 }
//             })
//         })
//     }
// }
const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')
//const { Kayn, REGIONS } = require('kayn')
const { getChampionEmoji, Teams, Spells } = require('./commonFunctions')

exports.run = async (client, message, args) => {
    let summoner_Name = args.join('').trim()
    console.log(summoner_Name)
    if (summoner_Name) {
        //pegar id do player
        kayn.kaynObject.Summoner.by.name(`${summoner_Name}`)
        .callback(function(err, summoner) {
            console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
            //fim pegar id

            //pegar partida ao vivo
            kayn.kaynObject.CurrentGame.by.summonerID(summoner.id)

            .region(kayn.regions.BRAZIL)
            .callback(function(err, CurrentGame) {
                //message.channel.send(`${Spells(client,1)} dsad`)
                
                if(CurrentGame == null) {
                    const emb = new Discord.RichEmbed()
                    .setColor('0x0099ff')
                    .setTitle('O jogador não está em partida')
                    message.channel.send(emb)
                }
                // @@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                else if(CurrentGame.bannedChampions) {
                    if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                    
                    const embed = new Discord.RichEmbed()
                    .setColor('#170B3B')
                    .setTitle(`**Partida ao vivo de ${args[0]}**`)
                    .addField(`***Time ${Teams(CurrentGame.participants[0].teamId)}:***`, `${getChampionEmoji(client,CurrentGame.participants[0].championId)} \u200b **${CurrentGame.participants[0].summonerName}** \u200b ${Spells(client, CurrentGame.participants[0].spell1Id) }${Spells(client, CurrentGame.participants[0].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[1].championId)} \u200b **${CurrentGame.participants[1].summonerName}** \u200b ${Spells(client,CurrentGame.participants[1].spell1Id)}${Spells(client,CurrentGame.participants[1].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[2].championId)} \u200b **${CurrentGame.participants[2].summonerName}** \u200b ${Spells(client,CurrentGame.participants[2].spell1Id)}${Spells(client,CurrentGame.participants[2].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[3].championId)} \u200b **${CurrentGame.participants[3].summonerName}** \u200b ${Spells(client,CurrentGame.participants[3].spell1Id)}${Spells(client,CurrentGame.participants[3].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[4].championId)} \u200b **${CurrentGame.participants[4].summonerName}** \u200b ${Spells(client,CurrentGame.participants[4].spell1Id)}${Spells(client,CurrentGame.participants[4].spell2Id)}`, true)
                    .addField(`***Time ${Teams(CurrentGame.participants[5].teamId)}:***`, `${getChampionEmoji(client,CurrentGame.participants[5].championId)} \u200b **${CurrentGame.participants[5].summonerName}** \u200b ${Spells(client, CurrentGame.participants[5].spell1Id)}${Spells(client, CurrentGame.participants[5].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[6].championId)} \u200b **${CurrentGame.participants[6].summonerName}** \u200b ${Spells(client,CurrentGame.participants[6].spell1Id)}${Spells(client,CurrentGame.participants[6].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[7].championId)} \u200b **${CurrentGame.participants[7].summonerName}** \u200b ${Spells(client,CurrentGame.participants[7].spell1Id)}${Spells(client,CurrentGame.participants[7].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[8].championId)} \u200b **${CurrentGame.participants[8].summonerName}** \u200b ${Spells(client,CurrentGame.participants[8].spell1Id)}${Spells(client,CurrentGame.participants[8].spell2Id)}\n${getChampionEmoji(client,CurrentGame.participants[9].championId)} \u200b **${CurrentGame.participants[9].summonerName}** \u200b ${Spells(client,CurrentGame.participants[9].spell1Id)}${Spells(client,CurrentGame.participants[9].spell2Id)}`, true)
                    .addField('\u200b', '\u200b')
                    .addField(`Bans do time ${Teams(CurrentGame.bannedChampions[0].teamId)}`, `${getChampionEmoji(client,CurrentGame.bannedChampions[0].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[1].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[2].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[3].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[4].championId)}`, true)
                    .addField(`Bans do time ${Teams(CurrentGame.bannedChampions[5].teamId)}`, `${getChampionEmoji(client,CurrentGame.bannedChampions[5].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[6].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[7].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[8].championId)} ${getChampionEmoji(client,CurrentGame.bannedChampions[9].championId)}` ,true)
                    .setFooter(`Jogando em ${mapa} (Ranqueadas)`)
                    message.channel.send(embed)
                }
            })
        })
    }
}
