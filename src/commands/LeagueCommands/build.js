const Discord = require('discord.js')
const versao = require('../../api/versions')
const champion = require('../../api/champion')
const skills = require('../../api/skills_abilitys')
const runes = require('../../api/rune_builds')
const spell = require('../../api/summoner_spells')
const { prefix } = require('../../config.json')
const { Spells, getRunesEmoji, getRunesName } = require('../commonFunctions')

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
        }
        const info = data.champion
        const info_skills = data_skill.skill_builds
        const data_runes = await runes.data(name_champ, role)
        const info_runes = data_runes.rune_builds
        const info_spells = await spell.data(name_champ, role)
        const data_spells = info_spells.summoner_spells
        const version = await versao.data()
        const maxWinrate = info_runes.map(o => o.winrate)
        const max = maxWinrate.reduce((a, b) => {

            return Math.max(a, b)

        })
        const maxAll = info_runes.filter(maxs => maxs.winrate == max)

        let data_roles = info.roles.filter(roles => roles.lane == role)

        
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

        message.channel.send(embed)
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