
const axios = require('axios')
//const { data } = require('./league-tft')
require('dotenv').config()

data = async (name) => {

    //name.join("")

    const url = `https://br1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RGAPI_KEY_TFT}`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data.id

}


module.exports = {
    data,

}





