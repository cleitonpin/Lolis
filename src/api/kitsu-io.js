const axios = require('axios')

data = async (anime) => {

    const url = `https://kitsu.io/api/edge/anime?filter[text]=${anime}`
    const json = await axios.get(url)
    const response = json.data

    return response


}



module.exports = {
    data,
}

