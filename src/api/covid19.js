const axios = require('axios')

data = async () => {

    const url = `https://api.covid19api.com/dayone/country/brazil`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}


