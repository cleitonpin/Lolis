const Discord = require('discord.js')
const tft_champions_tiers = require('../../api/tft_champion_tiers')
const tft_item_tiers = require('../../api/tft_items_tierlist')
const comps = require('../json/tft-data.json')
const Team = require('../utils/comps')

const { getEmojitft, getEmojitftItems } = require('../commonFunctions')
const versao = require('../../api/versions')


exports.run = async(client, message, args) => {
    
    
    let emojis = {
        "s": client.emojis.cache.get('734142090497359874'),
        "b": client.emojis.cache.get('734226421664186428'),
        "a": client.emojis.cache.get('734226408104263702'),
        "c": client.emojis.cache.get('734226437451677736'),
    }

    
    let comps_e = new Team.comps_emojis()
    let embed = new Discord.MessageEmbed()
    


    .setTitle('Comando Tier list')
    .setColor('#170B3B')
    .setDescription('Lista das melhores composições do patch')

    let comps_ = comps.items.tier_list_comps.filter(key => key.tier == 's')
    let comps_a = comps.items.tier_list_comps.filter(key => key.tier == 'a')
    let comps_b = comps.items.tier_list_comps.filter(key => key.tier == 'b')

    let tier_s = Object.keys(comps_).map(key => comps_[key].units)
    let tier_a = Object.keys(comps_a).map(key => comps_a[key].units)
    let tier_b = Object.keys(comps_b).map(key => comps_b[key].units)


    let names_s = Object.keys(comps_).map(key => comps_[key].name)
    let names_a = Object.keys(comps_a).map(key => comps_a[key].name)
    let names_b = Object.keys(comps_b).map(key => comps_b[key].name)

    console.log(`Comps Tier S: `)
    console.log(names_s)
    console.log(`Comps Tier A: `)
    console.log(names_a)
    console.log(`Comps Tier B: `)
    console.log(names_b)

    try {

        //TIER S //
        embed.addField(`Tier ${emojis.s}`, [
            comps_[0].name,
            comps_[1].name,
            comps_[2].name,

            comps_[3].name,
        ], true)

        embed.addField(`Champions`, [
            `${getEmojitft(tier_s[0][0], client)}${getEmojitft(tier_s[0][1], client)}${getEmojitft(tier_s[0][2], client)}${getEmojitft(tier_s[0][3], client)}${getEmojitft(tier_s[0][4], client)}${getEmojitft(tier_s[0][5], client)}${getEmojitft(tier_s[0][6], client)}${getEmojitft(tier_s[0][7], client)}`,
            `${getEmojitft(tier_s[1][0], client)}${getEmojitft(tier_s[1][1], client)}${getEmojitft(tier_s[1][2], client)}${getEmojitft(tier_s[1][3], client)}${getEmojitft(tier_s[1][4], client)}${getEmojitft(tier_s[1][5], client)}${getEmojitft(tier_s[1][6], client)}${getEmojitft(tier_s[1][7], client)}`,
            `${getEmojitft(tier_s[2][0], client)}${getEmojitft(tier_s[2][1], client)}${getEmojitft(tier_s[2][2], client)}${getEmojitft(tier_s[2][3], client)}${getEmojitft(tier_s[2][4], client)}${getEmojitft(tier_s[2][5], client)}${getEmojitft(tier_s[2][6], client)}${getEmojitft(tier_s[2][7], client)}`,
            comps_e.Brawler_Blasters(client)
        ], true)
        

        embed.addField('\u200b', '\u200b', true)

        // TIER A //
        embed.addField(`Tier ${emojis.a}`, [
            comps_e.Cybernetics_name(),
            comps_e.Protector_Mystics_name(),
            comps_e.Rebel_Demolinist_name(),
            comps_e.Mech_Infiltrator_name()
        ], true)

        embed.addField(`Champions`, [     
            comps_e.Cybernetics(client),
            comps_e.Protector_Mystics(client),
            comps_e.Rebel_Demolinist(client),
            comps_e.Mech_Infiltrator(client),
        ], true)
        

        embed.addField('\u200b', '\u200b', true)

        // TIER B //
        embed.addField(`Tier ${emojis.b}`, [
            comps_e.Dark_Stars_Snipers_name(),
            comps_e.Protector_Dark_Stars_name(),
            comps_e.Star_Guardian_Sorceres_name(),
            comps_e.Battlecast_name()
        ], true)

        embed.addField(`Champions`, [
            comps_e.Dark_Stars_Snipers(client),
            comps_e.Protector_Dark_Stars(client),
            comps_e.Star_Guardian_Sorceres(client),
            comps_e.Battlecast(client)
        ], true)
        
        embed.addField('\u200b', '\u200b', true)

    } catch {
        message.channel.send('Err')
    }


    let tierChampions = await tierlistChampion(client)
    let tierlistItems = await tierlistItem(client)

    let embedR = await message.channel.send(embed)
                await embedR.react(client.emojis.cache.get('734234424601870396'))
                await embedR.react(client.emojis.cache.get('734554892534022225'))
                await embedR.react(client.emojis.cache.get('734461149042442312'))

    let filter = (reaction, user) => (reaction.emoji.name == 'Champion' || reaction.emoji.name == 'items' || reaction.emoji.name == 'Comps' && user.id == message.author.id)
    
    let collection = embedR.createReactionCollector(filter, { max: undefined })

    collection.on('collect', (reaction, user) => {
        
        if(reaction.emoji.name == 'Champion') {
            
            embedR.edit(tierChampions)
        }
        if(reaction.emoji.name == 'items') {
            
            embedR.edit(tierlistItems)
        }
        if(reaction.emoji.name == 'Comps') {
            embedR.edit(embed)
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

    
    let tier_s = comps.items.tierlist_champions.filter(o => o.tier == 's')
    let nameS_map = tier_s.map(o => o.slug)
    let emoji_s = Object.keys(nameS_map).map(key => getEmojitft(nameS_map[key], client))

    let tier_a = comps.items.tierlist_champions.filter(o => o.tier == 'a')
    let nameA_map = tier_a.map(o => o.slug)
    let emoji_a = Object.keys(nameA_map).map(key => getEmojitft(nameA_map[key], client))

    let tier_b = comps.items.tierlist_champions.filter(o => o.tier == 'b')
    let nameB_map = tier_b.map(o => o.slug)
    let emoji_b = Object.keys(nameB_map).map(key => getEmojitft(nameB_map[key], client))


    let embede = new Discord.MessageEmbed()
    .setTitle('Comando Tier list')
    .setColor('#170B3B')
    .setDescription('Lista dos melhores campeões do patch')
    .addField(`Tier ${emojis.s}`, [
        emoji_s
    ])
    .addField(`Tier ${emojis.a}`, [
        emoji_a
    ])
    .addField(`Tier ${emojis.b}`, [
        emoji_b
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

    // let tier_c = data.filter(o => o.data.tier == 'c')
    // let nameC_map = tier_c.map(o => o.data.slug)

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
    .setFooter(`Versão: ${await versao.data()}`)
    return embede
}

filterTier = (names, name_Comp) => {
    let units_s = names.filter(o => o.data.name == name_Comp)
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


