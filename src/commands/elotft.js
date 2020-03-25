const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('../kayn')

const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
    //const emojiList = client.emojis.get("624323979619991582")
    

    let summoner_Name = args.join('').trim()

    if(summoner_Name) {
        getSummonerId(summoner_Name).then(summoner => {
            const tftelo = `https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summoner.id}?api_key=${process.env.RGAPI_KEY}`
            fetch(tftelo)
            .then(response => response.json())
            .then(elo => {
                //here
                if (!summoner)return message.channel.send('Nome inválido')
                if (elo == '') return message.channel.send('Este jogador não tem elo no TFT')
                else {
                    
                    const embed = new Discord.RichEmbed()

                    .setColor('#f00')
                    .setTitle(elo[0].summonerName)
                    .addField('Tier', `${elo[0].tier} ${elo[0].rank}`)
                    .addField('Pontos', elo[0].leaguePoints)
                    .addField('Vitórias', elo[0].wins, true)
                    .addField('Derrotas', elo[0].losses, true)
                    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${summoner.profileIconId}.png`)
                
                    message.channel.send(embed)
                }
                
            })
        }) 

    }
    
    
    

}

getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}
