const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.SummonerSpell.list()
        .callback(function(error, SummonerSpell) {
            function NameSpellsTraduzidas() {
                switch(args[0]) {
                    case "Teleporte".toLowerCase(): return "Teleport"; break;
                    case "Barreira".toLowerCase(): return "Barrier"; break;
                    case "Exaustão".toLowerCase(): return "Exhaust"; break;
                    case "Flash".toLowerCase(): return "Flash"; break;
                    case "Curar".toLowerCase(): return "Heal"; break;
                    case "Mana".toLowerCase(): return "Mana"; break;
                    case "Poro".toLowerCase(): return "PoroRecall"; break;
                    case "Bola".toLowerCase(): return "Snowball"; break;
                    case "BolaURF".toLowerCase(): return "SnowURFSnowball_Mark"; break;
                    case "Golpear".toLowerCase(): return "Smite"; break;
                    case "Porot".toLowerCase(): return "PoroThrow"; break;
                    case "Fantasma".toLowerCase(): return "Haste"; break;
                    case "Purificar".toLowerCase(): return "Boost"; break;
                    case "Incendiar".toLowerCase():  return "Dot"; break;
                }
            }
            if(error) console.log(error)
            if (SummonerSpell.data['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`] == null) return message.channel.send('Invalid params')

            const minutos = parseFloat(`${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['cooldownBurn']/60}`).toFixed(2)
            
            const embed = new Discord.RichEmbed()
                .setColor('#0099ee')
                .addField(`**Nome da spell:**`, `**${SummonerSpell.data['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`].name} **`)
                .addField(`**Descrição:** `, SummonerSpell.data['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['description'])
                .addField(`**Tempo de recarga:** `, `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['cooldownBurn']} segundos **ou** ${minutos} minutos`)
                .addField(`**Level necessário:**`, SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['summonerLevel'], true)
                //.addField(`**Custo:** `, `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['costType']}`, true)
                //.addField('**Modos de jogos onde a spell está disponível:**', `${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`]['modes']}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['Summoner'+`${NameSpellsTraduzidas(SummonerSpell.data)}`][`id`]}.png`)
                message.channel.send(embed)                
        })
    }
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
        .setColor('#ffff00')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        // .setDescription('jdqwidqwomdqdiowhdqw')
        // .setURL()
        .addField('📖 Nome das spells disponíveis:', '\u200b')
        .addField('\u200b', '👾  Teleporte\n👾  Barreira\n👾  Exaustao\n👾  Flash\n👾  Curar\n👾  Mana\n👾  Incendiar\n👾  Fantasma', true)
        .addField('\u200b', '👾  Purificar\n👾  Golpear\n👾  Poro\n👾  Porot\n👾  Bola\n👾  BolaURF', true)
        .setTimestamp(new Date())
        .setFooter('Dê [spells + nome da spell (de acordo com a listagem acima 😜)')
        .setThumbnail(message.author.displayAvatarURL)
        message.channel.send(embed)

    
    }
}
