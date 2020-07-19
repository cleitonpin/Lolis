const Discord = require('discord.js')
const axios = require("axios")
require('dotenv').config()
const { 
    getEloEmoji, } = require('../commonFunctions')
exports.run = async(client, message, args) => {

    let name = args.join('')
    let data = await getDataRunes(name)
    let matchsId = await getmatchId(data)
    let infom = await getmatchinfo(matchsId[0])
    let embed = new Discord.MessageEmbed()

    let emoji = client.emojis.cache.get('733879410385748020')
    let emoj2 = client.emojis.cache.get('733879434020651008')

    embed.addField('dkd', [
        `${emoj2}${emoj2}${emoj2}${emoj2}`,
        `${emoji}${emoji}${emoji}${emoji}`,
    ], true)
    message.channel.send(embed)
    console.log(infom)


}

getmatchId = async (id) => {
    const url = `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${id}/ids?count=20&api_key=${process.env.RGAPI_KEY_TFT}`
    const JsonData = await axios.get(url)
    const data = JsonData.data


    return data
}

getmatchinfo = async (id) => {
    const url = `https://americas.api.riotgames.com/tft/match/v1/matches/${id}?api_key=${process.env.RGAPI_KEY_TFT}`
    const JsonData = await axios.get(url)
    const data = JsonData.data


    return data
}


getDataRunes = async (name) => {
    const url = `https://br1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RGAPI_KEY_TFT}`
    const JsonData = await axios.get(url)
    const data = JsonData.data


    return data.puuid
}
