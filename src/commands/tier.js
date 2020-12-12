const Discord = require('discord.js')
const versions = require('../api/versions')
const { getChampionEmoji, IDtoName} = require('./commonFunctions')
const axios = require('axios');

titleize = (text) => {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}

async function datae() {
    try {
        const url = `https://www.proguides.com/api/v2/game-meta/leagueoflegends/champions/5v5sr-tier-list`
        const JsonData = await axios.get(url)
        const data = JsonData.data
        return data
    }
    catch (err) {
        return null
    }
}

function getNameRole(data,role) {
    return data.filter(roles => roles.role === role);
}

function getTierRole(data, name) {
    //return data.filter(tiere => tiere.tier === name);

    const tiersS = data.filter(tierer => tierer.tier === "S");
    const tiersA = data.filter(tierer => tierer.tier === "A");
    const tiersB = data.filter(tierer => tierer.tier === "B");

    return {
        tierS: tiersS[0] ,
        tierA: tiersA[0] ,
        tierB: tiersB[0]
    }
    
}

function getChampionIdTier(data, client) {
    
    return data.map(champions => {
        const novoEstado = {...champions}
        novoEstado.id = getChampionEmoji(client, novoEstado.id);
        let names = IDtoName(champions.id)
        //let winRate = champions.winrate * 100

        console.log(`${novoEstado.id} ${names}`)
        return `${novoEstado.id} ${names}`
    });

}

module.exports = {
    
    name: 'tier',
    aliases: ['tiers'],
    async execute(client, message, args) {
        const data = await datae();
        const lane = args.join('');
        const tierRole = getNameRole(data, lane.toUpperCase());
        
        const tier = getTierRole(tierRole[0].tiers);
    
        const champsTierS = getChampionIdTier(tier.tierS.champions, client);
        const champsTierA = getChampionIdTier(tier.tierA.champions, client);
        const champsTierB = getChampionIdTier(tier.tierB.champions, client);
    
        const embed = new Discord.MessageEmbed()
    
        embed.setColor('#170B3B')
        .setTitle(`Comando Tierlist`)
        .addField(`S List`, champsTierS.join('\n') , true)
        .addField(`A List`, champsTierA.join('\n'), true)
        .addField(`B List`, champsTierB.join('\n'), true)
    
        .setFooter(`Patch ${await versions.data()}`)
        message.channel.send(embed)

    }
}

