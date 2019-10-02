const Discord = require('discord.js')
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
    
    


    if(args[0] && args[1]==1){
        //pegar o id do jogador
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[0])
                //pegar nome dos champs
                function IDtoName(ID){
                    switch(ChampionMastery[0]['championId']){
                        case 266: return "Aatrox"; break;
                        case 412: return "Thresh"; break;
                        case 23: return "Tryndamere"; break;
                        case 79: return "Gragas"; break;
                        case 69: return "Cassiopeia"; break;
                        case 136: return "Aurelion Sol"; break;
                        case 13: return "Ryze"; break;
                        case 78: return "Poppy"; break;
                        case 14: return "Sion"; break;
                        case 1: return "Annie"; break;
                        case 202: return "Jhin"; break;
                        case 43: return "Karma"; break;
                        case 111: return "Nautilus"; break;
                        case 240: return "Kled"; break;
                        case 99: return "Lux"; break;
                        case 103: return "Ahri"; break;
                        case 2: return "Olaf"; break;
                        case 112: return "Viktor"; break;
                        case 34: return "Anivia"; break;
                        case 27: return "Singed"; break;
                        case 86: return "Garen"; break;
                        case 127: return "Lissandra"; break;
                        case 57: return "Maokai"; break;
                        case 25: return "Morgana"; break;
                        case 28: return "Evelynn"; break;
                        case 105: return "Fizz"; break;
                        case 74: return "Heimerdinger"; break;
                        case 238: return "Zed"; break;
                        case 68: return "Rumble"; break;
                        case 82: return "Mordekaiser"; break;
                        case 37: return "Sona"; break;
                        case 96: return "Kog'Maw"; break;
                        case 55: return "Katarina"; break;
                        case 117: return "Lulu"; break;
                        case 22: return "Ashe"; break;
                        case 30: return "Karthus"; break;
                        case 12: return "Alistar"; break;
                        case 122: return "Darius"; break;
                        case 67: return "Vayne"; break;
                        case 110: return "Varus"; break;
                        case 77: return "Udyr"; break;
                        case 89: return "Leona"; break;
                        case 126: return "Jayce"; break;
                        case 134: return "Syndra"; break;
                        case 80: return "Pantheon"; break;
                        case 92: return "Riven"; break;
                        case 121: return "Kha'Zix"; break;
                        case 42: return "Corki"; break;
                        case 268: return "Azir"; break;
                        case 51: return "Caitlyn"; break;
                        case 76: return "Nidalee"; break;
                        case 85: return "Kennen"; break;
                        case 3: return "Galio"; break;
                        case 45: return "Veigar"; break;
                        case 432: return "Bard"; break;
                        case 150: return "Gnar"; break;
                        case 90: return "Malzahar"; break;
                        case 104: return "Graves"; break;
                        case 254: return "Vi"; break;
                        case 10: return "Kayle"; break;
                        case 39: return "Irelia"; break;
                        case 64: return "Lee Sin"; break;
                        case 420: return "Illaoi"; break;
                        case 60: return "Elise"; break;
                        case 106: return "Volibear"; break;
                        case 20: return "Nunu"; break;
                        case 4: return "Twisted Fate"; break;
                        case 24: return "Jax"; break;
                        case 102: return "Shyvana"; break;
                        case 429: return "Kalista"; break;
                        case 36: return "Dr. Mundo"; break;
                        case 427: return "Ivern"; break;
                        case 131: return "Diana"; break;
                        case 223: return "Tahm Kench"; break;
                        case 63: return "Brand"; break;
                        case 113: return "Sejuani"; break;
                        case 8: return "Vladimir"; break;
                        case 154: return "Zac"; break;
                        case 421: return "Rek'Sai"; break;
                        case 133: return "Quinn"; break;
                        case 84: return "Akali"; break;
                        case 163: return "Taliyah"; break;
                        case 18: return "Tristana"; break;
                        case 120: return "Hecarim"; break;
                        case 15: return "Sivir"; break;
                        case 236: return "Lucian"; break;
                        case 107: return "Rengar"; break;
                        case 19: return "Warwick"; break;
                        case 72: return "Skarner"; break;
                        case 54: return "Malphite"; break;
                        case 157: return "Yasuo"; break;
                        case 101: return "Xerath"; break;
                        case 17: return "Teemo"; break;
                        case 75: return "Nasus"; break;
                        case 58: return "Renekton"; break;
                        case 119: return "Draven"; break;
                        case 35: return "Shaco"; break;
                        case 50: return "Swain"; break;
                        case 91: return "Talon"; break;
                        case 40: return "Janna"; break;
                        case 115: return "Ziggs"; break;
                        case 245: return "Ekko"; break;
                        case 61: return "Orianna"; break;
                        case 114: return "Fiora"; break;
                        case 9: return "Fiddlesticks"; break;
                        case 31: return "Cho'Gath"; break;
                        case 33: return "Rammus"; break;
                        case 7: return "LeBlanc"; break;
                        case 16: return "Soraka"; break;
                        case 26: return "Zilean"; break;
                        case 56: return "Nocturne"; break;
                        case 222: return "Jinx"; break;
                        case 83: return "Yorick"; break;
                        case 6: return "Urgot"; break;
                        case 203: return "Kindred"; break;
                        case 21: return "Miss Fortune"; break;
                        case 62: return "Wukong"; break;
                        case 53: return "Blitzcrank"; break;
                        case 98: return "Shen"; break;
                        case 201: return "Braum"; break;
                        case 5: return "Xin Zhao"; break;
                        case 29: return "Twitch"; break;
                        case 11: return "Master Yi"; break;
                        case 44: return "Taric"; break;
                        case 32: return "Amumu"; break;
                        case 41: return "Gangplank"; break;
                        case 48: return "Trundle"; break;
                        case 38: return "Kassadin"; break;
                        case 161: return "Vel'Koz"; break;
                        case 143: return "Zyra"; break;
                        case 267: return "Nami"; break;
                        case 59: return "Jarvan IV"; break;
                        case 81: return "Ezreal"; break;
                        case 517: return "Sylas"; break;
                        case 518: return "Neeko"; break;
                        case 517: return "Sylas"; break;
                        case 246: return "Qiyana"; break;
                        case 350: return "Yuumi"; break;
                    }
                }//fim nome dos champs

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
                .addField('**Campeão**', IDtoName(),true)
                .addField('**Nível de maestria**', ChampionMastery[0]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[0]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[0]['tokensEarned'],true)
                .addField('**Já conseguiu báu hextech nessa season?**', SimorNot, true)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName()}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    else if(args[0] && args[1]==2){
        //pegar o id do jogador
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[1])
                //pegar nome dos champs
                function IDtoName(ID){
                    switch(ChampionMastery[1]['championId']){
                        case 266: return "Aatrox"; break;
                        case 412: return "Thresh"; break;
                        case 23: return "Tryndamere"; break;
                        case 79: return "Gragas"; break;
                        case 69: return "Cassiopeia"; break;
                        case 136: return "Aurelion Sol"; break;
                        case 13: return "Ryze"; break;
                        case 78: return "Poppy"; break;
                        case 14: return "Sion"; break;
                        case 1: return "Annie"; break;
                        case 202: return "Jhin"; break;
                        case 43: return "Karma"; break;
                        case 111: return "Nautilus"; break;
                        case 240: return "Kled"; break;
                        case 99: return "Lux"; break;
                        case 103: return "Ahri"; break;
                        case 2: return "Olaf"; break;
                        case 112: return "Viktor"; break;
                        case 34: return "Anivia"; break;
                        case 27: return "Singed"; break;
                        case 86: return "Garen"; break;
                        case 127: return "Lissandra"; break;
                        case 57: return "Maokai"; break;
                        case 25: return "Morgana"; break;
                        case 28: return "Evelynn"; break;
                        case 105: return "Fizz"; break;
                        case 74: return "Heimerdinger"; break;
                        case 238: return "Zed"; break;
                        case 68: return "Rumble"; break;
                        case 82: return "Mordekaiser"; break;
                        case 37: return "Sona"; break;
                        case 96: return "Kog'Maw"; break;
                        case 55: return "Katarina"; break;
                        case 117: return "Lulu"; break;
                        case 22: return "Ashe"; break;
                        case 30: return "Karthus"; break;
                        case 12: return "Alistar"; break;
                        case 122: return "Darius"; break;
                        case 67: return "Vayne"; break;
                        case 110: return "Varus"; break;
                        case 77: return "Udyr"; break;
                        case 89: return "Leona"; break;
                        case 126: return "Jayce"; break;
                        case 134: return "Syndra"; break;
                        case 80: return "Pantheon"; break;
                        case 92: return "Riven"; break;
                        case 121: return "Kha'Zix"; break;
                        case 42: return "Corki"; break;
                        case 268: return "Azir"; break;
                        case 51: return "Caitlyn"; break;
                        case 76: return "Nidalee"; break;
                        case 85: return "Kennen"; break;
                        case 3: return "Galio"; break;
                        case 45: return "Veigar"; break;
                        case 432: return "Bard"; break;
                        case 150: return "Gnar"; break;
                        case 90: return "Malzahar"; break;
                        case 104: return "Graves"; break;
                        case 254: return "Vi"; break;
                        case 10: return "Kayle"; break;
                        case 39: return "Irelia"; break;
                        case 64: return "Lee Sin"; break;
                        case 420: return "Illaoi"; break;
                        case 60: return "Elise"; break;
                        case 106: return "Volibear"; break;
                        case 20: return "Nunu"; break;
                        case 4: return "Twisted Fate"; break;
                        case 24: return "Jax"; break;
                        case 102: return "Shyvana"; break;
                        case 429: return "Kalista"; break;
                        case 36: return "Dr. Mundo"; break;
                        case 427: return "Ivern"; break;
                        case 131: return "Diana"; break;
                        case 223: return "Tahm Kench"; break;
                        case 63: return "Brand"; break;
                        case 113: return "Sejuani"; break;
                        case 8: return "Vladimir"; break;
                        case 154: return "Zac"; break;
                        case 421: return "Rek'Sai"; break;
                        case 133: return "Quinn"; break;
                        case 84: return "Akali"; break;
                        case 163: return "Taliyah"; break;
                        case 18: return "Tristana"; break;
                        case 120: return "Hecarim"; break;
                        case 15: return "Sivir"; break;
                        case 236: return "Lucian"; break;
                        case 107: return "Rengar"; break;
                        case 19: return "Warwick"; break;
                        case 72: return "Skarner"; break;
                        case 54: return "Malphite"; break;
                        case 157: return "Yasuo"; break;
                        case 101: return "Xerath"; break;
                        case 17: return "Teemo"; break;
                        case 75: return "Nasus"; break;
                        case 58: return "Renekton"; break;
                        case 119: return "Draven"; break;
                        case 35: return "Shaco"; break;
                        case 50: return "Swain"; break;
                        case 91: return "Talon"; break;
                        case 40: return "Janna"; break;
                        case 115: return "Ziggs"; break;
                        case 245: return "Ekko"; break;
                        case 61: return "Orianna"; break;
                        case 114: return "Fiora"; break;
                        case 9: return "Fiddlesticks"; break;
                        case 31: return "Cho'Gath"; break;
                        case 33: return "Rammus"; break;
                        case 7: return "LeBlanc"; break;
                        case 16: return "Soraka"; break;
                        case 26: return "Zilean"; break;
                        case 56: return "Nocturne"; break;
                        case 222: return "Jinx"; break;
                        case 83: return "Yorick"; break;
                        case 6: return "Urgot"; break;
                        case 203: return "Kindred"; break;
                        case 21: return "Miss Fortune"; break;
                        case 62: return "Wukong"; break;
                        case 53: return "Blitzcrank"; break;
                        case 98: return "Shen"; break;
                        case 201: return "Braum"; break;
                        case 5: return "Xin Zhao"; break;
                        case 29: return "Twitch"; break;
                        case 11: return "Master Yi"; break;
                        case 44: return "Taric"; break;
                        case 32: return "Amumu"; break;
                        case 41: return "Gangplank"; break;
                        case 48: return "Trundle"; break;
                        case 38: return "Kassadin"; break;
                        case 161: return "Vel'Koz"; break;
                        case 143: return "Zyra"; break;
                        case 267: return "Nami"; break;
                        case 59: return "Jarvan IV"; break;
                        case 81: return "Ezreal"; break;
                        case 517: return "Sylas"; break;
                        case 518: return "Neeko"; break;
                        case 517: return "Sylas"; break;
                        case 246: return "Qiyana"; break;
                        case 350: return "Yuumi"; break;
                    }
                }//fim nome dos champs

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
                .addField('**Campeão**', IDtoName(),true)
                .addField('**Nível de maestria**', ChampionMastery[1]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[1]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[1]['tokensEarned'],true)
                .addField('**Já conseguiu báu hextech nessa season?**', SimorNot)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName()}_0.jpg`)
                .setThumbnail(masteryImgURL)
                message.channel.send(embed)
            })//fim info das maestrias
        })// fim id do jogador
    }

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    else if(args[0] && args[1]==3){
        //pegar o id do jogador
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
            
            //pegar info das maestrias
            kayn.ChampionMastery.list(summoner['id'])
            .callback(function(error, ChampionMastery) {
                console.log(ChampionMastery[2])
                //pegar nome dos champs
                function IDtoName(ID){
                    switch(ChampionMastery[2]['championId']){
                        case 266: return "Aatrox"; break;
                        case 412: return "Thresh"; break;
                        case 23: return "Tryndamere"; break;
                        case 79: return "Gragas"; break;
                        case 69: return "Cassiopeia"; break;
                        case 136: return "Aurelion Sol"; break;
                        case 13: return "Ryze"; break;
                        case 78: return "Poppy"; break;
                        case 14: return "Sion"; break;
                        case 1: return "Annie"; break;
                        case 202: return "Jhin"; break;
                        case 43: return "Karma"; break;
                        case 111: return "Nautilus"; break;
                        case 240: return "Kled"; break;
                        case 99: return "Lux"; break;
                        case 103: return "Ahri"; break;
                        case 2: return "Olaf"; break;
                        case 112: return "Viktor"; break;
                        case 34: return "Anivia"; break;
                        case 27: return "Singed"; break;
                        case 86: return "Garen"; break;
                        case 127: return "Lissandra"; break;
                        case 57: return "Maokai"; break;
                        case 25: return "Morgana"; break;
                        case 28: return "Evelynn"; break;
                        case 105: return "Fizz"; break;
                        case 74: return "Heimerdinger"; break;
                        case 238: return "Zed"; break;
                        case 68: return "Rumble"; break;
                        case 82: return "Mordekaiser"; break;
                        case 37: return "Sona"; break;
                        case 96: return "Kog'Maw"; break;
                        case 55: return "Katarina"; break;
                        case 117: return "Lulu"; break;
                        case 22: return "Ashe"; break;
                        case 30: return "Karthus"; break;
                        case 12: return "Alistar"; break;
                        case 122: return "Darius"; break;
                        case 67: return "Vayne"; break;
                        case 110: return "Varus"; break;
                        case 77: return "Udyr"; break;
                        case 89: return "Leona"; break;
                        case 126: return "Jayce"; break;
                        case 134: return "Syndra"; break;
                        case 80: return "Pantheon"; break;
                        case 92: return "Riven"; break;
                        case 121: return "Kha'Zix"; break;
                        case 42: return "Corki"; break;
                        case 268: return "Azir"; break;
                        case 51: return "Caitlyn"; break;
                        case 76: return "Nidalee"; break;
                        case 85: return "Kennen"; break;
                        case 3: return "Galio"; break;
                        case 45: return "Veigar"; break;
                        case 432: return "Bard"; break;
                        case 150: return "Gnar"; break;
                        case 90: return "Malzahar"; break;
                        case 104: return "Graves"; break;
                        case 254: return "Vi"; break;
                        case 10: return "Kayle"; break;
                        case 39: return "Irelia"; break;
                        case 64: return "Lee Sin"; break;
                        case 420: return "Illaoi"; break;
                        case 60: return "Elise"; break;
                        case 106: return "Volibear"; break;
                        case 20: return "Nunu"; break;
                        case 4: return "Twisted Fate"; break;
                        case 24: return "Jax"; break;
                        case 102: return "Shyvana"; break;
                        case 429: return "Kalista"; break;
                        case 36: return "Dr. Mundo"; break;
                        case 427: return "Ivern"; break;
                        case 131: return "Diana"; break;
                        case 223: return "Tahm Kench"; break;
                        case 63: return "Brand"; break;
                        case 113: return "Sejuani"; break;
                        case 8: return "Vladimir"; break;
                        case 154: return "Zac"; break;
                        case 421: return "Rek'Sai"; break;
                        case 133: return "Quinn"; break;
                        case 84: return "Akali"; break;
                        case 163: return "Taliyah"; break;
                        case 18: return "Tristana"; break;
                        case 120: return "Hecarim"; break;
                        case 15: return "Sivir"; break;
                        case 236: return "Lucian"; break;
                        case 107: return "Rengar"; break;
                        case 19: return "Warwick"; break;
                        case 72: return "Skarner"; break;
                        case 54: return "Malphite"; break;
                        case 157: return "Yasuo"; break;
                        case 101: return "Xerath"; break;
                        case 17: return "Teemo"; break;
                        case 75: return "Nasus"; break;
                        case 58: return "Renekton"; break;
                        case 119: return "Draven"; break;
                        case 35: return "Shaco"; break;
                        case 50: return "Swain"; break;
                        case 91: return "Talon"; break;
                        case 40: return "Janna"; break;
                        case 115: return "Ziggs"; break;
                        case 245: return "Ekko"; break;
                        case 61: return "Orianna"; break;
                        case 114: return "Fiora"; break;
                        case 9: return "Fiddlesticks"; break;
                        case 31: return "Cho'Gath"; break;
                        case 33: return "Rammus"; break;
                        case 7: return "LeBlanc"; break;
                        case 16: return "Soraka"; break;
                        case 26: return "Zilean"; break;
                        case 56: return "Nocturne"; break;
                        case 222: return "Jinx"; break;
                        case 83: return "Yorick"; break;
                        case 6: return "Urgot"; break;
                        case 203: return "Kindred"; break;
                        case 21: return "Miss Fortune"; break;
                        case 62: return "Wukong"; break;
                        case 53: return "Blitzcrank"; break;
                        case 98: return "Shen"; break;
                        case 201: return "Braum"; break;
                        case 5: return "Xin Zhao"; break;
                        case 29: return "Twitch"; break;
                        case 11: return "Master Yi"; break;
                        case 44: return "Taric"; break;
                        case 32: return "Amumu"; break;
                        case 41: return "Gangplank"; break;
                        case 48: return "Trundle"; break;
                        case 38: return "Kassadin"; break;
                        case 161: return "Vel'Koz"; break;
                        case 143: return "Zyra"; break;
                        case 267: return "Nami"; break;
                        case 59: return "Jarvan IV"; break;
                        case 81: return "Ezreal"; break;
                        case 517: return "Sylas"; break;
                        case 518: return "Neeko"; break;
                        case 517: return "Sylas"; break;
                        case 246: return "Qiyana"; break;
                        case 350: return "Yuumi"; break;
                    }
                }//fim nome dos champs

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
                .addField('**Campeão**', IDtoName(),true)
                .addField('**Nível de maestria**', ChampionMastery[2]['championLevel'],true)
                .addField('**Pontos**', ChampionMastery[2]['championPoints'],true)
                //.addField('**Duração da útima partida**', `${calculo.toFixed(2)} minutos`,true)
                .addField('**Fragmentos de maestria**', ChampionMastery[2]['tokensEarned'],true)
                .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${IDtoName()}_0.jpg`)          
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
