require('dotenv').config()
const axios = require('axios')

data = async (msg) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${msg}&api_key=${process.env.api_key}&lang=pt&rating=r`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}


