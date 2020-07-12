const Discord = require('discord.js')
const versions = require('../../api/versions')
const { getChampionEmoji, } = require('../commonFunctions')
const leagueTierlist = require('../../api/league-tierlist')
const champ = require('./champion.json')
const championApi = require('../../api/champion-api')
const { prefix } = require('../../config.json')

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
    
    tierlistE.setColor('#170B3B')

    if(lane == '') {
        tierlistE.setTitle('Lane não encontrada')
        tierlistE.setDescription(`Digite ${prefix}tierlist [top-jugle-mid-adc-support]`)

        message.channel.send(tierlistE)
    } else {

    tierlistE.setTitle(`Tierlist: ${titleize(lane)}`)

    champ.names.forEach(name => {
        
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
        

}

}

