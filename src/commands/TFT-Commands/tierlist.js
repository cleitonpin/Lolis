const Discord = require('discord.js')
const tfttier = require('../../api/tft-tierlist')
const tft = require('../../api/tft_teams_compositions')
const tft_champions_tiers = require('../../api/tft_champion_tiers')
const tft_item_tiers = require('../../api/tft_items_tierlist')

const { getEmojitft, getEmojitftItems } = require('../commonFunctions')
const versao = require('../../api/versions')


exports.run = async(client, message, args) => {
    
    
    let emojis = {
        "s": client.emojis.cache.get('734142090497359874'),
        "b": client.emojis.cache.get('734226421664186428'),
        "a": client.emojis.cache.get('734226408104263702'),
        "c": client.emojis.cache.get('734226437451677736'),
    }
    let data = await tfttier.data()
    let comp_names = await tft.data()

    let names = comp_names.items

    let items = data.items

    let tier_s = items.filter(o => o.data.tier == 's')
    let nameS_map = tier_s.map(o => o.data.name)

    let names_s_1 = filterTier(names, nameS_map[0]).map(o => retornaChamp(o.data.units))
    let names_s_2 = filterTier(names, nameS_map[1]).map(o => retornaChamp(o.data.units))
    let names_s_3 = filterTier(names, nameS_map[2]).map(o => retornaChamp(o.data.units))

    let tier_a = items.filter(o => o.data.tier == 'a')
    let nameA_map = tier_a.map(o => o.data.name)

    let names_a_1 = filterTier(names, nameA_map[0]).map(o => retornaChamp(o.data.units))
    let names_a_2 = filterTier(names, nameA_map[1]).map(o => retornaChamp(o.data.units))
    let names_a_3 = filterTier(names, nameA_map[2]).map(o => retornaChamp(o.data.units))
    let names_a_4 = filterTier(names, nameA_map[3]).map(o => retornaChamp(o.data.units))
    let names_a_5 = filterTier(names, nameA_map[4]).map(o => retornaChamp(o.data.units))

    let tier_b = items.filter(o => o.data.tier == 'b')
    let nameB_map = tier_b.map(o => o.data.name)

    let names_b_1 = filterTier(names, nameB_map[0]).map(o => retornaChamp(o.data.units))
    let names_b_2 = filterTier(names, nameB_map[1]).map(o => retornaChamp(o.data.units))
    let names_b_3 = filterTier(names, nameB_map[2]).map(o => retornaChamp(o.data.units))
    let names_b_4 = filterTier(names, nameB_map[3]).map(o => retornaChamp(o.data.units))

    let tier_c = items.filter(o => o.data.tier == 'c')
    //let nameC_map = tier_c.map(o => o.data.name)

    // let names_c_1 = filterTier(names, nameC_map[0]).map(o => retornaChamp(o.data.units))
    // let names_c_2 = filterTier(names, nameC_map[1]).map(o => retornaChamp(o.data.units))
    // let names_c_3 = filterTier(names, nameC_map[2]).map(o => retornaChamp(o.data.units))
    //console.log(nameC_map)


    let embed = new Discord.MessageEmbed()

    .setTitle('Comando Tier list')
    .setColor('#170B3B')
    .setDescription('Lista das melhores composições do patch')
    .addField(`Tier ${emojis.s}`, [
        noSpace(nameS_map[0]),
        noSpace(nameS_map[1]),
        noSpace(nameS_map[2]),
    ], true)
    .addField('Champions', [
        `${getEmojitft(names_s_1[0][0] ,client)}${getEmojitft(names_s_1[0][1] ,client)}${getEmojitft(names_s_1[0][2] ,client)}${getEmojitft(names_s_1[0][3] ,client)}${getEmojitft(names_s_1[0][4] ,client)}${getEmojitft(names_s_1[0][5] ,client)}${getEmojitft(names_s_1[0][6] ,client)}${getEmojitft(names_s_1[0][7] ,client)}`,
        `${getEmojitft(names_s_2[0][0] ,client)}${getEmojitft(names_s_2[0][1] ,client)}${getEmojitft(names_s_2[0][2] ,client)}${getEmojitft(names_s_2[0][3] ,client)}${getEmojitft(names_s_2[0][4] ,client)}${getEmojitft(names_s_2[0][5] ,client)}${getEmojitft(names_s_2[0][6] ,client)}${getEmojitft(names_s_2[0][7] ,client)}`,
        `${getEmojitft(names_s_3[0][0] ,client)}${getEmojitft(names_s_3[0][1] ,client)}${getEmojitft(names_s_3[0][2] ,client)}${getEmojitft(names_s_3[0][3] ,client)}${getEmojitft(names_s_3[0][4] ,client)}${getEmojitft(names_s_3[0][5] ,client)}${getEmojitft(names_s_3[0][6] ,client)}${getEmojitft(names_s_3[0][7] ,client)}`,
    ], true)
    .addField('\u200b', '\u200b', true)
    .addField(`Tier ${emojis.a}`, [
        noSpace(nameA_map[0]),
        noSpace(nameA_map[1]),
        noSpace(nameA_map[2]),
        noSpace(nameA_map[3]),
        
    ], true)
    .addField('Champions', [
        `${getEmojitft(names_a_1[0][0] ,client)}${getEmojitft(names_a_1[0][1] ,client)}${getEmojitft(names_a_1[0][2] ,client)}${getEmojitft(names_a_1[0][3] ,client)}${getEmojitft(names_a_1[0][4] ,client)}${getEmojitft(names_a_1[0][5] ,client)}${getEmojitft(names_a_1[0][6] ,client)}${getEmojitft(names_a_1[0][7] ,client)}`,
        `${getEmojitft(names_a_2[0][0] ,client)}${getEmojitft(names_a_2[0][1] ,client)}${getEmojitft(names_a_2[0][2] ,client)}${getEmojitft(names_a_2[0][3] ,client)}${getEmojitft(names_a_2[0][4] ,client)}${getEmojitft(names_a_2[0][5] ,client)}${getEmojitft(names_a_2[0][6] ,client)}${getEmojitft(names_a_2[0][7] ,client)}`,
        `${getEmojitft(names_a_3[0][0] ,client)}${getEmojitft(names_a_3[0][1] ,client)}${getEmojitft(names_a_3[0][2] ,client)}${getEmojitft(names_a_3[0][3] ,client)}${getEmojitft(names_a_3[0][4] ,client)}${getEmojitft(names_a_3[0][5] ,client)}${getEmojitft(names_a_3[0][6] ,client)}${getEmojitft(names_a_3[0][7] ,client)}`,
        `${getEmojitft(names_a_4[0][0] ,client)}${getEmojitft(names_a_4[0][1] ,client)}${getEmojitft(names_a_4[0][2] ,client)}${getEmojitft(names_a_4[0][3] ,client)}${getEmojitft(names_a_4[0][4] ,client)}${getEmojitft(names_a_4[0][5] ,client)}${getEmojitft(names_a_4[0][6] ,client)}${getEmojitft(names_a_4[0][7] ,client)}`,
    ], true)
    .addField('\u200b', `${noSpace(nameA_map[4])} ${getEmojitft(names_a_5[0][0] ,client)}${getEmojitft(names_a_5[0][1] ,client)}${getEmojitft(names_a_5[0][2] ,client)}${getEmojitft(names_a_5[0][3] ,client)}${getEmojitft(names_a_5[0][4] ,client)}${getEmojitft(names_a_5[0][5] ,client)}${getEmojitft(names_a_5[0][6] ,client)}${getEmojitft(names_a_5[0][7] ,client)}`, true)
    .addField(`Tier ${emojis.b}`, [
        noSpace(nameB_map[0]),
        noSpace(nameB_map[1]),
        noSpace(nameB_map[2]),
        noSpace(nameB_map[3]),
        
    ], true)
    .addField('Champions', [
        `${getEmojitft(names_b_1[0][0] ,client)}${getEmojitft(names_b_1[0][1] ,client)}${getEmojitft(names_b_1[0][2] ,client)}${getEmojitft(names_b_1[0][3] ,client)}${getEmojitft(names_b_1[0][4] ,client)}${getEmojitft(names_b_1[0][5] ,client)}${getEmojitft(names_b_1[0][6] ,client)}${getEmojitft(names_b_1[0][7] ,client)}`,
        `${getEmojitft(names_b_2[0][0] ,client)}${getEmojitft(names_b_2[0][1] ,client)}${getEmojitft(names_b_2[0][2] ,client)}${getEmojitft(names_b_2[0][3] ,client)}${getEmojitft(names_b_2[0][4] ,client)}${getEmojitft(names_b_2[0][5] ,client)}${getEmojitft(names_b_2[0][6] ,client)}${getEmojitft(names_b_2[0][7] ,client)}`,
        `${getEmojitft(names_b_3[0][0] ,client)}${getEmojitft(names_b_3[0][1] ,client)}${getEmojitft(names_b_3[0][2] ,client)}${getEmojitft(names_b_3[0][3] ,client)}${getEmojitft(names_b_3[0][4] ,client)}${getEmojitft(names_b_3[0][5] ,client)}${getEmojitft(names_b_3[0][6] ,client)}${getEmojitft(names_b_3[0][7] ,client)}`,
        `${getEmojitft(names_b_4[0][0] ,client)}${getEmojitft(names_b_4[0][1] ,client)}${getEmojitft(names_b_4[0][2] ,client)}${getEmojitft(names_b_4[0][3] ,client)}${getEmojitft(names_b_4[0][4] ,client)}${getEmojitft(names_b_4[0][5] ,client)}${getEmojitft(names_b_4[0][6] ,client)}${getEmojitft(names_b_4[0][7] ,client)}`,
    ], true)
    .addField('\u200b', `\u200b`, true)
    .setFooter(`Versão: ${await versao.data()}`)

    let tierChampions = await tierlistChampion(client)
    let tierlistItems = await tierlistItem(client)

    let embedR = await message.channel.send(embed)
                await embedR.react(client.emojis.cache.get('734234424601870396'))
                await embedR.react(client.emojis.cache.get('734256210412306526'))

    let filter = (reaction, user) => (reaction.emoji.name == 'Champion' || reaction.emoji.name == 'orb' && user.id == message.author.id)
    
    let collection = embedR.createReactionCollector(filter, { max: undefined })

    collection.on('collect', (reaction, user) => {
        
        if(reaction.emoji.name == 'Champion') {
            
            embedR.edit(tierChampions)
        }
        if(reaction.emoji.name == 'orb') {
            
            embedR.edit(tierlistItems)
        }

    })

}


tierlistChampion = async (client) => {

    
    let emojis = {
        "s": client.emojis.cache.get('734142090497359874'),
        "b": client.emojis.cache.get('734226421664186428'),
        "a": client.emojis.cache.get('734226408104263702'),
        "c": client.emojis.cache.get('734226437451677736'),
    }

    let data = await tft_champions_tiers.data()
    
    let tier_s = data.filter(o => o.data.late == 's')
    let nameS_map = tier_s.map(o => o.data.slug)

    let tier_a = data.filter(o => o.data.late == 'a')
    let nameA_map = tier_a.map(o => o.data.slug)

    let tier_b = data.filter(o => o.data.late == 'b')
    let nameB_map = tier_b.map(o => o.data.slug)

    let tier_c = data.filter(o => o.data.late == 'c')
    let nameC_map = tier_c.map(o => o.data.slug)

    let tier_d = data.filter(o => o.data.late == 'd')
    let nameD_map = tier_d.map(o => o.data.slug)


    let embede = new Discord.MessageEmbed()
    .setTitle('Comando Tier list')
    .setColor('#170B3B')
    .setDescription('Lista dos melhores campeões do patch')
    .addField(`Tier ${emojis.s}`, [
        `${getEmojitft(nameS_map[0],client)}${getEmojitft(nameS_map[1],client)}${getEmojitft(nameS_map[2],client)}${getEmojitft(nameS_map[3],client)}${getEmojitft(nameS_map[4],client)}${getEmojitft(nameS_map[5],client)}${getEmojitft(nameS_map[6],client)}${getEmojitft(nameS_map[7],client)}${getEmojitft(nameS_map[8],client)}${getEmojitft(nameS_map[9],client)}${getEmojitft(nameS_map[10],client)}${getEmojitft(nameS_map[11],client)}${getEmojitft(nameS_map[12],client)}${getEmojitft(nameS_map[13],client)}${getEmojitft(nameS_map[14],client)}${getEmojitft(nameS_map[15],client)}${getEmojitft(nameS_map[16],client)}`
    ])
    .addField(`Tier ${emojis.a}`, [
        `${getEmojitft(nameA_map[0],client)}${getEmojitft(nameA_map[1],client)}${getEmojitft(nameA_map[2],client)}${getEmojitft(nameA_map[3],client)}${getEmojitft(nameA_map[4],client)}${getEmojitft(nameA_map[5],client)}${getEmojitft(nameA_map[6],client)}${getEmojitft(nameA_map[7],client)}${getEmojitft(nameA_map[8],client)}${getEmojitft(nameA_map[9],client)}${getEmojitft(nameA_map[10],client)}${getEmojitft(nameA_map[11],client)}${getEmojitft(nameA_map[12],client)}${getEmojitft(nameA_map[13],client)}${getEmojitft(nameA_map[14],client)}${getEmojitft(nameA_map[15],client)}${getEmojitft(nameA_map[16],client)}${getEmojitft(nameA_map[17],client)}${getEmojitft(nameA_map[18],client)}${getEmojitft(nameA_map[19],client)}${getEmojitft(nameA_map[20],client)}`
    ])
    .addField(`Tier ${emojis.b}`, [
        `${getEmojitft(nameB_map[0],client)}${getEmojitft(nameB_map[1],client)}${getEmojitft(nameB_map[2],client)}${getEmojitft(nameB_map[3],client)}${getEmojitft(nameB_map[4],client)}`
    ])
    .setFooter(`Versão: ${await versao.data()}`)


    return embede
}

tierlistItem = async(client) => {
        
    let emojis = {
        "s": client.emojis.cache.get('734142090497359874'),
        "b": client.emojis.cache.get('734226421664186428'),
        "a": client.emojis.cache.get('734226408104263702'),
        "c": client.emojis.cache.get('734226437451677736'),
    }

    let data = await tft_item_tiers.data()

    let tier_s = data.filter(o => o.data.tier == 's')
    let nameS_map = tier_s.map(o => o.data.slug)

    
    let tier_a = data.filter(o => o.data.tier == 'a')
    let nameA_map = tier_a.map(o => o.data.slug)

    let tier_b = data.filter(o => o.data.tier == 'b')
    let nameB_map = tier_b.map(o => o.data.slug)

    let tier_c = data.filter(o => o.data.tier == 'c')
    let nameC_map = tier_c.map(o => o.data.slug)

    let embede = new Discord.MessageEmbed()
    .setTitle('Comando Tier list')
    .setColor('#170B3B')
    .setDescription('Lista dos melhores items do patch')
    .addField(`Tier ${emojis.s}`, [
        `${getEmojitftItems(nameS_map[0] ,client)}${getEmojitftItems(nameS_map[1] ,client)}${getEmojitftItems(nameS_map[2] ,client)}${getEmojitftItems(nameS_map[3] ,client)}${getEmojitftItems(nameS_map[4] ,client)}${getEmojitftItems(nameS_map[5] ,client)}${getEmojitftItems(nameS_map[6] ,client)}${getEmojitftItems(nameS_map[7] ,client)}${getEmojitftItems(nameS_map[8] ,client)}${getEmojitftItems(nameS_map[9] ,client)}${getEmojitftItems(nameS_map[10] ,client)}${getEmojitftItems(nameS_map[11] ,client)}${getEmojitftItems(nameS_map[12] ,client)}${getEmojitftItems(nameS_map[13] ,client)}${getEmojitftItems(nameS_map[14] ,client)}${getEmojitftItems(nameS_map[15] ,client)}${getEmojitftItems(nameS_map[16] ,client)}${getEmojitftItems(nameS_map[17] ,client)}`
    ])
    .addField(`Tier ${emojis.a}`, [
        `${getEmojitftItems(nameA_map[0] ,client)}${getEmojitftItems(nameA_map[1] ,client)}${getEmojitftItems(nameA_map[2] ,client)}${getEmojitftItems(nameA_map[3] ,client)}${getEmojitftItems(nameA_map[4] ,client)}${getEmojitftItems(nameA_map[5] ,client)}${getEmojitftItems(nameA_map[6] ,client)}${getEmojitftItems(nameA_map[7] ,client)}${getEmojitftItems(nameA_map[8] ,client)}${getEmojitftItems(nameA_map[9] ,client)}${getEmojitftItems(nameA_map[10] ,client)}${getEmojitftItems(nameA_map[11] ,client)}${getEmojitftItems(nameA_map[12] ,client)}${getEmojitftItems(nameA_map[13] ,client)}${getEmojitftItems(nameA_map[14] ,client)}${getEmojitftItems(nameA_map[15] ,client)}${getEmojitftItems(nameA_map[16] ,client)}${getEmojitftItems(nameA_map[17] ,client)}${getEmojitftItems(nameA_map[18] ,client)}${getEmojitftItems(nameA_map[19] ,client)}`
    ])
    .addField(`Tier ${emojis.b}`, [
        `${getEmojitftItems(nameB_map[0] ,client)}${getEmojitftItems(nameB_map[1] ,client)}${getEmojitftItems(nameB_map[2] ,client)}${getEmojitftItems(nameB_map[3] ,client)}${getEmojitftItems(nameB_map[4] ,client)}${getEmojitftItems(nameB_map[5] ,client)}${getEmojitftItems(nameB_map[6] ,client)}${getEmojitftItems(nameB_map[7] ,client)}${getEmojitftItems(nameB_map[8] ,client)}${getEmojitftItems(nameB_map[9] ,client)}${getEmojitftItems(nameB_map[10] ,client)}${getEmojitftItems(nameB_map[11] ,client)}${getEmojitftItems(nameB_map[12] ,client)}${getEmojitftItems(nameB_map[13] ,client)}${getEmojitftItems(nameB_map[14] ,client)}${getEmojitftItems(nameB_map[15] ,client)}${getEmojitftItems(nameB_map[16] ,client)}`
    ])

    return embede
}

filterTier = (names, name_Comp) => {
    let units_s = names.filter(o => o.data.name == noSpace(name_Comp))

    return units_s
}

retornaChamp = (string) => {
    let champs = string.split(',')

    return champs
}

noSpace = (string) => {
    string = string.replace(/_/gi, ' ')

    return string
}


