const Discord = require('discord.js')
const kayn = require('../kayn')
const axios = require('axios')
const { 
    getEloEmoji, 
    getChampionEmoji, 
    IDtoName, 
    getMasteryEmoji, 
    virgulaPoints 
} = require('./commonFunctions')

exports.run = async (client, message, args) => {
    
    let summoner_Name = args.join('').trim()

    if(summoner_Name) {
        getSummonerId(summoner_Name).then(async summoner => {
            getInfoMaestria(summoner.id).then(async info => {
                axios.get(`http://ddragon.leagueoflegends.com/api/versions.json`)
                .then(async version => {

                    const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${process.env.RGAPI_KEY}`)
                    console.log(response.data)


                    if(response.data == ''){
                        const emb = new Discord.MessageEmbed()
                        .setTitle(`📛 Perfil: ${summoner.name} 📛`)
                        .setColor('#33062b')
                        .addField('Nível do invocador', summoner['summonerLevel'], true)
                        .addField('Estatísticas Ranqueadas', `**Unranked**`, true)
                        .addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version.data[0]}/img/profileicon/${summoner.profileIconId}.png`)

                        message.channel.send(emb)
                    } 
                    else if(response.data) {
                        const { tier, rank, leaguePoints, wins, losses } = response.data[0]

                        const embed = new Discord.MessageEmbed()
                        .setColor('#7e143f')
                        .setTitle(`📛 Perfil: ${summoner.name} 📛`)
                        .addField('Nível', summoner['summonerLevel'], true)
                        .addField('Estatísticas Ranqueadas', `${getEloEmoji(client, tier)} ${tier} ${rank} / **${leaguePoints} LP**\nV/D: **${wins}/${losses}**`, true)
                        .addField('Top 3 campeões', `${getChampionEmoji(client, info[0].championId)} Top 1. **${IDtoName(info[0].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[0].championPoints.toString())}\n ${getChampionEmoji(client, info[1].championId)} Top 2. **${IDtoName(info[1].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[1].championPoints.toString())}\n ${getChampionEmoji(client, info[2].championId)} Top 3. **${IDtoName(info[2].championId)}** ${getMasteryEmoji(client, info[0].championLevel)} ${virgulaPoints(info[2].championPoints.toString())}`)
                        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version.data[0]}/img/profileicon/${summoner['profileIconId']}.png`)
                        
                        message.channel.send(embed)
                    } else {
                        message.channel.send('jogador inexistente')
                    }
                }) .catch(function(e) {
                    console.log('1')
                })
            }) .catch(function(e) {
                console.log('2')
            })
        }) .catch(function(e) {
            message.channel.send('Jogador inexistente')
        })
    } 
}


getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}

getInfoMaestria = async (id) => {
    return await  kayn.kaynObject.ChampionMastery.list(id)
}
    
