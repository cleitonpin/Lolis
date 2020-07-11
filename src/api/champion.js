const axios = require('axios')


data = async (name) => {

    const url = `https://morelegends.com/pt/api/champions/${name}`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}
