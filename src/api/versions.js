const axios = require('axios')

data = async () => {

    const url = `http://ddragon.leagueoflegends.com/api/versions.json`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    const lastVersion = data[0]

    return lastVersion
}

module.exports = {
    data,

}


