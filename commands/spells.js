const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.SummonerSpell.list()
        .callback(function(error, SummonerSpell) {
            //message.channel.send(SummonerSpell['data']['Summoner'+`${args[0]}`]['id'])

            function NameSpellsTraduzidas() {
                switch(args[0]) {
                    case "Teleporte": return "Teleport"; break;
                    case "Barreira": return "Barrier"; break;
                    case "Exaustao": return "Exhaust"; break;
                    case "Flash": return "Flash"; break;
                    case "Curar": return "Heal"; break;
                    case "Mana": return "Mana"; break;
                    case "FlashO": return "OdysseyFlash"; break;
                    case "Poro": return "PoroRecall"; break;
                    case "Bola": return "Snowball"; break;
                    case "BolaURF": return "SnowURFSnowball_Mark"; break;
                    case "Golpear": return "Smite"; break;
                    case "Porot": return "PoroThrow"; break;
                    case "Fantasma": return "Haste"; break;
                    case "Purificar": return "Boost"; break;
                    case "Incendiar":  return "Dot"; break;
                }
            }
            console.log(NameSpellsTraduzidas(SummonerSpell.data))
            
            const embed = new Discord.RichEmbed()
                .setColor('#0099ee')
                .addField(`**Nome da spell:**`, `**${args[0]}**`)
                .addField(`**Resumo:** `, SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['description'])
                .addField(`**Tempo de recarga:** `, `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['cooldownBurn']} segundos **ou** ${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['cooldownBurn']/60} minutos`)
                .addField(`**Level necessário:**`, SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['summonerLevel'], true)
                .addField(`**Custo:** `, `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['costType']}`, true)
                //.addField('**Modos de jogos onde a spell está disponível:**', `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['modes']}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`][`id`]}.png`)
                message.channel.send(embed)                
        })
    }
    if (!args[0]) {
        kayn.kaynObject.DDragon.SummonerSpell.list()
        .version('9.18.1')
        .callback(function(error, SummonerSpell) {
            //message.channel.send(SummonerSpell['data'])
            console.log(SummonerSpell)
                
                
                const embed = new Discord.RichEmbed()
                .setColor('#ffff00')
                .setAuthor('You', message.author.displayAvatarURL)
                // .setDescription('jdqwidqwomdqdiowhdqw')
                // .setURL()
                .setTitle('Nome das spells disponíveis:')
                .addField('\u200b', '• Teleporte\n• Barreira\n• Exaustao\n• Flash\n• Curar\n• Mana\n• Incendiar\n• Fantasma', true)
                .addField('\u200b', '• Purificar\n• Golpear\n• Poro\n• Porot\n• Bola\n• FlashO\n• BolaURF', true)
                .setTimestamp(new Date())
                .setFooter('Dê [spells + nome da spell (de acordo com a listagem acima 😜)')
                //.setThumbnail('https://gamepedia.cursecdn.com/dota2_gamepedia/thumb/e/ee/Runes_Header_Arcane.png/250px-Runes_Header_Arcane.png?version=2303e0fb205627d3ce1ea76d7f4c02ba')
                message.channel.send(embed)

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