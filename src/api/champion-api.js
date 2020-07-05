require('dotenv').config()
const axios = require('axios')

data = async (msg) => {

    const url = `https://app.mobalytics.gg/api/lol/static/v2/all`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}


