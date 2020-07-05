require('dotenv').config()
const axios = require('axios')

data = async (champ) => {

    const url = `https://app.mobalytics.gg/api/lol/champions/v1/meta?name=${champ}`
    const json = await axios.get(url)
    const response = json.data

    return response


}

module.exports = {
    data,
}

