const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../kayn')

traduzirSpell = (name) => {
    switch(name[0].toLowerCase()) {
        case "teleporte": return "Teleport"; break;
        case "barreira": return "Barrier"; break;
        case "exaustão": return "Exhaust"; break;
        case "flash": return "Flash"; break;
        case "curar": return "Heal"; break;
        case "mana": return "Mana"; break;
        case "poro": return "PoroRecall"; break;
        case "bola": return "Snowball"; break;
        case "bolaurf": return "SnowURFSnowball_Mark"; break;
        case "golpear": return "Smite"; break;
        case "porot": return "PoroThrow"; break;
        case "fantasma": return "Haste"; break;
        case "purificar": return "Boost"; break;
        case "incendiar":  return "Dot"; break;
    }
}

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.SummonerSpell.list()
        .callback(function(error, SummonerSpell) {
            if(error) 
                console.log(error)
            if (SummonerSpell.data[`Summoner${traduzirSpell(SummonerSpell.data)}`] == null) 
                return message.channel.send('Invalid params')

            const minutos = parseFloat(`${SummonerSpell['data'][`Summoner${traduzirSpell(SummonerSpell.data)}`]['cooldownBurn']/60}`).toFixed(2)
            const embed = new Discord.RichEmbed()
                .setColor('#0099ee')
                .addField(`**Nome da spell:**`, `**${SummonerSpell.data[`Summoner${traduzirSpell(SummonerSpell.data)}`].name} **`)
                .addField(`**Descrição:** `, SummonerSpell.data[`Summoner${traduzirSpell(SummonerSpell.data)}`]['description'])
                .addField(`**Tempo de recarga:** `, `${SummonerSpell['data'][`Summoner${traduzirSpell(SummonerSpell.data)}`]['cooldownBurn']} segundos **ou** ${minutos} minutos`)
                .addField(`**Level necessário:**`, SummonerSpell['data'][`Summoner${traduzirSpell(SummonerSpell.data)}`]['summonerLevel'], true)
                //.addField(`**Custo:** `, `${SummonerSpell['data']['Summoner'+`${traduzirSpell(SummonerSpell.data)}`]['costType']}`, true)
                //.addField('**Modos de jogos onde a spell está disponível:**', `${SummonerSpell['data']['Summoner'+`${traduzirSpell(SummonerSpell.data)}`]['modes']}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell['data']['Summoner'+`${traduzirSpell(SummonerSpell.data)}`][`id`]}.png`)
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
