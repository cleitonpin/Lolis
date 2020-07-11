const Discord = require('discord.js')
const kayn = require('../../kayn')
const axios = require('axios')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    virgulaPoints 
} = require('../commonFunctions')
const leagueTft = require('../../api/league-tft')
const versions = require('../../api/versions')

exports.run = async (client, message, args) => {
    
    let summoner_Name = args.join(' ').trim()
    let msg = message.channel.send('Um segundinho e já mando 😉')

    if(summoner_Name) {
        getSummonerId(summoner_Name).then(async summoner => {
            getInfoMaestria(summoner.id).then(async info => {

                    const emb = new Discord.MessageEmbed()
                    const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${process.env.RGAPI_KEY}`)

                    let elotft = await leagueTft.data(summoner_Name)
                    
                    if(response.data == ''){
                        
                        emb.setTitle(`📛 Perfil: ${summoner.name} 📛`)
                        .setColor('#170B3B')
                        .addField('Nível do invocador', summoner['summonerLevel'], true)
                        if(elotft == '') {
                            emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo:${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, 'Unranked')} Unranked`, true)
                        }
                        else {
                            emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo:${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, elotft[0].tier)} ${elotft[0].tier} ${elotft[0].rank} / **${elotft[0].leaguePoints} LP**`, true)
                        }
                        
                        emb.addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner.profileIconId}.png`)

                        await msg.then(ar => {
                            ar.delete()
                            message.channel.send(emb)
                        })
                    } 
                    
                    else if(response.data.length == 2) {
                        const { tier, rank, leaguePoints, wins, losses } = response.data.find(fila => fila.queueType == 'RANKED_SOLO_5x5')
                        const flex = response.data.find(fila => fila.queueType == 'RANKED_FLEX_SR')
                        
                        .setColor('#170B3B')
                        .setTitle(`📛 Perfil: ${summoner.name} 📛 `)
                        .addField('Nível', summoner['summonerLevel'], true)
                        if(elotft == '') {
                            emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, tier)} ${tier} ${rank} / **${leaguePoints} LP**\nRanqueada flexível: ${getEloEmoji(client, flex.tier)} ${flex.tier} ${flex.rank} / **${flex.leaguePoints} LP**\nRanqueada TFT: ${getEloEmoji(client, 'Unranked')} Unranked`, true)
                        } else {

                            emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, tier)} ${tier} ${rank} / **${leaguePoints} LP**\nRanqueada flexível: ${getEloEmoji(client, flex.tier)} ${flex.tier} ${flex.rank} / **${flex.leaguePoints} LP**\nRanqueada TFT: ${getEloEmoji(client, elotft[0].tier)} ${elotft[0].tier} ${elotft[0].rank} / **${elotft[0].leaguePoints} LP**`, true)
                        }
                        emb.addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
                        
                        await msg.then(ar => {
                            ar.delete()
                            message.channel.send(emb)
                        })
                    } 
                    else if(response.data.length == 1) {
                        let fila = response.data.find(fila => fila.queueType == 'RANKED_FLEX_SR')
                        const { tier, rank, leaguePoints, wins, losses } = response.data.find(fila => fila.queueType == 'RANKED_SOLO_5x5')
                        const flex = response.data.find(fila => fila.queueType == 'RANKED_FLEX_SR')

                        if(fila == undefined){
                            emb.setColor('#170B3B')
                            .setTitle(`📛 Perfil: ${summoner.name} 📛`)
                            .addField('Nível', summoner['summonerLevel'], true)
                            if(elotft == '') {

                                emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, tier)} ${tier} ${rank} / **${leaguePoints} LP**\nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, 'Unranked')} Unranked`, true)
                            } else {
                                emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, tier)} ${tier} ${rank} / **${leaguePoints} LP**\nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, elotft[0].tier)} ${elotft[0].tier} ${elotft[0].rank} / **${elotft[0].leaguePoints} LP**`, true)
                            }
                            emb.addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${await versions.data()}/img/profileicon/${summoner['profileIconId']}.png`)
                        } else {
                            emb.setColor('#170B3B')
                            .setTitle(`📛 Perfil: ${summoner.name} 📛`)
                            .addField('Nível', summoner['summonerLevel'], true)
                            if(elotft == '') {

                                emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, 'Unranked')} \nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, 'Unranked')} Unranked`, true)
                            } else {
                                emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, 'Unranked')} \nRanqueada flexível: ${getEloEmoji(client, 'Unranked')} Unranked\nRanqueada TFT: ${getEloEmoji(client, elotft[0].tier)} ${elotft[0].tier} ${elotft[0].rank} / **${elotft[0].leaguePoints} LP**`, true)
                            }
                            emb.addField('Estatísticas Ranqueadas', `Ranqueada solo/duo: ${getEloEmoji(client, 'Unranked')}\nRanqueada flexível: ${getEloEmoji(client, flex.tier)} ${flex.tier} ${flex.rank} / **${flex.leaguePoints} LP**`, true)
                            .addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version.data[0]}/img/profileicon/${summoner['profileIconId']}.png`)
                            
                        }

                        await msg.then(ar => {
                            ar.delete()
                            message.channel.send(emb)
                        })
                    } 
                    
                    else {
                        await msg.then(ar => {
                            ar.delete()
                            message.channel.send('jogador inexistente')
                        })
                        
                    }
            }) .catch(async function(e) {
                await msg.then(ar => {
                    ar.delete()
                    message.channel.send('jogador inexistente')
                })
            })
        }) .catch(async function(e) {
            await msg.then(ar => {
                ar.delete()
                message.channel.send('jogador inexistente')
            })
        })
    } 
}


getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}

getInfoMaestria = async (id) => {
    return await  kayn.kaynObject.ChampionMastery.list(id)
}
    
