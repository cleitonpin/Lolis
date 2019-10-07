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
    if (args[0]){
        //pegar id do player
        kayn.Summoner.by.name(`${args[0]}`)
        .callback(function(err, summoner) {
            console.log("\n\nID do jogador: "+summoner['id']+"\n\n")
        //fim pegar id
            
            //pegar partida ao vivo
            kayn.CurrentGame.by.summonerID(summoner.id)
            .region(REGIONS.BRAZIL)
            .callback(function(err, CurrentGame) {
                console.log(CurrentGame)
                if(CurrentGame == null) {
                    const emb = new Discord.RichEmbed()
                    .setColor('0x0099ff')
                    .setTitle('O jogador não está em partida')

                    message.channel.send(emb)
                }

                //pegar nome dos champs dos players
                function Player1(ID1){
                    switch(CurrentGame.participants[0].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player2(ID2){
                    switch(CurrentGame.participants[1].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player3(ID3){
                    switch(CurrentGame.participants[2].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player4(ID4){
                    switch(CurrentGame.participants[3].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player5(ID5){
                    switch(CurrentGame.participants[4].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player6(ID6){
                    switch(CurrentGame.participants[5].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player7(ID7){
                    switch(CurrentGame.participants[6].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player8(ID8){
                    switch(CurrentGame.participants[7].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player9(ID9){
                    switch(CurrentGame.participants[8].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                function Player10(ID10){
                    switch(CurrentGame.participants[9].championId){
                        case 164: return "Camille"; break; 
                        case 497: return "Rakan"; break;
                        case 498: return "Xayah"; break;
                        case 142: return "Zoe"; break;
                        case 145: return "Kaisa"; break;
                        case 141: return "Kayn"; break;
                        case 555: return "Pyke"; break;
                        case 516: return "Ornn"; break;
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
                }
                //fim nome dos champs dos players

                //SPELLS 1
                function Jogador1(spl1){
                    switch(CurrentGame.participants[0].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[0].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador2(spl2){
                    switch(CurrentGame.participants[1].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[1].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador3(spl3){
                    switch(CurrentGame.participants[2].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[2].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador4(spl4){
                    switch(CurrentGame.participants[3].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[3].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador5(spl5){
                    switch(CurrentGame.participants[4].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[4].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador6(spl6){
                    switch(CurrentGame.participants[5].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[5].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador7(spl7){
                    switch(CurrentGame.participants[6].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[6].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador8(spl8){
                    switch(CurrentGame.participants[7].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[7].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador9(spl9){
                    switch(CurrentGame.participants[8].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                    switch(CurrentGame.participants[8].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                function Jogador10(spl10){
                    switch(CurrentGame.participants[9].spell1Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;
                    }
                    
                }
                function JogadorJ(spl2){
                    switch(CurrentGame.participants[9].spell2Id){
                        case 21: return "Barreira"; break;
                        case 1: return "Purificar"; break;
                        case 14: return "Incendiar"; break;
                        case 3: return "Exaustão"; break;
                        case 4: return "Flash"; break;
                        case 6: return "Fantasma"; break;
                        case 7: return "Curar"; break;
                        case 13: return "Clareza"; break;
                        case 52: return "Distorção"; break;
                        case 50: return "Ressuscitar"; break;
                        case 30: return "Ao Rei!"; break;
                        case 31: return "Arremesso de Poro"; break;
                        case 11: return "Golpear"; break;
                        case 32: return "Bola de neve"; break;
                        case 12: return "Teleporte"; break;

                    }
                }
                
                //fim pegar nome das spells
                //else if(CurrentGame.participants[0].spell1Id == 30) var AoRei = client.emojis.get("630576055454793728")
                //else if(CurrentGame.participants[0].spell1Id == 31) var Arremesso = client.emojis.get("630576055454793728")
                
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[0].spell1Id == 1) var spell1 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[0].spell1Id == 7) var spell1 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[0].spell1Id == 3) var spell1 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[0].spell1Id == 4) var spell1 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[0].spell1Id == 6) var spell1 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[0].spell1Id == 11) var spell1 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[0].spell1Id == 12) var spell1 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[0].spell1Id == 13) var spell1 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[0].spell1Id == 14) var spell1 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[0].spell1Id == 21) var spell1 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[0].spell1Id == 32) var spell1 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[0].spell2Id == 1) var spell2 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[0].spell2Id == 7) var spell2 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[0].spell2Id == 3) var spell2 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[0].spell2Id == 4) var spell2 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[0].spell2Id == 6) var spell2 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[0].spell2Id == 11) var spell2 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[0].spell2Id == 12) var spell2 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[0].spell2Id == 13) var spell2 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[0].spell2Id == 14) var spell2 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[0].spell2Id == 21) var spell2 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[0].spell2Id == 32) var spell2 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[1].spell1Id == 1) var PLAY1 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[1].spell1Id == 7) var PLAY1 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[1].spell1Id == 3) var PLAY1 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[1].spell1Id == 4) var PLAY1 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[1].spell1Id == 6) var PLAY1 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[1].spell1Id == 11) var PLAY1 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[1].spell1Id == 12) var PLAY1 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[1].spell1Id == 13) var PLAY1 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[1].spell1Id == 14) var PLAY1 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[1].spell1Id == 21) var PLAY1 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[1].spell1Id == 32) var PLAY1 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[1].spell2Id == 1) var PLAY12 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[1].spell2Id == 7) var PLAY12 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[1].spell2Id == 3) var PLAY12 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[1].spell2Id == 4) var PLAY12 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[1].spell2Id == 6) var PLAY12 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[1].spell2Id == 11) var PLAY12 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[1].spell2Id == 12) var PLAY12 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[1].spell2Id == 13) var PLAY12 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[1].spell2Id == 14) var PLAY12 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[1].spell2Id == 21) var PLAY12 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[1].spell2Id == 32) var PLAY12 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[2].spell1Id == 1) var spellp3 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[2].spell1Id == 7) var spellp3 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[2].spell1Id == 3) var spellp3 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[2].spell1Id == 4) var spellp3 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[2].spell1Id == 6) var spellp3 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[2].spell1Id == 11) var spellp3 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[2].spell1Id == 12) var spellp3 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[2].spell1Id == 13) var spellp3 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[2].spell1Id == 14) var spellp3 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[2].spell1Id == 21) var spellp3 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[2].spell1Id == 32) var spellp3 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[2].spell2Id == 1) var spellpp3 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[2].spell2Id == 7) var spellpp3 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[2].spell2Id == 3) var spellpp3 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[2].spell2Id == 4) var spellpp3 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[2].spell2Id == 6) var spellpp3 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[2].spell2Id == 11) var spellpp3 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[2].spell2Id == 12) var spellpp3 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[2].spell2Id == 13) var spellpp3 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[2].spell2Id == 14) var spellpp3 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[2].spell2Id == 21) var spellpp3 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[2].spell2Id == 32) var spellpp3 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[3].spell1Id == 1) var spellp4 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[3].spell1Id == 7) var spellp4 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[3].spell1Id == 3) var spellp4 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[3].spell1Id == 4) var spellp4 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[3].spell1Id == 6) var spellp4 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[3].spell1Id == 11) var spellp4 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[3].spell1Id == 12) var spellp4 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[3].spell1Id == 13) var spellp4 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[3].spell1Id == 14) var spellp4 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[3].spell1Id == 21) var spellp4 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[3].spell1Id == 32) var spellp4 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[3].spell2Id == 1) var spellpp4 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[3].spell2Id == 7) var spellpp4 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[3].spell2Id == 3) var spellpp4 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[3].spell2Id == 4) var spellpp4 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[3].spell2Id == 6) var spellpp4 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[3].spell2Id == 11) var spellpp4 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[3].spell2Id == 12) var spellpp4 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[3].spell2Id == 13) var spellpp4 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[3].spell2Id == 14) var spellpp4 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[3].spell2Id == 21) var spellpp4 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[3].spell2Id == 32) var spellpp4 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[4].spell1Id == 1) var spellp5 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[4].spell1Id == 7) var spellp5 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[4].spell1Id == 3) var spellp5 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[4].spell1Id == 4) var spellp5 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[4].spell1Id == 6) var spellp5 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[4].spell1Id == 11) var spellp5 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[4].spell1Id == 12) var spellp5 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[4].spell1Id == 13) var spellp5 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[4].spell1Id == 14) var spellp5 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[4].spell1Id == 21) var spellp5 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[4].spell1Id == 32) var spellp5 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[4].spell2Id == 1) var spellpp0 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[4].spell2Id == 7) var spellpp0 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[4].spell2Id == 3) var spellpp0 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[4].spell2Id == 4) var spellpp0 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[4].spell2Id == 6) var spellpp0 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[4].spell2Id == 11) var spellpp0 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[4].spell2Id == 12) var spellpp0 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[4].spell2Id == 13) var spellpp0 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[4].spell2Id == 14) var spellpp0 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[4].spell2Id == 21) var spellpp0 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[4].spell2Id == 32) var spellpp0 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[5].spell1Id == 1) var spellp6 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[5].spell1Id == 7) var spellp6 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[5].spell1Id == 3) var spellp6 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[5].spell1Id == 4) var spellp6 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[5].spell1Id == 6) var spellp6 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[5].spell1Id == 11) var spellp6 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[5].spell1Id == 12) var spellp6 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[5].spell1Id == 13) var spellp6 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[5].spell1Id == 14) var spellp6 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[5].spell1Id == 21) var spellp6 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[5].spell1Id == 32) var spellp6 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[5].spell2Id == 1) var spellpp6 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[5].spell2Id == 7) var spellpp6 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[5].spell2Id == 3) var spellpp6 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[5].spell2Id == 4) var spellpp6 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[5].spell2Id == 6) var spellpp6 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[5].spell2Id == 11) var spellpp6 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[5].spell2Id == 12) var spellpp6 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[5].spell2Id == 13) var spellpp6 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[5].spell2Id == 14) var spellpp6 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[5].spell2Id == 21) var spellpp6 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[5].spell2Id == 32) var spellpp6 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[6].spell1Id == 1) var spellp7 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[6].spell1Id == 7) var spellp7 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[6].spell1Id == 3) var spellp7 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[6].spell1Id == 4) var spellp7 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[6].spell1Id == 6) var spellp7 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[6].spell1Id == 11) var spellp7 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[6].spell1Id == 12) var spellp7 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[6].spell1Id == 13) var spellp7 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[6].spell1Id == 14) var spellp7 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[6].spell1Id == 21) var spellp7 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[6].spell1Id == 32) var spellp7 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[6].spell2Id == 1) var spellpp7 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[6].spell2Id == 7) var spellpp7 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[6].spell2Id == 3) var spellpp7 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[6].spell2Id == 4) var spellpp7 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[6].spell2Id == 6) var spellpp7 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[6].spell2Id == 11) var spellpp7 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[6].spell2Id == 12) var spellpp7 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[6].spell2Id == 13) var spellpp7 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[6].spell2Id == 14) var spellpp7 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[6].spell2Id == 21) var spellpp7 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[6].spell2Id == 32) var spellpp7 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[7].spell1Id == 1) var spellp8 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[7].spell1Id == 7) var spellp8 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[7].spell1Id == 3) var spellp8 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[7].spell1Id == 4) var spellp8 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[7].spell1Id == 6) var spellp8 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[7].spell1Id == 11) var spellp8 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[7].spell1Id == 12) var spellp8 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[7].spell1Id == 13) var spellp8 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[7].spell1Id == 14) var spellp8 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[7].spell1Id == 21) var spellp8 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[7].spell1Id == 32) var spellp8 = client.emojis.get("630607188154646529")
                // ---------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[7].spell2Id == 1) var spellpp8 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[7].spell2Id == 7) var spellpp8 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[7].spell2Id == 3) var spellpp8 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[7].spell2Id == 4) var spellpp8 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[7].spell2Id == 6) var spellpp8 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[7].spell2Id == 11) var spellpp8 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[7].spell2Id == 12) var spellpp8 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[7].spell2Id == 13) var spellpp8 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[7].spell2Id == 14) var spellpp8 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[7].spell2Id == 21) var spellpp8 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[7].spell2Id == 32) var spellpp8 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[8].spell1Id == 1) var spellp9 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[8].spell1Id == 7) var spellp9 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[8].spell1Id == 3) var spellp9 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[8].spell1Id == 4) var spellp9 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[8].spell1Id == 6) var spellp9 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[8].spell1Id == 11) var spellp9 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[8].spell1Id == 12) var spellp9 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[8].spell1Id == 13) var spellp9 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[8].spell1Id == 14) var spellp9 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[8].spell1Id == 21) var spellp9 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[8].spell1Id == 32) var spellp9 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[8].spell2Id == 1) var spellpp9 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[8].spell2Id == 7) var spellpp9 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[8].spell2Id == 3) var spellpp9 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[8].spell2Id == 4) var spellpp9 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[8].spell2Id == 6) var spellpp9 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[8].spell2Id == 11) var spellpp9 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[8].spell2Id == 12) var spellpp9 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[8].spell2Id == 13) var spellpp9 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[8].spell2Id == 14) var spellpp9 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[8].spell2Id == 21) var spellpp9 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[8].spell2Id == 32) var spellpp9 = client.emojis.get("630607188154646529")
                // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                if(CurrentGame.participants[9].spell1Id == 1) var spellp10 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[9].spell1Id == 7) var spellp10 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[9].spell1Id == 3) var spellp10 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[9].spell1Id == 4) var spellp10 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[9].spell1Id == 6) var spellp10 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[9].spell1Id == 11) var spellp10 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[9].spell1Id == 12) var spellp10 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[9].spell1Id == 13) var spellp10 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[9].spell1Id == 14) var spellp10 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[9].spell1Id == 21) var spellp10 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[9].spell1Id == 32) var spellp10 = client.emojis.get("630607188154646529")
                // ----------------------------------------------------------------------------------------------------//
                if(CurrentGame.participants[9].spell2Id == 1) var spellpp10 = client.emojis.get("630607190595731482")
                else if(CurrentGame.participants[9].spell2Id == 7) var spellpp10 = client.emojis.get("630619043681927168")
                else if(CurrentGame.participants[9].spell2Id == 3) var spellpp10 = client.emojis.get("630607190310256701")
                else if(CurrentGame.participants[9].spell2Id == 4) var spellpp10 = client.emojis.get("630607190583148544")
                else if(CurrentGame.participants[9].spell2Id == 6) var spellpp10 = client.emojis.get("630607190151004171")
                else if(CurrentGame.participants[9].spell2Id == 11) var spellpp10 = client.emojis.get("630607293217505280")
                else if(CurrentGame.participants[9].spell2Id == 12) var spellpp10 = client.emojis.get("630607293377150986")
                else if(CurrentGame.participants[9].spell2Id == 13) var spellpp10 = client.emojis.get("630607188422950932")
                else if(CurrentGame.participants[9].spell2Id == 14) var spellpp10 = client.emojis.get("630607190255730711")
                else if(CurrentGame.participants[9].spell2Id == 21) var spellpp10 = client.emojis.get("630607188456374312")         
                else if(CurrentGame.participants[9].spell2Id == 32) var spellpp10 = client.emojis.get("630607188154646529")

                //pegar nome da cor do time
                if(CurrentGame.participants[0].teamId == 100) var team = 'Vermelho'
                if(CurrentGame.participants[1].teamId == 100) var team = 'Vermelho'
                if(CurrentGame.participants[2].teamId == 100) var team = 'Vermelho'
                if(CurrentGame.participants[3].teamId == 100) var team = 'Vermelho'
                if(CurrentGame.participants[4].teamId == 100) var team = 'Vermelho'
                if(CurrentGame.participants[5].teamId == 200) var team2 = 'Azul'
                if(CurrentGame.participants[6].teamId == 200) var team2 = 'Azul'
                if(CurrentGame.participants[7].teamId == 200) var team2 = 'Azul'
                if(CurrentGame.participants[8].teamId == 200) var team2 = 'Azul'
                if(CurrentGame.participants[9].teamId == 200) var team2 = 'Azul'
                //fim pegar nome da cor do time

                if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                if(CurrentGame.gameMode== 'ARAM') var mapa = 'Howling Abyss'

                const embed = new Discord.RichEmbed()
                .setTitle(`**Partida ao vivo de ${args[0]}**`)
                .addField(`***Time ${team}:***`, `__**${CurrentGame.participants[0].summonerName}**__ de ${Player1()}  ${spell1}${spell2}\n__**${CurrentGame.participants[1].summonerName}**__ de ${Player2()}  ${PLAY1}${PLAY12}\n__**${CurrentGame.participants[2].summonerName}**__ de ${Player3()}  ${spellp3}${spellpp3}\n__**${CurrentGame.participants[3].summonerName}**__ de ${Player4()} ${spellp4}${spellpp4}\n__**${CurrentGame.participants[4].summonerName}**__ de ${Player5()} ${spellp5}${spellpp0}`, true)
                .addField(`***Time ${team2}:***`, `__**${CurrentGame.participants[5].summonerName}**__ de ${Player6()} ${spellp6}${spellpp6}\n__**${CurrentGame.participants[6].summonerName}**__ de ${Player7()} ${spellp7}${spellpp7}\n__**${CurrentGame.participants[7].summonerName}**__ de ${Player8()} ${spellp8}${spellpp8}\n__**${CurrentGame.participants[8].summonerName}**__ de ${Player9()} ${spellp9}${spellpp9}\n__**${CurrentGame.participants[9].summonerName}**__ de ${Player10()} ${spellp10}${spellpp10}`, true)
                //.addField(`***Time ${team}:***`, `__**${CurrentGame.participants[0].summonerName}**__ de ${Player1()}  \n${spell1}${spell2}\n__**${CurrentGame.participants[1].summonerName}**__ de ${Player2()}  \n${PLAY1}${PLAY12}\n__**${CurrentGame.participants[2].summonerName}**__ de ${Player3()}  \n${spellp3}${spellpp3}\n__**${CurrentGame.participants[3].summonerName}**__ de ${Player4()} \n${spellp4}${spellpp4}\n__**${CurrentGame.participants[4].summonerName}**__ de ${Player5()} ${spellp5}${spellpp0}`, true)
                //.addField(`***Time ${team2}:***`, `__**${CurrentGame.participants[5].summonerName}**__ de ${Player6()} \n${spellp6}${spellpp6}\n__**${CurrentGame.participants[6].summonerName}**__ de ${Player7()} \n${spellp7}${spellpp7}\n__**${CurrentGame.participants[7].summonerName}**__ de ${Player8()} \n${spellp8}${spellpp8}\n__**${CurrentGame.participants[8].summonerName}**__ de ${Player9()} \n${spellp9}${spellpp9}\n__**${CurrentGame.participants[9].summonerName}**__ de ${Player10()} ${spellp10}${spellpp10}`, true)
                
                .addField('----------------------------------', '\u200b')

                .setFooter(`Jogando em ${mapa}`)
                message.channel.send(embed)
                
            })
        })
    }

}
