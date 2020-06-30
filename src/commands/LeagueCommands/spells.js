const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../../kayn')

traduzirSpell = (name) => {
    switch(name.toLowerCase()) {
        case "teleporte": return "SummonerTeleport"; break;
        case "barreira": return "SummonerBarrier"; break;
        case "exaustão": return "SummonerExhaust"; break;
        case "flash": return "SummonerFlash"; break;
        case "curar": return "SummonerHeal"; break;
        case "mana": return "SummonerMana"; break;
        case "poro": return "SummonerPoroRecall"; break;
        case "bola": return "SummonerSnowball"; break;
        case "bolaurf": return "SummonerSnowURFSnowball_Mark"; break;
        case "golpear": return "SummonerSmite"; break;
        case "porot": return "SummonerPoroThrow"; break;
        case "fantasma": return "SummonerHaste"; break;
        case "purificar": return "SummonerBoost"; break;
        case "incendiar":  return "SummonerDot"; break;
    }
}

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.SummonerSpell.list()
        .callback(function(error, SummonerSpell) {
            
            
            // if (SummonerSpell.data[`Summoner${traduzirSpell(SummonerSpell.data)}`] == null) 
            //     return message.channel.send('Invalid params')

            const minutos = parseFloat(`${SummonerSpell.data[`${traduzirSpell(args[0])}`].cooldownBurn/60}`).toFixed(2)
            
            console.log(SummonerSpell.data['SummonerFlash'].name)
            

            const embed = new Discord.MessageEmbed()
                .setColor('#ebdf05')
                .setTitle(SummonerSpell.data[`${traduzirSpell(args[0])}`].name)
                .addField(`Descrição: `, SummonerSpell.data[`${traduzirSpell(args[0])}`].description)
                .addField(`Tempo de recarga: `, `${SummonerSpell.data[`${traduzirSpell(args[0])}`].cooldownBurn} segundos ou ${minutos} minutos`, true)
                .addField(`Level necessário:`, SummonerSpell['data'][`${traduzirSpell(args[0])}`]['summonerLevel'], true)
                //.addField(`Custo: `, `${SummonerSpell.data[`${traduzirSpell(args[0])}`].costType}`, true)
                .addField('Modos de jogos onde a spell está disponível:', `${SummonerSpell.data[`${traduzirSpell(args[0])}`].modes}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${SummonerSpell.data[`${traduzirSpell(args[0])}`].id}.png`)
                message.channel.send(embed)                
        })
    }

    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
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
