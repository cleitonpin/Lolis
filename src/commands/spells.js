const Discord = require('discord.js')
const kayn = require('../kayn')
const versao = require('../api/versions')

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

module.exports = {

    name: 'spells',
    aliases: ['feiticos', 'feitiços', 'spell'],
    async execute(client, message, args) {
        if(args[0]) {
                let topic = client.emojis.cache.get('733165607159201995')
                let version = await versao.data()
                let SummonerSpell = await getSummoenrsSpells()
                
                const minutos = parseFloat(`${SummonerSpell.data[`${traduzirSpell(args[0])}`].cooldownBurn/60}`).toFixed(0)
                
    
                const embed = new Discord.MessageEmbed()
                .setColor('#170B3B')
                .setAuthor(`Comando Spells - ${SummonerSpell.data[`${traduzirSpell(args[0])}`].name}`, `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${SummonerSpell.data[`${traduzirSpell(args[0])}`].id}.png`)
                .addField(`${topic} Descrição`, SummonerSpell.data[`${traduzirSpell(args[0])}`].description)
                .addField(`${topic} Tempo de recarga`, `${SummonerSpell.data[`${traduzirSpell(args[0])}`].cooldownBurn} segundos ou ${minutos} minutos`, true)
                .addField(`${topic} Level necessário`, SummonerSpell['data'][`${traduzirSpell(args[0])}`]['summonerLevel'], true)
                //.addField(`Custo: `, `${SummonerSpell.data[`${traduzirSpell(args[0])}`].costType}`, true)
                .addField('Modos de jogos onde a spell está disponível', `${SummonerSpell.data[`${traduzirSpell(args[0])}`].modes}`)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${SummonerSpell.data[`${traduzirSpell(args[0])}`].id}.png`)
                message.channel.send(embed)                
        
        }
    
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setColor('#170B3B')
                .setAuthor(`Comando Spells`, message.author.displayAvatarURL())
                .setDescription('📖 Nome das spells disponíveis')
                .addField('\u200b', [
                `${client.emojis.cache.get('631195264832634880')}  Teleporte`,
                `${client.emojis.cache.get('631195261787439106')}  Barreira`,
                `${client.emojis.cache.get('631195262085234721')}  Exaustao`,
                `${client.emojis.cache.get('631195263855362081')}  Flash`,
                `${client.emojis.cache.get('631195264371130391')}  Curar`,
                `${client.emojis.cache.get('631195262370709525')}  Mana`,
                `${client.emojis.cache.get('631195264815988747')}  Incendiar`,
                `${client.emojis.cache.get('631195264400490507')}  Fantasma`], true)
                .addField('\u200b', [
                `${client.emojis.cache.get('631195262194417694')}  Purificar`,
                `${client.emojis.cache.get('631195264501284889')}  Golpear`,
                `${client.emojis.cache.get('733158531791847487')}  Aorei`,
                `${client.emojis.cache.get('733158716458926193')}  Porot`,
                `${client.emojis.cache.get('733159219360039075')}  Marca`,
                `${client.emojis.cache.get('631195261968056340')}  BolaURF`], true)
                .setTimestamp(new Date())
                .setFooter('Dê :spells [nome da spell]')
                .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed)
        }

    }
}


getSummoenrsSpells = async () => {
    return kayn.kaynObject.DDragon.SummonerSpell.list()
}