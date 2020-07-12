const Discord = require('discord.js')
const versao = require('../../api/versions')
const champion = require('../../api/champion')
const skills = require('../../api/skills_abilitys')
const runes = require('../../api/rune_builds')
const spell = require('../../api/summoner_spells')
const item = require('../../api/items_builds')
const kayn = require('../../kayn')
const { prefix } = require('../../config.json')
const { Spells, getRunesEmoji, getRunesName, getEmojiItems } = require('../commonFunctions')

exports.run = async (client, message, args) => {

    
    let name_champ = args[0]
    let role = args[1]
    let roles;

    if(role== 'adc') role = 'bottom'
    else if (role == 'mid') role = 'middle'
    else if(role == 'suporte') role = 'support'

    const embed = new Discord.MessageEmbed()
    .setColor('#170B3B')
    
    const data = await champion.data(name_champ)
    .catch(err => {})


    const data_skill = await skills.data(name_champ, role)
    .catch(err => {})
    if(!data_skill || !data) {
        embed.setTitle('Comando Champion builds')
        .setDescription('Você me deu informações erradas')
        .addField('\u200b', `Utilize ${prefix}build [champion] [role]`)
        message.channel.send(embed)
    }  
    
    else {
        if(data_skill.skill_builds == '') {
            embed.setTitle('❌ Comando Champion builds')
            .setDescription('Não existe informações para esta rota.')

            message.channel.send(embed)
        } else {


            const version = await versao.data()
            const data_item = await item.data(name_champ, role)
            const data_runes = await runes.data(name_champ, role)
            const info_spells = await spell.data(name_champ, role)
            const info_build = data_item.item_builds
            const info = data.champion
            const info_skills = data_skill.skill_builds
            const info_runes = data_runes.rune_builds
            const data_spells = info_spells.summoner_spells
            
            const maxWinrate = info_runes.map(o => o.winrate)
            const max = maxWinrate.reduce((a, b) => {

                return Math.max(a, b)

            })
            const maxAll = info_runes.filter(maxs => maxs.winrate == max)

            const maxWinrateBuild = info_build.optional.map(optional => optional.winrate)
            const maxBuild = maxWinrateBuild.reduce((a,b) => Math.max(a,b))
            const maxWinrateBuildAll = info_build.final_builds.map(final_builds => final_builds.winrate)
            const maxBuildAll = maxWinrateBuildAll.reduce((a,b) => Math.max(a,b))
            
            
            const maxAllBuildAll = info_build.final_builds.filter(final_buildsMax => final_buildsMax.winrate == maxBuildAll)
            const maxAllBuildBOptional = info_build.optional.filter(optionalMax => optionalMax.winrate == maxBuild)

            let data_roles = info.roles.filter(roles => roles.lane == role)

            console.log(maxAllBuildAll[0].final_items.length)
            embed.setTitle('Comando Champion builds')
            
            .setDescription(`Informações sobre **${titleize(name_champ)}** para **${role}**`)
            embed.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${titleize(name_champ)}.png`)
            .addField('Taxa de vitória', `${data_roles[0].winrate}%`, true)
            .addField('Taxa de escolha', `${data_roles[0].pickrate}%`, true)
            .addField('Jogos', data_roles[0].matches_count.toFixed(0))
            .addField('Ordem de habilidades:', [
                `${skills_emoji(client,info_skills[0].builds[0].early[0])} > ${skills_emoji(client,info_skills[0].builds[0].early[1])} > ${skills_emoji(client,info_skills[0].builds[0].early[2])} > ${skills_emoji(client,info_skills[0].builds[0].early[3])} > ${skills_emoji(client,info_skills[0].builds[0].early[4])} > ${skills_emoji(client,info_skills[0].builds[0].early[5])} > ${skills_emoji(client,info_skills[0].builds[0].mid[0])} > ${skills_emoji(client,info_skills[0].builds[0].mid[1])} > ${skills_emoji(client,info_skills[0].builds[0].mid[2])} > ${skills_emoji(client,info_skills[0].builds[0].mid[3])} > ${skills_emoji(client,info_skills[0].builds[0].mid[4])} > ${skills_emoji(client,info_skills[0].builds[0].mid[5])} > ${skills_emoji(client,info_skills[0].builds[0].late[0])} > ${skills_emoji(client,info_skills[0].builds[0].late[1])} > ${skills_emoji(client,info_skills[0].builds[0].late[2])} > ${skills_emoji(client,info_skills[0].builds[0].late[3])} > ${skills_emoji(client,info_skills[0].builds[0].late[4])} > ${skills_emoji(client,info_skills[0].builds[0].late[5])}`,
            ])
            .addField('Feitiços', `${Spells(client, data_spells[0].spells[0])}${Spells(client,data_spells[0].spells[1])}`)
            .addField("Runas", [
                `${getRunesEmoji(maxAll[0].perk_primary_style, client)} **${getRunesName(maxAll[0].perk_primary_style, client)}**`,
                `\u200b`,
                `${getRunesEmoji(maxAll[0].perk0, client)} ${getRunesName(maxAll[0].perk0, client)}`,
                `${getRunesEmoji(maxAll[0].perk1, client)} ${getRunesName(maxAll[0].perk1, client)}`,
                `${getRunesEmoji(maxAll[0].perk2, client)} ${getRunesName(maxAll[0].perk2, client)}`,
                `${getRunesEmoji(maxAll[0].perk3, client)} ${getRunesName(maxAll[0].perk3, client)}`,
            ], true)
            .addField('\u200b', [
                `${getRunesEmoji(maxAll[0].perk_sub_style, client)} **${getRunesName(maxAll[0].perk_sub_style, client)}**`,
                `\u200b`,
                `${getRunesEmoji(maxAll[0].perk4, client)} ${getRunesName(maxAll[0].perk4, client)}`,
                `${getRunesEmoji(maxAll[0].perk5, client)} ${getRunesName(maxAll[0].perk5, client)}`
            ], true)
            .addField('\u200b', [
                `${getRunesEmoji(maxAll[0].stat_perk0, client)} ${getRunesName(maxAll[0].stat_perk0, client)}`,
                `${getRunesEmoji(maxAll[0].stat_perk1, client)} ${getRunesName(maxAll[0].stat_perk1, client)}`,
                `${getRunesEmoji(maxAll[0].stat_perk2, client)} ${getRunesName(maxAll[0].stat_perk2, client)}`], true)
            
            if(maxAllBuildAll[0].final_items.length == 4) {
                embed.addField('Build', [
                    `${getEmojiItems(maxAllBuildAll[0].final_items[0], client)} ${await getNameItems(maxAllBuildAll[0].final_items[0])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[1], client)} ${await getNameItems(maxAllBuildAll[0].final_items[1])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[2], client)} ${await getNameItems(maxAllBuildAll[0].final_items[2])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[3], client)} ${await getNameItems(maxAllBuildAll[0].final_items[3])}`,
                ], true)
                .addField('\u200b', [
                    `⭐ Último item opcional`,
                    `${getEmojiItems(maxAllBuildBOptional[0].items[0], client)} ${await getNameItems(maxAllBuildBOptional[0].items[0])}`,
                ], true)
    
            } else if(maxAllBuildAll[0].final_items.length == 3) {
                embed.addField('Build', [
                    `${getEmojiItems(maxAllBuildAll[0].final_items[0], client)} ${await getNameItems(maxAllBuildAll[0].final_items[0])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[1], client)} ${await getNameItems(maxAllBuildAll[0].final_items[1])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[2], client)} ${await getNameItems(maxAllBuildAll[0].final_items[2])}`,
                ], true)
                .addField('\u200b', [
                    `⭐ Último item opcional`,
                    `${getEmojiItems(maxAllBuildBOptional[0].items[0], client)} ${await getNameItems(maxAllBuildBOptional[0].items[0])}`,
                ], true)
            } else if(maxAllBuildAll[0].final_items.length == 2) {
                embed.addField('Build', [
                    `${getEmojiItems(maxAllBuildAll[0].final_items[0], client)} ${await getNameItems(maxAllBuildAll[0].final_items[0])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[1], client)} ${await getNameItems(maxAllBuildAll[0].final_items[1])}`,
                ], true)
                .addField('\u200b', [
                    `⭐ Último item opcional`,
                    `${getEmojiItems(maxAllBuildBOptional[0].items[0], client)} ${await getNameItems(maxAllBuildBOptional[0].items[0])}`,
                ], true)
            }
            
            else {
                embed.addField('Build', [
                    `${getEmojiItems(maxAllBuildAll[0].final_items[0], client)} ${await getNameItems(maxAllBuildAll[0].final_items[0])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[1], client)} ${await getNameItems(maxAllBuildAll[0].final_items[1])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[2], client)} ${await getNameItems(maxAllBuildAll[0].final_items[2])}`,
                    `${getEmojiItems(maxAllBuildAll[0].final_items[3], client)} ${await getNameItems(maxAllBuildAll[0].final_items[3])}`,
                ], true)
                .addField('\u200b', [
                    `${getEmojiItems(maxAllBuildAll[0].final_items[4], client)} ${await getNameItems(maxAllBuildAll[0].final_items[4])}`,
                    `⭐ Último item opcional`, 
                    `${getEmojiItems(maxAllBuildBOptional[0].items[0], client)} ${await getNameItems(maxAllBuildBOptional[0].items[0])}`,
                ], true)
    
            }


            message.channel.send(embed)
        }
    }
}

skills_emoji = (client, number) => {

    
    let q = client.emojis.cache.get('731353263860875265')
    let w = client.emojis.cache.get('731353263751954533')
    let e = client.emojis.cache.get('731353263521267733')
    let r = client.emojis.cache.get('731353263810674798')

    switch(number) {
        case 2: return w;
        case 1: return q;
        case 3: return e;
        case 4: return r;
    }


}

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

getNameItems = async (id) => {

    
    let item = kayn.kaynObject.DDragon.Item.list().version(await versao.data())
    let data = await item

    return data.data[id].name
}

