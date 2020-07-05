const Discord = require('discord.js')
const versions = require('../../api/versions')
const { getChampionEmoji, } = require('../commonFunctions')
const leagueTierlist = require('../../api/league-tierlist')
const champ = require('./champion.json')
const championApi = require('../../api/champion-api')


titleize = (text) => {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

exports.run = async (client, message, args) => {
    
    let version = await championApi.data()
    let champions = version.data.champions
    let lane = args.join('')
    let tierlist = await leagueTierlist.data()

    const tierlistE = new Discord.MessageEmbed()
    .setColor('#ffff1a')
    .setTitle(`Tierlist: ${titleize(lane)}`)
    

    champ.forEach(name => {
        
        let id = champions[name]

        let array = []
        array.push(tierlist.data[id.key])

        array.forEach(t => {
            //TIER LIST TOP
            let tierSTop = t.roles.find(s => s.tier == "S" && s.name == "top")
            let tierATOP = t.roles.find(s => s.tier == "A" && s.name == "top")
            //TIER LIST JUNGLE
            let tierSjgl = t.roles.find(s => s.tier == "S" && s.name == "jungle")
            let tierAjgl = t.roles.find(s => s.tier == "A" && s.name == "jungle")
            //TIER LIST MID
            let tierSmid = t.roles.find(s => s.tier == "S" && s.name == "mid")
            let tierAmid = t.roles.find(s => s.tier == "A" && s.name == "mid")
            //TIER LIST ADC
            let tierSadc = t.roles.find(s => s.tier == "S" && s.name == "adc")
            let tierAadc = t.roles.find(s => s.tier == "A" && s.name == "adc")
            //TIER LIST SUPORTE
            let tierSsupport = t.roles.find(s => s.tier == "S" && s.name == "support")
            let tierAsupport = t.roles.find(s => s.tier == "A" && s.name == "support")
            

            if(lane == 'top'){
                if(tierSTop) {
                    tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierSTop.winRate}%\n`, true)
                }
                if(tierATOP) {
                    tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierATOP.winRate}%\n`, true)
                }
            } 
            else if(lane == 'jungle') {
                if(tierSjgl) {
                    tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierSjgl.winRate}%\n`, true)
                }
                if(tierAjgl) {
                    tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierAjgl.winRate}%\n`, true)
                }
            }
            else if(lane == 'mid') {
                if(tierSmid) {
                    tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierSmid.winRate}%\n`, true)
                }
                if(tierAmid) {
                    tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierAmid.winRate}%\n`, true)
                }
            }
            else if(lane == 'adc') {
                if(tierSadc) {
                    tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierSadc.winRate}%\n`, true)
                }
                if(tierAadc) {
                    tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierAadc.winRate}%\n`, true)
                }
            }
            else if(lane == 'support') {
                if(tierSsupport) {
                    tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierSsupport.winRate}%\n`, true)
                }
                if(tierAsupport) {
                    tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, t.id)} ${t.key}: ${tierAsupport.winRate}%\n`, true)
                }
            }

        })
        
    })
    tierlistE.setFooter(`Patch ${await versions.data()}`)
    message.channel.send(tierlistE)
    


    // if(lane == 'top') {
    //     tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, tierlist.data['6'].id)} ${tierlist.data['6'].name}: ${tierlist.data['6'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['24'].id)} ${tierlist.data['24'].name}: ${tierlist.data['24'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['75'].id)} ${tierlist.data['75'].name}: ${tierlist.data['75'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['82'].id)} ${tierlist.data['82'].name}: ${tierlist.data['82'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['86'].id)} ${tierlist.data['86'].name}: ${tierlist.data['86'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['106'].id)} ${tierlist.data['106'].name}: ${tierlist.data['106'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['114'].id)} ${tierlist.data['114'].name}: ${tierlist.data['114'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['122'].id)} ${tierlist.data['122'].name}: ${tierlist.data['122'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['875'].id)} ${tierlist.data['875'].name}: ${tierlist.data['875'].roles[3].winRate}%`, true)
    //     tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, tierlist.data['17'].id)} ${tierlist.data['17'].name}: ${tierlist.data['17'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['27'].id)} ${tierlist.data['27'].name}: ${tierlist.data['27'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['54'].id)} ${tierlist.data['54'].name}: ${tierlist.data['54'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['57'].id)} ${tierlist.data['57'].name}: ${tierlist.data['57'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['58'].id)} ${tierlist.data['58'].name}: ${tierlist.data['58'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['62'].id)} ${tierlist.data['62'].name}: ${tierlist.data['62'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['83'].id)} ${tierlist.data['83'].name}: ${tierlist.data['83'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['98'].id)} ${tierlist.data['98'].name}: ${tierlist.data['98'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['133'].id)} ${tierlist.data['133'].name}: ${tierlist.data['133'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['150'].id)} ${tierlist.data['150'].name}: ${tierlist.data['150'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['266'].id)} ${tierlist.data['266'].name}: ${tierlist.data['266'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['420'].id)} ${tierlist.data['420'].name}: ${tierlist.data['420'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🟢 Tier B', `${getChampionEmoji(client, tierlist.data['2'].id)} ${tierlist.data['2'].name}: ${tierlist.data['2'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['8'].id)} ${tierlist.data['8'].name}: ${tierlist.data['8'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['9'].id)} ${tierlist.data['9'].name}: ${tierlist.data['9'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['10'].id)} ${tierlist.data['10'].name}: ${tierlist.data['10'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['14'].id)} ${tierlist.data['14'].name}: ${tierlist.data['14'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['23'].id)} ${tierlist.data['23'].name}: ${tierlist.data['23'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['31'].id)} ${tierlist.data['31'].name}: ${tierlist.data['31'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['36'].id)} ${tierlist.data['36'].name}: ${tierlist.data['36'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['78'].id)} ${tierlist.data['78'].name}: ${tierlist.data['78'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['92'].id)} ${tierlist.data['92'].name}: ${tierlist.data['92'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['107'].id)} ${tierlist.data['107'].name}: ${tierlist.data['107'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['120'].id)} ${tierlist.data['120'].name}: ${tierlist.data['120'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['240'].id)} ${tierlist.data['240'].name}: ${tierlist.data['240'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['516'].id)} ${tierlist.data['516'].name}: ${tierlist.data['516'].roles[0].winRate}%`, true)
        
    // }

    // else if (lane == 'mid') {
    //     tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, tierlist.data['1'].id)} ${tierlist.data['1'].name}: ${tierlist.data['1'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['3'].id)} ${tierlist.data['3'].name}: ${tierlist.data['3'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['55'].id)} ${tierlist.data['55'].name}: ${tierlist.data['55'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['61'].id)} ${tierlist.data['61'].name}: ${tierlist.data['61'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['99'].id)} ${tierlist.data['99'].name}: ${tierlist.data['99'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['105'].id)} ${tierlist.data['105'].name}: ${tierlist.data['105'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['131'].id)} ${tierlist.data['131'].name}: ${tierlist.data['131'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['157'].id)} ${tierlist.data['157'].name}: ${tierlist.data['157'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['245'].id)} ${tierlist.data['245'].name}: ${tierlist.data['245'].roles[2].winRate}%`, true)
    //     tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, tierlist.data['4'].id)} ${tierlist.data['4'].name}: ${tierlist.data['4'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['8'].id)} ${tierlist.data['8'].name}: ${tierlist.data['8'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['38'].id)} ${tierlist.data['38'].name}: ${tierlist.data['38'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['45'].id)} ${tierlist.data['45'].name}: ${tierlist.data['45'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['56'].id)} ${tierlist.data['56'].name}: ${tierlist.data['56'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['69'].id)} ${tierlist.data['69'].name}: ${tierlist.data['69'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['90'].id)} ${tierlist.data['90'].name}: ${tierlist.data['90'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['91'].id)} ${tierlist.data['91'].name}: ${tierlist.data['91'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['103'].id)} ${tierlist.data['103'].name}: ${tierlist.data['103'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['161'].id)} ${tierlist.data['161'].name}: ${tierlist.data['161'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['238'].id)} ${tierlist.data['238'].name}: ${tierlist.data['238'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['555'].id)} ${tierlist.data['555'].name}: ${tierlist.data['555'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🟢 Tier B', `${getChampionEmoji(client, tierlist.data['7'].id)} ${tierlist.data['7'].name}: ${tierlist.data['7'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['30'].id)} ${tierlist.data['30'].name}: ${tierlist.data['30'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['34'].id)} ${tierlist.data['34'].name}: ${tierlist.data['34'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['54'].id)} ${tierlist.data['54'].name}: ${tierlist.data['54'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['67'].id)} ${tierlist.data['67'].name}: ${tierlist.data['67'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['68'].id)} ${tierlist.data['68'].name}: ${tierlist.data['68'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['80'].id)} ${tierlist.data['80'].name}: ${tierlist.data['80'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['84'].id)} ${tierlist.data['84'].name}: ${tierlist.data['84'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['101'].id)} ${tierlist.data['101'].name}: ${tierlist.data['101'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['112'].id)} ${tierlist.data['112'].name}: ${tierlist.data['112'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['115'].id)} ${tierlist.data['115'].name}: ${tierlist.data['115'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['127'].id)} ${tierlist.data['127'].name}: ${tierlist.data['127'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['134'].id)} ${tierlist.data['134'].name}: ${tierlist.data['134'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['142'].id)} ${tierlist.data['142'].name}: ${tierlist.data['142'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['246'].id)} ${tierlist.data['246'].name}: ${tierlist.data['246'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['517'].id)} ${tierlist.data['517'].name}: ${tierlist.data['517'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['518'].id)} ${tierlist.data['518'].name}: ${tierlist.data['518'].roles[0].winRate}%`, true)
    //     //tierlistE.addField('Tier C', `${getChampionEmoji(client, tierlist.data['13'].id)} ${tierlist.data['13'].name}: ${tierlist.data['13'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['25'].id)} ${tierlist.data['25'].name}: ${tierlist.data['25'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['26'].id)} ${tierlist.data['26'].name}: ${tierlist.data['26'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['31'].id)} ${tierlist.data['31'].name}: ${tierlist.data['31'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['39'].id)} ${tierlist.data['39'].name}: ${tierlist.data['39'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['41'].id)} ${tierlist.data['41'].name}: ${tierlist.data['41'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['42'].id)} ${tierlist.data['42'].name}: ${tierlist.data['42'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['43'].id)} ${tierlist.data['43'].name}: ${tierlist.data['43'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['50'].id)} ${tierlist.data['50'].name}: ${tierlist.data['50'].roles[2].winRate}%`, true)
    // }

    // else if(lane == 'jungle') {
    //     tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, tierlist.data['9'].id)} ${tierlist.data['9'].name}: ${tierlist.data['9'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['11'].id)} ${tierlist.data['11'].name}: ${tierlist.data['11'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['19'].id)} ${tierlist.data['19'].name}: ${tierlist.data['19'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['20'].id)} ${tierlist.data['20'].name}: ${tierlist.data['20'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['104'].id)} ${tierlist.data['104'].name}: ${tierlist.data['104'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['106'].id)} ${tierlist.data['106'].name}: ${tierlist.data['106'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['141'].id)} ${tierlist.data['141'].name}: ${tierlist.data['141'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['154'].id)} ${tierlist.data['154'].name}: ${tierlist.data['154'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['245'].id)} ${tierlist.data['245'].name}: ${tierlist.data['245'].roles[1].winRate}%`, true)
    //     tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, tierlist.data['32'].id)} ${tierlist.data['32'].name}: ${tierlist.data['32'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['35'].id)} ${tierlist.data['35'].name}: ${tierlist.data['35'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['48'].id)} ${tierlist.data['48'].name}: ${tierlist.data['48'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['56'].id)} ${tierlist.data['56'].name}: ${tierlist.data['56'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['59'].id)} ${tierlist.data['59'].name}: ${tierlist.data['59'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['60'].id)} ${tierlist.data['60'].name}: ${tierlist.data['60'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['62'].id)} ${tierlist.data['62'].name}: ${tierlist.data['62'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['102'].id)} ${tierlist.data['102'].name}: ${tierlist.data['102'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['120'].id)} ${tierlist.data['120'].name}: ${tierlist.data['120'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['254'].id)} ${tierlist.data['254'].name}: ${tierlist.data['254'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🟢 Tier B', `${getChampionEmoji(client, tierlist.data['2'].id)} ${tierlist.data['2'].name}: ${tierlist.data['2'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['5'].id)} ${tierlist.data['5'].name}: ${tierlist.data['5'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['28'].id)} ${tierlist.data['28'].name}: ${tierlist.data['28'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['33'].id)} ${tierlist.data['33'].name}: ${tierlist.data['33'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['36'].id)} ${tierlist.data['36'].name}: ${tierlist.data['36'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['64'].id)} ${tierlist.data['64'].name}: ${tierlist.data['64'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['77'].id)} ${tierlist.data['77'].name}: ${tierlist.data['77'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['107'].id)} ${tierlist.data['107'].name}: ${tierlist.data['107'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['121'].id)} ${tierlist.data['121'].name}: ${tierlist.data['121'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['203'].id)} ${tierlist.data['203'].name}: ${tierlist.data['203'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['421'].id)} ${tierlist.data['421'].name}: ${tierlist.data['421'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['427'].id)} ${tierlist.data['427'].name}: ${tierlist.data['427'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['875'].id)} ${tierlist.data['875'].name}: ${tierlist.data['875'].roles[1].winRate}%`, true)
    //     //tierlistE.addField('Tier C', `${getChampionEmoji(client, tierlist.data['17'].id)} ${tierlist.data['17'].name}: ${tierlist.data['17'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['24'].id)} ${tierlist.data['24'].name}: ${tierlist.data['24'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['25'].id)} ${tierlist.data['25'].name}: ${tierlist.data['25'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['29'].id)} ${tierlist.data['29'].name}: ${tierlist.data['29'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['54'].id)} ${tierlist.data['54'].name}: ${tierlist.data['54'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['57'].id)} ${tierlist.data['57'].name}: ${tierlist.data['57'].roles[0].winRate}%`, true)
    // }

    // else if(lane == 'bot') {
    //     tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, tierlist.data['22'].id)} ${tierlist.data['22'].name}: ${tierlist.data['22'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['51'].id)} ${tierlist.data['51'].name}: ${tierlist.data['51'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['67'].id)} ${tierlist.data['67'].name}: ${tierlist.data['67'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['81'].id)} ${tierlist.data['81'].name}: ${tierlist.data['81'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['202'].id)} ${tierlist.data['202'].name}: ${tierlist.data['202'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['222'].id)} ${tierlist.data['222'].name}: ${tierlist.data['222'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🔴 Tier A', `${getChampionEmoji(client, tierlist.data['15'].id)} ${tierlist.data['15'].name}: ${tierlist.data['15'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['21'].id)} ${tierlist.data['21'].name}: ${tierlist.data['21'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['45'].id)} ${tierlist.data['45'].name}: ${tierlist.data['45'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['69'].id)} ${tierlist.data['69'].name}: ${tierlist.data['69'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['110'].id)} ${tierlist.data['110'].name}: ${tierlist.data['110'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['115'].id)} ${tierlist.data['115'].name}: ${tierlist.data['115'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['119'].id)} ${tierlist.data['119'].name}: ${tierlist.data['119'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['145'].id)} ${tierlist.data['145'].name}: ${tierlist.data['145'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['157'].id)} ${tierlist.data['157'].name}: ${tierlist.data['157'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['236'].id)} ${tierlist.data['236'].name}: ${tierlist.data['236'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['498'].id)} ${tierlist.data['498'].name}: ${tierlist.data['498'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🟢 Tier B', `${getChampionEmoji(client, tierlist.data['18'].id)} ${tierlist.data['18'].name}: ${tierlist.data['18'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['29'].id)} ${tierlist.data['29'].name}: ${tierlist.data['29'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['50'].id)} ${tierlist.data['50'].name}: ${tierlist.data['50'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['74'].id)} ${tierlist.data['74'].name}: ${tierlist.data['74'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['96'].id)} ${tierlist.data['96'].name}: ${tierlist.data['96'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['163'].id)} ${tierlist.data['163'].name}: ${tierlist.data['163'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['235'].id)} ${tierlist.data['235'].name}: ${tierlist.data['235'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['429'].id)} ${tierlist.data['429'].name}: ${tierlist.data['429'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['523'].id)} ${tierlist.data['523'].name}: ${tierlist.data['523'].roles[0].winRate}%`, true)
    // }

    // else if (lane == 'support') {
    //     tierlistE.addField('🟡 Tier S', `${getChampionEmoji(client, tierlist.data['16'].id)} ${tierlist.data['16'].name}: ${tierlist.data['16'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['53'].id)} ${tierlist.data['53'].name}: ${tierlist.data['53'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['117'].id)} ${tierlist.data['117'].name}: ${tierlist.data['117'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['235'].id)} ${tierlist.data['235'].name}: ${tierlist.data['235'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['267'].id)} ${tierlist.data['267'].name}: ${tierlist.data['267'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['412'].id)} ${tierlist.data['412'].name}: ${tierlist.data['412'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['432'].id)} ${tierlist.data['432'].name}: ${tierlist.data['432'].roles[0].winRate}%`, true)
    //     tierlistE.addField('🟢 🔴 Tier A', `${getChampionEmoji(client, tierlist.data['25'].id)} ${tierlist.data['25'].name}: ${tierlist.data['25'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['26'].id)} ${tierlist.data['26'].name}: ${tierlist.data['26'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['37'].id)} ${tierlist.data['37'].name}: ${tierlist.data['37'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['40'].id)} ${tierlist.data['40'].name}: ${tierlist.data['40'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['43'].id)} ${tierlist.data['43'].name}: ${tierlist.data['43'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['44'].id)} ${tierlist.data['44'].name}: ${tierlist.data['44'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['63'].id)} ${tierlist.data['63'].name}: ${tierlist.data['63'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['89'].id)} ${tierlist.data['89'].name}: ${tierlist.data['89'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['99'].id)} ${tierlist.data['99'].name}: ${tierlist.data['99'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['111'].id)} ${tierlist.data['111'].name}: ${tierlist.data['111'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['142'].id)} ${tierlist.data['142'].name}: ${tierlist.data['142'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['350'].id)} ${tierlist.data['350'].name}: ${tierlist.data['350'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['555'].id)} ${tierlist.data['555'].name}: ${tierlist.data['555'].roles[1].winRate}%`, true)
    //     tierlistE.addField('Tier B', `${getChampionEmoji(client, tierlist.data['9'].id)} ${tierlist.data['9'].name}: ${tierlist.data['9'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['12'].id)} ${tierlist.data['12'].name}: ${tierlist.data['12'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['35'].id)} ${tierlist.data['35'].name}: ${tierlist.data['35'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['50'].id)} ${tierlist.data['50'].name}: ${tierlist.data['50'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['57'].id)} ${tierlist.data['57'].name}: ${tierlist.data['57'].roles[2].winRate}%\n${getChampionEmoji(client, tierlist.data['101'].id)} ${tierlist.data['101'].name}: ${tierlist.data['101'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['161'].id)} ${tierlist.data['161'].name}: ${tierlist.data['161'].roles[1].winRate}%\n${getChampionEmoji(client, tierlist.data['201'].id)} ${tierlist.data['201'].name}: ${tierlist.data['201'].roles[0].winRate}%\n${getChampionEmoji(client, tierlist.data['497'].id)} ${tierlist.data['497'].name}: ${tierlist.data['497'].roles[0].winRate}%`, true)
    //     //tierlistE.addField('Tier C', `${getChampionEmoji(client, tierlist.data['45'].id)} ${tierlist.data['45'].name}: ${tierlist.data['45'].roles[0].winRate}%`)
    // }

    
    // message.channel.send(tierlistE)
}

