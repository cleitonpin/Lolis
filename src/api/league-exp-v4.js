require('dotenv').config()
const axios = require('axios')

data = async (fila, rank, tier) => {

    const url = `https://br1.api.riotgames.com/lol/league-exp/v4/entries/${fila}/${rank}/${tier}?page=1&api_key=${process.env.RGAPI_KEY}`
    const json = await axios.get(url)
    const response = json.data

    return response


}

module.exports = {
    data,
}

