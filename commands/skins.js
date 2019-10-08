
const Discord = require('discord.js')
const client = new Discord.Client()
const key = require('./Update.json')
const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn(key.key)({
    region: REGIONS.BRAZIL,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'pt_BR',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})


exports.run = async (client, message, args) => {
    
    if(args[0]== 'x')
    {
    

        // const Skins = new Discord.RichEmbed()
        // .setColor('#660000') 
        // .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][0]['name'])
        // .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_0.jpg`)
        // message.channel.send(Skins);
        
        // try {
        
        //         
        //         await sentMessage.react(':zero:')
        //         await sentMessage.react(':one:').then(() => sentMessage.react(':two:'));
        //         await sentMessage.react(':three:').then(() => sentMessage.react(':four:'))
        //         await sentMessage.react(':five:').then(() => sentMessage.react(':six:'))



        //         const filter = (reaction, user) => reaction.emoji.name === ':one:' || reaction.emoji.name === ':two:' || reaction.emoji.name === ':three:' || reaction.emoji.name === ':four:' || reaction.emoji.name === ':five:' || reaction.emoji.name === ':six:' && user.id === message.author.id
        //         const collector = sentMessage.createReactionCollector(filter, { max: undefined});
        //         collector.on('collect', r => {
        //             console.log(`Collected ${r.emoji.name}`)
        //             if(r.emoji.name === (":one:")){
        //                 const Skin1 = new Discord.RichEmbed()
        //                 .setColor('#660000') 
        //                 .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][1]['name'])
        //                 .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_1.jpg`)
        //                 message.channel.send(Skin1)
        //             }
        //             if(r.emoji.name === (":two:")){
        //                 const Skin2 = new Discord.RichEmbed()
        //                 .setColor('#660000') 
        //                 .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][2]['name'])
        //                 .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_2.jpg`)
        //                 message.channel.send(Skin2)
        //             }
        //             if(r.emoji.name === (":three:")){
        //                 const Skin3 = new Discord.RichEmbed()
        //                 .setColor('#660000') 
        //                 .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][3]['name'])
        //                 .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_3.jpg`)
        //                 message.channel.send(Skin3)
        //             }
        //             if(r.emoji.name === (":four:")){
        //                 const Skin4 = new Discord.RichEmbed()
        //                 .setColor('#660000') 
        //                 .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][4]['name'])
        //                 .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_8.jpg`)
        //                 message.channel.send(Skin4)
        //             }
        //             if(r.emoji.name === (":five:")){
        //                 const Skin5 = new Discord.RichEmbed()
        //                 .setColor('#660000') 
        //                 .addField('**Nome da skin:**', Champion['data'][`${args[0]}`]['skins'][5]['name'])
        //                 .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_15.jpg`)
        //                 message.channel.send(Skin5)
        //             }
        //         })
        //         collector.on('end', collected => {
        //             console.log(`Coldected ${collected.size} items`)
                    
        //         })

                
                
        //     } catch (error) {
        //         console.error('One of the emojis failed to react.')
        //     }    
    
    }
}
