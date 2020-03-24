const Discord = require('discord.js')
const kayn = require('../kayn')
const { IDtoName } = require('./commonFunctions')

const masteryImagesURL = {
    1: "https://imgur.com/9pGhB9z.png",
    2: "https://imgur.com/UHNjYTw.png",
    3: "https://imgur.com/b8crQMG.png",
    4: "https://imgur.com/rgfn9xM.png",
    5: "https://imgur.com/gtS1Do0.png",
    6: "https://imgur.com/pPWUtnv.png",
    7: "https://imgur.com/6UZ5G2P.png"
}

exports.run = async (client, message, args) => {
    if(args[0] && args[1] == 1) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[0])
                //pegar nome dos champs
                
                let masteryLevel = ChampionMastery[0]['championLevel']
                let masteryImgURL = masteryImagesURL[masteryLevel]
                let adquiriuBauHextech = ChampionMastery[2]['chestGranted'] ? 'Sim' : 'Não'

                //var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[0]['championId']), true)
                .addField('**Nível de maestria**', masteryLevel, true)
                .addField('**Pontos**', ChampionMastery[0]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[0]['tokensEarned'], true)
                .addField('**Já conseguiu báu hextech nessa season?**', adquiriuBauHextech, true)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[0]['championId'])}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

    else if(args[0] && args[1] == 2) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[1])
                //pegar nome dos champs
                
                let masteryLevel = ChampionMastery[1]['championLevel']
                let masteryImgURL = masteryImagesURL[masteryLevel]
                let adquiriuBauHextech = ChampionMastery[2]['chestGranted'] ? 'Sim' : 'Não' 
                
                //var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[1]['championId']), true)
                .addField('**Nível de maestria**', ChampionMastery[1]['championLevel'], true)
                .addField('**Pontos**', ChampionMastery[1]['championPoints'], true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[1]['tokensEarned'], true)
                .addField('**Já conseguiu báu hextech nessa season?**', adquiriuBauHextech)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[1]['championId'])}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

    else if(args[0] && args[1] == 3) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log(`\n\nID do jogador: ${summoner['id']}\n\n`)
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[2])
                //pegar nome dos champs
                
                let masteryLevel = ChampionMastery[2]['championLevel']
                let masteryImgURL = masteryImagesURL[masteryLevel]
                let adquiriuBauHextech = ChampionMastery[2]['chestGranted'] ? 'Sim' : 'Não'   
                
                //var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)        
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[2]['championId']), true)
                .addField('**Nível de maestria**', masteryLevel, true)
                .addField('**Pontos**', ChampionMastery[2]['championPoints'], true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`, true)
                .addField('**Fragmentos de maestria**', ChampionMastery[2]['tokensEarned'], true)
                .addField('**Já conseguiu báu hextech nessa season?**', adquiriuBauHextech)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[2]['championId'])}_0.jpg`)          
                
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

    else {
        message.channel.send('**Digite o nome do invocador e a numeração de 1-3**')
    }
}
