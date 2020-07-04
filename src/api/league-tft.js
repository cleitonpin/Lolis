const axios = require('axios')
require('dotenv').config()
const tft = require('./tft-summoner')

data = async (name) => {

    let id = await tft.data(name)


    const url = `https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${id}?api_key=${process.env.RGAPI_KEY_TFT}`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}




