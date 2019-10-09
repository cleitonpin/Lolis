const Discord = require('discord.js')
const client = new Discord.Client()
const key = require('./Update.json')
const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn(key.key)({
    region: REGIONS.BRAZIL,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'pt_BR',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

exports.run = async (client, message, args) => {


    
    if(args[0]){
        kayn.Summoner.by.name(`${args[0]}`)
        .region(REGIONS.BRAZIL)
        .callback(function(err, summoner) {
            console.log(summoner['id'])
            kayn.League.Entries.by.summonerID(`${summoner['id']}`)
            .callback(function(err, summonerLeague) {

                function tierNamePT(name){
                    switch(summonerLeague[0]['tier']&&summonerLeague[1]['tier']&&summonerLeague[2]['tier']){
                        case 'IRON': return "Ferro"; break;
                        case 'BRONZE': return "Bronze"; break;
                        case 'SILVER': return "Prata"; break;
                        case 'GOLD': return "Ouro"; break;
                        case 'PLATINUM': return "Platina lixo"; break;
                        case 'DIAMOND': return "Diamante"; break;
                        case 'MASTER': return "Mestre"; break;
                        case 'GRANDMASTER': return "Grande Mestre"; break;
                        case 'CHALLENGER': return "Challenger"; break;
                    }
                } //final da função para pegar os nomes dos elos traduzidos
                function tierTime(time){
                    if(summonerLeague[0]['veteran']==true){ return "***Está há muito tempo nesse elo***"}
                    else{ return "***Há pouco tempo no elo***"}
                    if(summonerLeague[1]['veteran']==true){ return "***Está há muito tempo nesse elo***"}
                    else{ return "***Há pouco tempo no elo***"}
                    if(summonerLeague[2]['veteran']==true){ return "***Está há muito tempo nesse elo***"}
                    else{ return "***Há pouco tempo no elo***"}
                }
                console.log(summonerLeague)
                if(args[1] == 1){
                    const embed = new Discord.RichEmbed()
                    .setColor('#0099ff')
                    .addField('**Nome do invocador: **', summoner['name'])
                    .addField('\u200b','\u200b')

                    .addField('**Elo**', tierNamePT()+` ${summonerLeague[0]['rank']}`, true)
                    .addField('**Tipo de ranqueada**', summonerLeague[0]['queueType'], true)
                    .addField('**PDLs**', summonerLeague[0]['leaguePoints'], true)
                    .addField('**Vitorias**', summonerLeague[0]['wins'], true)
                    .addField(tierTime(), '\u200b', true)
                    .addField('**Derrotas**', summonerLeague[0]['losses'], true)

                    .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner['profileIconId']}.png`)

                    message.channel.send(embed)
                }
                if(args[1]==2){
                    const embed = new Discord.RichEmbed()                
                    .setColor('#0099ff')
                    .addField('**Nome do invocador: **', summoner['name'])
                    .addField('\u200b','\u200b')

                    .addField('**Elo**', tierNamePT()+` ${summonerLeague[1]['rank']}`, true)
                    .addField('**Tipo de ranqueada**', summonerLeague[1]['queueType'], true)
                    .addField('**PDLs**', summonerLeague[1]['leaguePoints'], true)
                    .addField('**Vitorias**', summonerLeague[1]['wins'], true)
                    .addField(tierTime(), '\u200b', true)
                    .addField('**Derrotas**', summonerLeague[1]['losses'], true)

                    .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner['profileIconId']}.png`)

                    message.channel.send(embed)
                }
                if(args[1]==3){
                    const embed = new Discord.RichEmbed()                
                    .setColor('#0099ff')
                    .addField('**Nome do invocador: **', summoner['name'])
                    .addField('\u200b','\u200b')

                    .addField('**Elo**', tierNamePT()+` ${summonerLeague[2]['rank']}`, true)
                    .addField('**Tipo de ranqueada**', summonerLeague[2]['queueType'], true)
                    .addField('**PDLs**', summonerLeague[2]['leaguePoints'], true)
                    .addField('**Vitorias**', summonerLeague[2]['wins'], true)
                    .addField(tierTime(), '\u200b', true)
                    .addField('**Derrotas**', summonerLeague[2]['losses'], true)

                    .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner['profileIconId']}.png`)

                    message.channel.send(embed)
                }

            })
        })
    }
    else{
        message.channel.send('**Digite o nome do jogador + [1-3]!**')
    }
}
