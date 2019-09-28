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

    //const emojiList = client.emojis.get("624323979619991582")
    if(args[0]){
        kayn.DDragon.Champion.get(`${args[0]}`).region('br')
        .version('9.19.1') /* Explicit */
        .callback(function(error, champion) {
        console.log(champion['data']['spells'])

        const embed = new Discord.RichEmbed()
        .setColor('#660000')
        
        .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/${args[0]}.png`)
        .addField(`**${args[0]}**`, champion['data'][`${args[0]}`]['title'],true)
        .addField(`**Tipo:**`,champion['data'][`${args[0]}`]['tags'],true)
        .addField('**Vida:**', `${champion['data'][`${args[0]}`]['stats']['hp']} (+${champion['data'][`${args[0]}`]['stats']['hpperlevel']} por nível)`, true)
        .addField('**Dano de Ataque:**', `${champion['data'][`${args[0]}`]['stats']['attackdamage']} (+${champion['data'][`${args[0]}`]['stats']['attackdamageperlevel']} por nível)`, true)
        .addField('**Velocidade de ataque:**', `${champion['data'][`${args[0]}`]['stats']['attackspeed']} (+${champion['data'][`${args[0]}`]['stats']['attackspeedperlevel']}% por nível)`, true)
        .addField('**Velocidade Movimento:**', `${champion['data'][`${args[0]}`]['stats']['movespeed']}` ,true)
        .addField('**Armadura:**', `${champion['data'][`${args[0]}`]['stats']['armor']} (+${champion['data'][`${args[0]}`]['stats']['armorperlevel']} por nível)`, true)
        .addField('**Regeneração de vida:**', `${champion['data'][`${args[0]}`]['stats']['hpregen']} (+${champion['data'][`${args[0]}`]['stats']['hpregenperlevel']} por nível)`, true)
        .addField('**Resistência Mágica:**\n', `${champion['data'][`${args[0]}`]['stats']['spellblock']} (+${champion['data'][`${args[0]}`]['stats']['spellblockperlevel']} por nível)\n\n`, true)
        .addField('**Regeneração de mana:**', `${champion['data'][`${args[0]}`]['stats']['mpregen']} (+${champion['data'][`${args[0]}`]['stats']['mpregenperlevel']} por nível)`, true)
        .setImage(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${args[0]}_0.jpg`)
        message.channel.send(embed)
    })
    }

    
}
