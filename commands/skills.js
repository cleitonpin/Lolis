const Discord = require('discord.js')
const client = new Discord.Client()

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-2179202a-1c74-4e4f-b2e9-ff3a4f884802')({
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
    
    if(args[0])
    {
        
        
        kayn.DDragon.Champion.get(`${args[0]}`)
        .callback(function(error, Champion) {
        console.log(Champion['data'][`${args[0]}`]['spells'][0]['name'])

        const Embed = new Discord.RichEmbed()
        .setColor('#660000')       
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/passive/${Champion['data'][args[0]]['passive']['image']['full']}`)
        .addField('**Nome da passiva:**', Champion['data'][`${args[0]}`]['passive']['name'])
        .addField('**Descrição da passiva**', `**${Champion['data'][`${args[0]}`]['passive']['description']}`)
        message.channel.send(Embed)
        
        const skill1 = new Discord.RichEmbed()
        .setColor('#660000')
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${Champion['data'][args[0]]['spells'][0]['image']['full']}`)
        .addField(`**Q do(a) ${args[0]}:**`, Champion['data'][`${args[0]}`]['spells'][0]['name'])
        .addField('**Descrição:**', Champion['data'][`${args[0]}`]['spells'][0]['description'])

        message.channel.send(skill1)

        const skill2 = new Discord.RichEmbed()
        .setColor('#660000')
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${Champion['data'][args[0]]['spells'][1]['image']['full']}`)
        .addField(`**W do(a) ${args[0]}:**`, Champion['data'][`${args[0]}`]['spells'][1]['name'])
        .addField('**Descrição:**', Champion['data'][`${args[0]}`]['spells'][1]['description'])
     
        message.channel.send(skill2)

        const skill3 = new Discord.RichEmbed()
        .setColor('#660000')
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${Champion['data'][args[0]]['spells'][2]['image']['full']}`)
        .addField(`**E do(a) ${args[0]}:**`, Champion['data'][`${args[0]}`]['spells'][2]['name'])
        .addField('**Descrição:**', Champion['data'][`${args[0]}`]['spells'][2]['description'])
     
        message.channel.send(skill3)

        const skill4 = new Discord.RichEmbed()
        .setColor('#660000')
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${Champion['data'][args[0]]['spells'][3]['image']['full']}`)
        .addField(`**Ult(R) do(a) ${args[0]}:**`, Champion['data'][`${args[0]}`]['spells'][3]['name'])
        .addField('**Descrição:**', Champion['data'][`${args[0]}`]['spells'][3]['description'])
     
        message.channel.send(skill4)
        
    })
}
    if(!args[0]) return message.channel.send('Você não digitou nada, digite o nome do campeão!')
}
