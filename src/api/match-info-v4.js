require('dotenv').config()
const axios = require('axios')

data = async (gameId) => {

    const url = `https://br1.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${process.env.RGAPI_KEY}`
    const json = await axios.get(url)
    const response = json.data
    //let match = response.matches

    return response


}


//data = async()

module.exports = {
    data,
}

