const Discord = require('discord.js')
const client = new Discord.Client()
const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn(process.env.RGAPI_KEY)({
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
                cont = 0
                
                for (; cont < 10 ; cont++) {
               
                var p = kayn.League.Entries.by.summonerID(`${CurrentGame.participants[cont].summonerId}`)
                }
                p.callback(function(err, summonerLeague) {
                    const embed = new Discord.RichEmbed()
                    checkSkin = (championId) => {
                        switch(championId) {
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
                    Bans = (Bans) => {
                        switch(Bans){
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
                    Teams = (cores) => {
                        switch(cores){
                            case 100: return "Vermelho"; break;
                            case 200: return "Azul"; break;
                        }
                    }
                    Spells = (imgs) => {
                        switch(imgs){
                            case 1: return client.emojis.get("631195262194417694"); break;
                            case 7: return client.emojis.get("631195264371130391"); break;
                            case 3: return client.emojis.get("631195262085234721"); break;
                            case 4: return client.emojis.get("631195263855362081"); break;
                            case 6: return client.emojis.get("631195264400490507"); break;
                            case 11: return client.emojis.get("631195264501284889"); break;
                            case 12: return client.emojis.get("631195264832634880"); break;
                            case 13: return client.emojis.get("631195262370709525"); break;
                            case 14: return client.emojis.get("631195264815988747"); break;
                            case 21: return client.emojis.get("631195261787439106"); break;
                            case 32: return client.emojis.get("631195261968056340"); break;
                        }
                    }
                    EmojiElos = (elos) => {
                        switch(elos){
                            case 'IRON': return client.emojis.get("631528448665321472"); break;
                            case 'BRONZE': return client.emojis.get("633781786865958952"); break;
                            case 'SILVER': return client.emojis.get("633785110642294804"); break;
                            case 'GOLD': return client.emojis.get("651479455897747486"); break;
                            case 'PLATINUM': return client.emojis.get("633784209877762048"); break;
                            case 'DIAMOND': return client.emojis.get("633783805655908364"); break;
                            case 'MASTER': return client.emojis.get("633783098512900116"); break;
                            case 'GRANDMASTER': return client.emojis.get("633782348357304328"); break;
                            case 'CHALLENGER': return client.emojis.get("631536146014404608"); break;
                        }
                    }
                    //console.log(CurrentGame)     
                    //console.log(summonerLeague)  
                    console.log(summonerLeague)
                  
                    
  
                    if(CurrentGame == null) {
                        const emb = new Discord.RichEmbed()
                        .setColor('0x0099ff')
                        .setTitle('O jogador não está em partida')
                
                        message.channel.send(emb)
                    }
                    
                    //@@@@@@@@@@@@@@@@@@@@@@@ RANKED GAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    else if(CurrentGame.bannedChampions){
                    
                    if(CurrentGame.gameMode== 'CLASSIC') var mapa = 'Summoners Rift'
                    if(CurrentGame.gameMode== 'URF') var mapa = 'URF'
                    
                    embed.setColor('#170B3B')
                    embed.setTitle(`**Partida ao vivo de ${args[0]}**`)
                    embed.addField(`***Time ${Teams(CurrentGame.participants[0].teamId)}:***`, `${checkSkin(CurrentGame.participants[0].championId)} \u200b __**${CurrentGame.participants[0].summonerName}**__ ${EmojiElos(summonerLeague[0].tier)}\u200b ${Spells(CurrentGame.participants[0].spell1Id)}${Spells(CurrentGame.participants[0].spell2Id)}\n${checkSkin(CurrentGame.participants[1].championId)} \u200b __**${CurrentGame.participants[1].summonerName}**__  ${EmojiElos(summonerLeague[1].tier) } \u200b ${Spells(CurrentGame.participants[1].spell1Id)}${Spells(CurrentGame.participants[1].spell2Id)}\n${checkSkin(CurrentGame.participants[2].championId)} \u200b __**${CurrentGame.participants[2].summonerName}**__ \u200b ${Spells(CurrentGame.participants[2].spell1Id)}${Spells(CurrentGame.participants[2].spell2Id)}\n${checkSkin(CurrentGame.participants[3].championId)} \u200b __**${CurrentGame.participants[3].summonerName}**__ \u200b ${Spells(CurrentGame.participants[3].spell1Id)}${Spells(CurrentGame.participants[3].spell2Id)}\n${checkSkin(CurrentGame.participants[4].championId)} \u200b __**${CurrentGame.participants[4].summonerName}**__ ${EmojiElos(summonerLeague[4].tier)} \u200b ${Spells(CurrentGame.participants[4].spell1Id)}${Spells(CurrentGame.participants[4].spell2Id)}`, true)
                    embed.addField(`***Time ${Teams(CurrentGame.participants[5].teamId)}:***`, `${checkSkin(CurrentGame.participants[5].championId)} \u200b __**${CurrentGame.participants[5].summonerName}**__ ${EmojiElos(summonerLeague[5].tier)}\u200b ${Spells(CurrentGame.participants[5].spell1Id)}${Spells(CurrentGame.participants[5].spell2Id)}\n${checkSkin(CurrentGame.participants[6].championId)} \u200b __**${CurrentGame.participants[6].summonerName}**__ \u200b ${Spells(CurrentGame.participants[6].spell1Id)}${Spells(CurrentGame.participants[6].spell2Id)}\n${checkSkin(CurrentGame.participants[7].championId)} \u200b __**${CurrentGame.participants[7].summonerName}**__ \u200b ${Spells(CurrentGame.participants[7].spell1Id)}${Spells(CurrentGame.participants[7].spell2Id)}\n${checkSkin(CurrentGame.participants[8].championId)} \u200b __**${CurrentGame.participants[8].summonerName}**__ \u200b ${Spells(CurrentGame.participants[8].spell1Id)}${Spells(CurrentGame.participants[8].spell2Id)}\n${checkSkin(CurrentGame.participants[9].championId)} \u200b __**${CurrentGame.participants[9].summonerName}**__ \u200b ${Spells(CurrentGame.participants[9].spell1Id)}${Spells(CurrentGame.participants[9].spell2Id)}`, true)
                    embed.addField('\u200b', '\u200b')
                    embed.addField(`Bans do time ${Teams(CurrentGame.bannedChampions[0].teamId)}`, `${Bans(CurrentGame.bannedChampions[0].championId)} ${Bans(CurrentGame.bannedChampions[1].championId)} ${Bans(CurrentGame.bannedChampions[2].championId)} ${Bans(CurrentGame.bannedChampions[3].championId)} ${Bans(CurrentGame.bannedChampions[4].championId)}`, true)
                    embed.addField(`Bans do time ${Teams(CurrentGame.bannedChampions[5].teamId)}`, `${Bans(CurrentGame.bannedChampions[5].championId)} ${Bans(CurrentGame.bannedChampions[6].championId)} ${Bans(CurrentGame.bannedChampions[7].championId)} ${Bans(CurrentGame.bannedChampions[8].championId)} ${Bans(CurrentGame.bannedChampions[9].championId)}` ,true)
                    embed.setFooter(`Jogando no ${mapa} (RANKED/ALTERNADA)`) 
                    return message.channel.send(embed)           
                        }
                                  
                    })
                    
                
                
                
            })
        })
    }

}
