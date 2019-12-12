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
                if(args[1]){
                    console.log(summonerLeague)
                    cont=0
                    gameMode = args[1].toUpperCase()
                    if(gameMode!=""){
                        for(; cont<=1; cont++){
                            // @@@ FUNÇÕES

                            function convertGameMode(mode){ 
                                if(gameMode=="SOLO") return "RANKED_SOLO_5x5";
                                if(gameMode=="FLEX") return "RANKED_FLEX_SR";
                                if(gameMode=="TFT") return "RANKED_TFT";
                            }
                            function tierTime(time){
                                if(summonerLeague[cont]['veteran']==true){ return "***Há muito tempo nesse elo***"}
                                else{ return "***Há pouco tempo no elo***"}
                            }
                            function tierNamePT(name){
                                switch(summonerLeague[cont].tier){
                                    case 'IRON': return "Ferro"; break;
                                    case 'BRONZE': return "Bronze"; break;
                                    case 'SILVER': return "Prata"; break;
                                    case 'GOLD': return "Ouro"; break;
                                    case 'PLATINUM': return "Platina"; break;
                                    case 'DIAMOND': return "Diamante"; break;
                                    case 'MASTER': return "Mestre"; break;
                                    case 'GRANDMASTER': return "Grão Mestre"; break;
                                    case 'CHALLENGER': return "Challenger"; break;
                                }
                            } 
                            EmojiElos = (elos) => {
                                switch(elos){
                                    case 'IRON': return client.emojis.get("631528448665321472"); break;
                                    case 'BRONZE': return client.emojis.get("633781786865958952"); break;
                                    case 'SILVER': return client.emojis.get("633785110642294804"); break;
                                    case 'GOLD': return client.emojis.get("633784530372919325"); break;
                                    case 'PLATINUM': return client.emojis.get("633784209877762048"); break;
                                    case 'DIAMOND': return client.emojis.get("633783805655908364"); break;
                                    case 'MASTER': return client.emojis.get("633783098512900116"); break;
                                    case 'GRANDMASTER': return client.emojis.get("633782348357304328"); break;
                                    case 'CHALLENGER': return client.emojis.get("631536146014404608"); break;
                                }
                            }
                            FilaTranslate = (fila) =>{
                                switch(fila){
                                    case "RANKED_TFT": return "TeamFight Tactics"; break;
                                    case "RANKED_SOLO_5x5": return "Solo/Duo"; break;
                                    case "RANKED_FLEX_SR": return "Flexivel"; break;
                                }
                            }
                        
                            // @@@ FIM FUNÇÕES
                            
                            var sumLeague = summonerLeague[cont];
                            //verificar o MODO da PARTIDA #RANQUEADO SOLO/FLEX/TFT
                            if(sumLeague.queueType == convertGameMode()){
                                console.log(summonerLeague[cont])
                                console.log("\n\nModo de jogo: "+sumLeague.queueType+"\n\n")

                                const embed = new Discord.RichEmbed()
                                .setColor('#0099ff')
                                .addField('**Nome do invocador: **', summoner['name'], true)
                                .addField('**Level do invocador**', summoner.summonerLevel,true)
                                .addField('**Divisão**', EmojiElos(summonerLeague[cont].tier) +tierNamePT()+` ${summonerLeague[cont].rank}`, true)
                                .addField('**Fila ranqueada**', `${FilaTranslate(summonerLeague[cont].queueType)}`, true)
                                .addField('**PDLs**', `${summonerLeague[cont]['leaguePoints']}`, true)
                                .addField('**Vitorias**', summonerLeague[cont]['wins'], true)
                                .addField(tierTime(), '\u200b', true)
                                .addField('**Derrotas**', summonerLeague[cont]['losses'], true)
                                .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${summoner['profileIconId']}.png`)

                                message.channel.send(embed)
                                
                            }
                        }
                    }                    
                }else{
                    console.log("**Digite o modo de jogo [solo/flex/tft]!**")
                    message.channel.send('**Digite o modo de jogo [solo/flex/tft]!**')
                }

            })
        })
    }
    else{
        message.channel.send('**Digite o nome do jogador + [solo/flex/tft]!**')
    }
}
