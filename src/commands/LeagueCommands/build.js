const Discord = require('discord.js')
const versao = require('../../api/versions')
// const champion = require('../../api/champion')
// const skills = require('../../api/skills_abilitys')
// const runes = require('../../api/rune_builds')
// const spell = require('../../api/summoner_spells')
//const { getBanRate } = require('../../utils/gettingBanRate')
const kayn = require('../../kayn')
const { prefix } = require('../../config.json')
const { Spells, getRunesEmoji, getRunesName, getEmojiItems, IDtoName, nameToId } = require('../commonFunctions')
const axios = require('axios');


async function datae(name) {
    try {
        const url = `https://www.proguides.com/api/v2/game-meta/leagueoflegends/champions/${name}/5v5sr-data`
        const JsonData = await axios.get(url)
        const data = JsonData.data
        return data
    }
    catch (err) {
        return null
    }
}

function getNameRole(data, role) {
    try {
        return data.filter(roles => roles.role === role)
    } catch (err) { 
        return null
    }
}

exports.run = async (client, message, args) => {

    
    let name_champ = nameToId(titleize(args[0]))
    let role = args[1]

    const version = await versao.data();
    const data = await datae(name_champ).catch();
    
    const embed = new Discord.MessageEmbed()

    if(!data) {
        embed.setColor('#F00')
        .setTitle('Comando Champion builds')
        .setDescription('Você me deu informações erradas')
        .addField('\u200b', `Utilize ${prefix}build [champion] [role]`)
        message.channel.send(embed)
    } else {

        const nameRole = getNameRole(data.roles, role.toUpperCase())
        
        if(nameRole == '') {
            embed.setTitle('❌ Comando Champion builds')
            .setDescription('Não existe informações para esta rota.')
    
            message.channel.send(embed)
        } else {
    
            const runes = nameRole[0].builds.runes;
            const abilities = nameRole[0].builds.abilities;
            const spells = nameRole[0].builds.summoner_spells;
            const items = nameRole[0].builds.core_items;
            const winRate = nameRole[0].stats.winrate * 100;
            //const { banRate } = await getBanRate(`${titleize(args[0])}`);
    
            embed.setColor('#170B3B')
            .setTitle('Comando Champion builds')
            .setDescription(`Informações sobre **${IDtoName(parseInt(data.champion_id))}**`)
            .addField('Taxa de vitória', `${winRate}%`, true)
            //.addField('Taxa de banimento', banRate, true)
            .addField('Ordem de habilidades:', [
                `${skills_emoji(client, abilities[0])} > ${skills_emoji(client, abilities[1])} > ${skills_emoji(client, abilities[2])} > ${skills_emoji(client, abilities[3])} > ${skills_emoji(client, abilities[4])} > ${skills_emoji(client, abilities[5])} > ${skills_emoji(client, abilities[6])} > ${skills_emoji(client, abilities[7])} > ${skills_emoji(client, abilities[8])} > ${skills_emoji(client, abilities[9] )} > ${skills_emoji(client, abilities[10])} > ${skills_emoji(client, abilities[11] )} > ${skills_emoji(client, abilities[12])} > ${skills_emoji(client, abilities[13])} > ${skills_emoji(client, abilities[14])} > ${skills_emoji(client, abilities[15])} > ${skills_emoji(client, abilities[16])} > ${skills_emoji(client, abilities[17])}`,
            ])
            .addField('Feitiços', `${Spells(client, spells[0])}${Spells(client, spells[1])}`)
    
            .addField("Runas", [
                `${getRunesEmoji(runes.primary_path, client)} **${getRunesName(runes.primary_path, client)}**`,
                `\u200b`,
                `${getRunesEmoji(runes.primary[0], client)} ${getRunesName(runes.primary[0], client)}`,
                `${getRunesEmoji(runes.primary[1], client)} ${getRunesName(runes.primary[1], client)}`,
                `${getRunesEmoji(runes.primary[2], client)} ${getRunesName(runes.primary[2], client)}`,
                `${getRunesEmoji(runes.primary[3], client)} ${getRunesName(runes.primary[3], client)}`,
            ], true)
            .addField('\u200b', [
                `${getRunesEmoji(runes.secondary_path, client)} **${getRunesName(runes.secondary_path, client)}**`,
                `\u200b`,
                `${getRunesEmoji(runes.secondary[0], client)} ${getRunesName(runes.secondary[0], client)}`,
                `${getRunesEmoji(runes.secondary[1], client)} ${getRunesName(runes.secondary[1], client)}`
            ], true)
            .addField('\u200b', [
                `${getRunesEmoji(runes.shards[0].rune.id, client)} ${getRunesName(runes.shards[0].rune.id, client)}`,
                `${getRunesEmoji(runes.shards[1].rune.id, client)} ${getRunesName(runes.shards[1].rune.id, client)}`,
                `${getRunesEmoji(runes.shards[2].rune.id, client)} ${getRunesName(runes.shards[2].rune.id, client)}`
            ], true)
            .addField('Build', [
                `${getEmojiItems(items[0], client)} ${await getNameItems(items[0])}`,
                `${getEmojiItems(items[1], client)} ${await getNameItems(items[1])}`,
                `${getEmojiItems(items[2], client)} ${await getNameItems(items[2])}`,
                `${getEmojiItems(items[3], client)} ${await getNameItems(items[3])}`,
            ], true)
            .addField('\u200b', [
                `${getEmojiItems(items[4], client)} ${await getNameItems(items[4])}`,
                `${getEmojiItems(items[5], client)} ${await getNameItems(items[5])}`,
            ], true)
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${titleize(args[0])}.png`)
            
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
        case "W": return w;
        case "Q": return q;
        case "E": return e;
        case "R": return r;
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

