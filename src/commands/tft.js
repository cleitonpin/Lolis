const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = ('../kayn')

exports.run = async (client, message, args) => {
    //const emojiList = client.emojis.get("624323979619991582")
    
    const fetch = require('node-fetch')
        
    const tftmatch = `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/L4YT-Xjeczf4h6eJTqiMv2VLEGnDezs3e3glj73gnTcbj6JfHHHSLa-grdZICrQj6Dl6Uc-Dmg90xA/ids?count=20&api_key=${process.env.RGAPI_KEY}`
    fetch(tftmatch)
    .then(response => response.json())
    .then(match => {
        match.forEach(matchsIds => {

            const tftmatchInfo = `https://americas.api.riotgames.com/tft/match/v1/matches/${matchsIds}?api_key=${process.env.RGAPI_KEY}`

            fetch(tftmatchInfo)
            .then(response => response.json())
            .then(infos => {

                infos.info.participants.forEach(gg => {
                    console.log(gg.level)

                    
                    message.channel.send(embed)
                })
            })


        })

    })


}
