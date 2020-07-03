const leagueExpV4 = require('../../api/league-exp-v4')
const Discord = require('discord.js')
const embeds = require('../../functions/embeds')

exports.run = async (client, message, args) => {
    
    
    const embedL = new Discord.MessageEmbed()

    

    let emojis = {
        "challenger": client.emojis.cache.get('700875020494176307' ),
        "grandmaster": client.emojis.cache.get('700875020443975731'),
        "master": client.emojis.cache.get('700875020439781436'),
        "diamond": client.emojis.cache.get('700875020414484580'),
        "platinum": client.emojis.cache.get('700875020330860656'),
        "gold": client.emojis.cache.get('700875020188254269'),
        "silver": client.emojis.cache.get('700875508405108826'),
        "bronze": client.emojis.cache.get('700875020427329656'),
        "iron": client.emojis.cache.get('631528448665321472'),
        "ranked_solo": client.emojis.cache.get('728075489670987886'),
        "ranked_flex": client.emojis.cache.get('728075496285405254'),
        //"ranked_tft": client.emojis.cache.get('728075494733381633'),
        "tier1": client.emojis.cache.get('728101052813017118'),
        "tier2": client.emojis.cache.get('728333994575396926'),
        "tier3": client.emojis.cache.get('728333993895919687'),
        "tier4": client.emojis.cache.get('728333994063822931')
    }
    let resolved = false;

    embedL.setColor('#F00')
    .setTitle('Lista')
    .setDescription('Para ver a lista dos jogadores de ranqueadas, preciso de 3 coisinhas')
    .addField('\u200b',  ' ```QUEUE```')
    .addField('\u200b', '```DIVISÃO```')
    .addField('\u200b', ' ```TIER``` ')
    .addField('\u200b', 'Reaja respectivamente')

    


    let embed =   await message.channel.send(embedL)
                    await embed.react(emojis.ranked_solo)
                    await embed.react(emojis.ranked_flex)

                    

    const filter = (reaction, user) => {

        switch(reaction.emoji.name) {
            case 'DIAMOND': return user.id === message.author.id
            case 'PLATINUM': return user.id === message.author.id
            case 'GOLD': return user.id === message.author.id
            case 'SILVER': return user.id === message.author.id
            case 'BRONZE': return user.id === message.author.id
            case 'IRON': return user.id === message.author.id
            

        }

    }

    const filterTops = (reaction, user) => {

        switch(reaction.emoji.name) {
            case 'CHALLENGER': return user.id === message.author.id
            case 'GRANDMASTER': return user.id === message.author.id
            case 'MASTER': return user.id === message.author.id
        
        }

    }

    const filter_file = (reaction, user) => {
        switch(reaction.emoji.name) {
            case 'RANKED_SOLO_5X5':  return user.id === message.author.id
            case 'RANKED_FLEX_SR':   return user.id === message.author.id
            //case 'RANKED_TFT':   return user.id === message.author.id
        }
    }

    const filter_tier = (reaction, user) => {
        switch(reaction.emoji.name) {
            case "I_":  return user.id === message.author.id
            case "II":  return user.id === message.author.id
            case "III":  return user.id === message.author.id
            case "IV":  return user.id === message.author.id
        }
    }

    const collectorRank = embed.createReactionCollector(filter, { max: 1, });
    const collector = embed.createReactionCollector(filterTops, { max: 1, });
    const collectorFila = embed.createReactionCollector(filter_file, { max: 1 });
    const collectorTier = embed.createReactionCollector(filter_tier, { max: 1 })
    var fila,rank,tier;

    collectorFila.on('collect', async (reaction, user) => {

        reaction.emoji.name == 'RANKED_SOLO_5X5' ? fila = 'RANKED_SOLO_5x5' : false;
        reaction.emoji.name == 'RANKED_FLEX_SR' ? fila = 'RANKED_FLEX_SR' : false;
        //reaction.emoji.name == 'RANKED_TFT' ? fila = 'RANKED_TFT' : false;

        if(reaction.emoji.name == 'RANKED_SOLO_5X5' || 'RANKED_FLEX_SR') {
            
            embed.reactions.removeAll()
            await embed.react(emojis.challenger)   
            await embed.react(emojis.grandmaster)
            await embed.react(emojis.master)
            await embed.react(emojis.diamond)
            await embed.react(emojis.platinum)
            await embed.react(emojis.gold)
            await embed.react(emojis.silver)
            await embed.react(emojis.bronze)
            await embed.react(emojis.iron)   
            
        }
    })

    collectorRank.on('collect', async (reaction, user) => {

        reaction.emoji.name == 'DIAMOND' ? rank = 'DIAMOND' : false;
        reaction.emoji.name == 'PLATINUM' ? rank = 'PLATINUM' : false;
        reaction.emoji.name == 'GOLD' ? rank = 'GOLD' : false;
        reaction.emoji.name == 'SILVER' ? rank = 'SILVER' : false;
        reaction.emoji.name == 'BRONZE' ? rank = 'BRONZE' : false;
        reaction.emoji.name == 'IRON' ? rank = 'IRON' : false;
        
        if(reaction.emoji.name == 'DIAMOND' || 'PLATINUM' || 'GOLD' || 'SILVER'|| 
        'BRONZE' || 'IRON') {
            
            embed.reactions.removeAll()
            await embed.react(emojis.tier1)
            await embed.react(emojis.tier2)
            await embed.react(emojis.tier3)
            await embed.react(emojis.tier4)
            
            
        }
        

    });
    collectorTier.on('collect', async (reaction, user) => {
        reaction.emoji.name == 'I_' ? tier = 'I' : false;
        reaction.emoji.name == 'II' ? tier = 'II' : false;
        reaction.emoji.name == 'III' ? tier = 'III' : false;
        reaction.emoji.name == 'IV' ? tier = 'IV' : false;


        if(reaction.emoji.name == "I_" || "II" || "III" || "IV" ) {
            embed.reactions.removeAll()
            embed.edit(embeds.lista(fila, rank, tier))
        }

        
        
    })
    collector.on('collect', async (reaction, user) => {
        
    
        reaction.emoji.name == 'CHALLENGER' ? rank = 'CHALLENGER' : false;
        reaction.emoji.name == 'GRANDMASTER' ? rank = 'GRANDMASTER' : false;
        reaction.emoji.name == 'MASTER' ? rank = 'MASTER' : false;

        if(reaction.emoji.name == 'CHALLENGER' || 'GRANDMASTER' || 'MASTER') {
            embed.reactions.removeAll()
            await embed.react(emojis.tier1)
        }
    })


    collectorTier.on('end', async collected => {

        embed.reactions.removeAll()
        var data = await leagueExpV4.data(fila, rank, tier)
        
        embed.edit(embeds.top5(data, rank))
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
        
        setTimeout(() => {
            if(!resolved){
                return message.reply('Expirado.')
            }
        }, 600000   )

        const collector = embed.createReactionCollector(filter, { max: undefined, time: 600000});

        collector.on('collect', (reaction, user) => {
            if(reaction.emoji.name == '1️⃣') {
                embed.edit(embeds.top5(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '2️⃣') {
                embed.edit(embeds.top10(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '3️⃣') {
                embed.edit(embeds.top15(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '4️⃣') {
                embed.edit(embeds.top20(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '5️⃣') {
                embed.edit(embeds.top25(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '6️⃣') {
                embed.edit(embeds.top30(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '7️⃣') {
                embed.edit(embeds.top35(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '8️⃣') {
                embed.edit(embeds.top40(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '9️⃣') {
                embed.edit(embeds.top45(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '🔟') {
                embed.edit(embeds.top50(data,rank))
                resolved = true
            }
            else if(reaction.emoji.name == '❌') {
                embed.reactions.removeAll()
                embed.edit(embeds.stop())
                resolved = true
            }
            

        })

    })

}
