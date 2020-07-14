const axios = require('axios')
require('dotenv').config()


data = async (id) => {

    const url = `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${process.env.RGAPI_KEY}`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}




