const Discord = require('discord.js')
const championApi = require('../../api/champion-api')
const kayn = require("../../kayn")
const versions = require('../../api/versions')
const embeds = require('../../functions/embeds')

exports.run = async (client, message, args) => {
    
    let name_champ = titleize(args.join(''))
    let versao = await versions.data()
    let fullData = await getChampionData(name_champ)
    let embedL = new Discord.MessageEmbed()
    let skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/107015.jpg`
    
    
    embedL.setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
    .setTitle(`Skins do ${name_champ}`)
    .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[0].id}.jpg`)
    .setFooter('Reaja para ver as skins!')
    console.log(fullData.data[name_champ].skins.length)
    var embed = await message.channel.send(embedL)

    if(fullData.data[name_champ].skins.length == 2) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
    } else if (fullData.data[name_champ].skins.length == 3) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
    } else if (fullData.data[name_champ].skins.length == 4) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
    } else if(fullData.data[name_champ].skins.length == 5) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
    } else if (fullData.data[name_champ].skins.length == 6) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
        await embed.react('6️⃣')
    } else if(fullData.data[name_champ].skins.length == 7) {
        
        
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
        await embed.react('6️⃣')
        await embed.react('7️⃣')
    } else if(fullData.data[name_champ].skins.length == 8) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
        await embed.react('6️⃣')
        await embed.react('7️⃣')
        await embed.react('8️⃣')
    } else if(fullData.data[name_champ].skins.length == 9) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
        await embed.react('6️⃣')
        await embed.react('7️⃣')
        await embed.react('8️⃣')
        await embed.react('9️⃣')
    } else if(fullData.data[name_champ].skins.length == 10) {
        await embed.react('1️⃣')
        await embed.react('2️⃣')
        await embed.react('3️⃣')
        await embed.react('4️⃣')
        await embed.react('5️⃣')
        await embed.react('6️⃣')
        await embed.react('7️⃣')
        await embed.react('8️⃣')
        await embed.react('9️⃣')
        await embed.react('🔟')
        await embed.react('❌')
    }

    const filter = (reaction, user) => {
        switch(reaction.emoji.name) {
            case "1️⃣":  return user.id === message.author.id
            case "2️⃣":  return user.id === message.author.id
            case "3️⃣":  return user.id === message.author.id
            case "4️⃣":  return user.id === message.author.id
            case "5️⃣":  return user.id === message.author.id
            case "6️⃣":  return user.id === message.author.id
            case "7️⃣":  return user.id === message.author.id
            case "8️⃣":  return user.id === message.author.id
            case "9️⃣":  return user.id === message.author.id
            case "🔟":  return user.id === message.author.id
            case "❌": return user.id === message.author.id
        }
    }
    const collector = embed.createReactionCollector(filter, { max: undefined});
   
    collector.on('collect', async (reaction, user) => {
        
        
        if(reaction.emoji.name == '1️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[0].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[0].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '2️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[1].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[1].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
        }
        if(reaction.emoji.name == '3️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[2].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[2].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '4️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[3].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[3].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '5️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[4].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[4].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '6️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[5].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[5].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '7️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[6].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[6].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        if(reaction.emoji.name == '8️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[7].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[7].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
            
        }
        else if(reaction.emoji.name == '9️⃣') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[8].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[8].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
        }
        else if(reaction.emoji.name == '🔟') {
            let newB = new Discord.MessageEmbed()
            .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
            .setTitle(fullData.data[name_champ].skins[9].name)
            .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[9].id}.jpg`)
            .setFooter('Reaja para ver as skins!')
            embed.edit(newB)
            
        }

    })

    console.log()
}

const skinsE = async(name_champ) => {
    let versao = await versions.data()
    let fullData = await getChampionData(name_champ)
    let newB = new Discord.MessageEmbed()
    .setAuthor(`${fullData.data[name_champ].id}, ${fullData.data[name_champ].title}`, `https://ddragon.leagueoflegends.com/cdn/${versao}/img/champion/${name_champ}.png`)
    .setTitle(`Skins do ${name_champ}`)
    .setImage(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${fullData.data[name_champ].key}/${fullData.data[name_champ].skins[1].id}.jpg`)
    .setFooter('Reaja para ver as skins!')

    return newB
}

getChampionData = async (name) => {
    return kayn.kaynObject.DDragon.Champion.get(name).region(kayn.regions.BRAZIL)
}
titleize = (text) => {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}
