require('dotenv').config()
const axios = require('axios')

data = async (id) => {

    const url = `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.RGAPI_KEY}`
    const json = await axios.get(url)
    const response = json.data

    return response


}

module.exports = {
    data,
}

