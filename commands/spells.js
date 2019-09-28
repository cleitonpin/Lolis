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
    if(args[0]){
        kayn.DDragon.SummonerSpell.list()
        .version('9.18.1')
        .callback(function(error, SummonerSpell){
            message.channel.send(SummonerSpell['data']['Summoner'+`${args[0]}`]['id'])
            console.log(SummonerSpell['data'])
            const embed = new Discord.RichEmbed()
                .setColor('#0099ee')
                .addField(`**Nome da spell:**`, `**${args[0]}**`)
                .addField(`**Resumo:** `, SummonerSpell['data']['Summoner'+`${args[0]}`]['description'])
                .addField(`**Tempo de recarga:** `, `${SummonerSpell['data']['Summoner'+`${args[0]}`]['cooldownBurn']} segundos **ou** ${SummonerSpell['data']['Summoner'+`${args[0]}`]['cooldownBurn']/60} minutos`)
                .addField(`**Level necessário:**`, SummonerSpell['data']['Summoner'+`${args[0]}`]['summonerLevel'])
                .addField(`**Custo:** `, `${SummonerSpell['data']['Summoner'+`${args[0]}`]['costType']}`)
                .addField('**Modos de jogos onde a spell está disponível:**', `${SummonerSpell['data']['Summoner'+`${args[0]}`]['modes']}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['Summoner'+`${args[0]}`][`id`]}.png`)
                message.channel.send(embed)                
        })
    }
    if (!args[0]){
        kayn.DDragon.SummonerSpell.list()
        .version('9.18.1')
        .callback(function(error, SummonerSpell){
            //message.channel.send(SummonerSpell['data'])
            console.log(SummonerSpell)
                
                
                
                const noSpellsDeclare = {
                    color: 0x0099ff,
                    title: 'Nome das spells disponíveis:',
                    fields: [
                        {
                            name: '● Teleport\n● Barrier\n● Exhaust\n● Flash\n● Heal\n● Mana\n● OdysseyFlash\n● PoroRecall\n● PoroThrow\n● Smite\n● SnowURFSnowball_Mark\n● Snowball',
                            value: '\u200b',
                            inline: true,
                        }, 
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Dê [spells + nome da spell (de acordo com a listagem acima 😜)',
                    },
                    thumbnail: {
                        url: 'https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/e/ee/Runes_Header_Arcane.png/250px-Runes_Header_Arcane.png?version=2303e0fb205627d3ce1ea76d7f4c02ba',
                    },
                    image: {
                        url: 'https://i.imgur.com/0GnadRG.png',
                    },
                };
                // spacing \u200b
               message.channel.send({embed: noSpellsDeclare})

                //imagens para exibir
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerTeleport']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerBarrier']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerExhaust']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerFlash']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerHaste']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerHeal']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerMana']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerOdysseyFlash']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerOdysseyRevive']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerPoroRecall']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerPoroThrow']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerSmite']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerSnowURFSnowball_Mark']['id']}.png`)
                // .setImage(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['SummonerSnowball']['id']}.png`)
        })
    }

}
            
