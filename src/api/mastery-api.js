const axios = require('axios')
require('dotenv').config()
const tft = require('./tft-summoner')

data = async (id) => {

    const url = `https://www.masterypoints.com/api/v1.1/highscores/champion/${id}/0/20/any`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}




