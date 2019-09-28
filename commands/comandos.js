const Discord = require('discord.js')
const client = new Discord.Client()

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-c1814a16-a273-49b2-a8f4-06ca281f5a33')({
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
    if (!args[0]){
        kayn.DDragon.SummonerSpell.list()
        .version('9.18.1')
        .callback(function(error, SummonerSpell){
            //message.channel.send(SummonerSpell['data'])
            console.log(SummonerSpell)
                
                
                
                const commandsList = {
                    color: 0x0099ff,
                    title: 'Todos comandos do **Rengo**',
                    thumbnail: {
                        url: 'https://2.bp.blogspot.com/-q5vIV6YpJ2o/XH7ZJmPeKCI/AAAAAAABPws/tYwtdCVTNFAQ4AuNqsFzUd6Q9mYBuHBmwCLcBGAs/s1600/em_aprilfools_teamcat_inventory.emotes_9_6.png',
                    },
                    fields: [
                        {
                            name: '● **[champ** + nome do ...\n● **[info** + nome do campeão\n● **[historia** + nome do campeão\n● **[mapa** + (1-4)\n● **[mapas** + (1-4)\n● **[spells** + nome do feitiço em inglês\n● **[player** + nome do jogador\n',
                            value: '\u200b',
                            inline: true,
                        }, 
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Dê [(comando) + ação (de acordo com a listagem acima 😜)',
                    }
                };
                // spacing \u200b
                message.channel.send({ embed: commandsList });
        })
    }

}