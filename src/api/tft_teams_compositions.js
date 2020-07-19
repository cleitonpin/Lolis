const axios = require('axios')


data = async () => {

    const url = `https://app.mobalytics.gg/api/api/v1/tft-data-set3/team-compositions`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}
