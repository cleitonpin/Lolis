const Discord = require('discord.js')
const kayn = require('./kayn')
const { IDtoName } = require('./commonFunctions')

exports.run = async (client, message, args) => {
    if(args[0] && args[1]==1) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[0])
                //pegar nome dos champs
                

                if(ChampionMastery[0]['championLevel']==7) masteryImgURL = "https://imgur.com/6UZ5G2P.png"
                else if(ChampionMastery[0]['championLevel']==6) masteryImgURL = "https://imgur.com/pPWUtnv.png"
                else if(ChampionMastery[0]['championLevel']==5) masteryImgURL = "https://imgur.com/gtS1Do0.png"
                else if(ChampionMastery[0]['championLevel']==4) masteryImgURL = "https://imgur.com/rgfn9xM.png"
                else if(ChampionMastery[0]['championLevel']==3) masteryImgURL = "https://imgur.com/b8crQMG.png"
                else if(ChampionMastery[0]['championLevel']==2) masteryImgURL = "https://imgur.com/UHNjYTw.png"
                else if(ChampionMastery[0]['championLevel']==1) masteryImgURL = "https://imgur.com/9pGhB9z.png"

                if(ChampionMastery[2]['chestGranted']== true) var SimorNot = 'Sim' 
                if(ChampionMastery[2]['chestGranted']== false) var SimorNot = 'Não' 
                //var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[0]['championId']),true)
                .addField('**Nível de maestria**', ChampionMastery[0]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[0]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[0]['tokensEarned'],true)
                .addField('**Já conseguiu báu hextech nessa season?**', SimorNot, true)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[0]['championId'])}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    else if(args[0] && args[1]==2) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[1])
                //pegar nome dos champs
                
                if(ChampionMastery[1]['championLevel']==7) masteryImgURL = "https://imgur.com/6UZ5G2P.png"
                else if(ChampionMastery[1]['championLevel']==6) masteryImgURL = "https://imgur.com/pPWUtnv.png"
                else if(ChampionMastery[1]['championLevel']==5) masteryImgURL = "https://imgur.com/gtS1Do0.png"
                else if(ChampionMastery[1]['championLevel']==4) masteryImgURL = "https://imgur.com/rgfn9xM.png"
                else if(ChampionMastery[1]['championLevel']==3) masteryImgURL = "https://imgur.com/b8crQMG.png"
                else if(ChampionMastery[1]['championLevel']==2) masteryImgURL = "https://imgur.com/UHNjYTw.png"
                else if(ChampionMastery[1]['championLevel']==1) masteryImgURL = "https://imgur.com/9pGhB9z.png"

                if(ChampionMastery[2]['chestGranted']== true) var SimorNot = 'Sim' 
                if(ChampionMastery[2]['chestGranted']== false) var SimorNot = 'Não' 
                //var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[1]['championId']),true)
                .addField('**Nível de maestria**', ChampionMastery[1]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[1]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[1]['tokensEarned'],true)
                .addField('**Já conseguiu báu hextech nessa season?**', SimorNot)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[1]['championId'])}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    else if(args[0] && args[1]==3) {
        //pegar o id do jogador
        kayn.kaynObject.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.kaynObject.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[2])
                //pegar nome dos champs
                

                if(ChampionMastery[2]['championLevel']==7) masteryImgURL = "https://imgur.com/6UZ5G2P.png"
                else if(ChampionMastery[2]['championLevel']==6) masteryImgURL = "https://imgur.com/pPWUtnv.png"
                else if(ChampionMastery[2]['championLevel']==5) masteryImgURL = "https://imgur.com/gtS1Do0.png"
                else if(ChampionMastery[2]['championLevel']==4) masteryImgURL = "https://imgur.com/rgfn9xM.png"
                else if(ChampionMastery[2]['championLevel']==3) masteryImgURL = "https://imgur.com/b8crQMG.png"
                else if(ChampionMastery[2]['championLevel']==2) masteryImgURL = "https://imgur.com/UHNjYTw.png"
                else if(ChampionMastery[2]['championLevel']==1) masteryImgURL = "https://imgur.com/9pGhB9z.png"

                if(ChampionMastery[2]['chestGranted']== true) var SimorNot = 'Sim' 
                if(ChampionMastery[2]['chestGranted']== false) var SimorNot = 'Não'    
                var calculo = Math.round(ChampionMastery[0]['lastPlayTime']/60000000000)        
                const embed = new Discord.RichEmbed()
                .setColor('#170B3B')
                .setTitle(`Nome do invocador: ***${summoner['name']}***`, '\u200b')
                .addField('**Campeão**', IDtoName(ChampionMastery[2]['championId']),true)
                .addField('**Nível de maestria**', ChampionMastery[2]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[2]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[2]['tokensEarned'],true)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName(ChampionMastery[2]['championId'])}_0.jpg`)          
                .addField('**Já conseguiu báu hextech nessa season?**', SimorNot)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }
    else{
        message.channel.send('**Digite o nome do invocador e a numeração de 1-3**')
    }

}
