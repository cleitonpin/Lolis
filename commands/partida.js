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

                
                //         case 21: return "Barreira"; break;
                //         case 1: return "Purificar"; break;
                //         case 14: return "Incendiar"; break;
                //         case 3: return "Exaustão"; break;
                //         case 4: return "Flash"; break;
                //         case 6: return "Fantasma"; break;
                //         case 7: return "Curar"; break;
                //         case 13: return "Clareza"; break;
                //         case 52: return "Distorção"; break;
                //         case 50: return "Ressuscitar"; break;
                //         case 30: return "Ao Rei!"; break;
                //         case 31: return "Arremesso de Poro"; break;
                //         case 11: return "Golpear"; break;
                //         case 32: return "Bola de neve"; break;
                //         case 12: return "Teleporte"; break;
                i = 0
             
                // @@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    for(; i<=10; i++){
                        function Player(ID1){
                                switch(CurrentGame.participants[i].championId){
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
                          
                        function Bans(ID1){                         
                                switch(CurrentGame.bannedChampions[i].championId){
                                case -1: return client.emojis.get("631208516719214617"); break;
                                case 164: return client.emojis.get("631204793670434847"); break; 
                                case 497: return client.emojis.get("631204793813303325"); break;
                                case 498: return client.emojis.get("631203770901987349"); break;
                                case 142: return client.emojis.get("631204794316619796"); break;
                                case 145: return client.emojis.get("631205291253301249"); break;
                                case 141: return client.emojis.get("631205289613590559"); break;
                                case 555: return client.emojis.get("631205289894608897"); break;
                                case 516: return client.emojis.get("631205656199692289"); break;
                                case 266: return client.emojis.get("631205656430379028"); break;
                                case 412: return client.emojis.get("631205655499505700"); break;
                                case 23: return client.emojis.get("631205940636680232"); break;
                                case 79: return client.emojis.get("631205941093728257"); break;
                                case 69: return client.emojis.get("631205940410187817"); break;
                                case 136: return client.emojis.get("631206269507731495"); break;
                                case 13: return client.emojis.get("631206269323313155"); break;
                                case 78: return client.emojis.get("631206269386096640"); break;
                                case 14: return client.emojis.get("631206552711462953"); break;
                                case 1: return client.emojis.get("631206552661000203"); break;
                                case 202: return client.emojis.get("631206552300158982"); break;
                                case 43: return client.emojis.get("631206902650634240"); break;
                                case 111: return client.emojis.get("631206901891465236"); break;
                                case 240: return client.emojis.get("631206902130278410"); break;
                                case 99: return client.emojis.get("631207540960657408"); break;
                                case 103: return client.emojis.get("631207541363179541"); break;
                                case 2: return client.emojis.get("631207540956332061"); break;
                                case 112: return client.emojis.get("631207541501722644"); break;
                                case 34: return client.emojis.get("631207540931166208"); break;
                                case 27: return client.emojis.get("631207541061451823"); break;
                                case 86: return client.emojis.get("631207540843216916"); break;
                                case 127: return client.emojis.get("631207540881096704"); break;
                                case 57: return client.emojis.get("631207540914520074"); break;
                                case 25: return client.emojis.get("631207540864188436"); break;
                                case 28: return client.emojis.get("631207540855799827"); break;
                                case 105: return client.emojis.get("631209262605008926"); break;
                                case 74: return client.emojis.get("631209264916070416"); break;
                                case 238: return client.emojis.get("631209262848147466"); break;
                                case 68: return client.emojis.get("631209264916201515"); break;
                                case 82: return client.emojis.get("631209263360114700"); break;
                                case 37: return client.emojis.get("631209262835564620"); break;
                                case 96: return client.emojis.get("631209265247551521"); break;
                                case 55: return client.emojis.get("631209263347269656"); break;
                                case 117: return client.emojis.get("631209262827307009"); break;
                                case 22: return client.emojis.get("631209265436295198"); break;
                                case 30: return client.emojis.get("631209264924327937"); break;
                                case 12: return client.emojis.get("631209264785915904"); break;
                                case 122: return client.emojis.get("631209262399619074"); break;
                                case 67: return client.emojis.get("631209262948810783"); break;
                                case 110: return client.emojis.get("631209264102244385"); break;
                                case 77: return client.emojis.get("631211788498632714"); break;
                                case 89: return client.emojis.get("631211788586975232"); break;
                                case 126: return client.emojis.get("631211786430840867"); break;
                                case 134: return client.emojis.get("631211788381323264"); break;
                                case 80: return client.emojis.get("631211788192710688"); break;
                                case 92: return client.emojis.get("631211788259557389"); break;
                                case 121: return client.emojis.get("631211786015735840"); break;
                                case 42: return client.emojis.get("631211787978670094"); break;
                                case 268: return client.emojis.get("631211788234391572"); break;
                                case 51: return client.emojis.get("631211788096241705"); break;
                                case 76: return client.emojis.get("631211788092047388"); break;
                                case 85: return client.emojis.get("631211787840126977"); break;
                                case 3: return client.emojis.get("631211788133728279"); break;
                                case 45: return client.emojis.get("631211788200837152"); break;
                                case 432: return client.emojis.get("631211788100436020"); break;
                                case 150: return client.emojis.get("631211787907366934"); break;
                                case 90: return client.emojis.get("631211788234522624"); break;
                                case 104: return client.emojis.get("631211788402425856"); break;
                                case 254: return client.emojis.get("631264351998967855"); break;
                                case 10: return client.emojis.get("631303849537175592"); break;
                                case 39: return client.emojis.get("631303850942398467"); break;
                                case 64: return client.emojis.get("631303849143042052"); break;
                                case 420: return client.emojis.get("631303849562603520"); break;
                                case 60: return client.emojis.get("631303849482911744"); break;
                                case 106: return client.emojis.get("631303849012887572"); break;
                                case 20: return client.emojis.get("631303848908029966"); break;
                                case 4: return client.emojis.get("631303849566797835"); break;
                                case 24: return client.emojis.get("631303849562341387"); break;
                                case 102: return client.emojis.get("631303851173085194"); break;
                                case 429: return client.emojis.get("631303851063902221"); break;
                                case 36: return client.emojis.get("631303850220978206"); break;
                                case 427: return client.emojis.get("631303849570861065"); break;
                                case 131: return client.emojis.get("631303849528786984"); break;
                                case 223: return client.emojis.get("631303849562603530"); break;
                                case 63: return client.emojis.get("631303850904780821"); break;
                                case 113: return client.emojis.get("631303851055775766"); break;
                                case 8: return client.emojis.get("631303850967695382"); break;
                                case 154: return client.emojis.get("631306879242600458"); break;
                                case 421: return client.emojis.get("631306879267766292"); break;
                                case 133: return client.emojis.get("631306879120703489"); break;
                                case 84: return client.emojis.get("631306883625385994"); break;
                                case 163: return client.emojis.get("631306886028853278"); break;
                                case 18: return client.emojis.get("631306887500922881"); break;
                                case 120: return client.emojis.get("631306884086890507"); break;
                                case 15: return client.emojis.get("631306885470879774"); break;
                                case 236: return client.emojis.get("631306885458427924"); break;
                                case 107: return client.emojis.get("631306890248454154"); break;
                                case 19: return client.emojis.get("631306885441781790"); break;
                                case 72: return client.emojis.get("631306890504044554"); break;
                                case 54: return client.emojis.get("631306887643791360"); break;
                                case 157: return client.emojis.get("631329144600264714"); break;
                                case 101: return client.emojis.get("631309765221548073"); break;
                                case 17: return client.emojis.get("631309766764920832"); break;
                                case 75: return client.emojis.get("631309768656420864"); break;
                                case 58: return client.emojis.get("631325019397685248"); break;
                                case 119: return client.emojis.get("631327738808107049"); break;
                                case 35: return client.emojis.get("631309773480001557"); break;
                                case 50: return client.emojis.get("631309772703924224"); break;
                                case 91: return client.emojis.get("631309772817432576"); break;
                                case 40: return client.emojis.get("631309772767100929"); break;
                                case 115: return client.emojis.get("631309772775489546"); break;
                                case 245: return client.emojis.get("631322664077754369"); break;
                                case 61: return client.emojis.get("631309772645466142"); break;
                                case 114: return client.emojis.get("631325019427045386"); break;
                                case 9: return client.emojis.get("631309772783878145"); break;
                                case 31: return client.emojis.get("631309772989399060"); break;
                                case 33: return client.emojis.get("631309773538852864"); break;
                                case 7: return client.emojis.get("631312187671052298"); break;
                                case 16: return client.emojis.get("631312189386653706"); break;
                                case 26: return client.emojis.get("631312189428334602"); break;
                                case 56: return client.emojis.get("631312188887269396"); break;
                                case 222: return client.emojis.get("631312188547661847"); break;
                                case 83: return client.emojis.get("631312189008904202"); break;
                                case 6: return client.emojis.get("631330382783971369"); break;
                                case 203: return client.emojis.get("631319722457169940"); break;
                                case 21: return client.emojis.get("631312188862103562"); break;
                                case 62: return client.emojis.get("631312189340254208"); break;
                                case 53: return client.emojis.get("631312189046915074"); break;
                                case 98: return client.emojis.get("631312187998076941"); break;
                                case 201: return client.emojis.get("631312189189390346"); break;
                                case 5: return client.emojis.get("631312189042720768"); break;
                                case 29: return client.emojis.get("631312189336191016"); break;
                                case 11: return client.emojis.get("631328969584541716"); break;
                                case 44: return client.emojis.get("631312188950446120"); break;
                                case 32: return client.emojis.get("631312187746418718"); break;
                                case 41: return client.emojis.get("631319721962110995"); break;
                                case 48: return client.emojis.get("631312190946803765"); break;
                                case 38: return client.emojis.get("631326380776357908"); break;
                                case 161: return client.emojis.get("631312189298311168"); break;
                                case 143: return client.emojis.get("631313800800501810"); break;
                                case 267: return client.emojis.get("631313800720547860"); break;
                                case 59: return client.emojis.get("631313800888451093"); break;
                                case 81: return client.emojis.get("631313803388256266"); break;
                                case 517: return client.emojis.get("631326380780683314"); break;
                                case 518: return client.emojis.get("631313803912544256"); break;
                                case 246: return client.emojis.get("631202429563830272"); break;
                                case 350: return client.emojis.get("631313803723669522"); break;
                                
                            }
                        }      
                        if(CurrentGame.participants[i].spell1Id == 1) var spell1 = client.emojis.get("631195262194417694")
                        else if(CurrentGame.participants[i].spell1Id == 7) var spell1 = client.emojis.get("631195264371130391")
                        else if(CurrentGame.participants[i].spell1Id == 3) var spell1 = client.emojis.get("631195262085234721")
                        else if(CurrentGame.participants[i].spell1Id == 4) var spell1 = client.emojis.get("631195263855362081")
                        else if(CurrentGame.participants[i].spell1Id == 6) var spell1 = client.emojis.get("631195264400490507")
                        else if(CurrentGame.participants[i].spell1Id == 11) var spell1 = client.emojis.get("631195264501284889")
                        else if(CurrentGame.participants[i].spell1Id == 12) var spell1 = client.emojis.get("631195264832634880")
                        else if(CurrentGame.participants[i].spell1Id == 13) var spell1 = client.emojis.get("631195262370709525")
                        else if(CurrentGame.participants[i].spell1Id == 14) var spell1 = client.emojis.get("631195264815988747")
                        else if(CurrentGame.participants[i].spell1Id == 21) var spell1 = client.emojis.get("631195261787439106")         
                        else if(CurrentGame.participants[i].spell1Id == 32) var spell1 = client.emojis.get("631195261968056340")
                // ----------------------------------------------------------------------------------------------------//
                        if(CurrentGame.participants[i].spell2Id == 1) var spell2 = client.emojis.get("631195262194417694")
                        else if(CurrentGame.participants[i].spell2Id == 7) var spell2 = client.emojis.get("631195264371130391")
                        else if(CurrentGame.participants[i].spell2Id == 3) var spell2 = client.emojis.get("631195262085234721")
                        else if(CurrentGame.participants[i].spell2Id == 4) var spell2 = client.emojis.get("631195263855362081")
                        else if(CurrentGame.participants[i].spell2Id == 6) var spell2 = client.emojis.get("631195264400490507")
                        else if(CurrentGame.participants[i].spell2Id == 11) var spell2 = client.emojis.get("631195264501284889")
                        else if(CurrentGame.participants[i].spell2Id == 12) var spell2 = client.emojis.get("631195264832634880")
                        else if(CurrentGame.participants[i].spell2Id == 13) var spell2 = client.emojis.get("631195262370709525")
                        else if(CurrentGame.participants[i].spell2Id == 14) var spell2 = client.emojis.get("631195264815988747")
                        else if(CurrentGame.participants[i].spell2Id == 21) var spell2 = client.emojis.get("631195261787439106")         
                        else if(CurrentGame.participants[i].spell2Id == 32) var spell2 = client.emojis.get("631195261968056340")
                // --------------------- FIM EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//               
                //pegar nome da cor do time

                
                        if(CurrentGame.participants[i].teamId == 100) var team = 'Vermelho'
                        if(CurrentGame.participants[i].teamId == 200) var team = 'Azul'
                
                
               
                        if(CurrentGame.bannedChampions[i].teamId == 100) var team = 'Vermelho'
                        if(CurrentGame.bannedChampions[i].teamId == 200) var team = 'Azul'
 
                        if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                        var CP = CurrentGame.participants[i]
                         
                        }
                        const embed = new Discord.RichEmbed()
                            .setTitle(`**Partida ao vivo de ${args[0]}**`)
                            .addField(`***Time ${team}:***`, `__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()}  ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()}  ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}`, true)
                            .addField(`***Time ${team}:***`, `__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}\n__**${CP.summonerName}**__ de ${Player()} ${spell1}${spell2}`, true)
                            .addField('----------------------------------', '\u200b')
                            .addField(`Bans do time ${team}`, `${Bans()} ${Bans()} ${Bans()} ${Bans()} ${Bans()}`, true)
                            .addField(`Bans do time ${team}`, `${Bans()} ${Bans()} ${Bans()} ${Bans()} ${Bans()}` ,true)
                            .setFooter(`Jogando em ${mapa} (Ranqueadas)`)
                            message.channel.send(embed)
                
                // @@@@@@@@@@@@@@@@@@@@@@@@@ NORMAL GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

                // else if(CurrentGame){
                //     if(CurrentGame.participants[0].spell1Id == 1) var spell1 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[0].spell1Id == 7) var spell1 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[0].spell1Id == 3) var spell1 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[0].spell1Id == 4) var spell1 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[0].spell1Id == 6) var spell1 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[0].spell1Id == 11) var spell1 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[0].spell1Id == 12) var spell1 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[0].spell1Id == 13) var spell1 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[0].spell1Id == 14) var spell1 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[0].spell1Id == 21) var spell1 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[0].spell1Id == 32) var spell1 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[0].spell2Id == 1) var spell2 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[0].spell2Id == 7) var spell2 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[0].spell2Id == 3) var spell2 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[0].spell2Id == 4) var spell2 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[0].spell2Id == 6) var spell2 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[0].spell2Id == 11) var spell2 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[0].spell2Id == 12) var spell2 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[0].spell2Id == 13) var spell2 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[0].spell2Id == 14) var spell2 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[0].spell2Id == 21) var spell2 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[0].spell2Id == 32) var spell2 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[1].spell1Id == 1) var PLAY1 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[1].spell1Id == 7) var PLAY1 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[1].spell1Id == 3) var PLAY1 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[1].spell1Id == 4) var PLAY1 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[1].spell1Id == 6) var PLAY1 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[1].spell1Id == 11) var PLAY1 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[1].spell1Id == 12) var PLAY1 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[1].spell1Id == 13) var PLAY1 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[1].spell1Id == 14) var PLAY1 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[1].spell1Id == 21) var PLAY1 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[1].spell1Id == 32) var PLAY1 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[1].spell2Id == 1) var PLAY12 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[1].spell2Id == 7) var PLAY12 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[1].spell2Id == 3) var PLAY12 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[1].spell2Id == 4) var PLAY12 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[1].spell2Id == 6) var PLAY12 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[1].spell2Id == 11) var PLAY12 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[1].spell2Id == 12) var PLAY12 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[1].spell2Id == 13) var PLAY12 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[1].spell2Id == 14) var PLAY12 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[1].spell2Id == 21) var PLAY12 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[1].spell2Id == 32) var PLAY12 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[2].spell1Id == 1) var spellp3 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[2].spell1Id == 7) var spellp3 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[2].spell1Id == 3) var spellp3 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[2].spell1Id == 4) var spellp3 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[2].spell1Id == 6) var spellp3 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[2].spell1Id == 11) var spellp3 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[2].spell1Id == 12) var spellp3 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[2].spell1Id == 13) var spellp3 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[2].spell1Id == 14) var spellp3 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[2].spell1Id == 21) var spellp3 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[2].spell1Id == 32) var spellp3 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[2].spell2Id == 1) var spellpp3 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[2].spell2Id == 7) var spellpp3 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[2].spell2Id == 3) var spellpp3 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[2].spell2Id == 4) var spellpp3 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[2].spell2Id == 6) var spellpp3 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[2].spell2Id == 11) var spellpp3 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[2].spell2Id == 12) var spellpp3 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[2].spell2Id == 13) var spellpp3 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[2].spell2Id == 14) var spellpp3 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[2].spell2Id == 21) var spellpp3 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[2].spell2Id == 32) var spellpp3 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[3].spell1Id == 1) var spellp4 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[3].spell1Id == 7) var spellp4 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[3].spell1Id == 3) var spellp4 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[3].spell1Id == 4) var spellp4 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[3].spell1Id == 6) var spellp4 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[3].spell1Id == 11) var spellp4 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[3].spell1Id == 12) var spellp4 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[3].spell1Id == 13) var spellp4 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[3].spell1Id == 14) var spellp4 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[3].spell1Id == 21) var spellp4 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[3].spell1Id == 32) var spellp4 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[3].spell2Id == 1) var spellpp4 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[3].spell2Id == 7) var spellpp4 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[3].spell2Id == 3) var spellpp4 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[3].spell2Id == 4) var spellpp4 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[3].spell2Id == 6) var spellpp4 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[3].spell2Id == 11) var spellpp4 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[3].spell2Id == 12) var spellpp4 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[3].spell2Id == 13) var spellpp4 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[3].spell2Id == 14) var spellpp4 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[3].spell2Id == 21) var spellpp4 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[3].spell2Id == 32) var spellpp4 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[4].spell1Id == 1) var spellp5 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[4].spell1Id == 7) var spellp5 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[4].spell1Id == 3) var spellp5 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[4].spell1Id == 4) var spellp5 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[4].spell1Id == 6) var spellp5 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[4].spell1Id == 11) var spellp5 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[4].spell1Id == 12) var spellp5 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[4].spell1Id == 13) var spellp5 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[4].spell1Id == 14) var spellp5 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[4].spell1Id == 21) var spellp5 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[4].spell1Id == 32) var spellp5 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[4].spell2Id == 1) var spellpp0 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[4].spell2Id == 7) var spellpp0 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[4].spell2Id == 3) var spellpp0 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[4].spell2Id == 4) var spellpp0 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[4].spell2Id == 6) var spellpp0 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[4].spell2Id == 11) var spellpp0 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[4].spell2Id == 12) var spellpp0 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[4].spell2Id == 13) var spellpp0 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[4].spell2Id == 14) var spellpp0 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[4].spell2Id == 21) var spellpp0 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[4].spell2Id == 32) var spellpp0 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[5].spell1Id == 1) var spellp6 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[5].spell1Id == 7) var spellp6 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[5].spell1Id == 3) var spellp6 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[5].spell1Id == 4) var spellp6 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[5].spell1Id == 6) var spellp6 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[5].spell1Id == 11) var spellp6 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[5].spell1Id == 12) var spellp6 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[5].spell1Id == 13) var spellp6 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[5].spell1Id == 14) var spellp6 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[5].spell1Id == 21) var spellp6 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[5].spell1Id == 32) var spellp6 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[5].spell2Id == 1) var spellpp6 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[5].spell2Id == 7) var spellpp6 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[5].spell2Id == 3) var spellpp6 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[5].spell2Id == 4) var spellpp6 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[5].spell2Id == 6) var spellpp6 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[5].spell2Id == 11) var spellpp6 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[5].spell2Id == 12) var spellpp6 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[5].spell2Id == 13) var spellpp6 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[5].spell2Id == 14) var spellpp6 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[5].spell2Id == 21) var spellpp6 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[5].spell2Id == 32) var spellpp6 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[6].spell1Id == 1) var spellp7 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[6].spell1Id == 7) var spellp7 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[6].spell1Id == 3) var spellp7 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[6].spell1Id == 4) var spellp7 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[6].spell1Id == 6) var spellp7 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[6].spell1Id == 11) var spellp7 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[6].spell1Id == 12) var spellp7 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[6].spell1Id == 13) var spellp7 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[6].spell1Id == 14) var spellp7 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[6].spell1Id == 21) var spellp7 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[6].spell1Id == 32) var spellp7 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[6].spell2Id == 1) var spellpp7 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[6].spell2Id == 7) var spellpp7 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[6].spell2Id == 3) var spellpp7 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[6].spell2Id == 4) var spellpp7 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[6].spell2Id == 6) var spellpp7 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[6].spell2Id == 11) var spellpp7 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[6].spell2Id == 12) var spellpp7 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[6].spell2Id == 13) var spellpp7 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[6].spell2Id == 14) var spellpp7 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[6].spell2Id == 21) var spellpp7 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[6].spell2Id == 32) var spellpp7 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[7].spell1Id == 1) var spellp8 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[7].spell1Id == 7) var spellp8 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[7].spell1Id == 3) var spellp8 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[7].spell1Id == 4) var spellp8 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[7].spell1Id == 6) var spellp8 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[7].spell1Id == 11) var spellp8 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[7].spell1Id == 12) var spellp8 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[7].spell1Id == 13) var spellp8 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[7].spell1Id == 14) var spellp8 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[7].spell1Id == 21) var spellp8 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[7].spell1Id == 32) var spellp8 = client.emojis.get("631195261968056340")
                // // ---------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[7].spell2Id == 1) var spellpp8 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[7].spell2Id == 7) var spellpp8 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[7].spell2Id == 3) var spellpp8 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[7].spell2Id == 4) var spellpp8 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[7].spell2Id == 6) var spellpp8 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[7].spell2Id == 11) var spellpp8 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[7].spell2Id == 12) var spellpp8 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[7].spell2Id == 13) var spellpp8 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[7].spell2Id == 14) var spellpp8 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[7].spell2Id == 21) var spellpp8 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[7].spell2Id == 32) var spellpp8 = client.emojis.get("631195261968056340")
                //     // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[8].spell1Id == 1) var spellp9 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[8].spell1Id == 7) var spellp9 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[8].spell1Id == 3) var spellp9 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[8].spell1Id == 4) var spellp9 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[8].spell1Id == 6) var spellp9 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[8].spell1Id == 11) var spellp9 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[8].spell1Id == 12) var spellp9 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[8].spell1Id == 13) var spellp9 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[8].spell1Id == 14) var spellp9 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[8].spell1Id == 21) var spellp9 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[8].spell1Id == 32) var spellp9 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[8].spell2Id == 1) var spellpp9 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[8].spell2Id == 7) var spellpp9 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[8].spell2Id == 3) var spellpp9 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[8].spell2Id == 4) var spellpp9 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[8].spell2Id == 6) var spellpp9 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[8].spell2Id == 11) var spellpp9 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[8].spell2Id == 12) var spellpp9 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[8].spell2Id == 13) var spellpp9 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[8].spell2Id == 14) var spellpp9 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[8].spell2Id == 21) var spellpp9 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[8].spell2Id == 32) var spellpp9 = client.emojis.get("631195261968056340")
                // // --------------------- PEGANDO EMOJI DAS SPELLS USADAS NA PARTIDA ---------------------------//
                //     if(CurrentGame.participants[9].spell1Id == 1) var spellp10 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[9].spell1Id == 7) var spellp10 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[9].spell1Id == 3) var spellp10 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[9].spell1Id == 4) var spellp10 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[9].spell1Id == 6) var spellp10 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[9].spell1Id == 11) var spellp10 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[9].spell1Id == 12) var spellp10 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[9].spell1Id == 13) var spellp10 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[9].spell1Id == 14) var spellp10 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[9].spell1Id == 21) var spellp10 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[9].spell1Id == 32) var spellp10 = client.emojis.get("631195261968056340")
                // // ----------------------------------------------------------------------------------------------------//
                //     if(CurrentGame.participants[9].spell2Id == 1) var spellpp10 = client.emojis.get("631195262194417694")
                //         else if(CurrentGame.participants[9].spell2Id == 7) var spellpp10 = client.emojis.get("631195264371130391")
                //         else if(CurrentGame.participants[9].spell2Id == 3) var spellpp10 = client.emojis.get("631195262085234721")
                //         else if(CurrentGame.participants[9].spell2Id == 4) var spellpp10 = client.emojis.get("631195263855362081")
                //         else if(CurrentGame.participants[9].spell2Id == 6) var spellpp10 = client.emojis.get("631195264400490507")
                //         else if(CurrentGame.participants[9].spell2Id == 11) var spellpp10 = client.emojis.get("631195264501284889")
                //         else if(CurrentGame.participants[9].spell2Id == 12) var spellpp10 = client.emojis.get("631195264832634880")
                //         else if(CurrentGame.participants[9].spell2Id == 13) var spellpp10 = client.emojis.get("631195262370709525")
                //         else if(CurrentGame.participants[9].spell2Id == 14) var spellpp10 = client.emojis.get("631195264815988747")
                //         else if(CurrentGame.participants[9].spell2Id == 21) var spellpp10 = client.emojis.get("631195261787439106")         
                //         else if(CurrentGame.participants[9].spell2Id == 32) var spellpp10 = client.emojis.get("631195261968056340")

                // //pegar nome da cor do time
                // if(CurrentGame.participants[0].teamId == 100) var team = 'Vermelho'
                // if(CurrentGame.participants[1].teamId == 100) var team = 'Vermelho'
                // if(CurrentGame.participants[2].teamId == 100) var team = 'Vermelho'
                // if(CurrentGame.participants[3].teamId == 100) var team = 'Vermelho'
                // if(CurrentGame.participants[4].teamId == 100) var team = 'Vermelho'
                // if(CurrentGame.participants[5].teamId == 200) var team2 = 'Azul'
                // if(CurrentGame.participants[6].teamId == 200) var team2 = 'Azul'
                // if(CurrentGame.participants[7].teamId == 200) var team2 = 'Azul'
                // if(CurrentGame.participants[8].teamId == 200) var team2 = 'Azul'
                // if(CurrentGame.participants[9].teamId == 200) var team2 = 'Azul'
                // //fim pegar nome da cor do time

                // if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                // if(CurrentGame.gameMode== 'ARAM') var mapa = 'Howling Abyss'

                // const embed = new Discord.RichEmbed()
                // .setTitle(`**Partida ao vivo de ${args[0]}**`)
                // .addField(`***Time ${team}:***`, `__**${CurrentGame.participants[0].summonerName}**__ de ${Player1()}  ${spell1}${spell2}\n__**${CurrentGame.participants[1].summonerName}**__ de ${Player2()}  ${PLAY1}${PLAY12}\n__**${CurrentGame.participants[2].summonerName}**__ de ${Player3()}  ${spellp3}${spellpp3}\n__**${CurrentGame.participants[3].summonerName}**__ de ${Player4()} ${spellp4}${spellpp4}\n__**${CurrentGame.participants[4].summonerName}**__ de ${Player5()} ${spellp5}${spellpp0}`, true)
                // .addField(`***Time ${team2}:***`, `__**${CurrentGame.participants[5].summonerName}**__ de ${Player6()} ${spellp6}${spellpp6}\n__**${CurrentGame.participants[6].summonerName}**__ de ${Player7()} ${spellp7}${spellpp7}\n__**${CurrentGame.participants[7].summonerName}**__ de ${Player8()} ${spellp8}${spellpp8}\n__**${CurrentGame.participants[8].summonerName}**__ de ${Player9()} ${spellp9}${spellpp9}\n__**${CurrentGame.participants[9].summonerName}**__ de ${Player10()} ${spellp10}${spellpp10}`, true)
                // //.addField(`***Time ${team}:***`, `__**${CurrentGame.participants[0].summonerName}**__ de ${Player1()}  \n${spell1}${spell2}\n__**${CurrentGame.participants[1].summonerName}**__ de ${Player2()}  \n${PLAY1}${PLAY12}\n__**${CurrentGame.participants[2].summonerName}**__ de ${Player3()}  \n${spellp3}${spellpp3}\n__**${CurrentGame.participants[3].summonerName}**__ de ${Player4()} \n${spellp4}${spellpp4}\n__**${CurrentGame.participants[4].summonerName}**__ de ${Player5()} ${spellp5}${spellpp0}`, true)
                // //.addField(`***Time ${team2}:***`, `__**${CurrentGame.participants[5].summonerName}**__ de ${Player6()} \n${spellp6}${spellpp6}\n__**${CurrentGame.participants[6].summonerName}**__ de ${Player7()} \n${spellp7}${spellpp7}\n__**${CurrentGame.participants[7].summonerName}**__ de ${Player8()} \n${spellp8}${spellpp8}\n__**${CurrentGame.participants[8].summonerName}**__ de ${Player9()} \n${spellp9}${spellpp9}\n__**${CurrentGame.participants[9].summonerName}**__ de ${Player10()} ${spellp10}${spellpp10}`, true)
                
                // .addField('----------------------------------', '\u200b')
                

                // .setFooter(`Jogando em ${mapa}`)
                // message.channel.send(embed)
                // }
                
            
                   
                 
            })
    
        })
    }

}
